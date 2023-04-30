import { Container } from '../../pages/HomePage/HomePage.styled';
import { Navigation } from '../Navigation/Navigation';

import { Header } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <Container>
        <Navigation />
      </Container>
    </Header>
  );
};
