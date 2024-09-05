import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import "../../app/globals.css";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md bg-white text-black transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 hover:bg-gray-100 active:bg-gray-200",
  {
    variants: {
      variant: {
        primary: "bg-blue-400 text-white",
        secondary: "bg-red-800 text-white",
        distructive: "bg-yellow-600 text-white",
      },
      size: {
        default: "h-9 px-4 py-2",
        small: "h-8 rounded-md px-3 text-xs",
        large: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
      border: { 
        solid: 'border-solid border-2',
        dashed: 'border-dashed border-2',
        dotted: 'border-dotted border-2'
      },
      hover: {
        primary: 'hover:bg-blue-200 hover:text-blue-400 active:bg-blue-200',
        secondary: 'hover:bg-red-200 hover:text-red-400 active:bg-red-200',
        distructive: 'hover:bg-yellow-200 hover:text-yellow-400 active:bg-yellow-200'
      }

    },
    defaultVariants: {
      size: "default",
      border: "solid"
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, border, hover, asChild = false, children = "Click me", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, border, hover, className }))}
        ref={ref}
        {...props}
        >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button"

export { Button, buttonVariants }
