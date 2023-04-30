import { useEffect, useState } from 'react';
import {
  Avatar,
  Description,
  ProfileContainer,
  ContainerStats,
  ItemStats,
  Button,
} from './Card.styled';

import { CardBackground } from '../CardBackground/CardBackground';

export const Card = ({ id, avatar, tweets, followers }) => {
  const [isActive, setIsActive] = useState(() => {
    const prevIsActive = localStorage.getItem(`isActive_${id}`);
    return prevIsActive ? JSON.parse(prevIsActive) : false;
  });
  const [initialFollowers, setInitialFollowers] = useState(followers);

  useEffect(() => {
    const prevFollowers = localStorage.getItem(`initialFollowers_${id}`);

    if (prevFollowers) {
      setInitialFollowers(JSON.parse(prevFollowers));
    }
  }, [id]);

  const handleClick = () => {
    const newIsActive = !isActive; // true following
    setIsActive(newIsActive);
    localStorage.setItem(`isActive_${id}`, JSON.stringify(newIsActive));

    if (newIsActive) {
      //true
      setInitialFollowers(prevState => {
        const newFollowers = prevState + 1;
        localStorage.setItem(
          `initialFollowers_${id}`,
          JSON.stringify(newFollowers)
        );
        return newFollowers;
      });
    } else {
      setInitialFollowers(prevState => {
        const newFollowers = prevState - 1;
        localStorage.setItem(
          `initialFollowers_${id}`,
          JSON.stringify(newFollowers)
        );
        return newFollowers;
      });
    }
  };

  return (
    <ProfileContainer>
      <CardBackground />
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <ContainerStats>
          <ItemStats>
            <span>{tweets} Tweets</span>
          </ItemStats>
          <ItemStats>
            <span> {initialFollowers.toLocaleString('en-US')} Followers</span>
          </ItemStats>
        </ContainerStats>
      </Description>
      <Button isActive={isActive} onClick={handleClick}>
        {isActive ? 'Following' : 'Follow'}
      </Button>
    </ProfileContainer>
  );
};
