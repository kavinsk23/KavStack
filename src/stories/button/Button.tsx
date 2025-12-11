import type { ButtonProps } from "./Button.types";

/**
 * A customizable button component with multiple variants and sizes.
 * Uses semantic HTML and follows accessibility best practices.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Click me
 * </Button>
 * ```
 */
export const Button = ({
  variant = "primary",
  size = "md",
  disabled = false,
  children,
  className = "",
  onClick,
  ...props
}: ButtonProps) => {
  // Build variant-specific classes using KavStack color palette
  const variantClasses = {
    primary:
      "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white border-transparent",
    secondary:
      "bg-secondary-500 hover:bg-secondary-600 active:bg-secondary-700 text-white border-transparent",
    ghost:
      "bg-transparent hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300",
    danger:
      "bg-error hover:bg-error-dark active:bg-error-dark text-white border-transparent",
  };

  // Build size-specific classes
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Base classes that apply to all buttons
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-medium border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
