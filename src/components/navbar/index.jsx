import React from 'react'
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components'
import { Logo } from '../logo';
import { DeviceSize } from '../responsive';
import { Accessibility } from './accessibility';
import { MobileNavLinks } from './mobileNavLinks';
import { NavLinks } from './navLinks';


const NavBarContainer = styled.div`
width:100%;
height:60px;
box-shadow:0 1px 3px rgba(15,15,15,0.13);
display:flex;
align-items: center;
background-color: #fff;
padding:0 ;
position:fixed;
top:0;
z-index:2;
`;

const LeftSection = styled.div`
display: flex;
padding-left: 1.5em;
`;

const MiddleSection = styled.div`
display: flex;
flex: 2;
height: 100%;
justify-content: center;
`;

const RightSection = styled.div`
display: flex;
padding-right: 1.5em;
`;


export function Navbar(props) {
    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
    return <NavBarContainer>
        <LeftSection>
            <Logo />
        </LeftSection>
        <MiddleSection>
            {!isMobile && <NavLinks />}
        </MiddleSection>
        <RightSection>
            {!isMobile && <Accessibility />}
            {isMobile && <MobileNavLinks />}
        </RightSection>
    </NavBarContainer>
}
