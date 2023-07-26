import {useEffect, useContext} from 'react';
import {FactCreaterContext} from './store/FactCreaterContext';
import supabase from './supabase';

import styled from 'styled-components';

import {ScrollBtns} from './components/ScrollBtns';
import {Header} from './components/Header';
import {Aside} from './components/Aside';
import {Facts} from './components/Facts';
import {Form} from './components/Form';

const Main = styled.main`
  display: flex;
  gap: 5rem;
  @media screen and (max-width: ${822 + 'px'}){
    flex-direction: column;
  }
`

const App = () =>{
  const {getData} = useContext(FactCreaterContext);
  useEffect(() =>{
    getData('all');
  }, []);
  
  return <>
    <Header />
    <Form />
    <Main>
      <Aside />
      <Facts />
      <ScrollBtns indicator="down" />
      <ScrollBtns indicator="up" />
    </Main>
  </>
}

export default App;