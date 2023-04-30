import { RiContactsBookFill } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import { Container, Title, Icon } from './HomePage.styled';

const Homepage = () => {
  return (
    <Container>
      <Title>
        Phone Book Web Application{' '}
        <IconContext.Provider value={{ color: '#E6CEAA', size: 200 }}>
          <Icon>
            <RiContactsBookFill />
          </Icon>
        </IconContext.Provider>
        Please, Sign up or Log in to have access to the Phonebook!
      </Title>
    </Container>
  );
};
export default Homepage;
