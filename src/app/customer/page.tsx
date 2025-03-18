"use client";

import { useState } from "react";
import {
	ArrowLeft,
	ArrowRight,
	ChevronDown,
	Download,
	Eye,
	Pencil,
	Plus,
	Search,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { FilterDialog } from "../../components/customer/filter-dialog";
import { CreateCustomerDialog } from "../../components/customer/create-customer-dialog";

interface Customer {
	id: string;
	name: string;
	email: string;
	location: string;
	status: "Active" | "Blocked";
	spent: string;
	avatar: string;
}

const customers: Customer[] = [
	{
		id: "1",
		name: "Angelina Gotelli",
		email: "carolyn_h@hotmail.com",
		location: "New York, US",
		status: "Active",
		spent: "$4367.15",
		avatar: "/placeholder.svg?height=40&width=40",
	},
	{
		id: "2",
		name: "Jeremiah Minsk",
		email: "terrance_moreno@infotech.io",
		location: "Tokyo, JP",
		status: "Active",
		spent: "$7823.42",
		avatar: "/placeholder.svg?height=40&width=40",
	},
	{
		id: "3",
		name: "Max Alexander",
		email: "ronnie_vergas@infotech.io",
		location: "Mumbai, IN",
		status: "Blocked",
		spent: "$2478.33",
		avatar: "/placeholder.svg?height=40&width=40",
	},
	{
		id: "4",
		name: "Shannon Baker",
		email: "cookie_lukie@hotmail.com",
		location: "New York, US",
		status: "Active",
		spent: "$234.56",
		avatar: "/placeholder.svg?height=40&width=40",
	},
	{
		id: "5",
		name: "Eugene Stewart",
		email: "joyce991@infotech.io",
		location: "Ottawa, CA",
		status: "Active",
		spent: "$1201.45",
		avatar: "/placeholder.svg?height=40&width=40",
	},
	{
		id: "6",
		name: "Arlene Pierce",
		email: "samanthaphil@infotech.io",
		location: "London, UK",
		status: "Active",
		spent: "$8923.11",
		avatar: "/placeholder.svg?height=40&width=40",
	},
	{
		id: "7",
		name: "Roberta Horton",
		email: "taratarara@imaze.edu.du",
		location: "Brasilia, BR",
		status: "Active",
		spent: "$465.78",
		avatar: "/placeholder.svg?height=40&width=40",
	},
	{
		id: "8",
		name: "Jessica Wells",
		email: "iamfred@imaze.infotech.io",
		location: "London, UK",
		status: "Blocked",
		spent: "$890.43",
		avatar: "/placeholder.svg?height=40&width=40",
	},
	{
		id: "9",
		name: "Camila Simmons",
		email: "carolyn_h@gmail.com",
		location: "Ankara, TR",
		status: "Blocked",
		spent: "$3456.22",
		avatar: "/placeholder.svg?height=40&width=40",
	},
	{
		id: "10",
		name: "Earl Miles",
		email: "brittany1134@gmail.com",
		location: "Texas, US",
		status: "Active",
		spent: "$7890.12",
		avatar: "/placeholder.svg?height=40&width=40",
	},
];

export default function CustomersTable() {
	const [selectedCustomers, setSelectedCustomers] = useState<string[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [isCreateOpen, setIsCreateOpen] = useState(false);

	const toggleSelectAll = () => {
		if (selectedCustomers.length === customers.length) {
			setSelectedCustomers([]);
		} else {
			setSelectedCustomers(customers.map((customer) => customer.id));
		}
	};

	const toggleSelectCustomer = (id: string) => {
		if (selectedCustomers.includes(id)) {
			setSelectedCustomers(
				selectedCustomers.filter((customerId) => customerId !== id)
			);
		} else {
			setSelectedCustomers([...selectedCustomers, id]);
		}
	};

	return (
		<div className="w-full max-w-7xl mx-auto p-4 space-y-4 bg-background rounded-lg shadow-sm border">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-bold">Customers</h1>
				<div className="flex items-center gap-2">
					<Button
						variant="outline"
						size="sm"
						className="hidden sm:flex items-center gap-2"
					>
						<Download className="h-4 w-4" />
						<span>Download</span>
					</Button>
					<Button variant="outline" size="icon" className="sm:hidden">
						<Download className="h-4 w-4" />
					</Button>
					<Button
						size="sm"
						className="hidden sm:flex items-center gap-2"
						onClick={() => setIsCreateOpen(true)}
					>
						<Plus className="h-4 w-4" />
						<span>Add new</span>
					</Button>
					<Button
						size="icon"
						className="sm:hidden"
						onClick={() => setIsCreateOpen(true)}
					>
						<Plus className="h-4 w-4" />
					</Button>
				</div>
			</div>

			<div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center justify-between">
				<div className="relative w-full sm:w-auto">
					<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
					<Input
						placeholder="Quick search..."
						className="pl-8 w-full sm:w-[280px] h-9"
					/>
				</div>
				<Button
					variant="outline"
					size="sm"
					className="w-full sm:w-auto"
					onClick={() => setIsFilterOpen(true)}
				>
					<span>Filter</span>
					<ChevronDown className="ml-2 h-4 w-4" />
				</Button>
			</div>

			<div className="rounded-md border overflow-hidden">
				<div className="overflow-x-auto">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[40px]">
									<Checkbox
										checked={
											selectedCustomers.length === customers.length &&
											customers.length > 0
										}
										onCheckedChange={toggleSelectAll}
										aria-label="Select all"
									/>
								</TableHead>
								<TableHead className="font-medium">
									NAME
									<ChevronDown className="ml-1 h-3 w-3 inline-block opacity-50" />
								</TableHead>
								<TableHead className="font-medium">
									EMAIL
									<ChevronDown className="ml-1 h-3 w-3 inline-block opacity-50" />
								</TableHead>
								<TableHead className="font-medium">
									LOCATION
									<ChevronDown className="ml-1 h-3 w-3 inline-block opacity-50" />
								</TableHead>
								<TableHead className="font-medium">
									STATUS
									<ChevronDown className="ml-1 h-3 w-3 inline-block opacity-50" />
								</TableHead>
								<TableHead className="font-medium">
									SPENT
									<ChevronDown className="ml-1 h-3 w-3 inline-block opacity-50" />
								</TableHead>
								<TableHead className="w-[80px]"></TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{customers.map((customer) => (
								<TableRow
									key={customer.id}
									className="group hover:bg-muted/50 transition-colors"
								>
									<TableCell>
										<Checkbox
											checked={selectedCustomers.includes(customer.id)}
											onCheckedChange={() => toggleSelectCustomer(customer.id)}
											aria-label={`Select ${customer.name}`}
										/>
									</TableCell>
									<TableCell className="font-medium flex items-center gap-2">
										<Avatar className="h-8 w-8 border">
											<AvatarImage src={customer.avatar} alt={customer.name} />
											<AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
										</Avatar>
										{customer.name}
									</TableCell>
									<TableCell className="text-muted-foreground">
										{customer.email}
									</TableCell>
									<TableCell>{customer.location}</TableCell>
									<TableCell>
										<Badge
											variant={
												customer.status === "Active" ? "default" : "destructive"
											}
											className={`
                        ${
													customer.status === "Active"
														? "bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800"
														: "bg-red-100 text-red-800 hover:bg-red-100 hover:text-red-800"
												}
                        dark:${
													customer.status === "Active"
														? "bg-green-900/30 text-green-400 hover:bg-green-900/30 hover:text-green-400"
														: "bg-red-900/30 text-red-400 hover:bg-red-900/30 hover:text-red-400"
												}
                      `}
										>
											{customer.status}
										</Badge>
									</TableCell>
									<TableCell>{customer.spent}</TableCell>
									<TableCell>
										<div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
											<Button variant="ghost" size="icon" className="h-8 w-8">
												<Pencil className="h-4 w-4" />
												<span className="sr-only">Edit</span>
											</Button>
											<Button variant="ghost" size="icon" className="h-8 w-8">
												<Eye className="h-4 w-4" />
												<span className="sr-only">View</span>
											</Button>
										</div>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</div>

			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Button
						variant="outline"
						size="icon"
						disabled={currentPage === 1}
						onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
					>
						<ArrowLeft className="h-4 w-4" />
					</Button>
					<Button
						variant="outline"
						size="sm"
						className={
							currentPage === 1
								? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
								: ""
						}
						onClick={() => setCurrentPage(1)}
					>
						1
					</Button>
					<Button
						variant="outline"
						size="sm"
						className={
							currentPage === 2
								? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
								: ""
						}
						onClick={() => setCurrentPage(2)}
					>
						2
					</Button>
					<Button
						variant="outline"
						size="icon"
						disabled={currentPage === 2}
						onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 2))}
					>
						<ArrowRight className="h-4 w-4" />
					</Button>
				</div>

				<div className="flex items-center gap-2">
					<Select defaultValue="10">
						<SelectTrigger className="w-[110px]">
							<SelectValue placeholder="Per page" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="10">10 / page</SelectItem>
							<SelectItem value="20">20 / page</SelectItem>
							<SelectItem value="50">50 / page</SelectItem>
							<SelectItem value="100">100 / page</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
			<FilterDialog open={isFilterOpen} onOpenChange={setIsFilterOpen} />
			<CreateCustomerDialog
				open={isCreateOpen}
				onOpenChange={setIsCreateOpen}
			/>
		</div>
	);
}
