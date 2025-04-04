"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Eye, ShoppingCart, DollarSign, Package } from "lucide-react";
import { OverviewChart } from "@/components/chart/chart-container";
import { SalesTargetChart } from "@/components/chart/sales-target-chart";
import { WorldMapChart } from "@/components/chart/world-map-chart";
import { ChannelRevenueChart } from "@/components/chart/channel-revenue-chart";
import { Header } from "@/components/layout/header";

export default function Dashboard() {
	return (
		<div className="flex min-h-screen flex-col">
			{/* <header className="sticky px-5 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container flex h-14 items-center">
					<div className="mr-4 hidden md:flex">
						<a className="mr-6 flex items-center space-x-2" href="#">
							<Package className="h-6 w-6" />
							<span className="hidden font-bold sm:inline-block">Ecme</span>
						</a>
					</div>
				</div>
			</header> */}
			<div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
				<div className="flex items-center justify-between space-y-2">
					<h2 className="text-3xl font-bold tracking-tight">Overview</h2>
					<div className="flex items-center space-x-2">
						<Select defaultValue="monthly">
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Select period" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="daily">Daily</SelectItem>
								<SelectItem value="weekly">Weekly</SelectItem>
								<SelectItem value="monthly">Monthly</SelectItem>
								<SelectItem value="yearly">Yearly</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>

				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								Total Profit
							</CardTitle>
							<DollarSign className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">$82,373.21</div>
							<p className="text-xs text-green-500">+2.4% from last month</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								Total Orders
							</CardTitle>
							<ShoppingCart className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">7,234</div>
							<p className="text-xs text-red-500">-2.5% from last month</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">Impressions</CardTitle>
							<Eye className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">3.1M</div>
							<p className="text-xs text-green-500">+4.6% from last month</p>
						</CardContent>
					</Card>
				</div>

				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
					<div className="col-span-4">
						<OverviewChart />
					</div>
					<div className="col-span-3 grid gap-4 grid-rows-2">
						<SalesTargetChart />
						<Card>
							<CardHeader>
								<CardTitle>Top Products</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									{[
										{
											name: "Maneki Neko Poster",
											sold: "1,249",
											growth: "+15.2%",
										},
										{
											name: "Echoes Necklace",
											sold: "1,145",
											growth: "+13.9%",
										},
										{ name: "Spiky Ring", sold: "1,073", growth: "+9.5%" },
										{
											name: "Pastel Petals Poster",
											sold: "1,022",
											growth: "+2.3%",
										},
										{ name: "Il Limone", sold: "892", growth: "-0.7%" },
									].map((product) => (
										<div
											key={product.name}
											className="flex items-center justify-between"
										>
											<div className="space-y-1">
												<p className="text-sm font-medium leading-none">
													{product.name}
												</p>
												<p className="text-sm text-muted-foreground">
													Sold: {product.sold}
												</p>
											</div>
											<div
												className={`text-sm ${
													product.growth.startsWith("+")
														? "text-green-500"
														: "text-red-500"
												}`}
											>
												{product.growth}
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</div>
				</div>

				<WorldMapChart />

				<ChannelRevenueChart />

				<Card>
					<CardHeader>
						<CardTitle>Recent Orders</CardTitle>
					</CardHeader>
					<CardContent>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Order</TableHead>
									<TableHead>Status</TableHead>
									<TableHead>Date</TableHead>
									<TableHead>Customer</TableHead>
									<TableHead className="text-right">Amount</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{[
									{
										id: "#92627",
										status: "Paid",
										date: "09/07/2022",
										customer: "Tara Fletcher",
										amount: "$279.00",
									},
									{
										id: "#92509",
										status: "Pending",
										date: "26/06/2022",
										customer: "Joyce Freeman",
										amount: "$831.00",
									},
									{
										id: "#91931",
										status: "Paid",
										date: "18/06/2022",
										customer: "Brittany Hale",
										amount: "$142.00",
									},
									{
										id: "#90983",
										status: "Paid",
										date: "11/06/2022",
										customer: "Luke Cook",
										amount: "$232.00",
									},
									{
										id: "#89332",
										status: "Pending",
										date: "02/06/2022",
										customer: "Eileen Horton",
										amount: "$597.00",
									},
								].map((order) => (
									<TableRow key={order.id}>
										<TableCell>{order.id}</TableCell>
										<TableCell>
											<span
												className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
													order.status === "Paid"
														? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
														: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
												}`}
											>
												{order.status}
											</span>
										</TableCell>
										<TableCell>{order.date}</TableCell>
										<TableCell>{order.customer}</TableCell>
										<TableCell className="text-right">{order.amount}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
