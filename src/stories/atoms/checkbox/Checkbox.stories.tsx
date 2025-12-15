import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "The size of the checkbox",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Whether the checkbox is disabled",
      table: {
        defaultValue: { summary: false },
      },
    },
    checked: {
      control: "boolean",
      description: "Whether the checkbox is checked (controlled)",
    },
    indeterminate: {
      control: "boolean",
      description: "Whether the checkbox is in indeterminate state",
      table: {
        defaultValue: { summary: false },
      },
    },
    label: {
      control: "text",
      description: "Label text for the checkbox",
    },
    helperText: {
      control: "text",
      description: "Helper text displayed below the checkbox",
    },
    errorMessage: {
      control: "text",
      description: "Error message displayed below the checkbox",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================================================
// BASIC EXAMPLES
// ============================================================================

/**
 * Basic checkbox with label.
 */
export const Default: Story = {
  args: {
    label: "Accept terms and conditions",
  },
};

/**
 * Checkbox without label (requires aria-label).
 */
export const WithoutLabel: Story = {
  args: {
    "aria-label": "Accept terms",
  },
};

/**
 * Checkbox with helper text.
 */
export const WithHelperText: Story = {
  args: {
    label: "Subscribe to newsletter",
    helperText: "Get updates about new features and releases",
  },
};

/**
 * Checkbox with error message.
 */
export const WithError: Story = {
  args: {
    label: "I agree to the terms",
    errorMessage: "You must agree to continue",
  },
};

// ============================================================================
// SIZES
// ============================================================================

/**
 * Small size checkbox.
 */
export const Small: Story = {
  args: {
    size: "sm",
    label: "Small checkbox",
  },
};

/**
 * Medium size checkbox - the default.
 */
export const Medium: Story = {
  args: {
    size: "md",
    label: "Medium checkbox",
  },
};

/**
 * Large size checkbox.
 */
export const Large: Story = {
  args: {
    size: "lg",
    label: "Large checkbox",
  },
};

/**
 * All sizes side by side.
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox size="sm" label="Small checkbox" />
      <Checkbox size="md" label="Medium checkbox" />
      <Checkbox size="lg" label="Large checkbox" />
    </div>
  ),
};

// ============================================================================
// STATES
// ============================================================================

/**
 * Checked checkbox.
 */
export const Checked: Story = {
  args: {
    label: "Checked checkbox",
    defaultChecked: true,
  },
};

/**
 * Disabled checkbox.
 */
export const Disabled: Story = {
  args: {
    label: "Disabled checkbox",
    disabled: true,
  },
};

/**
 * Disabled and checked checkbox.
 */
export const DisabledChecked: Story = {
  args: {
    label: "Disabled checked checkbox",
    disabled: true,
    defaultChecked: true,
  },
};

/**
 * Indeterminate state (partially selected).
 * Useful for "select all" functionality.
 */
export const Indeterminate: Story = {
  args: {
    label: "Select all items",
    indeterminate: true,
  },
};

/**
 * All states side by side.
 */
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
    </div>
  ),
};

// ============================================================================
// CONTROLLED CHECKBOX
// ============================================================================

/**
 * Controlled checkbox example.
 * State is managed by parent component.
 */
export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <div className="flex flex-col gap-4">
        <Checkbox
          label="Controlled checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <p className="text-sm text-gray-600">
          Checkbox is {checked ? "checked" : "unchecked"}
        </p>
      </div>
    );
  },
};

// ============================================================================
// SELECT ALL EXAMPLE
// ============================================================================

/**
 * Select all with indeterminate state.
 * Demonstrates common pattern with parent and child checkboxes.
 */
export const SelectAllExample: Story = {
  render: () => {
    const [items, setItems] = useState([
      { id: 1, label: "Item 1", checked: false },
      { id: 2, label: "Item 2", checked: false },
      { id: 3, label: "Item 3", checked: false },
    ]);

    const allChecked = items.every((item) => item.checked);
    const someChecked = items.some((item) => item.checked);
    const indeterminate = someChecked && !allChecked;

    const handleSelectAll = () => {
      setItems(items.map((item) => ({ ...item, checked: !allChecked })));
    };

    const handleItemChange = (id: number) => {
      setItems(
        items.map((item) =>
          item.id === id ? { ...item, checked: !item.checked } : item
        )
      );
    };

    return (
      <div className="flex flex-col gap-3">
        <Checkbox
          label="Select all"
          checked={allChecked}
          indeterminate={indeterminate}
          onChange={handleSelectAll}
        />
        <div className="ml-6 flex flex-col gap-2 border-l-2 border-gray-200 pl-4">
          {items.map((item) => (
            <Checkbox
              key={item.id}
              label={item.label}
              checked={item.checked}
              onChange={() => handleItemChange(item.id)}
            />
          ))}
        </div>
      </div>
    );
  },
};

// ============================================================================
// CHECKBOX GROUP
// ============================================================================

/**
 * Group of related checkboxes.
 */
export const CheckboxGroup: Story = {
  render: () => {
    const [preferences, setPreferences] = useState({
      email: true,
      sms: false,
      push: true,
    });

    return (
      <div className="flex flex-col gap-3">
        <h3 className="text-base font-semibold text-gray-900">
          Notification Preferences
        </h3>
        <Checkbox
          label="Email notifications"
          checked={preferences.email}
          onChange={(e) =>
            setPreferences({ ...preferences, email: e.target.checked })
          }
          helperText="Receive updates via email"
        />
        <Checkbox
          label="SMS notifications"
          checked={preferences.sms}
          onChange={(e) =>
            setPreferences({ ...preferences, sms: e.target.checked })
          }
          helperText="Receive updates via text message"
        />
        <Checkbox
          label="Push notifications"
          checked={preferences.push}
          onChange={(e) =>
            setPreferences({ ...preferences, push: e.target.checked })
          }
          helperText="Receive updates in the app"
        />
      </div>
    );
  },
};

// ============================================================================
// FORM VALIDATION
// ============================================================================

/**
 * Checkbox with form validation.
 */
export const FormValidation: Story = {
  render: () => {
    const [agreed, setAgreed] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleSubmit = () => {
      if (!agreed) {
        setShowError(true);
      } else {
        setShowError(false);
        alert("Form submitted!");
      }
    };

    return (
      <div className="flex flex-col gap-4">
        <Checkbox
          label="I agree to the terms and conditions"
          checked={agreed}
          onChange={(e) => {
            setAgreed(e.target.checked);
            if (e.target.checked) setShowError(false);
          }}
          errorMessage={showError ? "You must agree to continue" : undefined}
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
        >
          Submit
        </button>
      </div>
    );
  },
};

// ============================================================================
// COMPREHENSIVE SHOWCASE
// ============================================================================

/**
 * Comprehensive showcase of all checkbox variations.
 */
export const Showcase: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      {/* Sizes */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Sizes</h3>
        <div className="flex flex-col gap-3">
          <Checkbox size="sm" label="Small checkbox" />
          <Checkbox size="md" label="Medium checkbox" />
          <Checkbox size="lg" label="Large checkbox" />
        </div>
      </div>

      {/* States */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">States</h3>
        <div className="flex flex-col gap-3">
          <Checkbox label="Unchecked" />
          <Checkbox label="Checked" defaultChecked />
          <Checkbox label="Indeterminate" indeterminate />
          <Checkbox label="Disabled" disabled />
          <Checkbox label="Disabled checked" disabled defaultChecked />
        </div>
      </div>

      {/* With Helper Text */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          With Helper Text
        </h3>
        <div className="flex flex-col gap-3">
          <Checkbox
            label="Subscribe to newsletter"
            helperText="Get weekly updates"
          />
          <Checkbox
            label="Remember me"
            helperText="Stay logged in for 30 days"
          />
        </div>
      </div>

      {/* With Error */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">With Error</h3>
        <div className="flex flex-col gap-3">
          <Checkbox
            label="I agree to terms"
            errorMessage="You must agree to continue"
          />
        </div>
      </div>
    </div>
  ),
};
