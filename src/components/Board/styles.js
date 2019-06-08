import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ecf0f1;
  width: 90%;
  height: 60%;
  margin-top: 70%;
  padding: 5%;
  border-radius: 6px;

  :after {
    display: table;
  }

  @media (min-width: 992px) {
    width: 330px;
    height: 330px;
    margin-top: 5%;
    padding: 10px;
  }
`;
