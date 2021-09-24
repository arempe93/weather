export const moveIndex = <T>(
  source: T[],
  fromIndex: number,
  toIndex: number
): T[] => {
  const clone = Array.from(source)

  const [item] = clone.splice(fromIndex, 1)
  clone.splice(toIndex, 0, item)

  return clone
}

export const removeAtIndex = <T>(
  source: T[],
  atIndex: number,
  count: number = 1
) => {
  const clone = Array.from(source)

  clone.splice(atIndex, count)

  return clone
}

export const insertAtIndex = <T>(
  source: T[],
  atIndex: number,
  ...items: T[]
) => {
  return replaceAtIndex(source, atIndex, 0, ...items)
}

export const replaceAtIndex = <T>(
  source: T[],
  atIndex: number,
  removeCount: number,
  ...items: T[]
) => {
  const clone = Array.from(source)

  clone.splice(atIndex, removeCount, ...items)

  return clone
}

export const sortBy = <T extends object>(source: T[], key: keyof T) => {
  const clone = Array.from(source)

  clone.sort((element: T, other: T) => {
    if (element[key] < other[key]) {
      return -1
    } else if (element[key] > other[key]) {
      return 1
    }

    return 0
  })

  return clone
}

export const nTimes = <T>(n: number, callback: (index: number) => T) =>
  Array.from({ length: n }, (_v, index) => callback(index))

export const subtract = <T>(source: T[], other: T[]) =>
  Array.from(source).filter((el) => !other.includes(el))
