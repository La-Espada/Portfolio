import React from 'react'
import styled from 'styled-components'

const AccessibilityContainer = styled.div`
display:flex;
`;

const Button1 = styled.button`
border: 0;
outline: 0;
padding: 8px 1em;
color: #fff;
font-size: 14px;
font-weight:600;
border-radius: 20px;
background-color: #6adf76;
background-image: linear-gradient(to right, transparent 0%, #00c9f 100%);
transition: all 240ms ease-in-out;
cursor: pointer;

&:hover{
    background-color: #00c9ff;
}

`;

export function Accessibility(props) {
    return <AccessibilityContainer>
        <Button1>Button1</Button1>
    </AccessibilityContainer>
}
