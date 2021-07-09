import React from 'react';
import styled from 'styled-components';
import { DeviceList} from '../responsive';
import { useMediaQuery} from 'react-responsive';
import {MobileNavLinks} from './mobNavLinks';
import ButtonAppBar from './ButtonAppBar';

const NavBarContainer = styled.div``;
const NavBarContainerSub = styled.div``;



export function NavBarone(props){

    const isMobile = useMediaQuery({maxWidth : DeviceList.mobile})

    return<NavBarContainer>
            <NavBarContainerSub>
                   {!isMobile && <ButtonAppBar />} 
                   {isMobile && <MobileNavLinks />} 
             </NavBarContainerSub>        
          </NavBarContainer>

}