"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"
import Link from "next/link"

export default function Component() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Lorem Ipsum Workshop",
      date: "March 15, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Lorem Convention Center",
      description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Dolor Sit Amet Conference",
      date: "March 22, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Online Event",
      description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      title: "Consectetur Adipiscing Seminar",
      date: "April 5, 2024",
      time: "10:00 AM - 8:00 PM",
      location: "Ipsum Hub, Austin",
      description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ]

  return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between px-4">
            <div className="flex items-center">
              <span className="text-xl font-bold">Elev8 x Valence</span>
            </div>

            <nav className="flex items-center">
              <Button variant="ghost" asChild>
                <Link href="/blogs">Blogs</Link>
              </Button>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container px-4">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Elev8 x Valence Robotics</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="py-20 bg-muted/50 rounded-lg shadow">
          <div className="container px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Upcoming Events</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden">
                    <CardHeader>
                      <CardTitle className="line-clamp-2">{event.title}</CardTitle>
                      <CardDescription className="line-clamp-3">{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {event.date}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2" />
                          {event.location}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-background border-t">
          <div className="container px-4 py-8">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Elev8 x Valence Robotics. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
  )
}
