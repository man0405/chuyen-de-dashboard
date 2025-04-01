"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	ArrowLeft,
	Bold,
	Code,
	Heading,
	ImageIcon,
	Italic,
	List,
	ListOrdered,
	Minus,
	Quote,
	X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface ProductImage {
	id: number;
	url: string;
}

export default function CreateProduct() {
	const [images, setImages] = useState<ProductImage[]>([
		{ id: 1, url: "/assets/images/galary/galary-1.avif" },
		{ id: 2, url: "/assets/images/galary/galary-1.avif" },
		{ id: 3, url: "/assets/images/galary/galary-1.avif" },
		{ id: 4, url: "/assets/images/galary/galary-1.avif" },
	]);

	const [tags, setTags] = useState(["trend"]);

	const removeImage = (id: number) => {
		setImages(images.filter((img) => img.id !== id));
	};

	const removeTag = (tagToRemove: string) => {
		setTags(tags.filter((tag) => tag !== tagToRemove));
	};

	return (
		<div className="flex min-h-screen bg-background">
			{/* Main Content */}
			<div className="flex-1 flex flex-col ">
				<header className="sticky top-0 z-10 border-b bg-background px-5">
					<div className=" flex h-14 w-full items-center gap-4">
						<Link href="/products" className="flex items-center gap-2">
							<ArrowLeft className="h-4 w-4" />
							<span className="text-sm font-medium">Back</span>
						</Link>
						<div className="flex flex-1 items-center justify-between ">
							<h1 className="text-lg font-semibold">Edit product</h1>
							<div className="flex items-center gap-2">
								<Button
									variant="outline"
									size="sm"
									className="text-destructive"
								>
									Delete
								</Button>
								<Button size="sm">Save</Button>
							</div>
						</div>
					</div>
				</header>

				<div className="flex-1 overflow-auto">
					<div className=" py-6 px-4">
						<div className="grid gap-6 lg:grid-cols-6">
							{/* Left Column - Basic Info & Pricing */}
							<div className="lg:col-span-4 space-y-6">
								{/* Basic Information */}
								<Card>
									<CardContent className="p-6">
										<div className="space-y-4">
											<h2 className="text-lg font-semibold">
												Basic Information
											</h2>
											<div className="space-y-4">
												<div>
													<Label htmlFor="name">Product name</Label>
													<Input
														id="name"
														className="mt-1.5"
														defaultValue="Flörven"
													/>
												</div>
												<div>
													<Label htmlFor="code">Product code</Label>
													<Input
														id="code"
														className="mt-1.5"
														defaultValue="098327NT"
													/>
												</div>
												<div>
													<Label>Description</Label>
													<div className="mt-1.5 rounded-lg border">
														<div className="flex flex-wrap items-center gap-1 border-b p-2">
															<Button
																variant="ghost"
																size="icon"
																className="h-8 w-8"
															>
																<Bold className="h-4 w-4" />
															</Button>
															<Button
																variant="ghost"
																size="icon"
																className="h-8 w-8"
															>
																<Italic className="h-4 w-4" />
															</Button>
															<Separator
																orientation="vertical"
																className="mx-1 h-6"
															/>
															<Button
																variant="ghost"
																size="icon"
																className="h-8 w-8"
															>
																<List className="h-4 w-4" />
															</Button>
															<Button
																variant="ghost"
																size="icon"
																className="h-8 w-8"
															>
																<ListOrdered className="h-4 w-4" />
															</Button>
															<Separator
																orientation="vertical"
																className="mx-1 h-6"
															/>
															<Button
																variant="ghost"
																size="icon"
																className="h-8 w-8"
															>
																<Heading className="h-4 w-4" />
															</Button>
															<Button
																variant="ghost"
																size="icon"
																className="h-8 w-8"
															>
																<Quote className="h-4 w-4" />
															</Button>
															<Button
																variant="ghost"
																size="icon"
																className="h-8 w-8"
															>
																<Code className="h-4 w-4" />
															</Button>
															<Button
																variant="ghost"
																size="icon"
																className="h-8 w-8"
															>
																<Minus className="h-4 w-4" />
															</Button>
														</div>
														<Textarea
															className="min-h-[200px] border-0 focus-visible:ring-0"
															placeholder="Write a description..."
															defaultValue="Make a brew a right royal knees up and we all like figgy pudding a comely wench gutted its nicked pulled out the eating irons, ask your mother if on goggle box toad in the whole Sherlock rather, ar kid pennyboy naff superb pezzy little."
														/>
													</div>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>

								{/* Pricing */}
								<Card>
									<CardContent className="p-6">
										<div className="space-y-4">
											<h2 className="text-lg font-semibold">Pricing</h2>
											<div className="space-y-4">
												<div>
													<Label htmlFor="price">Price</Label>
													<div className="relative mt-1.5">
														<span className="absolute left-3 top-2.5 text-muted-foreground">
															$
														</span>
														<Input
															id="price"
															className="pl-6"
															defaultValue="252"
														/>
													</div>
												</div>
												<div>
													<Label htmlFor="cost">Cost price</Label>
													<div className="relative mt-1.5">
														<span className="absolute left-3 top-2.5 text-muted-foreground">
															$
														</span>
														<Input
															id="cost"
															className="pl-6"
															defaultValue="12"
														/>
													</div>
												</div>
												<div className="grid gap-4 sm:grid-cols-2">
													<div>
														<Label htmlFor="bulk">Bulk discount price</Label>
														<div className="relative mt-1.5">
															<span className="absolute left-3 top-2.5 text-muted-foreground">
																$
															</span>
															<Input
																id="bulk"
																className="pl-6"
																defaultValue="68"
															/>
														</div>
													</div>
													<div>
														<Label htmlFor="tax">Tax rate(%)</Label>
														<Input
															id="tax"
															className="mt-1.5"
															defaultValue="6"
														/>
													</div>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							</div>

							{/* Right Column - Images & Attributes */}
							<div className="lg:col-span-2 space-y-6">
								{/* Product Images */}
								<Card>
									<CardContent className="p-6">
										<div className="space-y-4">
											<h2 className="text-lg font-semibold">Product Image</h2>
											<p className="text-sm text-muted-foreground">
												Choose a product photo or simply drag and drop up to 5
												photos here.
											</p>
											<ScrollArea className="h-[400px] rounded-lg border bg-muted/40 p-4">
												<div className="grid grid-cols-2 gap-4">
													{images.map((image) => (
														<div
															key={image.id}
															className="group relative aspect-square rounded-lg border bg-background"
														>
															<Image
																src={image.url || "/placeholder.svg"}
																alt="Product image"
																fill
																className="rounded-lg object-cover"
															/>
															<Button
																variant="ghost"
																size="icon"
																className="absolute right-2 top-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm"
																onClick={() => removeImage(image.id)}
															>
																<X className="h-4 w-4" />
															</Button>
														</div>
													))}
													<label className="relative aspect-square rounded-lg border-2 border-dashed hover:border-primary/50 cursor-pointer">
														<input
															type="file"
															className="sr-only"
															accept="image/*"
															multiple
														/>
														<div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-center">
															<ImageIcon className="h-8 w-8 text-muted-foreground" />
															<div className="text-xs text-muted-foreground">
																Drop your image here, or{" "}
																<span className="text-primary">browse</span>
															</div>
														</div>
													</label>
												</div>
											</ScrollArea>
											<p className="text-xs text-muted-foreground">
												Image formats: .jpg, .jpeg, .png, preferred size: 1:1,
												file size is restricted to a maximum of 500kb.
											</p>
										</div>
									</CardContent>
								</Card>

								{/* Attributes */}
								<Card>
									<CardContent className="p-6">
										<div className="space-y-4">
											<h2 className="text-lg font-semibold">Attribute</h2>
											<div className="space-y-4">
												<div>
													<Label>Category</Label>
													<Select defaultValue="furniture">
														<SelectTrigger className="mt-1.5">
															<SelectValue placeholder="Select category" />
														</SelectTrigger>
														<SelectContent>
															<SelectItem value="furniture">
																Furniture
															</SelectItem>
															<SelectItem value="lighting">Lighting</SelectItem>
															<SelectItem value="decor">Decor</SelectItem>
														</SelectContent>
													</Select>
												</div>
												<div>
													<Label>Tags</Label>
													<div className="mt-1.5 flex flex-wrap gap-2">
														{tags.map((tag) => (
															<Badge
																key={tag}
																variant="secondary"
																className="gap-1"
															>
																{tag}
																<Button
																	variant="ghost"
																	size="icon"
																	className="-mr-2 h-4 w-4 hover:bg-transparent"
																	onClick={() => removeTag(tag)}
																>
																	<X className="h-3 w-3" />
																</Button>
															</Badge>
														))}
													</div>
												</div>
												<div>
													<Label htmlFor="brand">Brand</Label>
													<Input
														id="brand"
														className="mt-1.5"
														defaultValue="Luminaire"
													/>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
