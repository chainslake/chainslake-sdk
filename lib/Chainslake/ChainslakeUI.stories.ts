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
      options: ['https://chainslake.io'],
      control: { type: 'select' },
    },
    id: {
      options: ['114599989649904453', '114599986848643341', '114599905732506136'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof ChainslakeUI>;

export default meta;

type Story = StoryObj<typeof meta>;


export const DefaultChainslakeUI: Story = {
  args: {
    url: "https://chainslake.io",
    id: "114599905732506136"
  },
};
