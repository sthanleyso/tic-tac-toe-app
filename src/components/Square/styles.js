import styled from 'styled-components';

export const Button = styled.button`
  width: 33.333%;
  height: 33.333%;
  background-color: transparent;
  border: 1px solid #bdc3c7;
  transition: 0.3s;
  vertical-align: top;

  span {
    font-size: 50px;
    font-weight: bold;
    line-height: 34px;
    color: #6c5ce7;
    padding: 0;
  }

  :hover {
    transition: 0.3s;
    cursor: pointer;
  }
`;
