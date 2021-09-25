import { useCallback, useState } from 'react'

type Setter<V> = (prevValue: V | null) => V | null
type ValueOrSetter<V> = V extends Function ? never : V | null | Setter<V>

const useLocalStorage = <V = any>(
  key: string,
  deserialize: (value: string) => V | null
) => {
  const [value, setValue] = useState<V | null>(() => {
    if (typeof window === 'undefined') {
      return null
    }

    const serialized = window.localStorage.getItem(key)
    if (!serialized) {
      return null
    }

    return deserialize(serialized)
  })

  const storeValue = useCallback(
    (valueOrSetter: ValueOrSetter<V>) => {
      setValue((prevValue) => {
        const nextValue =
          typeof valueOrSetter === 'function'
            ? valueOrSetter(prevValue)
            : valueOrSetter

        window.localStorage.setItem(key, JSON.stringify(nextValue))
        return nextValue
      })
    },
    [key]
  )

  return [value, storeValue] as const
}

export default useLocalStorage
