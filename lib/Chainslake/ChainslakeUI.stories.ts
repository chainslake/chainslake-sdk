import type { Meta, StoryObj } from '@storybook/react';

import { ChainslakeUI } from './ChainslakeUI';

const meta = {
  title: 'ChainslakeUI',
  component: ChainslakeUI,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    url: {
      options: ['https://chainslake.com'],
      control: { type: 'select' },
    },
    id: {
      options: ['115149203800234454', '115149189599283534', '115143480312652880'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof ChainslakeUI>;

export default meta;

type Story = StoryObj<typeof meta>;


export const DefaultChainslakeUI: Story = {
  args: {
    url: "https://chainslake.com",
    id: "115143481456543129"
  },
};
