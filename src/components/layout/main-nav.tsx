"use client";

import * as React from "react";
import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const components: { title: string; href: string; description: string }[] = [
	{
		title: "Chat",
		href: "/ai/chat",
		description: "AI-powered chat systems",
	},
	{
		title: "Image",
		href: "/ai/image",
		description: "AI image processing",
	},
];

const projects: { title: string; href: string; description: string }[] = [
	{
		title: "Scrum Board",
		href: "/projects/scrum",
		description: "Manage your Scrum workflow",
	},
	{
		title: "List",
		href: "/projects/list",
		description: "Organize all projects",
	},
	{
		title: "Tasks",
		href: "/projects/tasks",
		description: "Manage project tasks",
	},
];

const customer: { title: string; href: string; description: string }[] = [
	{
		title: "List",
		href: "/customer/list",
		description: "List of all customers",
	},
	{
		title: "Create",
		href: "/customer/create",
		description: "Add a new customer",
	},
	{
		title: "Edit",
		href: "/customer/edit",
		description: "Edit customer info",
	},
];

export function MainNav() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<a
										className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
										href="/"
									>
										<div className="mb-2 mt-4 text-lg font-medium">
											Dashboard
										</div>
										<p className="text-sm leading-tight text-muted-foreground">
											Overview of your business metrics and analytics
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<ListItem href="/analytics" title="Analytics">
								Detailed metrics and reports
							</ListItem>
							<ListItem href="/reports" title="Reports">
								Generate custom reports
							</ListItem>
							<ListItem href="/settings" title="Settings">
								Configure dashboard preferences
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>AI</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
							{components.map((component) => (
								<ListItem
									key={component.title}
									title={component.title}
									href={component.href}
								>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Projects</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
							{projects.map((project) => (
								<ListItem
									key={project.title}
									title={project.title}
									href={project.href}
								>
									{project.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Customer</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
							{customer.map((item) => (
								<ListItem key={item.title} title={item.title} href={item.href}>
									{item.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/docs" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Guide
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
