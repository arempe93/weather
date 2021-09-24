import { PropsWithChildren } from 'react'

import {
  FieldValues,
  FormErrorState,
  SubmitErrorHandler,
  SubmitHandler,
  UseFormHandleSubmit,
} from '@/hooks/useForm'

import Alert from '@/components/Alert'
import FormElement from '@/components/FormElement'
import Stack from '@/components/Stack'

export type Props<FV> = {
  errors?: FormErrorState
  handleSubmit: UseFormHandleSubmit<FV>
  onSubmit: SubmitHandler<FV>
  onInvalidSubmit?: SubmitErrorHandler<FV>
}

const Form = <FV extends FieldValues>({
  children,
  errors,
  handleSubmit,
  onSubmit,
  onInvalidSubmit,
}: PropsWithChildren<Props<FV>>) => {
  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalidSubmit)}>
      {errors && Object.keys(errors).length > 0 && (
        <FormElement>
          <Stack vertical gap={16}>
            {Object.keys(errors).map((key) => (
              <Alert key={key} status="warning" {...errors[key]} />
            ))}
          </Stack>
        </FormElement>
      )}
      {children}
    </form>
  )
}

export default Form
