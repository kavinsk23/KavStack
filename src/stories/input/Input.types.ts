/**
 * Props for the Input component
 */
export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /**
   * The visual style variant of the input
   * @default 'default'
   */
  variant?: "default" | "error" | "success";

  /**
   * Size of the input
   * @default 'md'
   */
  size?: "sm" | "md" | "lg";

  /**
   * Label text for the input
   */
  label?: string;

  /**
   * Helper text displayed below the input
   */
  helperText?: string;

  /**
   * Error message displayed below the input (overrides helperText)
   */
  errorMessage?: string;

  /**
   * Icon to display on the left side of the input
   */
  leftIcon?: React.ReactNode;

  /**
   * Icon to display on the right side of the input
   */
  rightIcon?: React.ReactNode;

  /**
   * Whether the input is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the input is read-only
   * @default false
   */
  readOnly?: boolean;

  /**
   * Whether the input is required
   * @default false
   */
  required?: boolean;

  /**
   * Additional CSS classes for the input wrapper
   */
  className?: string;

  /**
   * Additional CSS classes for the input element itself
   */
  inputClassName?: string;
}
