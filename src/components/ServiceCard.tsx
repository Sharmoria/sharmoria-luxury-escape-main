import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  duration: string;
  price: string;
  description: string;
  image: string;
  serviceId: string;
}

const ServiceCard = ({
  title,
  duration,
  price,
  description,
  image,
  serviceId,
}: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-strong transition-all duration-300 group animate-fade-in-up">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white font-playfair">{title}</h3>
        </div>
      </div>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="text-2xl font-bold text-primary font-playfair">
            {price}
          </div>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        <Link to={`/booking?service=${encodeURIComponent(serviceId)}`}>
          <Button className="w-full gradient-hero text-white hover:opacity-90 transition-opacity">
            Book Now
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
