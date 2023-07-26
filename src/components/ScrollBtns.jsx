import {Link} from 'react-router-dom';

import styled from 'styled-components';
import {BsFillArrowDownCircleFill, BsFillArrowUpCircleFill} from 'react-icons/bs';

const Container = styled.div`
    font-size: 3rem;
    cursor: pointer;
    position: fixed;
    top: ${({$indicator}) => $indicator === 'down' ? '4rem' : 'auto'};
    right: 2rem;
    bottom: ${({$indicator}) => $indicator === 'up' ? '2rem' : 'auto'};
`

export const ScrollBtns = ({indicator}) =>{
    const handleTopDownBtn = () =>{
        scroll({
            top: indicator === 'down' ? document.body.scrollHeight : 0,
            behavior: 'smooth'
        })
    }
    return <Container $indicator={indicator} onClick={() => handleTopDownBtn(indicator)}>
        {indicator === 'down' ? <BsFillArrowDownCircleFill /> : <BsFillArrowUpCircleFill />}
    </Container>
}