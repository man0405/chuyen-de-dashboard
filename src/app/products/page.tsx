"use client"
import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import {
    BarChart3,
    ChevronDown,
    ChevronRight,
    FileText,
    Filter,
    HelpCircle,
    LayoutDashboard,
    Mail,
    Menu,
    MessageSquare,
    Pencil,
    Plus,
    Search,
    Settings,
    ShoppingBag,
    ShoppingCart,
    Trash2,
    Upload,
    User,
    Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import ProductsEdit from "./edit/page"

interface Product {
    id: string
    name: string
    price: number
    quantity: number
    sales: number
    maxSales: number
    image: string
}

export default function ProductsList() {
    const [products, setProducts] = useState<Product[]>([
        {
            id: "098327NT",
            name: "Florven",
            price: 252.0,
            quantity: 46,
            sales: 387,
            maxSales: 1000,
            image: "/placeholder.svg?height=60&width=60",
        },
        {
            id: "098359NT",
            name: "Snövalla",
            price: 139.0,
            quantity: 28,
            sales: 892,
            maxSales: 1000,
            image: "/placeholder.svg?height=60&width=60",
        },
        {
            id: "098383NT",
            name: "Echoes Necklace",
            price: 99.0,
            quantity: 52,
            sales: 1145,
            maxSales: 1500,
            image: "/placeholder.svg?height=60&width=60",
        },
        {
            id: "098342NT",
            name: "Lömnas",
            price: 68.0,
            quantity: 92,
            sales: 651,
            maxSales: 1000,
            image: "/placeholder.svg?height=60&width=60",
        },
        {
            id: "09837INT",
            name: "Kallaxa",
            price: 70.0,
            quantity: 119,
            sales: 234,
            maxSales: 1000,
            image: "/placeholder.svg?height=60&width=60",
        },
        {
            id: "098314NT",
            name: "Ringed Earring",
            price: 29.0,
            quantity: 18,
            sales: 1201,
            maxSales: 1500,
            image: "/placeholder.svg?height=60&width=60",
        },
        {
            id: "098336NT",
            name: "Maneki Neko Poster",
            price: 389.0,
            quantity: 7,
            sales: 49,
            maxSales: 100,
            image: "/placeholder.svg?height=60&width=60",
        },
        {
            id: "098368NT",
            name: "Ektöra",
            price: 869.0,
            quantity: 30,
            sales: 978,
            maxSales: 1200,
            image: "/placeholder.svg?height=60&width=60",
        },
        {
            id: "098392NT",
            name: "Spiky Ring",
            price: 1599.0,
            quantity: 27,
            sales: 573,
            maxSales: 800,
            image: "/placeholder.svg?height=60&width=60",
        },
        {
            id: "098355NT",
            name: "Pastel Petals Poster",
            price: 729.0,
            quantity: 6,
            sales: 1322,
            maxSales: 1500,
            image: "/placeholder.svg?height=60&width=60",
        },
    ])

    const getSalesColor = (sales: number, maxSales: number) => {
        const percentage = (sales / maxSales) * 100
        if (percentage > 75) return "bg-emerald-500"
        if (percentage > 50) return "bg-blue-500"
        if (percentage > 25) return "bg-amber-500"
        return "bg-red-500"
    }

    const { theme } = useTheme()

    return (
        <div className="flex min-h-screen bg-background">
            {/* Mobile Sidebar */}
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden absolute top-4 left-4 z-50">
                        <Menu className="h-5 w-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 w-64">
                    <Sidebar />
                </SheetContent>
            </Sheet>

            {/* Desktop Sidebar */}
            <div className="hidden md:block w-64 border-r">
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1">
                <header className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center gap-2">
                        <div className="w-8" /> {/* Spacer for mobile menu button */}
                        <Search className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon">
                            <Settings className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Bell className="h-5 w-5" />
                        </Button>
                        <Avatar>
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                    </div>
                </header>

                <main className="p-4 md:p-6">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <h1 className="text-2xl font-bold">Products</h1>
                            <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm" className="h-9">
                                    <Upload className="h-4 w-4 mr-2" />
                                    Export
                                </Button>
                                <Button size="sm" className="h-9">
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add products
                                </Button>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                            <div className="relative flex-1">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input type="search" placeholder="Search" className="pl-8 w-full" />
                            </div>
                            <Button variant="outline" size="sm" className="h-9 whitespace-nowrap">
                                <Filter className="h-4 w-4 mr-2" />
                                Filter
                            </Button>
                        </div>

                        <div className="rounded-md border overflow-hidden">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-12">
                                            <Checkbox />
                                        </TableHead>
                                        <TableHead className="min-w-[180px]">
                                            <div className="flex items-center gap-1">
                                                PRODUCT
                                                <ChevronDown className="h-4 w-4" />
                                            </div>
                                        </TableHead>
                                        <TableHead className="min-w-[100px]">
                                            <div className="flex items-center gap-1">
                                                PRICE
                                                <ChevronDown className="h-4 w-4" />
                                            </div>
                                        </TableHead>
                                        <TableHead className="min-w-[100px]">
                                            <div className="flex items-center gap-1">
                                                QUANTITY
                                                <ChevronDown className="h-4 w-4" />
                                            </div>
                                        </TableHead>
                                        <TableHead className="min-w-[180px]">
                                            <div className="flex items-center gap-1">
                                                SALES
                                                <ChevronDown className="h-4 w-4" />
                                            </div>
                                        </TableHead>
                                        <TableHead className="w-[100px]"></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {products.map((product) => (
                                        <TableRow key={product.id}>
                                            <TableCell>
                                                <Checkbox />
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <div className="h-12 w-12 rounded-md overflow-hidden border">
                                                        <Image
                                                            src={product.image || "/placeholder.svg"}
                                                            alt={product.name}
                                                            width={48}
                                                            height={48}
                                                            className="h-full w-full object-cover"
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="font-medium">{product.name}</div>
                                                        <div className="text-sm text-muted-foreground">ID: {product.id}</div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>${product.price.toFixed(2)}</TableCell>
                                            <TableCell>{product.quantity}</TableCell>
                                            <TableCell>
                                                <div className="space-y-1">
                                                    <div className="text-sm">{product.sales} Sales</div>
                                                    <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                                                        <div
                                                            className={`h-full ${getSalesColor(product.sales, product.maxSales)}`}
                                                            style={{ width: `${Math.min(100, (product.sales / product.maxSales) * 100)}%` }}
                                                        />
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center justify-end gap-2">
                                                    <Button variant="ghost" size="icon">
                                                        <Pencil className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="ghost" size="icon">
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Button variant="outline" size="icon" className="h-8 w-8">
                                    <span>1</span>
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <span>2</span>
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                            <Select defaultValue="10">
                                <SelectTrigger className="w-[130px]">
                                    <SelectValue placeholder="Rows per page" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="10">10 / page</SelectItem>
                                    <SelectItem value="20">20 / page</SelectItem>
                                    <SelectItem value="50">50 / page</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </main>

                <footer className="border-t p-4 text-center text-sm text-muted-foreground">
                    <div className="flex items-center justify-between">
                        <div>Copyright © 2025 Ecme All rights reserved.</div>
                        <div className="flex items-center gap-4">
                            <Link href="#" className="hover:underline">
                                Term & Conditions
                            </Link>
                            <Link href="#" className="hover:underline">
                                Privacy & Policy
                            </Link>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

function Sidebar() {
    return (
        <div className="flex h-full flex-col overflow-y-auto border-r bg-background">
            <div className="flex h-14 items-center border-b px-4">
                <Link href="/" className="flex items-center gap-2 font-semibold">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary">
                        <span className="text-xs text-primary-foreground">E</span>
                    </div>
                    <span>Ecme</span>
                </Link>
            </div>
            <div className="flex-1">
                <nav className="grid gap-1 p-2">
                    <div className="py-2">
                        <h2 className="px-4 text-xs font-semibold tracking-tight text-muted-foreground">DASHBOARD</h2>
                        <div className="grid gap-1 pt-1">
                            <Link
                                href="#"
                                className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                            >
                                <LayoutDashboard className="h-4 w-4" />
                                <span>Dashboard</span>
                            </Link>
                            <Link
                                href="#"
                                className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                            >
                                <ShoppingCart className="h-4 w-4" />
                                <span>Ecommerce</span>
                            </Link>
                            <Link
                                href="#"
                                className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                            >
                                <FileText className="h-4 w-4" />
                                <span>Project</span>
                            </Link>
                            <Link
                                href="#"
                                className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                            >
                                <BarChart3 className="h-4 w-4" />
                                <span>Marketing</span>
                            </Link>
                            <Link
                                href="#"
                                className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                            >
                                <BarChart3 className="h-4 w-4" />
                                <span>Analytic</span>
                            </Link>
                        </div>
                    </div>
                    <div className="py-2">
                        <h2 className="px-4 text-xs font-semibold tracking-tight text-muted-foreground">CONCEPTS</h2>
                        <div className="grid gap-1 pt-1">
                            <Link
                                href="#"
                                className="group flex items-center justify-between gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                            >
                                <div className="flex items-center gap-3">
                                    <BarChart3 className="h-4 w-4" />
                                    <span>AI</span>
                                </div>
                                <ChevronDown className="h-4 w-4" />
                            </Link>
                            <Link
                                href="#"
                                className="group flex items-center justify-between gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                            >
                                <div className="flex items-center gap-3">
                                    <FileText className="h-4 w-4" />
                                    <span>Projects</span>
                                </div>
                                <ChevronDown className="h-4 w-4" />
                            </Link>
                            <Link
                                href="#"
                                className="group flex items-center justify-between gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                            >
                                <div className="flex items-center gap-3">
                                    <Users className="h-4 w-4" />
                                    <span>Customer</span>
                                </div>
                                <ChevronDown className="h-4 w-4" />
                            </Link>
                            <Link
                                href="#"
                                className="group flex items-center justify-between gap-3 rounded-md bg-accent px-3 py-2 text-sm font-medium text-accent-foreground"
                            >
                                <div className="flex items-center gap-3">
                                    <ShoppingBag className="h-4 w-4" />
                                    <span>Products</span>
                                </div>
                                <ChevronDown className="h-4 w-4" />
                            </Link>
                            <div className="pl-10 grid gap-1">
                                <Link href="#" className="text-sm px-3 py-1.5 text-muted-foreground hover:text-foreground">
                                    List
                                </Link>
                                <Link href="#" className="text-sm px-3 py-1.5 text-muted-foreground hover:text-foreground ">
                                    Edit
                                </Link>
                                <Link href="#" className="text-sm px-3 py-1.5 text-muted-foreground hover:text-foreground">
                                    Create
                                </Link>
                            </div>

                            <Link
                                href="#"
                                className="group flex items-center justify-between gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                            >
                                <div className="flex items-center gap-3">
                                    <ShoppingCart className="h-4 w-4" />
                                    <span>Orders</span>
                                </div>
                                <ChevronDown className="h-4 w-4" />
                            </Link>
                            <Link
                                href="#"
                                className="group flex items-center justify-between gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                            >
                                <div className="flex items-center gap-3">
                                    <User className="h-4 w-4" />
                                    <span>Account</span>
                                </div>
                                <ChevronDown className="h-4 w-4" />
                            </Link>
                            <Link
                                href="#"
                                className="group flex items-center justify-between gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                            >
                                <div className="flex items-center gap-3">
                                    <HelpCircle className="h-4 w-4" />
                                    <span>Help Center</span>
                                </div>
                                <ChevronDown className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                    <div className="py-2">
                        <div className="grid gap-1">
                            <Link
                                href="#"
                                className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                            >
                                <FileText className="h-4 w-4" />
                                <span>Calendar</span>
                            </Link>
                            <Link
                                href="#"
                                className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                            >
                                <FileText className="h-4 w-4" />
                                <span>File Manager</span>
                            </Link>
                            <Link
                                href="#"
                                className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                            >
                                <Mail className="h-4 w-4" />
                                <span>Mail</span>
                            </Link>
                            <Link
                                href="#"
                                className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                            >
                                <MessageSquare className="h-4 w-4" />
                                <span>Chat</span>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

function Bell(props: React.SVGProps<SVGSVGElement>) {
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
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
    )
}

function Avatar({ children }: { children: React.ReactNode }) {
    return <div className="relative h-8 w-8 rounded-full overflow-hidden">{children}</div>
}

function AvatarImage({ src, alt }: { src: string; alt: string }) {
    return (
        <Image src={src || "/placeholder.svg"} alt={alt} width={32} height={32} className="h-full w-full object-cover" />
    )
}

function AvatarFallback({ children }: { children: React.ReactNode }) {
    return <div className="flex h-full w-full items-center justify-center bg-muted">{children}</div>
}

