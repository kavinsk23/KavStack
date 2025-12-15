import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import {
  X,
  Plus,
  Edit,
  Trash2,
  Settings,
  ArrowRight,
  ArrowLeft,
  Check,
} from "lucide-react";
import { Button } from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "danger", "outline"],
      description: "The visual style variant of the button",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "The size of the button",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    rounded: {
      control: "boolean",
      description: "Whether the button is fully rounded (pill shape)",
      table: {
        defaultValue: { summary: false },
      },
    },
    iconOnly: {
      control: "boolean",
      description: "Whether this is an icon-only button (square/circular)",
      table: {
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
      table: {
        defaultValue: { summary: false },
      },
    },
    children: {
      control: "text",
      description: "Content to be rendered inside the button",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================================================
// BASIC VARIANTS
// ============================================================================

/**
 * Primary button is the default style, used for main call-to-action.
 * Uses the primary color from your theme.
 */
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

/**
 * Secondary button is used for less prominent actions.
 * Uses the secondary color from your theme.
 */
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

/**
 * Ghost button has minimal styling, used for tertiary actions.
 * Transparent background with hover effect.
 */
export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

/**
 * Danger button is used for destructive actions like delete.
 * Uses the error color from your theme.
 */
export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Delete",
  },
};

/**
 * Outline button has a transparent background with colored border.
 * Good for secondary actions.
 */
export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

/**
 * All button variants side by side for comparison.
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="outline">Outline</Button>
    </div>
  ),
};

// ============================================================================
// SIZES
// ============================================================================

/**
 * Small size button for compact interfaces.
 */
export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

/**
 * Medium size button - the default size.
 */
export const Medium: Story = {
  args: {
    size: "md",
    children: "Medium Button",
  },
};

/**
 * Large size button for emphasis.
 */
export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

/**
 * All button sizes side by side for comparison.
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

// ============================================================================
// ROUNDED (PILL) BUTTONS
// ============================================================================

/**
 * Fully rounded (pill-shaped) button.
 */
export const Rounded: Story = {
  args: {
    rounded: true,
    children: "Rounded Button",
  },
};

/**
 * All rounded variants side by side for comparison.
 */
export const AllRoundedVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button variant="primary" rounded>
        Primary Pill
      </Button>
      <Button variant="secondary" rounded>
        Secondary Pill
      </Button>
      <Button variant="ghost" rounded>
        Ghost Pill
      </Button>
      <Button variant="danger" rounded>
        Danger Pill
      </Button>
      <Button variant="outline" rounded>
        Outline Pill
      </Button>
    </div>
  ),
};

/**
 * Rounded buttons in different sizes.
 */
export const RoundedSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button variant="primary" size="sm" rounded>
        Small Pill
      </Button>
      <Button variant="primary" size="md" rounded>
        Medium Pill
      </Button>
      <Button variant="primary" size="lg" rounded>
        Large Pill
      </Button>
    </div>
  ),
};

// ============================================================================
// ICON BUTTONS
// ============================================================================

/**
 * Icon-only button (square shape).
 * Always include aria-label for accessibility!
 */
export const IconOnly: Story = {
  args: {
    iconOnly: true,
    children: <X size={16} />,
    "aria-label": "Close",
  },
};

/**
 * Icon-only buttons in different sizes.
 */
export const IconOnlySizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Button size="sm" iconOnly aria-label="Small close">
        <X size={14} />
      </Button>
      <Button size="md" iconOnly aria-label="Medium close">
        <X size={16} />
      </Button>
      <Button size="lg" iconOnly aria-label="Large close">
        <X size={20} />
      </Button>
    </div>
  ),
};

/**
 * Icon-only buttons with all variants.
 */
export const IconOnlyVariants: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Button variant="primary" iconOnly aria-label="Add">
        <Plus size={16} />
      </Button>
      <Button variant="secondary" iconOnly aria-label="Edit">
        <Edit size={16} />
      </Button>
      <Button variant="ghost" iconOnly aria-label="Close">
        <X size={16} />
      </Button>
      <Button variant="danger" iconOnly aria-label="Delete">
        <Trash2 size={16} />
      </Button>
      <Button variant="outline" iconOnly aria-label="Settings">
        <Settings size={16} />
      </Button>
    </div>
  ),
};

/**
 * Rounded icon-only buttons (circular shape).
 * Perfect for floating action buttons.
 */
export const IconOnlyRounded: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Button variant="primary" iconOnly rounded aria-label="Add">
        <Plus size={16} />
      </Button>
      <Button variant="secondary" iconOnly rounded aria-label="Edit">
        <Edit size={16} />
      </Button>
      <Button variant="ghost" iconOnly rounded aria-label="Close">
        <X size={16} />
      </Button>
      <Button variant="danger" iconOnly rounded aria-label="Delete">
        <Trash2 size={16} />
      </Button>
      <Button variant="outline" iconOnly rounded aria-label="Settings">
        <Settings size={16} />
      </Button>
    </div>
  ),
};

/**
 * Circular icon buttons in different sizes.
 */
export const IconOnlyRoundedSizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Button
        variant="primary"
        size="sm"
        iconOnly
        rounded
        aria-label="Small add"
      >
        <Plus size={14} />
      </Button>
      <Button
        variant="primary"
        size="md"
        iconOnly
        rounded
        aria-label="Medium add"
      >
        <Plus size={16} />
      </Button>
      <Button
        variant="primary"
        size="lg"
        iconOnly
        rounded
        aria-label="Large add"
      >
        <Plus size={20} />
      </Button>
    </div>
  ),
};

// ============================================================================
// STATES
// ============================================================================

/**
 * Disabled state prevents user interaction.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

/**
 * Disabled state on all variants.
 */
export const DisabledVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button variant="primary" disabled>
        Primary
      </Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="ghost" disabled>
        Ghost
      </Button>
      <Button variant="danger" disabled>
        Danger
      </Button>
      <Button variant="outline" disabled>
        Outline
      </Button>
    </div>
  ),
};

/**
 * Disabled icon buttons.
 */
export const DisabledIconButtons: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Button variant="primary" iconOnly disabled aria-label="Add">
        <Plus size={16} />
      </Button>
      <Button variant="secondary" iconOnly rounded disabled aria-label="Edit">
        <Edit size={16} />
      </Button>
      <Button variant="danger" iconOnly rounded disabled aria-label="Delete">
        <Trash2 size={16} />
      </Button>
    </div>
  ),
};

// ============================================================================
// WITH ICONS (TEXT + ICON)
// ============================================================================

/**
 * Button with an icon demonstrates flexible content.
 */
export const WithIcon: Story = {
  args: {
    children: (
      <>
        <ArrowRight size={16} />
        Button with Icon
      </>
    ),
  },
};

/**
 * Buttons with icons in different positions.
 */
export const WithIconVariations: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button variant="primary">
        <ArrowRight size={16} />
        Next
      </Button>
      <Button variant="secondary">
        <ArrowLeft size={16} />
        Back
      </Button>
      <Button variant="ghost">
        <Check size={16} />
        Done
      </Button>
      <Button variant="danger">
        <Trash2 size={16} />
        Delete
      </Button>
      <Button variant="outline">
        <Settings size={16} />
        Settings
      </Button>
    </div>
  ),
};

/**
 * Icon at the end of the button text.
 */
export const WithIconEnd: Story = {
  args: {
    children: (
      <>
        Continue
        <ArrowRight size={16} />
      </>
    ),
  },
};

// ============================================================================
// COMPREHENSIVE SHOWCASE
// ============================================================================

/**
 * Comprehensive showcase of all button combinations.
 * Demonstrates the flexibility of the Button component.
 */
export const Showcase: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      {/* Standard Buttons */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Standard Buttons
        </h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </div>

      {/* Rounded Buttons */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Rounded (Pill) Buttons
        </h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" rounded>
            Primary
          </Button>
          <Button variant="secondary" rounded>
            Secondary
          </Button>
          <Button variant="ghost" rounded>
            Ghost
          </Button>
          <Button variant="danger" rounded>
            Danger
          </Button>
          <Button variant="outline" rounded>
            Outline
          </Button>
        </div>
      </div>

      {/* Icon-Only Buttons */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Icon-Only Buttons (Square)
        </h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" iconOnly aria-label="Add">
            <Plus size={16} />
          </Button>
          <Button variant="secondary" iconOnly aria-label="Edit">
            <Edit size={16} />
          </Button>
          <Button variant="ghost" iconOnly aria-label="Close">
            <X size={16} />
          </Button>
          <Button variant="danger" iconOnly aria-label="Delete">
            <Trash2 size={16} />
          </Button>
          <Button variant="outline" iconOnly aria-label="Settings">
            <Settings size={16} />
          </Button>
        </div>
      </div>

      {/* Circular Icon Buttons */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Circular Icon Buttons
        </h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" iconOnly rounded aria-label="Add">
            <Plus size={16} />
          </Button>
          <Button variant="secondary" iconOnly rounded aria-label="Edit">
            <Edit size={16} />
          </Button>
          <Button variant="ghost" iconOnly rounded aria-label="Close">
            <X size={16} />
          </Button>
          <Button variant="danger" iconOnly rounded aria-label="Delete">
            <Trash2 size={16} />
          </Button>
          <Button variant="outline" iconOnly rounded aria-label="Settings">
            <Settings size={16} />
          </Button>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Sizes</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      {/* With Icons */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">With Icons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">
            <ArrowRight size={16} />
            Next
          </Button>
          <Button variant="secondary">
            <ArrowLeft size={16} />
            Back
          </Button>
          <Button variant="outline">
            <Settings size={16} />
            Settings
          </Button>
        </div>
      </div>

      {/* Disabled States */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Disabled States
        </h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" disabled>
            Primary
          </Button>
          <Button variant="secondary" iconOnly disabled aria-label="Edit">
            <Edit size={16} />
          </Button>
          <Button
            variant="danger"
            iconOnly
            rounded
            disabled
            aria-label="Delete"
          >
            <Trash2 size={16} />
          </Button>
        </div>
      </div>
    </div>
  ),
};
