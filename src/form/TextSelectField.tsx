import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import FormElement from '@/components/FormElement'
import TextSelect, { Props as TextSelectProps } from '@/components/TextSelect'

type Props<FV> = Omit<TextSelectProps, 'value' | 'onChange'> & {
  control: NonNullable<UseControllerProps<FV>['control']>
  fieldId: UseControllerProps<FV>['name']
  label?: string
  rules?: UseControllerProps<FV>['rules']
}

const TextSelectField = <FV extends FieldValues>({
  control,
  fieldId,
  label,
  rules,
  ...props
}: Props<FV>) => {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({ control, rules, name: fieldId })

  return (
    <FormElement error={error ? error.message : undefined} label={label}>
      <TextSelect {...props} {...field} aria-invalid={invalid} />
    </FormElement>
  )
}

export default TextSelectField
