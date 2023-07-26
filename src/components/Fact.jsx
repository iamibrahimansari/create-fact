import {useContext} from 'react';
import {FactCreaterContext} from '../store/FactCreaterContext';

import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #888;
    padding: 2rem;
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    gap: 2rem;
    @media screen and (max-width: ${1258 + 'px'}){
        flex-direction: column;
    }
`

const categoryColors = {
    technology: 'rgb(59, 130, 246)',
    science: 'rgb(22, 163, 74)',
    finance: 'rgb(239, 68, 68)',
    society: 'rgb(234, 179, 8)',
    entertainment: 'rgb(219, 39, 119)',
    health: 'rgb(20, 184, 166)',
    history: 'rgb(249, 115, 22)',
    news: 'rgb(139, 92, 246)'
}

const Span = styled.span`
    font-size: 2.5rem;
    @media screen and (max-width: ${488 + 'px'}){
        width: 100%;
        text-align: center;
        &.first-span{
            text-align: left;
        }
    }
`

const SubContainer = styled.div`
    flex: ${({$indicator}) => $indicator === 1 ? '50%' : '50%'};
    display: flex;
    align-items: center;
    &.second-subcontainer{
        @media screen and (max-width: ${488 + 'px'}){
            flex-direction: column;
            gap: 2rem;
        }
    }
`

const categoryStyle = {
    fontSize: '1.4rem',
    color: 'white',
    borderRadius: '100px',
    padding: '0.5rem 1rem'
}

const likedStyle = {
    backgroundColor: 'black',
    cursor: 'pointer',
    color: 'White',
    padding: '1rem 2rem',
    borderRadius: '100px',     
}

const linkStyled = {
    textDecoration: 'none', 
    color: 'black'
}

const subContainerStyled = {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between'
}

export const Fact = ({id, fact, source, category, general, wonder, wrong}) =>{
    const {facts, setFacts, updateVotes} = useContext(FactCreaterContext);
    const data = [category, `👍 ${general}`, `🤯 ${wonder}`, `⛔ ${wrong}`];
    const factObject = facts.find(fact => fact.id === id);;
    const isDisputed = factObject.wrong > factObject.general && factObject.wrong > factObject.wonder;
    const increaseVote = indicator =>{
        if(indicator === 'category') return;
        const tempFacts = facts.map(fact => fact.id === id ? {...fact, [indicator]: fact[indicator] + 1} : fact);
        setFacts(tempFacts);
        updateVotes(id, indicator, indicator === 'general' ? general : indicator === 'wonder' ? wonder : wrong);
    }
    return <Container style={{outline: isDisputed ? '5px solid black' : '5px solid yellow'}}>
        <SubContainer $indicator={1}>
            <Span className="first-span"> 
                {fact + ' '} 
                <Link style={linkStyled} to={source} target="_blank">(Source)</Link>
            </Span>
        </SubContainer>
        <SubContainer className="second-subcontainer" $indicator={2} style={subContainerStyled}>
            {
                data.map((temp, index) => {
                    let likedCat = null;
                    switch(index){
                        case 1:
                            likedCat = 'general';
                            break;
                        case 2:
                            likedCat = 'wonder';
                            break;
                        case 3:
                            likedCat = 'wrong';
                            break;
                        default:
                            likedCat = 'category'
                    }
                    let spanStyled = null;
                    if(index){
                        spanStyled = likedStyle;
                    }else{
                        spanStyled = {...categoryStyle, backgroundColor: `${categoryColors[category]}`}
                    }
                    return <Span onClick={() => increaseVote(likedCat)} style={spanStyled} key={index}>
                        {temp}
                    </Span>
                })
            }
        </SubContainer>
    </Container>
}