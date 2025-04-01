"use client";
import type React from "react";
import { useState } from "react";
import Image from "next/image";
import {
	ChevronDown,
	ChevronRight,
	Filter,
	Pencil,
	Plus,
	Search,
	Trash2,
	Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface Product {
	id: string;
	name: string;
	price: number;
	quantity: number;
	sales: number;
	maxSales: number;
	image: string;
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
			image: "/assets/images/galary/galary-1.avif",
		},
		{
			id: "098359NT",
			name: "Snövalla",
			price: 139.0,
			quantity: 28,
			sales: 892,
			maxSales: 1000,
			image: "/assets/images/galary/galary-3.avif",
		},
		{
			id: "098383NT",
			name: "Echoes Necklace",
			price: 99.0,
			quantity: 52,
			sales: 1145,
			maxSales: 1500,
			image: "/assets/images/galary/galary-3.avif",
		},
		{
			id: "098342NT",
			name: "Lömnas",
			price: 68.0,
			quantity: 92,
			sales: 651,
			maxSales: 1000,
			image: "/assets/images/galary/galary-2.avif",
		},
		{
			id: "09837INT",
			name: "Kallaxa",
			price: 70.0,
			quantity: 119,
			sales: 234,
			maxSales: 1000,
			image: "/assets/images/galary/galary-3.avif",
		},
		{
			id: "098314NT",
			name: "Ringed Earring",
			price: 29.0,
			quantity: 18,
			sales: 1201,
			maxSales: 1500,
			image: "/assets/images/galary/galary-3.avif",
		},
		{
			id: "098336NT",
			name: "Maneki Neko Poster",
			price: 389.0,
			quantity: 7,
			sales: 49,
			maxSales: 100,
			image: "/assets/images/galary/galary-2.avif",
		},
		{
			id: "098368NT",
			name: "Ektöra",
			price: 869.0,
			quantity: 30,
			sales: 978,
			maxSales: 1200,
			image: "/assets/images/galary/galary-2.avif",
		},
		{
			id: "098392NT",
			name: "Spiky Ring",
			price: 1599.0,
			quantity: 27,
			sales: 573,
			maxSales: 800,
			image: "/assets/images/galary/galary-2.avif",
		},
		{
			id: "098355NT",
			name: "Pastel Petals Poster",
			price: 729.0,
			quantity: 6,
			sales: 1322,
			maxSales: 1500,
			image: "/assets/images/galary/galary-2.avif",
		},
	]);

	const getSalesColor = (sales: number, maxSales: number) => {
		const percentage = (sales / maxSales) * 100;
		if (percentage > 75) return "bg-emerald-500";
		if (percentage > 50) return "bg-blue-500";
		if (percentage > 25) return "bg-amber-500";
		return "bg-red-500";
	};

	return (
		<div className="flex h-full bg-background">
			{/* Main Content */}
			<div className="flex-1 flex flex-col">
				<main className="p-4 md:p-6 flex-1 flex flex-col">
					<div className="flex flex-col gap-6 h-full">
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
								<Input
									type="search"
									placeholder="Search"
									className="pl-8 w-full"
								/>
							</div>
							<Button
								variant="outline"
								size="sm"
								className="h-9 whitespace-nowrap"
							>
								<Filter className="h-4 w-4 mr-2" />
								Filter
							</Button>
						</div>

						<div className="rounded-md border overflow-hidden h-max">
							<Table className="h-full">
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
														<div className="text-sm text-muted-foreground">
															ID: {product.id}
														</div>
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
															className={`h-full ${getSalesColor(
																product.sales,
																product.maxSales
															)}`}
															style={{
																width: `${Math.min(
																	100,
																	(product.sales / product.maxSales) * 100
																)}%`,
															}}
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
			</div>
		</div>
	);
}
