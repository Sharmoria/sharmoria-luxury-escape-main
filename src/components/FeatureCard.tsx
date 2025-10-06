interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

const FeatureCard = ({ image, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg hover:shadow-medium transition-all duration-300 animate-fade-in-up">
      <div className="w-24 h-24 rounded-full overflow-hidden shadow-soft">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold font-playfair text-foreground">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
