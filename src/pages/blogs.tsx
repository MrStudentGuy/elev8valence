import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogsPage() {
	const blogPosts = [
		{
			id: 1,
			title: "Lorem Ipsum Dolor Sit Amet",
			excerpt:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			author: "John Doe",
			date: "March 10, 2024",
			image: "/placeholder.svg?height=200&width=400&text=Blog+Post+1",
		},
		{
			id: 2,
			title: "Consectetur Adipiscing Elit",
			excerpt:
				"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			author: "Jane Smith",
			date: "March 8, 2024",
			image: "/placeholder.svg?height=200&width=400&text=Blog+Post+2",
		},
		{
			id: 3,
			title: "Sed Do Eiusmod Tempor",
			excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			author: "Mike Johnson",
			date: "March 5, 2024",
			image: "/placeholder.svg?height=200&width=400&text=Blog+Post+3",
		},
		{
			id: 4,
			title: "Incididunt Ut Labore",
			excerpt:
				"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			author: "Sarah Wilson",
			date: "March 3, 2024",
			image: "/placeholder.svg?height=200&width=400&text=Blog+Post+4",
		},
		{
			id: 5,
			title: "Dolore Magna Aliqua",
			excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
			author: "David Brown",
			date: "March 1, 2024",
			image: "/placeholder.svg?height=200&width=400&text=Blog+Post+5",
		},
		{
			id: 6,
			title: "Ut Enim Ad Minim Veniam",
			excerpt: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
			author: "Emily Davis",
			date: "February 28, 2024",
			image: "/placeholder.svg?height=200&width=400&text=Blog+Post+6",
		},
	]

	return (
		<div className="min-h-screen w-screen flex flex-col justify-center items-center bg-background">
			{/* Header */}
			<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container flex h-16 items-center justify-between px-4">
					<div className="flex items-center">
						<Link href="/" className="text-xl font-bold hover:text-primary transition-colors">
							Elev8 x Valence
						</Link>
					</div>

					<nav className="flex items-center">
						<Button variant="ghost" asChild>
							<Link href="/blogs">Blogs</Link>
						</Button>
					</nav>
				</div>
			</header>

			{/* Page Header */}
			<section className="py-16 md:py-24">
				<div className="container px-4">
					<div className="text-center space-y-4 max-w-3xl mx-auto">
						<h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Blog</h1>
						<p className="text-xl text-muted-foreground">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
					</div>
				</div>
			</section>

			{/* Blog Posts */}
			<section className="pb-20">
				<div className="container px-4">
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{blogPosts.map((post) => (
							<Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
								<div className="relative h-48">
									<Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
								</div>
								<CardHeader>
									<CardTitle className="line-clamp-2 hover:text-primary transition-colors cursor-pointer">
										{post.title}
									</CardTitle>
									<CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex items-center justify-between text-sm text-muted-foreground">
										<div className="flex items-center space-x-2">
											<User className="h-4 w-4" />
											<span>{post.author}</span>
										</div>
										<div className="flex items-center space-x-2">
											<Calendar className="h-4 w-4" />
											<span>{post.date}</span>
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
