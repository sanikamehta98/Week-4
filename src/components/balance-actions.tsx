"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

/**
 * DESIGNER NOTE: Total-balance action row (Send, Add money, Request).
 * Must be a Client Component so DropdownMenuTrigger can merge props onto Button.
 */
export function BalanceActions() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
        Send
      </Button>
      <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
        Add money
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm" variant="outline" className="gap-1">
            Request
            <ChevronDown className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem>Request from bank account</DropdownMenuItem>
          <DropdownMenuItem>Request from card</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
