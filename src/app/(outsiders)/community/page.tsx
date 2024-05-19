import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CardContent, Card, CardTitle, CardHeader } from "@/components/ui/card"
import Link from "next/link"

import { currentUser } from "@/lib/auth";

export default async function CommunityPage() {
  const user = await currentUser();
  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 max-w-7xl mx-auto px-4 py-8">
      <div className="space-y-6">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            alt="Featured Post"
            className="aspect-[4/2] object-cover"
            height={600}
            src="/placeholder.svg"
            width={1200}
          />
          <div className="bg-white dark:bg-gray-950 p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-lg">Discover the Best Hiking Trails in the Pacific Northwest</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">By John Doe • 2 days ago</p>
              </div>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Explore the stunning natural beauty of the Pacific Northwest with this guide to the best hiking trails.
              From lush rainforests to snow-capped peaks, there's an adventure waiting for everyone.
            </p>
            <div className="flex items-center space-x-4">
              <Button size="sm" variant="ghost">
                <HeartIcon className="w-4 h-4 mr-2" />
                Like
              </Button>
              <Button size="sm" variant="ghost">
                <MessageCircleIcon className="w-4 h-4 mr-2" />
                Comment
              </Button>
              <Button size="sm" variant="ghost">
                <ShareIcon className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-4 mb-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">Best Restaurants in Seattle</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">By Jane Doe • 1 week ago</p>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Discover the top-rated restaurants in Seattle, from classic seafood spots to innovative fusion eateries.
              </p>
              <div className="flex items-center space-x-4">
                <Button size="sm" variant="ghost">
                  <HeartIcon className="w-4 h-4 mr-2" />
                  Like
                </Button>
                <Button size="sm" variant="ghost">
                  <MessageCircleIcon className="w-4 h-4 mr-2" />
                  Comment
                </Button>
                <Button size="sm" variant="ghost">
                  <ShareIcon className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-4 mb-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">Top 10 Outdoor Activities in Portland</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">By John Smith • 3 days ago</p>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Explore the great outdoors in Portland with this guide to the best hiking, biking, and adventure
                activities.
              </p>
              <div className="flex items-center space-x-4">
                <Button size="sm" variant="ghost">
                  <HeartIcon className="w-4 h-4 mr-2" />
                  Like
                </Button>
                <Button size="sm" variant="ghost">
                  <MessageCircleIcon className="w-4 h-4 mr-2" />
                  Comment
                </Button>
                <Button size="sm" variant="ghost">
                  <ShareIcon className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-4 mb-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">The Best Breweries in the Pacific Northwest</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">By Sarah Lee • 2 weeks ago</p>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Discover the top craft breweries in the Pacific Northwest, from hoppy IPAs to smooth stouts.
              </p>
              <div className="flex items-center space-x-4">
                <Button size="sm" variant="ghost">
                  <HeartIcon className="w-4 h-4 mr-2" />
                  Like
                </Button>
                <Button size="sm" variant="ghost">
                  <MessageCircleIcon className="w-4 h-4 mr-2" />
                  Comment
                </Button>
                <Button size="sm" variant="ghost">
                  <ShareIcon className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-4 mb-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">The Best Beaches in California</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">By Emily Chen • 1 month ago</p>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Explore the stunning coastline of California with this guide to the best beaches for swimming, surfing,
                and relaxation.
              </p>
              <div className="flex items-center space-x-4">
                <Button size="sm" variant="ghost">
                  <HeartIcon className="w-4 h-4 mr-2" />
                  Like
                </Button>
                <Button size="sm" variant="ghost">
                  <MessageCircleIcon className="w-4 h-4 mr-2" />
                  Comment
                </Button>
                <Button size="sm" variant="ghost">
                  <ShareIcon className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Categories</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Link
              className="group flex items-center justify-between rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
              href="#"
            >
              <span>Travel</span>
              <ChevronRightIcon className="h-4 w-4 text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300" />
            </Link>
            <Link
              className="group flex items-center justify-between rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
              href="#"
            >
              <span>Food</span>
              <ChevronRightIcon className="h-4 w-4 text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300" />
            </Link>
            <Link
              className="group flex items-center justify-between rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
              href="#"
            >
              <span>Outdoors</span>
              <ChevronRightIcon className="h-4 w-4 text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300" />
            </Link>
            <Link
              className="group flex items-center justify-between rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
              href="#"
            >
              <span>Events</span>
              <ChevronRightIcon className="h-4 w-4 text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300" />
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Posts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-4">
              <img
                alt="Recent Post"
                className="rounded-md object-cover"
                height={80}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width={80}
              />
              <div>
                <h4 className="font-semibold text-sm">The Best Hiking Trails in Oregon</h4>
                <p className="text-gray-500 dark:text-gray-400 text-xs">By Jane Doe • 2 days ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <img
                alt="Recent Post"
                className="rounded-md object-cover"
                height={80}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width={80}
              />
              <div>
                <h4 className="font-semibold text-sm">Top 5 Breweries in Seattle</h4>
                <p className="text-gray-500 dark:text-gray-400 text-xs">By John Smith • 1 week ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <img
                alt="Recent Post"
                className="rounded-md object-cover"
                height={80}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width={80}
              />
              <div>
                <h4 className="font-semibold text-sm">The Best Beaches in California</h4>
                <p className="text-gray-500 dark:text-gray-400 text-xs">By Emily Chen • 1 month ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Popular Tags</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Link
              className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
              href="#"
            >
              Travel
            </Link>
            <Link
              className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
              href="#"
            >
              Food
            </Link>
            <Link
              className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
              href="#"
            >
              Outdoors
            </Link>
            <Link
              className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
              href="#"
            >
              Events
            </Link>
            <Link
              className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
              href="#"
            >
              Hiking
            </Link>
            <Link
              className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
              href="#"
            >
              Breweries
            </Link>
            <Link
              className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
              href="#"
            >
              Beaches
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function HeartIcon(props) {
  return (
    <svg
      {...props}
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function ShareIcon(props) {
  return (
    <svg
      {...props}
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}
