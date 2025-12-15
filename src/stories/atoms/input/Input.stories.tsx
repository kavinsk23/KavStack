import type { Meta, StoryObj } from "@storybook/react";
import {
  Search,
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { Input } from "./Input";
import { useState } from "react";

const meta = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "error", "success"],
      description: "The visual style variant of the input",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "The size of the input",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
      table: {
        defaultValue: { summary: false },
      },
    },
    readOnly: {
      control: "boolean",
      description: "Whether the input is read-only",
      table: {
        defaultValue: { summary: false },
      },
    },
    required: {
      control: "boolean",
      description: "Whether the input is required",
      table: {
        defaultValue: { summary: false },
      },
    },
    label: {
      control: "text",
      description: "Label text for the input",
    },
    helperText: {
      control: "text",
      description: "Helper text displayed below the input",
    },
    errorMessage: {
      control: "text",
      description: "Error message displayed below the input",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================================================
// BASIC VARIANTS
// ============================================================================

/**
 * Default input is the standard style for text entry.
 */
export const Default: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
  },
};

/**
 * Error variant shows validation errors.
 */
export const Error: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    variant: "error",
    errorMessage: "Username is required",
  },
};

/**
 * Success variant shows successful validation.
 */
export const Success: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    variant: "success",
    value: "john@example.com",
    helperText: "Email is valid",
  },
};

/**
 * All variants side by side for comparison.
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <Input
        label="Default"
        placeholder="Default input"
        helperText="This is a helper text"
      />
      <Input
        label="Error"
        placeholder="Error input"
        variant="error"
        errorMessage="This field is required"
      />
      <Input
        label="Success"
        placeholder="Success input"
        variant="success"
        value="Valid input"
        helperText="Input is valid"
      />
    </div>
  ),
};

// ============================================================================
// SIZES
// ============================================================================

/**
 * Small size input for compact interfaces.
 */
export const Small: Story = {
  args: {
    size: "sm",
    label: "Small Input",
    placeholder: "Small size",
  },
};

/**
 * Medium size input - the default size.
 */
export const Medium: Story = {
  args: {
    size: "md",
    label: "Medium Input",
    placeholder: "Medium size",
  },
};

/**
 * Large size input for emphasis.
 */
export const Large: Story = {
  args: {
    size: "lg",
    label: "Large Input",
    placeholder: "Large size",
  },
};

/**
 * All sizes side by side for comparison.
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <Input size="sm" label="Small" placeholder="Small input" />
      <Input size="md" label="Medium" placeholder="Medium input" />
      <Input size="lg" label="Large" placeholder="Large input" />
    </div>
  ),
};

// ============================================================================
// WITH ICONS
// ============================================================================

/**
 * Input with left icon for visual context.
 */
export const WithLeftIcon: Story = {
  args: {
    label: "Search",
    placeholder: "Search...",
    leftIcon: <Search size={16} />,
  },
};

/**
 * Input with right icon.
 */
export const WithRightIcon: Story = {
  args: {
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    rightIcon: <Mail size={16} />,
  },
};

/**
 * Input with both left and right icons.
 */
export const WithBothIcons: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    leftIcon: <User size={16} />,
    rightIcon: <CheckCircle size={16} />,
  },
};

/**
 * Various icon combinations.
 */
export const IconVariations: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <Input
        label="Search"
        placeholder="Search..."
        leftIcon={<Search size={16} />}
      />
      <Input
        label="Email"
        type="email"
        placeholder="your@email.com"
        leftIcon={<Mail size={16} />}
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
        leftIcon={<Lock size={16} />}
      />
      <Input
        label="Error with icon"
        variant="error"
        errorMessage="Invalid input"
        leftIcon={<AlertCircle size={16} />}
      />
      <Input
        label="Success with icon"
        variant="success"
        value="Valid input"
        rightIcon={<CheckCircle size={16} />}
      />
    </div>
  ),
};

// ============================================================================
// STATES
// ============================================================================

/**
 * Disabled input cannot be interacted with.
 */
export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "This is disabled",
    disabled: true,
  },
};

/**
 * Read-only input displays but cannot be edited.
 */
export const ReadOnly: Story = {
  args: {
    label: "Read Only Input",
    value: "This is read-only",
    readOnly: true,
  },
};

/**
 * Required input with asterisk indicator.
 */
export const Required: Story = {
  args: {
    label: "Required Field",
    placeholder: "This field is required",
    required: true,
  },
};

/**
 * All states side by side.
 */
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <Input label="Normal" placeholder="Normal input" />
      <Input label="Required" placeholder="Required input" required />
      <Input label="Disabled" placeholder="Disabled input" disabled />
      <Input label="Read Only" value="Read only value" readOnly />
    </div>
  ),
};

// ============================================================================
// INPUT TYPES
// ============================================================================

/**
 * Various HTML input types.
 */
export const InputTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <Input label="Text" type="text" placeholder="Text input" />
      <Input
        label="Email"
        type="email"
        placeholder="email@example.com"
        leftIcon={<Mail size={16} />}
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
        leftIcon={<Lock size={16} />}
      />
      <Input label="Number" type="number" placeholder="Enter number" />
      <Input label="Tel" type="tel" placeholder="+1 (555) 000-0000" />
      <Input label="URL" type="url" placeholder="https://example.com" />
      <Input label="Date" type="date" />
    </div>
  ),
};

// ============================================================================
// PASSWORD TOGGLE EXAMPLE
// ============================================================================

/**
 * Password input with show/hide toggle.
 * Demonstrates interactive icon functionality.
 */
export const PasswordToggle: Story = {
  render: () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="relative">
        <Input
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          leftIcon={<Lock size={16} />}
          rightIcon={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer hover:text-primary-500 transition-colors pointer-events-auto"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          }
        />
      </div>
    );
  },
};

// ============================================================================
// FORM EXAMPLES
// ============================================================================

/**
 * Complete form example with validation.
 */
export const FormExample: Story = {
  render: () => (
    <form className="flex flex-col gap-6">
      <Input
        label="Full Name"
        placeholder="John Doe"
        required
        leftIcon={<User size={16} />}
      />
      <Input
        label="Email"
        type="email"
        placeholder="john@example.com"
        required
        leftIcon={<Mail size={16} />}
        helperText="We'll never share your email"
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
        required
        leftIcon={<Lock size={16} />}
        helperText="Must be at least 8 characters"
      />
      <Input
        label="Phone"
        type="tel"
        placeholder="+1 (555) 000-0000"
        helperText="Optional"
      />
    </form>
  ),
};

// ============================================================================
// COMPREHENSIVE SHOWCASE
// ============================================================================

/**
 * Comprehensive showcase of all input combinations.
 */
export const Showcase: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      {/* Variants */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Variants</h3>
        <div className="flex flex-col gap-4">
          <Input
            label="Default"
            placeholder="Default input"
            helperText="Helper text"
          />
          <Input
            label="Error"
            variant="error"
            placeholder="Error input"
            errorMessage="This field is required"
          />
          <Input
            label="Success"
            variant="success"
            value="Valid input"
            helperText="Input is valid"
          />
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Sizes</h3>
        <div className="flex flex-col gap-4">
          <Input size="sm" label="Small" placeholder="Small input" />
          <Input size="md" label="Medium" placeholder="Medium input" />
          <Input size="lg" label="Large" placeholder="Large input" />
        </div>
      </div>

      {/* With Icons */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">With Icons</h3>
        <div className="flex flex-col gap-4">
          <Input
            label="Left Icon"
            placeholder="Search..."
            leftIcon={<Search size={16} />}
          />
          <Input
            label="Right Icon"
            placeholder="Email"
            rightIcon={<Mail size={16} />}
          />
          <Input
            label="Both Icons"
            placeholder="Username"
            leftIcon={<User size={16} />}
            rightIcon={<CheckCircle size={16} />}
          />
        </div>
      </div>

      {/* States */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">States</h3>
        <div className="flex flex-col gap-4">
          <Input label="Required" placeholder="Required field" required />
          <Input label="Disabled" placeholder="Disabled" disabled />
          <Input label="Read Only" value="Read only value" readOnly />
        </div>
      </div>
    </div>
  ),
};
