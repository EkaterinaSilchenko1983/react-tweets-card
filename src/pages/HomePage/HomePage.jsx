import { Container, Title } from './HomePage.styled';
import { SignContainer, Sign } from './HomePage.styled';

import sign from '../../images/sign.png';
const Homepage = () => {
  return (
    <Container>
      <Title>Hello, welcome to application </Title>
      <SignContainer>
        <Sign>
          <img src={sign} alt="sign" />
        </Sign>
      </SignContainer>
    </Container>
  );
};
export default Homepage;

// <Logo>
//       <img src={logoImg} alt="logo" />
//     </Logo>
