"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ShoppingCart, Store, ExternalLink } from "lucide-react";

export function ChannelRevenueChart() {
	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-base font-normal">Channel revenue</CardTitle>
				<Select defaultValue="monthly">
					<SelectTrigger className="w-[120px] h-8 text-xs">
						<SelectValue placeholder="Monthly" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="daily">Daily</SelectItem>
						<SelectItem value="weekly">Weekly</SelectItem>
						<SelectItem value="monthly">Monthly</SelectItem>
						<SelectItem value="yearly">Yearly</SelectItem>
					</SelectContent>
				</Select>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="flex flex-col space-y-1">
					<div className="flex items-center justify-between">
						<span className="text-2xl font-bold">3.4%</span>
						<span className="text-xs text-muted-foreground">Growth Rate</span>
					</div>
					<div className="h-2 w-full rounded-full bg-muted overflow-hidden">
						<div className="flex h-full">
							<div className="h-full w-[28%] bg-blue-400" />
							<div className="h-full w-[32%] bg-green-400" />
							<div className="h-full w-[40%] bg-amber-400" />
						</div>
					</div>
					<div className="flex justify-between text-xs text-muted-foreground">
						<span>28%</span>
						<span>32%</span>
						<span>40%</span>
					</div>
				</div>

				<div className="grid grid-cols-3 gap-4">
					<div className="flex flex-col items-center space-y-2">
						<div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
							<ShoppingCart className="h-6 w-6 text-blue-600 dark:text-blue-300" />
						</div>
						<span className="text-lg font-bold">$2.9K</span>
						<span className="text-xs text-muted-foreground text-center">
							Online Store
						</span>
					</div>
					<div className="flex flex-col items-center space-y-2">
						<div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
							<Store className="h-6 w-6 text-green-600 dark:text-green-300" />
						</div>
						<span className="text-lg font-bold">$2.6K</span>
						<span className="text-xs text-muted-foreground text-center">
							Physical Store
						</span>
					</div>
					<div className="flex flex-col items-center space-y-2">
						<div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900">
							<ExternalLink className="h-6 w-6 text-amber-600 dark:text-amber-300" />
						</div>
						<span className="text-lg font-bold">$2.1K</span>
						<span className="text-xs text-muted-foreground text-center">
							Social Media
						</span>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
