import React from 'react';
import './person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`

width: 60%;
margin: auto;
border: 1px solid #eee;
box-shadow: 0 2px 3px #eee;
padding: 16px;
text-align: center;

@media(min-width: 450px): {
    width: '450px'
}
`
const person = (props) => {



    return (
        <StyledDiv>
            <h3 onClick={props.click}>I'am {props.name} and I am {props.age} years old.</h3>
            <h3>{props.children}</h3>
            Input name: <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
    );
}

export default person;