import { ComponentProps } from 'react'

type CustomButtonProps = {
  readonly variant: 'primary' | 'secondary'
} & ComponentProps<'button'>

export const CustomButton = ({
  variant,
  children,
  ...rest
}: CustomButtonProps) => (
  <button className={`${variant}`} {...rest}>
    {children}
  </button>
)
