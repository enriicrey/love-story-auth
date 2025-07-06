
import * as React from "react";
import { useForm, FieldValues, Path, PathValue } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

/**
 * Field configuration for form fields
 */
export interface FormField {
  /** Unique field name */
  name: string;
  /** Field label */
  label: string;
  /** Field type */
  type: 'text' | 'email' | 'tel' | 'number' | 'textarea' | 'select';
  /** Placeholder text */
  placeholder?: string;
  /** Whether field is required */
  required?: boolean;
  /** Options for select fields */
  options?: { value: string; label: string; }[];
  /** Validation rules */
  validation?: {
    pattern?: RegExp;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  };
  /** Grid column span (1-12) */
  colSpan?: number;
}

/**
 * Props for the BaseForm component
 */
export interface BaseFormProps<T extends FieldValues = FieldValues> {
  /** Array of form field configurations */
  fields: FormField[];
  /** Form submission handler */
  onSubmit: (data: T) => void | Promise<void>;
  /** Initial form data */
  initialData?: Partial<T>;
  /** Submit button text */
  submitText?: string;
  /** Cancel button text */
  cancelText?: string;
  /** Cancel handler */
  onCancel?: () => void;
  /** Whether form is in loading state */
  loading?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Reusable form component with validation and loading states
 * 
 * @example
 * ```tsx
 * const fields: FormField[] = [
 *   { name: 'name', label: 'Name', type: 'text', required: true },
 *   { name: 'email', label: 'Email', type: 'email', required: true },
 *   { name: 'phone', label: 'Phone', type: 'tel' }
 * ];
 * 
 * <BaseForm
 *   fields={fields}
 *   onSubmit={(data) => console.log(data)}
 *   submitText="Save"
 * />
 * ```
 */
export function BaseForm<T extends FieldValues = FieldValues>({
  fields,
  onSubmit,
  initialData,
  submitText = "Submit",
  cancelText = "Cancel",
  onCancel,
  loading = false,
  className,
  ...props
}: BaseFormProps<T>) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<T>({
    defaultValues: initialData as any
  });

  const watchedValues = watch();

  const renderField = (field: FormField) => {
    const fieldError = errors[field.name as Path<T>];
    const isRequired = field.required;
    const validation = {
      required: isRequired ? `${field.label} is required` : false,
      ...field.validation,
    };

    const commonProps = {
      id: field.name,
      placeholder: field.placeholder,
      ...register(field.name as Path<T>, validation),
    };

    switch (field.type) {
      case 'textarea':
        return (
          <Textarea
            {...commonProps}
            className={fieldError ? "border-destructive" : ""}
          />
        );

      case 'select':
        return (
          <Select
            value={watchedValues[field.name] || ""}
            onValueChange={(value) => setValue(field.name as Path<T>, value as PathValue<T, Path<T>>)}
          >
            <SelectTrigger className={fieldError ? "border-destructive" : ""}>
              <SelectValue placeholder={field.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      default:
        return (
          <Input
            {...commonProps}
            type={field.type}
            className={fieldError ? "border-destructive" : ""}
          />
        );
    }
  };

  const handleFormSubmit = async (data: T) => {
    try {
      await onSubmit(data);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className={cn("space-y-4", className)}
      {...props}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {fields.map((field) => (
          <div
            key={field.name}
            className={cn(
              "space-y-2",
              field.colSpan ? `md:col-span-${field.colSpan}` : "md:col-span-6"
            )}
          >
            <Label htmlFor={field.name}>
              {field.label}
              {field.required && <span className="text-destructive ml-1">*</span>}
            </Label>
            {renderField(field)}
            {errors[field.name as Path<T>] && (
              <p className="text-sm text-destructive">
                {errors[field.name as Path<T>]?.message as string}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        {onCancel && (
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={isSubmitting || loading}
          >
            {cancelText}
          </Button>
        )}
        <Button
          type="submit"
          loading={isSubmitting || loading}
          disabled={isSubmitting || loading}
        >
          {submitText}
        </Button>
      </div>
    </form>
  );
}

BaseForm.displayName = "BaseForm";
