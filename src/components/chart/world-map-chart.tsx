"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WorldMap from "react-svg-worldmap";

const countries = [
	{
		name: "United States",
		percentage: 38.61,
		flag: "🇺🇸",
		code: "US",
	},
	{
		name: "Brazil",
		percentage: 32.79,
		flag: "🇧🇷",
		code: "BR",
	},
	{
		name: "India",
		percentage: 26.42,
		flag: "🇮🇳",
		code: "IN",
	},
	{
		name: "United Kingdom",
		percentage: 17.42,
		flag: "🇬🇧",
		code: "GB",
	},
	{
		name: "Turkey",
		percentage: 12.85,
		flag: "🇹🇷",
		code: "TR",
	},
];

export function WorldMapChart() {
	const data = [
		{ country: "cn", value: 1389618778 }, // china
		{ country: "in", value: 1311559204 }, // india
		{ country: "us", value: 331883986 }, // united states
		{ country: "id", value: 264935824 }, // indonesia
		{ country: "pk", value: 210797836 }, // pakistan
		{ country: "br", value: 210301591 }, // brazil
		{ country: "ng", value: 208679114 }, // nigeria
		{ country: "bd", value: 161062905 }, // bangladesh
		{ country: "ru", value: 141944641 }, // russia
		{ country: "mx", value: 127318112 }, // mexico
	];

	return (
		<Card>
			<CardHeader>
				<CardTitle>Top countries</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid gap-8 md:grid-cols-2">
					{/* World Map */}
					<WorldMap
						color="red"
						title="Top 10 Populous Countries"
						value-suffix="people"
						size="lg"
						data={data}
					/>

					{/* Country List */}
					<div className="space-y-6">
						{countries.map((country) => (
							<div key={country.code} className="flex items-center gap-4">
								<div className="flex min-w-[180px] items-center gap-2">
									<span className="text-xl">{country.flag}</span>
									<span className="font-medium">{country.name}</span>
								</div>
								<div className="flex flex-1 items-center gap-4">
									<div className="h-2 flex-1 rounded-full bg-muted/30">
										<div
											className="h-full rounded-full bg-blue-500"
											style={{ width: `${country.percentage}%` }}
										/>
									</div>
									<span className="min-w-[64px] text-sm text-muted-foreground">
										{country.percentage.toFixed(2)}%
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
