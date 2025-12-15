import { useEffect, useRef } from "react";
import { Check, Minus } from "lucide-react";
import type { CheckboxProps } from "./Checkbox.types";

export const Checkbox = ({
  size = "md",
  label,
  helperText,
  errorMessage,
  indeterminate = false,
  disabled = false,
  checked,
  defaultChecked,
  className = "",
  inputClassName = "",
  onChange,
  id,
  ...props
}: CheckboxProps) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  // Generate unique ID for accessibility
  const checkboxId =
    id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  const helperTextId = `${checkboxId}-helper`;
  const errorMessageId = `${checkboxId}-error`;

  // Handle indeterminate state (must be set via ref)
  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  // Build size-specific classes for checkbox container
  const checkboxSizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  // Build size-specific classes for icons
  const iconSizeClasses = {
    sm: 12,
    md: 14,
    lg: 16,
  };

  // Build size-specific classes for label text
  const labelSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  // Determine if checkbox has error
  const hasError = !!errorMessage;

  // Determine checked state for rendering icon
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : defaultChecked;

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {/* Checkbox with label */}
      <div className="flex items-start gap-2">
        {/* Custom checkbox wrapper */}
        <div className="relative flex items-center">
          {/* Hidden native checkbox for accessibility */}
          <input
            ref={checkboxRef}
            type="checkbox"
            id={checkboxId}
            disabled={disabled}
            checked={checked}
            defaultChecked={defaultChecked}
            onChange={onChange}
            aria-invalid={hasError}
            aria-describedby={
              errorMessage
                ? errorMessageId
                : helperText
                ? helperTextId
                : undefined
            }
            className={`peer sr-only ${inputClassName}`}
            {...props}
          />

          {/* Custom checkbox visual */}
          <label
            htmlFor={checkboxId}
            className={`
              flex items-center justify-center
              ${checkboxSizeClasses[size]}
              border-2 rounded-md
              cursor-pointer
              transition-all duration-200
              ${
                hasError
                  ? "border-error hover:border-error-dark peer-checked:bg-error peer-checked:border-error hover:peer-checked:bg-error-dark peer-focus:ring-2 peer-focus:ring-error peer-focus:ring-offset-2"
                  : "border-gray-300 hover:border-gray-400 peer-checked:bg-primary-500 peer-checked:border-primary-500 hover:peer-checked:bg-primary-600 peer-focus:ring-2 peer-focus:ring-primary-500 peer-focus:ring-offset-2"
              }
              peer-disabled:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:hover:border-gray-300
            `}
          >
            {/* Checkmark icon - show when checked and not indeterminate */}
            <span className="hidden peer-checked:block">
              {!indeterminate && (
                <Check
                  size={iconSizeClasses[size]}
                  className="text-white"
                  strokeWidth={3}
                />
              )}
            </span>

            {/* Indeterminate icon */}
            {indeterminate && (
              <Minus
                size={iconSizeClasses[size]}
                className="text-white"
                strokeWidth={3}
              />
            )}
          </label>
        </div>

        {/* Label text */}
        {label && (
          <label
            htmlFor={checkboxId}
            className={`cursor-pointer select-none ${labelSizeClasses[size]} ${
              disabled ? "opacity-50 cursor-not-allowed" : "text-gray-700"
            }`}
          >
            {label}
          </label>
        )}
      </div>

      {/* Error message */}
      {errorMessage && (
        <span
          id={errorMessageId}
          role="alert"
          className="text-sm text-error ml-6"
        >
          {errorMessage}
        </span>
      )}

      {/* Helper text (only show if no error) */}
      {!errorMessage && helperText && (
        <span id={helperTextId} className="text-sm text-gray-600 ml-6">
          {helperText}
        </span>
      )}
    </div>
  );
};
