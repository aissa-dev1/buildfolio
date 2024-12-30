import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

export function H1({ className, ...rest }: ComponentProps<"h1">) {
  return <h1 className={cn("text-5xl font-bold", className)} {...rest} />;
}

export function H2({ className, ...rest }: ComponentProps<"h2">) {
  return <h2 className={cn("text-4xl font-bold", className)} {...rest} />;
}

export function H3({ className, ...rest }: ComponentProps<"h3">) {
  return <h3 className={cn("text-2xl font-bold", className)} {...rest} />;
}

interface PProps extends ComponentProps<"p"> {
  size?: keyof typeof P_SIZES;
}

const P_SIZES = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
};

export function P({ className, size, ...rest }: PProps) {
  return <p className={cn(P_SIZES[size || "lg"], className)} {...rest} />;
}
