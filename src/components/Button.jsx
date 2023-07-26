import {useContext} from 'react';
import {FactCreaterContext} from '../store/FactCreaterContext';

import styled from 'styled-components';

const gradient = 'linear-gradient(135deg,#3b82f6,#ef4444,#16a34a,#eab308)';
const btnArr = ['all', 'close', 'share a fact'];

const Btn = styled.button`
  width: 25rem;
  height: 5rem;
  background-image: ${({$text}) => btnArr.includes($text) ? gradient : 'none'};
  background-color: ${({$bgcolor}) => $bgcolor};
  border-radius: 100px;
  border: none;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  @media screen and (max-width: ${822 + 'px'}){
    padding: 0 2rem;
    font-size: 1.6rem;
  }
`

export const Button = ({text, bgcolor}) =>{
  const {
    setCurrCategory, 
    setIsFormOpen, 
    setFormInfo, 
    initialState, 
    getData,
    setCharLength
  } = useContext(FactCreaterContext);
  
  const handleBtn = () =>{
    const temp = btnArr.slice(1);
    if(temp.includes(text)){
      setIsFormOpen(currState => !currState);
      setFormInfo(initialState);
      setCharLength(200);
    }else{
      getData(text);
      setCurrCategory(text);
    }
  }
 
  return <Btn onClick={handleBtn} $text={text} $bgcolor={bgcolor} type="button" className="btn">
    {text}
  </Btn>
}