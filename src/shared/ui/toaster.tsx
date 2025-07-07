
import * as React from "react";
import { Toaster as RadixToaster } from "@/components/ui/toaster";

/**
 * Toaster component for displaying toast notifications.
 * This is a re-export of the Toaster component from the UI library.
 */
export const Toaster = React.forwardRef<
  React.ElementRef<typeof RadixToaster>,
  React.ComponentPropsWithoutRef<typeof RadixToaster>
>((props, ref) => {
  return <RadixToaster {...props} />;
});

Toaster.displayName = "Toaster";
