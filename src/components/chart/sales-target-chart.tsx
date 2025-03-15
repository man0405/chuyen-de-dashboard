"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export function SalesTargetChart() {
	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-base font-normal">Sales target</CardTitle>
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
			<CardContent className="flex flex-col items-center justify-center space-y-2">
				<div className="relative h-40 w-40">
					{/* Circular progress indicator */}
					<svg className="h-full w-full" viewBox="0 0 100 100">
						{/* Background circle */}
						<circle
							className="stroke-muted"
							cx="50"
							cy="50"
							r="40"
							strokeWidth="10"
							fill="none"
						/>
						{/* Progress circle - 75% complete */}
						<circle
							className="stroke-primary"
							cx="50"
							cy="50"
							r="40"
							strokeWidth="10"
							fill="none"
							strokeLinecap="round"
							strokeDasharray="251.2"
							strokeDashoffset="62.8" // 25% of 251.2
							transform="rotate(-90 50 50)"
						/>
					</svg>
					<div className="absolute inset-0 flex flex-col items-center justify-center">
						<span className="text-3xl font-bold">1.3K</span>
						<span className="text-sm text-muted-foreground">/1.8K units</span>
					</div>
				</div>
				<div className="text-sm text-muted-foreground">
					Made this month year
				</div>
				<div className="text-center text-sm font-medium">
					<span className="text-primary">75%</span> of target
				</div>
			</CardContent>
		</Card>
	);
}
