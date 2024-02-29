import * as React from "react";
import cn from "classnames";
import s from "./text.module.css";

type TextComponent = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
type TextVariant =
  | "title"
  | "subtitle"
  | "body1"
  | "body2"
  | "overline"
  | "finePrint";

type TComponent<T extends HTMLParagraphElement = HTMLParagraphElement> = T;

export type TextProps = React.PropsWithChildren<{
  as?: TextComponent;
  variant?: TextVariant;
  className?: string;
}> &
  React.HTMLProps<TComponent>;

export const Text = React.forwardRef<TComponent, TextProps>(
  ({ children, className, as, variant = "body1", ...props }, ref) => {
    const Comp = variant === "title" && !as ? "h1" : as ?? "p";
    const textClasses = cn(
      s.text,
      [s[variant]],
      "text",
      variant && `text--${variant}`,
      className,
    );

    return (
      <Comp {...props} className={textClasses} ref={ref}>
        {children}
      </Comp>
    );
  },
);

Text.displayName = "Text";
