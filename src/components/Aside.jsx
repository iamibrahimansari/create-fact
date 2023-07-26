import styled from 'styled-components';
import {categories} from '../data';
import {Button} from './Button';

const Container = styled.div`
    align-self: flex-start;
    flex: 20%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    @media screen and (max-width: ${822 + 'px'}){
        flex-direction: row;
        width: 100%;
        overflow: auto;
    }
`

export const Aside = () =>{
    return (
        <Container>
            <Button text='all' />
            {
                categories.map(({name, color}, index) => <Button key={index} text={name} bgcolor={color} />)
            }
        </Container>
    )
}