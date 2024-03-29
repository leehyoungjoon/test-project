import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  color: #111111;
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  vertical-align: baseline;
  box-sizing: border-box;

  height: 100px;
  width: 100px;

  ${(props) => {
    const selected = props.theme.colors.main;
    return css`
      background-color: ${selected};
      &:hover {
        background-color: #c4c4c4;
      }
      &:active {
        background-color: #fff;
      }
    `;
  }}
`;

export default StyledButton;
