import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  variant?: keyof typeof INPUT_VARIANTS;
}

const INPUT_VARIANTS = {
  primary:
    "bg-card text-card-foreground ring-primary transition-colors focus:ring-2",
};

export default function Input({ className, variant, ...rest }: InputProps) {
  return (
    <input
      className={cn(
        "outline-none w-full px-5 py-2.5 font-medium rounded-[var(--radius)] shadow-md placeholder:text-gray-foreground",
        INPUT_VARIANTS[variant || "primary"],
        className
      )}
      {...rest}
    />
  );
}
