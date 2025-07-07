
import * as React from "react";
import { Toast } from "@/components/ui/toast";

export type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

/**
 * Toast component for displaying toast notifications.
 * This is a re-export of the Toast component from the UI library.
 */
export const ToastComponent = React.forwardRef<
  React.ElementRef<typeof Toast>,
  ToastProps
>((props, ref) => {
  return <Toast ref={ref} {...props} />;
});

ToastComponent.displayName = "Toast";
