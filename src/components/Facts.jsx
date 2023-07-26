import {useContext} from 'react';
import {FactCreaterContext} from '../store/FactCreaterContext';

import styled from 'styled-components';
import {Fact} from './Fact';

const Container = styled.div`
    flex: 80%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const Loader = styled.h1`
    font-size: 5rem;
    text-align: center;
    color: ${({$color}) => $color};
`

const Stats = styled.p`
    font-size: 1.6rem
`

export const Facts = () =>{
    const {facts, err, currCategory} = useContext(FactCreaterContext);
    return (
        <Container>
            {
                facts.length ? 
                facts.map(fact => <Fact key={fact.id} {...fact} />) :
                err ?
                <Loader $color="tomato">{err}</Loader> :
                <Loader $color="yellow">Loading...</Loader>
            }
            <Stats>There are {facts.length} fact{facts.length !== 1 && 's'} {currCategory !== 'all' && `based on ${currCategory} category`} in the database. Add your own</Stats>
        </Container>
    )
}