import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import '../../../components/product-overview'

const meta: Meta = {
  title: 'Components/ProductOverview',
  tags: ['autodocs'],
  render: (args) => html`
    <product-overview
      headline="${args.headline}"
      page-size="${args.pageSize}"
    ></product-overview>
  `,
  argTypes: {
    headline: { control: 'text' },
    pageSize: { control: { type: 'number', min: 1, max: 24, step: 1 } }
  }
}

export default meta
type Story = StoryObj

export const Default: Story = {
  args: { headline: 'These are our products', pageSize: 12 }
}

export const NoHeadline: Story = {
  args: { headline: '', pageSize: 12 }
}
