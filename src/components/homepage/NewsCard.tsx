import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

interface NewsCardProps {
    title: string
    date: string
    excerpt: string
    image: string
}

export default function NewsCard({ title, date, excerpt, image }: NewsCardProps) {
    return (
        <Card className="overflow-hidden group pt-0">
            <div className="relative">
                <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    width={400}
                    height={200}
                    className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <CardContent className="p-4">
                <div className="flex items-center text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">{date}</span>
                </div>

                <h3 className="font-bold text-lg mb-3 group-hover:text-orange transition-colors line-clamp-2 min-h-[3.5rem]">{title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2 min-h-[2.5rem]">{excerpt}</p>

                <Button variant="link" className="p-0 ">
                    Read More
                </Button>
            </CardContent>
        </Card>
    )
}

