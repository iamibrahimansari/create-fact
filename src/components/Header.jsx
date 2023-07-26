import {useContext} from 'react';
import {FactCreaterContext} from '../store/FactCreaterContext';

import styled from 'styled-components';
import {Button} from './Button';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
  @media screen and (max-width: ${600 + 'px'}){
    flex-direction: column;
    gap: 2rem;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media screen and (max-width: ${362 + 'px'}){
    flex-direction: column;
  }
`

const Logo = styled.img`
  width: 7rem;
`

const H1 = styled.h1`
  font-size: 5rem;
  @media screen and (max-width: ${600 + 'px'}){
    font-size: 4rem;
  }
  @media screen and (max-width: ${516 + 'px'}){
    font-size: 2.5rem;
  }
`

export const Header = () =>{
  const {isFormOpen} = useContext(FactCreaterContext);
  return(
    <HeaderContainer>
      <Container>
        <Logo src="/logo.png" alt="logo" />
        <H1>CREAT FACT</H1>
      </Container>
      <Button text={isFormOpen ? "close" : "share a fact"} />
    </HeaderContainer>
    )
}