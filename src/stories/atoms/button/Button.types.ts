/**
 * Props for the Button component
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual style variant of the button
   * @default 'primary'
   */
  variant?: "primary" | "secondary" | "ghost" | "danger" | "outline";

  /**
   * Size of the button
   * @default 'md'
   */
  size?: "sm" | "md" | "lg";

  /**
   * Whether the button is fully rounded (pill shape)
   * @default false
   */
  rounded?: boolean;

  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Content to be rendered inside the button
   */
  children: React.ReactNode;
  /**
   * Whether this is an icon-only button (square shape)
   * @default false
   */
  iconOnly?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
