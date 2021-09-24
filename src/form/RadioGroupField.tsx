import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import FormElement from '@/components/FormElement'
import RadioGroup, { Props as RadioGroupProps } from '@/components/RadioGroup'

type Props<FV> = Omit<RadioGroupProps, 'name' | 'value' | 'onChange'> & {
  control: NonNullable<UseControllerProps<FV>['control']>
  fieldId: UseControllerProps<FV>['name']
  rules?: UseControllerProps<FV>['rules']
}

const RadioGroupField = <FV extends FieldValues>({
  control,
  fieldId,
  rules,
  ...props
}: Props<FV>) => {
  const { field } = useController({ control, rules, name: fieldId })

  return (
    <FormElement>
      <div className="mx-1">
        <RadioGroup {...props} {...field} name={fieldId} />
      </div>
    </FormElement>
  )
}

export default RadioGroupField
