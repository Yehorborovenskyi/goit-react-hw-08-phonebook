import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  @media screen and (min-width: 540px) {
    flex-direction: row;
    gap: 20px;
  }
`;
export const Name = styled.p`
  text-transform: uppercase;
  font-weight: 700;

  @media screen and (min-width: 540px) {
    width: 250%;
  }
`;
