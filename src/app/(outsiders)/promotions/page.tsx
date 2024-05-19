import { CardContent, Card } from "@/components/ui/card";
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel";
import { currentUser } from "@/lib/auth";

const promos = [
  {
    title: "Summer Sale",
    price: "$29.99",
    originalPrice: "$49.99",
    location: "New York, NY",
    imageSrc: "/placeholder.svg",
    gradientFrom: "#ff6b6b",
    gradientTo: "#ffa500"
  },
  {
    title: "Back to School",
    price: "$19.99",
    originalPrice: "$29.99",
    location: "Chicago, IL",
    imageSrc: "/placeholder.svg",
    gradientFrom: "#9b59b6",
    gradientTo: "#8e44ad"
  },
  {
    title: "Fall Collection",
    price: "$39.99",
    originalPrice: "$59.99",
    location: "Los Angeles, CA",
    imageSrc: "/placeholder.svg",
    gradientFrom: "#2980b9",
    gradientTo: "#3498db"
  },
  {
    title: "Winter Essentials",
    price: "$24.99",
    originalPrice: "$39.99",
    location: "Seattle, WA",
    imageSrc: "/placeholder.svg",
    gradientFrom: "#27ae60",
    gradientTo: "#2ecc71"
  },
  {
    title: "Holiday Deals",
    price: "$34.99",
    originalPrice: "$49.99",
    location: "Miami, FL",
    imageSrc: "/placeholder.svg",
    gradientFrom: "#e67e22",
    gradientTo: "#f39c12"
  }
];

export default async function PromosPage() {
  user = await currentUser();
  return (
    <Carousel className="w-full max-w-6xl mx-auto">
      <CarouselContent>
        {promos.map((promo, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <div className="p-4">
              <Card className={`h-full bg-gradient-to-br from-${promo.gradientFrom} to-${promo.gradientTo} text-white`}>
                <img
                  alt={`Promotion ${index + 1}`}
                  className="rounded-t-md object-cover w-full h-48"
                  height="200"
                  src={promo.imageSrc}
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">{promo.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold">{promo.price}</span>
                    <span className="text-sm text-gray-300 line-through">{promo.originalPrice}</span>
                  </div>
                  <p className="text-sm text-gray-300">{promo.location}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
