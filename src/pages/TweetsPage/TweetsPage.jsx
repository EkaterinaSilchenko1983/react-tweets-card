import { useNavigate } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { CardList } from '../../components/CardList/CardList';
import { Container } from './TweetsPage.styled';
import { BackLink } from './TweetsPage.styled';

const TweetsPage = () => {
  const navigate = useNavigate();
  const goBack = () => navigate('/');
  return (
    <Container>
      <BackLink onClick={goBack}>
        <HiArrowLeft size="24" />
        Go back
      </BackLink>
      <CardList />
    </Container>
  );
};

export default TweetsPage;
