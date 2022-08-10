import React from 'react';
import { MagnifyingGlass } from 'phosphor-react-native';

import {
    Container,
    Input,
    Button,
} from './styles';
import { useTheme } from 'styled-components/native';

export function Search() {

    const theme = useTheme();

    return (
        <Container>
            <Input placeholder="Search" />
            <Button>
                <MagnifyingGlass color={theme.colors.gray[400]} size={20} />
            </Button>
        </Container>
    );
}