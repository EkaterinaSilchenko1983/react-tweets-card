import {
  SignBackgroun,
  Logo,
  Circle,
  Rectangle,
} from '../CardBackground/CardBackground.styled';
import logoImg from '../../images/logo.svg';
import circle from '../../images/circle.svg';
import sign from '../../images/sign.png';
import rectangle from '../../images/rectangle.svg';

export const CardBackground = () => {
  return (
    <>
      <Logo>
        <img src={logoImg} alt="logo" />
      </Logo>
      <SignBackgroun>
        <img src={sign} alt="sign" />
      </SignBackgroun>
      <Circle>
        <img src={circle} alt="circle" />
      </Circle>
      <Rectangle>
        <img src={rectangle} alt="Rectangle" />
      </Rectangle>
    </>
  );
};
