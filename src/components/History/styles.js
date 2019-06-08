import styled from 'styled-components';

export const HistoryMoves = styled.ul`
  font-size: 24px;
  font-weight: bold;

  li {
    list-style: none;
    margin: 0 auto;
    margin-bottom: 5px;

    button {
      height: 24px;
      width: 156px;
      color: #2c3e50;
      font-weight: bolder;
      background-color: #ecf0f1;
      border: none;
      border-radius: 4px;
      box-shadow: 0 5px #7f8c8d;
      cursor: pointer;

      :hover {
        background-color: #bdc3c7;
      }

      :active {
        box-shadow: 0 2px #7f8c8d;
        transform: translateY(4px);
        transition: 0.05s;
      }
    }
  }
`;
