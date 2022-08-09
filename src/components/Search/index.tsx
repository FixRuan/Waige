import React from 'react';
import { MagnifyingGlass } from 'phosphor-react-native';

import {
    Container,
    Input,
    Button,
} from './styles';

export function Search() {
    return (
        <Container>
            <Input placeholder="Search" />
            <Button>
                <MagnifyingGlass size={20} />
            </Button>
        </Container>
    );
}