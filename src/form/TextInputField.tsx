import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import FormElement from '@/components/FormElement'
import TextInput, { Props as TextInputProps } from '@/components/TextInput'

type Props<FV> = Omit<TextInputProps, 'value' | 'onChange'> & {
  control: NonNullable<UseControllerProps<FV>['control']>
  fieldId: UseControllerProps<FV>['name']
  label?: string
  rules?: UseControllerProps<FV>['rules']
}

const TextInputField = <FV extends FieldValues>({
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
      <TextInput {...props} {...field} aria-invalid={invalid} id={fieldId} />
    </FormElement>
  )
}

export default TextInputField
