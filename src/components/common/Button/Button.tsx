import StyledButton from './style';

interface ButtonType {
  children: String;
}

function Button({ children, ...rest }: ButtonType) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;
