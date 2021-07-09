import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import {MenuToggle} from './menuToggle';
import { IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const NavLinksContainer = styled.div`
    // height: 100%;
    display: flex;
    justify-content: space-between;
    margin: 14px 16px
`;
const LogoOne = styled.div``;
const LinksWrapper = styled.ul`
    height: 430px;
    display:flex;
    list-style: none;  
    background-color: #f9f9f9;
    width: 100%;
    flex-direction: column;
    position: absolute;
    top: 59px;
    left: 0;
    padding-inline: 20px;
    overflow-y: scroll;
    box-sizing: border-box;
    z-index:1;
    padding-top: 62px;
`;
 const LinkItem = styled.li`
 width: 88%;
 color: #000000;
 font-size: 0.9rem;
 line-height: 40px;
 font-weight: 500;
`;

 const Link = styled.a`
    text-decoration: none;
    color: inherit;
     `;
const TT = styled.div`
  color:'red';
`;

export function MobileNavLinks(props){
    const [isOpen,setOpen] = useState(false)

    return<NavLinksContainer>
            <LogoOne>
                <IconButton edge="start"  color="inherit" aria-label="menu">
                    <svg width="131" height="40" viewBox="0 0 131 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M56.0449 30.4444C50.1877 30.4444 46 26.25 46 20.7222C46 15.1944 50.216 11 55.96 11C58.7895 11 60.9966 12.0833 62.8358 13.6667L61.6757 16.0278C60.2609 14.6389 58.45 13.5 55.8468 13.5C51.6025 13.5 48.5466 16.4167 48.5466 20.7222C48.5466 25.0278 51.5742 27.9444 55.8751 27.9444C59.5818 27.9444 62.2133 25.75 62.6377 22.4167H55.0828V19.9167H65.5239V20.0278C65.5239 26.1389 62.0152 30.4444 56.0449 30.4444Z" fill="#12100C"></path><path d="M68.1803 16.5556H70.6137V30.4444H68.1803V16.5556Z" fill="#12100C"></path><path d="M82.1393 30.25V28.1389C81.3753 28.2778 80.7528 28.3611 79.8473 28.3611C78.6589 28.3611 78.2345 27.75 78.2345 26.6944V18.6389H82.111V16.5556H78.2345V12.8333H75.8011V16.5556H72.9998V18.6389H75.8011V26.5556C75.8011 29.5 77.131 30.5833 79.7059 30.5833C80.6113 30.5833 81.4036 30.4444 82.1393 30.25Z" fill="#12100C"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M87.0989 36H84.6655V16.5556H87.0989V18.5556C88.259 17.0278 89.9851 16.2222 92.0789 16.2222C96.0969 16.2222 98.8981 19.2222 98.8981 23.5C98.8981 27.7778 96.0969 30.7778 92.0789 30.7778C90.07 30.7778 88.4288 30 87.0989 28.4167V36ZM86.9292 23.5C86.9292 26.5833 88.7967 28.5556 91.6545 28.5556C94.5123 28.5556 96.3798 26.5556 96.3798 23.5C96.3798 20.4444 94.5123 18.4444 91.6545 18.4444C88.7967 18.4444 86.9292 20.4167 86.9292 23.5Z" fill="#12100C"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M100.413 23.5C100.413 27.6667 103.582 30.7778 107.826 30.7778C112.071 30.7778 115.24 27.6667 115.24 23.5C115.24 19.3333 112.071 16.2222 107.826 16.2222C103.582 16.2222 100.413 19.3333 100.413 23.5ZM112.722 23.5C112.722 26.3889 110.769 28.4722 107.826 28.4722C104.884 28.4722 102.931 26.3889 102.931 23.5C102.931 20.6111 104.884 18.5278 107.826 18.5278C110.769 18.5278 112.722 20.6111 112.722 23.5Z" fill="#12100C"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M128.567 11H131V30.4444H128.567V28.4444C127.406 29.9722 125.68 30.7778 123.587 30.7778C119.569 30.7778 116.767 27.7778 116.767 23.5C116.767 19.2222 119.569 16.2222 123.587 16.2222C125.596 16.2222 127.237 17 128.567 18.5833V11ZM128.736 23.5C128.736 20.4167 126.869 18.4444 124.011 18.4444C121.153 18.4444 119.286 20.4444 119.286 23.5C119.286 26.5556 121.153 28.5556 124.011 28.5556C126.869 28.5556 128.736 26.5833 128.736 23.5Z" fill="#12100C"></path><path d="M69.4026 14.7302C70.3643 14.7302 71.1439 13.9679 71.1439 13.0275C71.1439 12.087 70.3643 11.3247 69.4026 11.3247C68.4408 11.3247 67.6612 12.087 67.6612 13.0275C67.6612 13.9679 68.4408 14.7302 69.4026 14.7302Z" fill="#12100C"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21.388 1.99199C22.4572 3.8871 21.8071 6.30126 19.936 7.38418L8.30155 14.1176C7.99402 14.2956 7.8042 14.6271 7.8042 14.9861V25.5563C7.8042 25.9153 7.99402 26.2467 8.30155 26.4247L17.511 31.7548C17.8141 31.9301 18.1859 31.9301 18.489 31.7548L27.6985 26.4247C28.006 26.2467 28.1958 25.9153 28.1958 25.5563V18.9825L19.9175 23.7132C18.0406 24.7858 15.6605 24.1142 14.6015 22.2133C13.5425 20.3123 14.2056 17.9017 16.0825 16.8292L27.9277 10.0602C31.5358 7.99827 36 10.6386 36 14.8346V26.3588C36 29.0581 34.572 31.5504 32.258 32.8896L21.6846 39.009C19.4014 40.3303 16.5986 40.3303 14.3154 39.009L3.74196 32.8896C1.42803 31.5504 0 29.0581 0 26.3588V14.1835C0 11.4843 1.42803 8.99201 3.74196 7.65282L16.064 0.521394C17.9351 -0.561524 20.3188 0.0968851 21.388 1.99199Z" fill="url(#paint0_linear)"></path><defs><linearGradient id="paint0_linear" x1="27.0957" y1="6.04878" x2="8.28086" y2="35.2541" gradientUnits="userSpaceOnUse"><stop stop-color="#FFB45B"></stop><stop offset="1" stop-color="#FF8A00"></stop></linearGradient></defs></svg>
                </IconButton>
            </LogoOne>
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
                {isOpen && 
                <LinksWrapper>
                    <LinkItem><Link href="">Features</Link></LinkItem>
                    <LinkItem><Link href="">Pricing</Link></LinkItem>
                    <LinkItem><Link href="">Blog</Link></LinkItem>
                    <LinkItem><Link href="">Docs</Link></LinkItem>
                    <LinkItem><Link href="">Changelog</Link></LinkItem>
                    <LinkItem><Link href="">We're hiring</Link></LinkItem>
                    <TT>
                    <Button style={{textTransform:'none',backgroundColor:'#12100c',color:'#fff',height:'29px',margin:'7px 23px 0px 0px'}}> Login</Button>
                    </TT> 
                </LinksWrapper>}
        </NavLinksContainer>
}