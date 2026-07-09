import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-full",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-lg",
        outline: "border border-border bg-transparent text-foreground hover:bg-secondary hover:border-primary/50 rounded-full",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full",
        ghost: "hover:bg-secondary hover:text-foreground rounded-lg",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-primary text-primary-foreground hover:bg-primary/80 shadow-glow hover:shadow-[0_0_100px_hsl(210_100%_65%/0.4)] font-semibold uppercase tracking-widest rounded-full",
        heroOutline: "border border-border/50 bg-transparent text-foreground hover:border-brand hover:text-brand font-medium uppercase tracking-widest rounded-full",
        brand: "bg-brand text-brand-foreground hover:bg-brand/90 shadow-brand-glow hover:shadow-[0_0_100px_hsl(202_29%_39%/0.4)] font-semibold uppercase tracking-widest rounded-full",
        brandOutline: "border border-brand/50 bg-transparent text-brand hover:border-brand hover:bg-brand/5 font-medium uppercase tracking-widest rounded-full",
        metallic: "bg-gradient-to-r from-silver/20 to-silver/10 text-foreground border border-silver/30 hover:border-silver/50 font-medium rounded-full backdrop-blur-sm",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-8",
        xl: "h-14 px-12 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
