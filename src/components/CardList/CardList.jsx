import { useState, useEffect } from 'react';
import { getCards } from '../../shared/API/tweets';
import { Card } from '../Card/Card';
import { Loader } from '../Loader/Loader';
import {
  List,
  LoadMoreButton,
  WrapperButton,
  ErrorStyled,
} from './CardList.styled';

export const CardList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setIsLoading(true);
        const { data } = await getCards(page);
        setUsers(prevUsers => [...prevUsers, ...data]);
      } catch ({ response }) {
        const errorMessage = response.data.message || 'Cannot fetch cards';
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCards();
  }, [page]);

  useEffect(() => {
    if (page > 1)
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
  }, [users, page]);

  const hendleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const isAllLoaded = users.length <= (page - 1) * 3;

  return (
    <>
      {error && <ErrorStyled>{error}</ErrorStyled>}
      <List>
        {users?.map(({ id, avatar, tweets, followers }) => (
          <li key={id}>
            <Card
              id={id}
              avatar={avatar}
              tweets={tweets}
              followers={followers}
            />
          </li>
        ))}
      </List>
      {isLoading && <Loader />}
      {!isAllLoaded && (
        <WrapperButton>
          <LoadMoreButton onClick={hendleLoadMore} type="button">
            Load more
          </LoadMoreButton>
        </WrapperButton>
      )}
    </>
  );
};
