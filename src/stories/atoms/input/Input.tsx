import type { InputProps } from "./Input.types";

export const Input = ({
  variant = "default",
  size = "md",
  label,
  helperText,
  errorMessage,
  leftIcon,
  rightIcon,
  disabled = false,
  readOnly = false,
  required = false,
  className = "",
  inputClassName = "",
  id,
  ...props
}: InputProps) => {
  // Generate unique ID for accessibility
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const helperTextId = `${inputId}-helper`;
  const errorMessageId = `${inputId}-error`;

  // Build variant-specific classes with hover states
  const variantClasses = {
    default:
      "border-gray-300 hover:border-gray-400 focus:border-primary-500 focus:ring-primary-500",
    error:
      "border-error hover:border-error-dark focus:border-error focus:ring-error",
    success:
      "border-success hover:border-success-dark focus:border-success focus:ring-success",
  };

  // Build size-specific classes
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  // Build input padding based on size and icons
  const inputPaddingClasses = {
    sm: leftIcon
      ? "pl-9 pr-3 py-1.5"
      : rightIcon
      ? "pl-3 pr-9 py-1.5"
      : "px-3 py-1.5",
    md: leftIcon
      ? "pl-10 pr-4 py-2"
      : rightIcon
      ? "pl-4 pr-10 py-2"
      : "px-4 py-2",
    lg: leftIcon
      ? "pl-12 pr-4 py-3"
      : rightIcon
      ? "pl-4 pr-12 py-3"
      : "px-4 py-3",
  };

  // Adjust padding for both icons
  const bothIconsPaddingClasses = {
    sm: "pl-9 pr-9 py-1.5",
    md: "pl-10 pr-10 py-2",
    lg: "pl-12 pr-12 py-3",
  };

  // Icon position classes
  const iconPositionClasses = {
    sm: { left: "left-3", right: "right-3" },
    md: { left: "left-3", right: "right-3" },
    lg: { left: "left-4", right: "right-4" },
  };

  // Determine which padding to use
  const paddingClass =
    leftIcon && rightIcon
      ? bothIconsPaddingClasses[size]
      : inputPaddingClasses[size];

  // Base input classes
  const baseInputClasses =
    "w-full border rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100 read-only:bg-gray-100 read-only:cursor-default";

  // Determine if input has error
  const hasError = variant === "error" || !!errorMessage;

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {/* Label */}
      {label && (
        <label
          htmlFor={inputId}
          className={`text-sm font-medium text-gray-700 ${
            disabled ? "opacity-50" : ""
          }`}
        >
          {label}
          {required && (
            <span className="text-error ml-1" aria-label="required">
              *
            </span>
          )}
        </label>
      )}

      {/* Input wrapper */}
      <div className="relative">
        {/* Left icon */}
        {leftIcon && (
          <div
            className={`absolute ${iconPositionClasses[size].left} top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none`}
            aria-hidden="true"
          >
            {leftIcon}
          </div>
        )}

        {/* Input element */}
        <input
          id={inputId}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          aria-invalid={hasError}
          aria-describedby={
            errorMessage
              ? errorMessageId
              : helperText
              ? helperTextId
              : undefined
          }
          className={`${baseInputClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${paddingClass} ${inputClassName}`}
          {...props}
        />

        {/* Right icon */}
        {rightIcon && (
          <div
            className={`absolute ${iconPositionClasses[size].right} top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none`}
            aria-hidden="true"
          >
            {rightIcon}
          </div>
        )}
      </div>

      {/* Error message */}
      {errorMessage && (
        <span id={errorMessageId} role="alert" className="text-sm text-error">
          {errorMessage}
        </span>
      )}

      {/* Helper text (only show if no error) */}
      {!errorMessage && helperText && (
        <span
          id={helperTextId}
          className={`text-sm ${
            variant === "success" ? "text-success-dark" : "text-gray-600"
          }`}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};
