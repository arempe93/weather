import { Story, Meta } from '@storybook/react'
import { useState } from 'react'

import AutocompleteComponent, { Props } from '@/components/Autocomplete'

// import docs from './docs.mdx'

type User = { id: number; name: string }

const allUsers: User[] = [
  { id: 1, name: 'Andrew Rempe' },
  { id: 2, name: 'Eric Ashman' },
  { id: 3, name: 'Bill Story' },
]

export const Autocomplete: Story<Props<User>> = (props) => {
  const [users, setUsers] = useState<User[]>(allUsers)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  return (
    <AutocompleteComponent
      {...props}
      items={users}
      itemToKey={(item) => item.id}
      itemToString={(item) => (item ? item.name : '')}
      selectedItem={selectedUser}
      onInputValueChange={({ inputValue }) =>
        setUsers(
          inputValue
            ? users.filter((user) =>
                user.name.toLowerCase().includes(inputValue.toLowerCase())
              )
            : allUsers
        )
      }
      onSelectedItemChange={({ selectedItem }) =>
        setSelectedUser(selectedItem ?? null)
      }
    />
  )
}

export default {
  title: 'Components/Autocomplete',
  component: AutocompleteComponent,
  parameters: {
    //   docs: {
    //     page: docs,
    //   },
  },
} as Meta
