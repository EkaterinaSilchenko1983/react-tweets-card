import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: calc(100vh - 50px);
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 48;
  text-align: center;
  color: #e57373;
  gap: 100px;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
`;
