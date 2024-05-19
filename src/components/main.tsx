import { CardContent, Card } from "@/components/ui/card";
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel";

const sections = [
  {
    title: "Housing Options Near You",
    items: [
      {
        title: "Luxury Apartment",
        description: "Spacious 2-bedroom apartment with modern amenities.",
        imageSrc: "/placeholder.svg"
      },
      {
        title: "Cozy Townhouse",
        description: "Charming 3-bedroom townhouse with a private backyard.",
        imageSrc: "/placeholder.svg"
      },
      {
        title: "Modern Loft",
        description: "Stylish 1-bedroom loft with high ceilings and exposed brick.",
        imageSrc: "/placeholder.svg"
      }
    ]
  },
  {
    title: "Featured Promotions",
    items: [
      {
        title: "Summer Sale",
        description: "Up to 50% off on selected items.",
        imageSrc: "/placeholder.svg"
      },
      {
        title: "Free Shipping",
        description: "Get free shipping on all orders over $50.",
        imageSrc: "/placeholder.svg"
      },
      {
        title: "Buy One, Get One",
        description: "Buy one, get one free on selected products.",
        imageSrc: "/placeholder.svg"
      }
    ]
  },
  {
    title: "Nearby Services",
    items: [
      {
        title: "Restaurants",
        description: "Discover top-rated dining options.",
        icon: MenuIcon
      },
      {
        title: "Shopping",
        description: "Explore local shops and boutiques.",
        icon: ShoppingBagIcon
      },
      {
        title: "Parks",
        description: "Enjoy the great outdoors.",
        icon: CircleParkingIcon
      },
      {
        title: "Gyms",
        description: "Stay fit and healthy.",
        icon: DumbbellIcon
      }
    ]
  }
];

export function Main() {
  return (
    <>
      {sections.map((section, index) => (
        <section key={index} className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-6 text-2xl font-bold md:text-3xl">{section.title}</h2>
            <Carousel className={index === 2 ? "h-[200px] md:h-[250px]" : "h-[300px] md:h-[400px]"}>
              <CarouselContent>
                {section.items.map((item, idx) => (
                  <CarouselItem key={idx} className={index === 2 ? "md:basis-1/2 lg:basis-1/4" : "md:basis-1/2 lg:basis-1/3"}>
                    <div className="p-2">
                      <Card>
                        {item.icon ? (
                          <CardContent className="flex flex-col items-center justify-center gap-2 p-4">
                            <item.icon className="h-8 w-8" />
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                          </CardContent>
                        ) : (
                          <>
                            <img
                              alt={item.title}
                              className="aspect-[5/3] overflow-hidden rounded-t-lg object-cover"
                              height="300"
                              src={item.imageSrc}
                              width="500"
                            />
                            <CardContent className="space-y-2 p-4">
                              <h3 className="text-lg font-semibold">{item.title}</h3>
                              <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                            </CardContent>
                          </>
                        )}
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      ))}
    </>
  );
}


function CircleParkingIcon({ className, ...rest }: IconProps) {
  return (
    <svg
      {...rest}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </svg>
  )
}


function DumbbellIcon({ className, ...rest }: IconProps) {
  return (
    <svg
      {...rest}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.4 14.4 9.6 9.6" />
      <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
      <path d="m21.5 21.5-1.4-1.4" />
      <path d="M3.9 3.9 2.5 2.5" />
      <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
    </svg>
  )
}


function MenuIcon({ className, ...rest }: IconProps) {
  return (
    <svg
      {...rest}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function ShoppingBagIcon({ className, ...rest }: IconProps) {
  return (
    <svg
      {...rest}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}
