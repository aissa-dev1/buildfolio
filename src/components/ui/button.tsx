import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: keyof typeof BUTTON_VARIANTS;
}

const BUTTON_VARIANTS = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/80 transition-colors",
  secondary: "bg-secondary text-secondary-foreground",
  destructive:
    "bg-destructive text-destructive-foreground hover:bg-destructive/80 transition-colors",
};

export default function Button({ className, variant, ...rest }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-5 py-2.5 font-medium rounded-[var(--raduis)] shadow-md",
        BUTTON_VARIANTS[variant || "primary"],
        className
      )}
      {...rest}
    />
  );
}
