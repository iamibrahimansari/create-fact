import {useState, useContext} from 'react';
import {FactCreaterContext} from '../store/FactCreaterContext';
import {categories} from '../data';

import styled from 'styled-components';

const Container = styled.form`
    margin-bottom: 4rem;
    display: flex;
    justify-content: space-evenly;
    gap: 2rem;
    background-color: #888;
    padding: 2rem;
    border-radius: 10px;
    @media screen and (max-width: ${1080 + 'px'}){
        flex-direction: column;
    }
`

const Input = styled.input`
    flex: ${({type}) => type === "text" ? 3 : 1.5};
`

const Select = styled.select`
    flex: 1.5;
`

const Option = styled.option`
    color: darkcyan;
`

const Button = styled.button`
    flex: 1;
    background-image: linear-gradient(135deg,#3b82f6,#ef4444,#16a34a,#eab308);
    font-weight: bold;
    color: #fff;
    cursor: pointer;
`

const SubContainer = styled.div`
    flex: 3;
    display: flex;
    justify-content: space-evenly;
    gap: 1rem;
    align-items: center;
    margin-right: 2rem;
    @media screen and (max-width: ${405 + 'px'}){
        flex-direction: column;
        width: 100%;
        & > .fact-input{
            width: 100%;
        }
        & > .char-length{
            display: none;
        }
    }
`

const Span = styled.span`
    font-size: 3rem;
`

const formElementStyle = {
    padding: '1rem 2rem',
    fontSize: '2rem',
    borderRadius: '100px',
    border: 'none',
    outline: 'none'
}

export const Form = () =>{
    const {
        setData,  
        formInfo, 
        setFormInfo, 
        isFormOpen, 
        initialState, 
        charLength, 
        setCharLength
    } = useContext(FactCreaterContext);
    const {fact, source, category} = {...formInfo}
    if(!isFormOpen){
        return null; 
    }
    const handleForm = (event, indicator) =>{
        const {name, value} = event.target;
        setFormInfo({...formInfo, [name]: value});
        if(indicator === 'first'){
            setCharLength(data => data > 0 ? data - 1 : 0);
        }
    }
    const handleOnKeyDown = event =>{
        if(event.keyCode === 8){
            setCharLength(data => data < 200 ? data + 2 : 200);
        }
    }
    const handleFactPost = event =>{
        event.preventDefault();
        if(!(fact && source && category)){
            return alert('Fact, Source and Category are mandatory!');
        }
        setData(fact, source, category);
        setFormInfo(initialState);
        setCharLength(200);
    }
    return <Container>
        <SubContainer>
            <Input 
                className="fact-input"
                maxLength="200" 
                name="fact" 
                value={formInfo.fact} 
                onChange={event => handleForm(event, 'first')} 
                onKeyDown={handleOnKeyDown}
                style={formElementStyle} 
                type="text" 
                placeholder="Share a fact with the world..." 
            />
            <Span className="char-length">{charLength}</Span>
        </SubContainer>
        <Input 
            name="source" 
            value={formInfo.source} 
            onChange={handleForm} 
            style={formElementStyle} 
            type="url" 
            placeholder="Trustworthy source" 
        />
        <Select style={formElementStyle} name="category" value={formInfo.category} onChange={handleForm}>
            <Option value="" defaultValue disabled hidden>Choose Category</Option>
            {
                categories.map(({name}, index) => <Option key={index} value={name}>{name.toUpperCase()}</Option>)
            }
        </Select>
        <Button onClick={handleFactPost} className="btn" style={formElementStyle}>POST</Button>
    </Container>
}