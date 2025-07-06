import * as React from "react"
import {
  Check,
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  PlusCircle,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"

type SelectProps = React.ComponentPropsWithoutRef<typeof Button>

interface SelectItemProps
  extends React.ComponentPropsWithoutRef<typeof CommandItem> {
  value: string
}

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentPropsWithoutRef<typeof PopoverTrigger>
>(({ className, children, ...props }, ref) => (
  <PopoverTrigger asChild>
    <Button
      variant="outline"
      role="combobox"
      aria-expanded="false"
      className={cn(
        "flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
      ref={ref}
    >
      {children}
      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
    </Button>
  </PopoverTrigger>
))
SelectTrigger.displayName = "SelectTrigger"

const SelectContent = React.forwardRef<
  React.ElementRef<typeof PopoverContent>,
  React.ComponentPropsWithoutRef<typeof PopoverContent>
>(({ className, children, ...props }, ref) => (
  <PopoverContent
    className={cn(
      "w-[200px] p-0 text-sm text-popover-foreground shadow-md outline-none",
      className
    )}
    {...props}
    ref={ref}
  >
    <ScrollArea className="h-[200px] w-full rounded-md border">
      <Command>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>{children}</CommandGroup>
      </Command>
    </ScrollArea>
  </PopoverContent>
))
SelectContent.displayName = "SelectContent"

const SelectItem = React.forwardRef<
  React.ElementRef<typeof CommandItem>,
  SelectItemProps
>(({ className, children, value, ...props }, ref) => (
  <CommandItem
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
    ref={ref}
  >
    {children}
    <Check className="ml-auto h-4 w-4" />
  </CommandItem>
))
SelectItem.displayName = "SelectItem"

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof CommandItem>,
  React.ComponentPropsWithoutRef<typeof CommandItem>
>(({ className, children, ...props }, ref) => (
  <CommandItem
    className={cn("px-3 py-1.5 text-sm font-semibold", className)}
    {...props}
    ref={ref}
  >
    {children}
  </CommandItem>
))
SelectLabel.displayName = "SelectLabel"

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof CommandItem>,
  React.ComponentPropsWithoutRef<typeof CommandItem>
>(({ className, ...props }, ref) => (
  <CommandItem className={cn("-mx-1 my-1 h-px bg-border", className)} ref={ref} {...props} />
))
SelectSeparator.displayName = "SelectSeparator"

const SelectValue = React.forwardRef<
  React.ElementRef<typeof CommandItem>,
  React.ComponentPropsWithoutRef<typeof CommandItem>
>(({ className, children, ...props }, ref) => (
  <CommandItem
    className={cn("flex items-center text-sm", className)}
    {...props}
    ref={ref}
  >
    {children}
  </CommandItem>
))
SelectValue.displayName = "SelectValue"

const SelectGroup = React.forwardRef<
  React.ElementRef<typeof CommandItem>,
  React.ComponentPropsWithoutRef<typeof CommandItem>
>(({ className, children, ...props }, ref) => (
  <CommandGroup className={cn("p-1", className)} {...props} ref={ref}>
    {children}
  </CommandGroup>
))
SelectGroup.displayName = "SelectGroup"

const SelectInput = React.forwardRef<
  React.ElementRef<HTMLInputElement>,
  React.ComponentPropsWithoutRef<typeof CommandInput>
>(({ className, ...props }, ref) => (
  <CommandInput
    className={cn(
      "h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
    ref={ref}
  />
))
SelectInput.displayName = "SelectInput"

export {
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectValue,
  SelectGroup,
  SelectInput,
}
