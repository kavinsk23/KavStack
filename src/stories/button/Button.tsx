import type { ButtonProps } from "./Button.types";

export const Button = ({
  variant = "primary",
  size = "md",
  rounded = false,
  disabled = false,
  iconOnly = false,
  children,
  className = "",
  onClick,
  ...props
}: ButtonProps) => {
  // Build variant-specific classes using KavStack color palette
  const variantClasses = {
    primary:
      "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white border-transparent focus:ring-primary-500",
    secondary:
      "bg-secondary-500 hover:bg-secondary-600 active:bg-secondary-700 text-white border-transparent focus:ring-secondary-500",
    ghost:
      "bg-transparent hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:ring-gray-400",
    danger:
      "bg-error hover:bg-error-dark active:bg-error-dark text-white border-transparent focus:ring-error",
    outline:
      "bg-transparent border-primary-500 text-primary-500 hover:bg-primary-100 active:bg-primary-100 focus:ring-primary-500",
  };

  // Build size-specific classes
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  const iconSizeClasses = {
    sm: "w-8 h-8 p-2 text-sm",
    md: "w-10 h-10 p-2 text-base",
    lg: "w-12 h-12 p-3 text-lg",
  };

  // Determine border radius
  const radiusClass = rounded ? "rounded-full" : "rounded-lg";

  // Base classes that apply to all buttons
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-medium border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${radiusClass} ${variantClasses[variant]} ${
        iconOnly ? iconSizeClasses[size] : sizeClasses[size]
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
