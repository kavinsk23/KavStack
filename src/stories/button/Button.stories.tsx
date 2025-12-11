import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

/**
 * Button component displays a clickable button with various styles and sizes.
 * Uses KavStack's color palette system for consistent theming.
 *
 * ## Features
 * - Multiple variants (primary, secondary, ghost, danger)
 * - Three sizes (sm, md, lg)
 * - Full keyboard accessibility
 * - Disabled state support
 *
 * ## Usage
 *
 * ```tsx
 * import { Button } from 'kavstack';
 *
 * <Button variant="primary" size="md">
 *   Click me
 * </Button>
 * ```
 */
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "danger"],
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
 * Disabled state prevents user interaction.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

/**
 * Button with an icon demonstrates flexible content.
 */
export const WithIcon: Story = {
  args: {
    children: (
      <>
        <span aria-hidden="true">→</span>
        Button with Icon
      </>
    ),
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
    </div>
  ),
};

/**
 * Fully rounded (pill-shaped) buttons.
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
    </div>
  ),
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
