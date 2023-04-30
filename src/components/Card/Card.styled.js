import styled from 'styled-components';

export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  height: 460px;
  border-radius: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 186px;
`;
export const Avatar = styled.img`
  display: flex;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  //   border: 2px solid #c2cdd5;
  margin-bottom: 26px;
  z-index: 2;
`;

export const ContainerStats = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ItemStats = styled.li`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  color: #ebd8ff;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  :last-child {
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  margin-top: 26px;
  width: 196px;
  height: 50px;
  font-family: inherit;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  background-color: ${props => (props.isActive ? '#5CD3A8' : '#ebd8ff')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  cursor: pointer;
`;
//  background-color: #ebd8ff;
