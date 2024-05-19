import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenuTrigger, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu";

const housingListings = [
  {
    price: "$1,200/mo",
    beds: "3 Beds",
    description: "Cozy 3-bedroom apartment in the heart of the city, close to campus and all amenities.",
    imageSrc: "/placeholder.svg",
  },
  {
    price: "$900/mo",
    beds: "2 Beds",
    description: "Bright and spacious 2-bedroom apartment, perfect for students, close to campus.",
    imageSrc: "/placeholder.svg",
  },
  // Add more listings here...
];

export function Housing() {
  return (
    <div key="1" className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-6 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Student Housing</h1>
          <p className="text-gray-500 dark:text-gray-400">Find your perfect student home</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative w-full max-w-md">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
            <Input
              className="pl-10 pr-4 py-2 rounded-md bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:focus:ring-gray-300"
              placeholder="Search by location or amenities"
              type="text"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="flex items-center space-x-2" variant="outline">
                <FilterIcon className="w-5 h-5" />
                <span>Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 p-4">
              {/* Filter content here */}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {housingListings.map((listing, index) => (
          <div key={index} className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              alt="Listing Image"
              className="w-full h-48 object-cover"
              height={250}
              src={listing.imageSrc}
              style={{
                aspectRatio: "400/250",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold">{listing.price}</span>
                <span className="text-gray-500 dark:text-gray-400">{listing.beds}</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 line-clamp-2">{listing.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FilterIcon({ className, ...rest }: IconProps) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function SearchIcon({ className, ...rest }: IconProps) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
