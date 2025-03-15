"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FilterDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface Channel {
  id: string;
  label: string;
}

const channels: Channel[] = [
  { id: "retail", label: "Retail Stores" },
  { id: "online", label: "Online Retailers" },
  { id: "resellers", label: "Resellers" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "direct", label: "Direct Sales" },
];

export function FilterDialog({ open, onOpenChange }: FilterDialogProps) {
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleReset = () => {
    setSelectedChannels([]);
    setSearchQuery("");
  };

  const handleApply = () => {
    // Handle apply logic here
    console.log("Selected channels:", selectedChannels);
    console.log("Search query:", searchQuery);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>Filter</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => onOpenChange(false)}
            ></Button>
          </div>
        </DialogHeader>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="product">Products</Label>
            <Input
              id="product"
              placeholder="Search by purchased product"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-muted/50"
            />
          </div>
          <div className="space-y-4">
            <Label>Purchase Channel</Label>
            <div className="space-y-3">
              {channels.map((channel) => (
                <div key={channel.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={channel.id}
                    checked={selectedChannels.includes(channel.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedChannels([...selectedChannels, channel.id]);
                      } else {
                        setSelectedChannels(
                          selectedChannels.filter((id) => id !== channel.id)
                        );
                      }
                    }}
                  />
                  <Label
                    htmlFor={channel.id}
                    className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {channel.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <Button type="button" variant="outline" onClick={handleReset}>
            Reset
          </Button>
          <Button type="button" onClick={handleApply}>
            Apply
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
