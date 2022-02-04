import Button from 'react-bootstrap/Button'

const ButtonComponent = ({
  className,
  onClick,
  variant,
  label,
  ...buttonProps
}) => (
  <Button
    className={className}
    onClick={onClick}
    variant={variant}
    {...buttonProps}
  >
    {label}
  </Button>
)

export { ButtonComponent }
