import { Story, Meta } from '@storybook/react'

// import docs from './docs.mdx'

export const Typography: Story = (props) => (
  <>
    <h1>Display text</h1>
    <h2>Title text</h2>
    <h3>Heading text</h3>
    <h4>Subheading text</h4>
    <p>Body text</p>
    <small>Small text</small>
  </>
)

export default {
  title: 'Components/Typography',
  parameters: {
    //   docs: {
    //     page: docs,
    //   },
    layout: 'padded',
  },
} as Meta
