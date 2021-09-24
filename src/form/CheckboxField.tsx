import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import Checkbox, { Props as CheckboxProps } from '@/components/Checkbox'
import FormElement from '@/components/FormElement'

type Props<FV> = Omit<CheckboxProps, 'checked' | 'id' | 'onChange'> & {
  control: NonNullable<UseControllerProps<FV>['control']>
  fieldId: UseControllerProps<FV>['name']
  label?: string
  rules?: UseControllerProps<FV>['rules']
}

const CheckboxField = <FV extends FieldValues>({
  control,
  fieldId,
  label,
  rules,
  ...props
}: Props<FV>) => {
  const {
    field: { value, ...field },
  } = useController({ control, rules, name: fieldId })

  return (
    <FormElement>
      <div className="mx-1">
        <Checkbox
          {...props}
          {...field}
          checked={value}
          id={fieldId}
          label={label}
        />
      </div>
    </FormElement>
  )
}

export default CheckboxField
