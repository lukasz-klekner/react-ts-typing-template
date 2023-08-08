type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

interface ToastProps {
  readonly position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
    | 'center'
}

export const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position - {position}</div>
}
