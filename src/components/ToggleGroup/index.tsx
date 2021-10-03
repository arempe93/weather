import * as Primitive from '@radix-ui/react-toggle-group'

import styles from './styles.module.css'

type ToggleItem<V> = { label: string; value: V }

export type Props<V> = {
  items: ToggleItem<V>[]
  value: V
  onChange: (nextValue: V) => void
}

const ToggleGroup = <V extends string>({
  items,
  value,
  onChange,
}: Props<V>) => {
  return (
    <Primitive.Root
      className={styles.root}
      type="single"
      value={value}
      onValueChange={onChange}
    >
      {items.map((item) => (
        <Primitive.Item className={styles.item} value={item.value}>
          {item.label}
        </Primitive.Item>
      ))}
    </Primitive.Root>
  )
}

export default ToggleGroup
