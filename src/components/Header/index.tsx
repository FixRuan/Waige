import React from 'react';

import {
    Container,
    Logo,
} from './styles';

import Logoimg from '../../assets/Logo.png';

export function Header() {
    return (
        <Container>
            <Logo source={Logoimg} />
        </Container>
    );
}