import { Story, Meta } from '@storybook/react'

import ColumnsComponent, { Props } from '@/components/Columns'
import FormElement from '@/components/FormElement'
import TextInput from '@/components/TextInput'

// import docs from './docs.mdx'

export const Columns: Story<Props> = ({ layout }) => {
  const nodes =
    layout === 'single' ? [1] : layout === 'triple' ? [1, 2, 3] : [1, 2]

  return (
    <div style={{ width: 'calc(100vw - 32px)', maxWidth: '32rem' }}>
      <ColumnsComponent layout={layout}>
        {nodes.map((n) => (
          <FormElement key={n} label={`Form label #${n}`}>
            <TextInput placeholder="Text input" />
          </FormElement>
        ))}
      </ColumnsComponent>
    </div>
  )
}

export default {
  title: 'Components/Columns',
  component: ColumnsComponent,
  argTypes: {
    layout: {
      control: { type: 'select' },
      options: ['single', 'double', 'double-left', 'double-right', 'triple'],
      defaultValue: 'double',
    },
  },
  parameters: {
    // docs: {
    //   page: docs,
    // },
  },
} as Meta
