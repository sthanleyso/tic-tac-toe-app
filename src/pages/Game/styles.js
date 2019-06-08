import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
    margin: 0;
  }
`;

export const Info = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin: 5% auto;

  @media (min-width: 992px) {
    width: 300px;
    height: 300px;
    margin: 0;
  }
`;

export const Title = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: #e74c3c;
  margin-bottom: 10px;

  @media (max-width: 592px) {
    display: none;
  }
`;

export const TitlePhone = styled(Title)`
  @media (min-width: 992px) {
    display: none;
  }
`;
