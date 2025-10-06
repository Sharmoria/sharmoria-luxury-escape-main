/*
  # Initial Database Schema for SHARMORIA

  ## Overview
  This migration creates the complete database schema for the SHARMORIA mobile spa booking system.
  It includes tables for user authentication, bookings, contact messages, and services.

  ## New Tables

  ### 1. `profiles` - Extended user profiles
    - `id` (uuid, primary key, references auth.users)
    - `email` (text, unique)
    - `full_name` (text)
    - `phone` (text)
    - `created_at` (timestamptz)
    - `updated_at` (timestamptz)

  ### 2. `bookings` - Service bookings
    - `id` (uuid, primary key)
    - `user_id` (uuid, references profiles)
    - `booking_date` (date)
    - `booking_time` (time)
    - `service_address` (text)
    - `total_amount` (numeric)
    - `payment_method` (text: cash or card)
    - `status` (text: pending, confirmed, completed, cancelled)
    - `id_document_url` (text, URL to uploaded ID/passport)
    - `notes` (text, optional)
    - `created_at` (timestamptz)
    - `updated_at` (timestamptz)

  ### 3. `booking_services` - Many-to-many relationship for booking and services
    - `id` (uuid, primary key)
    - `booking_id` (uuid, references bookings)
    - `service_name` (text)
    - `service_price` (numeric)
    - `duration` (text)
    - `created_at` (timestamptz)

  ### 4. `contact_messages` - Contact form submissions
    - `id` (uuid, primary key)
    - `name` (text)
    - `email` (text)
    - `phone` (text, optional)
    - `message` (text)
    - `status` (text: new, read, replied)
    - `created_at` (timestamptz)

  ## Security
    - Row Level Security (RLS) enabled on all tables
    - Users can only view and manage their own data
    - Authenticated users can create bookings and messages
    - Contact messages are public for creation but restricted for reading

  ## Notes
    - All timestamps use `timestamptz` for timezone awareness
    - Default values set for status fields and timestamps
    - Foreign key constraints ensure data integrity
    - Indexes on frequently queried columns for performance
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  full_name text NOT NULL,
  phone text,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  booking_date date NOT NULL,
  booking_time time NOT NULL,
  service_address text NOT NULL,
  total_amount numeric(10, 2) NOT NULL,
  payment_method text NOT NULL CHECK (payment_method IN ('cash', 'card')),
  status text DEFAULT 'pending' NOT NULL CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  id_document_url text,
  notes text,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

-- Create booking_services junction table
CREATE TABLE IF NOT EXISTS booking_services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id uuid REFERENCES bookings(id) ON DELETE CASCADE NOT NULL,
  service_name text NOT NULL,
  service_price numeric(10, 2) NOT NULL,
  duration text NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  status text DEFAULT 'new' NOT NULL CHECK (status IN ('new', 'read', 'replied')),
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_bookings_user_id ON bookings(user_id);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings(booking_date);
CREATE INDEX IF NOT EXISTS idx_booking_services_booking_id ON booking_services(booking_id);
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE booking_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- RLS Policies for bookings
CREATE POLICY "Users can view own bookings"
  ON bookings FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own bookings"
  ON bookings FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own bookings"
  ON bookings FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for booking_services
CREATE POLICY "Users can view own booking services"
  ON booking_services FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM bookings
      WHERE bookings.id = booking_services.booking_id
      AND bookings.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create booking services"
  ON booking_services FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM bookings
      WHERE bookings.id = booking_services.booking_id
      AND bookings.user_id = auth.uid()
    )
  );

-- RLS Policies for contact_messages
CREATE POLICY "Anyone can create contact messages"
  ON contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Users can view own contact messages"
  ON contact_messages FOR SELECT
  TO authenticated
  USING (email = (SELECT email FROM profiles WHERE id = auth.uid()));

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
DROP TRIGGER IF EXISTS update_profiles_updated_at ON profiles;
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_bookings_updated_at ON bookings;
CREATE TRIGGER update_bookings_updated_at
  BEFORE UPDATE ON bookings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, email, full_name, phone)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'phone', '')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user();
