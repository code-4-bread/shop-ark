import styled from 'styled-components';
import logo from '../logo.svg';

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 12%;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  margin: 0;
`;

const Description = styled.p`
  text-align: center;
  margin
`;

const Header = () => (
  <>
    <Logo src={logo} className='App-logo' alt='logo' />
    <Title>Shop Ark</Title>
    <Description>
      Utility tool to track Engravings while shopping for builds
    </Description>
  </>
);

export default Header;
