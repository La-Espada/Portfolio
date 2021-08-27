import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import { MenuToggle } from './menuToggle';
import { motion } from "framer-motion"



const NavLinksContainer = styled.div`
 height: 100%;
 display: flex;
 align-items: center;
`;

const LinksWrapper = styled.ul`
margin: 0;
padding: 0;
display: flex;
height: 100%;
list-style: none;
text-decotation: none;
background-color: #fff;
width:100%;
flex-direction: column;
position: fixed;
top: 65px;
left:0;


`;

const LinkItem = styled.li`
 width:100%;
 padding: 0 1.1em;
 color: #222;
 font-weight: 500;
 font-size: 14px;
 display:flex;
 border-top: 2px solid transparent;
 transition: all 220ms ease-in-out;
 text-decotation: none;
 
 &:hover{
     border-top: 2px solid #2ecc71;
 }
`;

const Link = styled.a`
text-decotation: none;
color: inherit;
font-size: inherit;
`;




export function MobileNavLinks(props) {
    const [isOpen, setOpen] = useState(false);
    
    return <NavLinksContainer>
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
            {isOpen && (<LinksWrapper>
                <LinkItem>
                    <Link style={{ textDecoration: 'none' }} href="#">About us</Link>
                </LinkItem>
                <LinkItem>
                    <Link style={{ textDecoration: 'none' }} href="#">How it works</Link>
                </LinkItem>
                <LinkItem>
                    <Link style={{ textDecoration: 'none' }} href="#">Hello</Link>
                </LinkItem>
                <LinkItem>
                    <Link style={{ textDecoration: 'none' }} href="#">Zombie</Link>
                </LinkItem>
            </LinksWrapper>
            )}

    </NavLinksContainer>
}
