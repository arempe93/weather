import Stack from '@/components/Stack'
import Tag from '@/components/Tag'

export type Props = {
  disabled?: boolean
  gap?: number
  tags: string[]
  onRemove?: (index: number) => void
}

const TagList = ({ disabled, gap, tags, onRemove }: Props) => {
  return (
    <Stack wrap gap={gap}>
      {tags.map((tagLabel, index) => (
        <Tag
          key={index}
          disabled={disabled}
          label={tagLabel}
          onRemove={onRemove ? () => onRemove(index) : undefined}
        />
      ))}
    </Stack>
  )
}

export default TagList
