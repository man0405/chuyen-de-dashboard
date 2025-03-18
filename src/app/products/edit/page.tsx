"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Bold, Code, Heading, Italic, List, ListOrdered, Minus, Quote, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea" // Ensure this path is correct or update it to the correct path
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
export default function EditProduct() {
    const [tags] = useState(["trend"])

    return (
        <div className="flex min-h-screen bg-background">
            {/* Left Sidebar */}
            <div className="hidden lg:flex w-64 flex-col fixed inset-y-0 border-r">
                <div className="flex h-14 items-center border-b px-4">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary">
                            <span className="text-xs text-primary-foreground">E</span>
                        </div>
                        <span>Ecme</span>
                    </Link>
                </div>
                <div className="flex-1 overflow-auto py-2">
                    <nav className="grid gap-1 px-2">
                        <div className="py-2">
                            <h2 className="mb-2 px-4 text-xs font-semibold tracking-tight text-muted-foreground">DASHBOARD</h2>
                            <div className="grid gap-1">
                                <NavItem href="#" label="Dashboard" />
                                <NavItem href="#" label="Ecommerce" />
                                <NavItem href="#" label="Project" />
                                <NavItem href="#" label="Marketing" />
                                <NavItem href="#" label="Analytic" />
                            </div>
                        </div>
                        <div className="py-2">
                            <h2 className="mb-2 px-4 text-xs font-semibold tracking-tight text-muted-foreground">CONCEPTS</h2>
                            <div className="grid gap-1">
                                <NavItem href="#" label="AI" hasSubmenu />
                                <NavItem href="#" label="Projects" hasSubmenu />
                                <NavItem href="#" label="Customer" hasSubmenu />
                                <NavItem href="#" label="Products" active hasSubmenu>
                                    <div className="pl-10 grid gap-1">
                                        <Link href="#" className="text-sm px-3 py-1.5 text-muted-foreground hover:text-foreground">
                                            List
                                        </Link>
                                        <Link href="#" className="text-sm px-3 py-1.5 text-primary">
                                            Edit
                                        </Link>
                                        <Link href="#" className="text-sm px-3 py-1.5 text-muted-foreground hover:text-foreground">
                                            Create
                                        </Link>
                                    </div>
                                </NavItem>
                                <NavItem href="#" label="Orders" hasSubmenu />
                                <NavItem href="#" label="Account" hasSubmenu />
                                <NavItem href="#" label="Help Center" hasSubmenu />
                            </div>
                        </div>
                        <div className="py-2">
                            <div className="grid gap-1">
                                <NavItem href="#" label="Calendar" />
                                <NavItem href="#" label="File Manager" />
                                <NavItem href="#" label="Mail" />
                                <NavItem href="#" label="Chat" />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 lg:ml-64">
                <div className="container mx-auto p-6">
                    <h1 className="text-2xl font-bold mb-6">Edit product</h1>

                    <div className="grid gap-6 lg:grid-cols-2">
                        {/* Left Column */}
                        <div className="space-y-6">
                            {/* Basic Information */}
                            <Card>
                                <CardContent className="p-6">
                                    <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
                                    <div className="space-y-4">
                                        <div>
                                            <Label htmlFor="name">Product name</Label>
                                            <Input id="name" defaultValue="Flörven" className="mt-1.5" />
                                        </div>
                                        <div>
                                            <Label htmlFor="code">Product code</Label>
                                            <Input id="code" defaultValue="098327NT" className="mt-1.5" />
                                        </div>
                                        <div>
                                            <Label>Description</Label>
                                            <div className="mt-1.5 rounded-lg border">
                                                <div className="flex flex-wrap items-center gap-1 border-b p-2">
                                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                                        <Bold className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                                        <Italic className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                                        <Code className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                                        <Quote className="h-4 w-4" />
                                                    </Button>
                                                    <Separator orientation="vertical" className="mx-1 h-6" />
                                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                                        <Heading className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                                        <List className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                                        <ListOrdered className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                                        <Minus className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                                <Textarea
                                                    className="min-h-[200px] border-0 focus-visible:ring-0"
                                                    defaultValue="Make a brew a right royal knees up and we all like figgy pudding a comely wench gutted its nicked pulled out the eating irons, ask your mother if on goggle box toad in the whole Sherlock rather, ar kid pennyboy naff superb pezzy little.

Scally utter shambles blighty squirrel numbskull rumpy pumpy apple and pears bow ties are cool

pompous nosh have a butcher at this flabbergasted a right toff black cab jolly good made a pigs ear of it

Roast beef conked him one on the nose had a barney with the inlaws beefeater is she avin a laugh supper, gobsmacked argy-bargy challenge you to a duel

whizz air one dirty linen chav not some sort of dosshouse."
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Pricing */}
                            <Card>
                                <CardContent className="p-6">
                                    <h2 className="text-lg font-semibold mb-4">Pricing</h2>
                                    <div className="space-y-4">
                                        <div>
                                            <Label htmlFor="price">Price</Label>
                                            <div className="relative mt-1.5">
                                                <span className="absolute left-3 top-2.5 text-muted-foreground">$</span>
                                                <Input id="price" className="pl-6" defaultValue="252" />
                                            </div>
                                        </div>
                                        <div>
                                            <Label htmlFor="cost">Cost price</Label>
                                            <div className="relative mt-1.5">
                                                <span className="absolute left-3 top-2.5 text-muted-foreground">$</span>
                                                <Input id="cost" className="pl-6" defaultValue="12" />
                                            </div>
                                        </div>
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div>
                                                <Label htmlFor="bulk">Bulk discount price</Label>
                                                <div className="relative mt-1.5">
                                                    <span className="absolute left-3 top-2.5 text-muted-foreground">$</span>
                                                    <Input id="bulk" className="pl-6" defaultValue="68" />
                                                </div>
                                            </div>
                                            <div>
                                                <Label htmlFor="tax">Tax rate(%)</Label>
                                                <Input id="tax" className="mt-1.5" defaultValue="6" />
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            {/* Product Image */}
                            <Card>
                                <CardContent className="p-6">
                                    <h2 className="text-lg font-semibold mb-4">Product Image</h2>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Choose a product photo or simply drag and drop up to 5 photos here.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <ImageThumbnail src="/placeholder.svg?height=120&width=120" />
                                        <ImageThumbnail src="/placeholder.svg?height=120&width=120" />
                                        <ImageThumbnail src="/placeholder.svg?height=120&width=120" />
                                        <ImageThumbnail src="/placeholder.svg?height=120&width=120" />
                                        <div className="relative aspect-square rounded-lg border-2 border-dashed flex flex-col items-center justify-center p-4 text-center">
                                            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-2">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H12"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M8 12L12 16L22 6"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="text-sm font-medium">Drop your image here, or</div>
                                            <div className="text-sm text-primary">Click to browse</div>
                                        </div>
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        Image formats: .jpg, .jpeg, .png, preferred size: 1:1, file size is restricted to a maximum of
                                        500kb.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Attributes */}
                            <Card>
                                <CardContent className="p-6">
                                    <h2 className="text-lg font-semibold mb-4">Attribute</h2>
                                    <div className="space-y-4">
                                        <div>
                                            <Label>Category</Label>
                                            <Select defaultValue="furniture">
                                                <SelectTrigger className="mt-1.5">
                                                    <SelectValue placeholder="Select..." />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="furniture">Furniture</SelectItem>
                                                    <SelectItem value="lighting">Lighting</SelectItem>
                                                    <SelectItem value="decor">Decor</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div>
                                            <Label>Tags</Label>
                                            <div className="flex items-center gap-2 mt-1.5">
                                                {tags.map((tag) => (
                                                    <Badge key={tag} variant="secondary" className="px-2 py-1">
                                                        {tag} <span className="ml-1 cursor-pointer">×</span>
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <Label htmlFor="brand">Brand</Label>
                                            <Input id="brand" className="mt-1.5" defaultValue="Luminaire" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between mt-8">
                        <Button variant="ghost" className="gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back
                        </Button>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" className="gap-2 text-destructive">
                                <Trash className="h-4 w-4" />
                                Delete
                            </Button>
                            <Button>Save</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function NavItem({
    href,
    label,
    active,
    hasSubmenu,
    children,
}: {
    href: string
    label: string
    active?: boolean
    hasSubmenu?: boolean
    children?: React.ReactNode
}) {
    return (
        <div>
            <Link
                href={href}
                className={`group flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium ${active ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground"
                    }`}
            >
                <span>{label}</span>
                {hasSubmenu && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4 6L8 10L12 6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
            </Link>
            {children}
        </div>
    )
}

function ImageThumbnail({ src }: { src: string }) {
    return (
        <div className="relative aspect-square rounded-lg border overflow-hidden group">
            <Image src={src || "/placeholder.svg"} alt="Product image" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors">
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-1 right-1 h-6 w-6 opacity-0 group-hover:opacity-100 bg-background/80 backdrop-blur-sm"
                >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9 3L3 9M3 3L9 9"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Button>
            </div>
        </div>
    )
}

