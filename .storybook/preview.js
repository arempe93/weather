import { ModalProvider } from 'react-modal-hook'

import '../src/styles/global.css'

export const decorators = [
  (Story) => (
    <ModalProvider>
      <Story />
    </ModalProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    values: [
      { name: 'white', value: '#fff' },
      { name: 'light', value: '#F4F5F7' },
      { name: 'dark', value: '#091E42' },
      { name: 'black', value: '#000' },
    ],
  },
  docs: {
    source: {
      type: 'code',
    },
  },
  layout: 'centered',
}
