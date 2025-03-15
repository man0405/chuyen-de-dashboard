"use client";

import { MainNav } from "./main-nav";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Package, Search, Bell, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function Header() {
	const { setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Set mounted to true when component is mounted on client
	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<header className="sticky top-0 z-50 px-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className=" flex h-14">
				<div className="mr-4 hidden md:flex">
					<a className="mr-6 flex items-center space-x-2" href="/">
						<Package className="h-6 w-6" />
						<span className="hidden font-bold sm:inline-block">Ecme</span>
					</a>
					<MainNav />
				</div>
				<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
					<div className="w-full flex-1 md:w-auto md:flex-none">
						<div className="relative">
							<Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
							<Input placeholder="Search..." className="pl-8 md:w-[300px]" />
						</div>
					</div>
					<div className="flex items-center gap-2">
						<Button
							variant="ghost"
							size="icon"
							className="relative"
							aria-label="Notifications"
						>
							<Bell className="h-4 w-4" />
							<span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-600" />
						</Button>
						{mounted && (
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="ghost" size="icon" aria-label="Toggle theme">
										<Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
										<Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
										<span className="sr-only">Toggle theme</span>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end">
									<DropdownMenuItem onClick={() => setTheme("light")}>
										Light
									</DropdownMenuItem>
									<DropdownMenuItem onClick={() => setTheme("dark")}>
										Dark
									</DropdownMenuItem>
									<DropdownMenuItem onClick={() => setTheme("system")}>
										System
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						)}
						<Button
							variant="ghost"
							size="icon"
							className="relative"
							aria-label="Select language"
						>
							<span className="text-sm">🇺🇸</span>
						</Button>
						<Button
							variant="ghost"
							size="icon"
							className="relative"
							aria-label="User menu"
						>
							<img
								src="/placeholder.svg?height=32&width=32"
								alt="User"
								className="h-8 w-8 rounded-full"
							/>
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
}
