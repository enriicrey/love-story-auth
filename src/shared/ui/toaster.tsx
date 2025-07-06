import * as React from "react";
import { Toaster as RadixToaster, ToasterProps as RadixToasterProps } from "@/components/ui/toaster";

export type ToasterProps = RadixToasterProps;

/**
 * Toaster component for displaying toast notifications.
 * This is a re-export of the Toaster component from the UI library.
 */
export const Toaster = React.forwardRef<HTMLDivElement, ToasterProps>((props, ref) => {
  return <RadixToaster ref={ref} {...props} />;
});

Toaster.displayName = "Toaster";
