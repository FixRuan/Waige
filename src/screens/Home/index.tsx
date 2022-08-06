import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Header } from '../../components/Header';
import { Search } from '../../components/Search';

import {
    Container
} from './styles';

export function Home() {
    return (
        <Container>
            <StatusBar translucent />
            <Header />
            <Search />
        </Container>
    );
}