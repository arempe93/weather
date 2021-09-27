import cx from 'classnames'
import { useCombobox, UseComboboxProps } from 'downshift'
import { useCallback, useState } from 'react'

import Input from '@/components/TextInput'

import styles from './styles.module.css'

export type RenderItemProps<T> = {
  index: number
  item: T
  isHighlighted: boolean
  isSelected: boolean
}

export type Props<T> = {
  autoFocus?: boolean
  disabled?: boolean
  id: string
  items: UseComboboxProps<T>['items']
  selectedItem: T | null
  itemToKey: (item: T) => string | number
  itemToString: NonNullable<UseComboboxProps<T>['itemToString']>
  onInputValueChange: UseComboboxProps<T>['onInputValueChange']
  onSelectedItemChange: UseComboboxProps<T>['onSelectedItemChange']
  placeholder?: string
  renderItem?: (props: RenderItemProps<T>) => JSX.Element
  required?: boolean
  stateReducer?: UseComboboxProps<T>['stateReducer']
}

const emptyStateReducer: UseComboboxProps<any>['stateReducer'] = (
  _state,
  { changes }
) => changes

const Autocomplete = <T extends object>({
  autoFocus,
  id,
  items,
  selectedItem: providedSelectedItem,
  itemToKey,
  itemToString,
  onInputValueChange,
  onSelectedItemChange,
  renderItem: providedRenderItem,
  stateReducer = emptyStateReducer,
  ...inputProps
}: Props<T>) => {
  const {
    highlightedIndex,
    isOpen,
    selectedItem,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    openMenu,
    selectItem,
  } = useCombobox({
    id,
    items,
    selectedItem: providedSelectedItem,
    itemToString,
    stateReducer,
    onInputValueChange,
    onSelectedItemChange,
  })

  const [isInputFocused, setIsInputFocused] = useState(false)

  const defaultRenderItem = useCallback(
    ({ item, isHighlighted, isSelected }: RenderItemProps<T>) => (
      <div
        className={cx(styles.item, {
          [styles['is-highlighted']]: isHighlighted,
          [styles['is-selected']]: isSelected,
        })}
      >
        {itemToString(item)}
      </div>
    ),
    [itemToString]
  )

  const renderItem = providedRenderItem ?? defaultRenderItem

  return (
    <div style={{ width: '100%' }}>
      <div
        {...getComboboxProps()}
        className={cx(styles.combobox, {
          [styles['is-focused']]: isInputFocused,
        })}
      >
        <Input
          {...getInputProps({
            autoFocus,
            onBlur: () => {
              setIsInputFocused(false)
              if (selectedItem) {
                selectItem(selectedItem)
              }
            },
            onFocus: () => {
              setIsInputFocused(true)
              if (!isOpen) {
                openMenu()
              }
            },
          })}
          {...inputProps}
        />
      </div>
      <ul
        {...getMenuProps()}
        className={cx(styles.menu, {
          [styles['is-open']]: items.length > 0 && isOpen,
        })}
      >
        {items.map((item, index) => (
          <li key={itemToKey(item)} {...getItemProps({ item, index })}>
            {renderItem({
              item,
              index,
              isHighlighted: highlightedIndex === index,
              isSelected:
                !!selectedItem && itemToKey(item) === itemToKey(selectedItem),
            })}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Autocomplete
