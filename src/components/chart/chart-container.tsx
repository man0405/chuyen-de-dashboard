"use client";

import {
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

// Sample data based on the image
const data = [
	{ date: "01 Jun", value: 200 },
	{ date: "02 Jun", value: 320 },
	{ date: "03 Jun", value: 280 },
	{ date: "04 Jun", value: 350 },
	{ date: "05 Jun", value: 420 },
	{ date: "06 Jun", value: 390 },
	{ date: "07 Jun", value: 450 },
	{ date: "08 Jun", value: 550 },
	{ date: "09 Jun", value: 480 },
	{ date: "10 Jun", value: 520 },
	{ date: "11 Jun", value: 380 },
	{ date: "12 Jun", value: 600 },
];

export function OverviewChart() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Overview</CardTitle>
			</CardHeader>
			<CardContent className="">
				<ChartContainer
					config={{
						value: {
							label: "Revenue",
							color: "hsl(var(--primary))",
						},
					}}
				>
					<ResponsiveContainer width="100%" height="100%">
						<LineChart
							data={data}
							margin={{
								top: 5,
								right: 10,
								left: 10,
								bottom: 20,
							}}
						>
							<XAxis
								dataKey="date"
								tickLine={false}
								axisLine={false}
								tickMargin={10}
								stroke="#888888"
								fontSize={12}
							/>
							<YAxis
								tickLine={false}
								axisLine={false}
								tickMargin={10}
								stroke="#888888"
								fontSize={12}
								tickFormatter={(value) => `${value}`}
							/>
							<Tooltip content={<ChartTooltipContent />} />
							<Line
								type="natural"
								dataKey="value"
								strokeWidth={2}
								activeDot={{ r: 6, strokeWidth: 0 }}
								dot={false}
								stroke="#3B82F6"
							/>
						</LineChart>
					</ResponsiveContainer>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
