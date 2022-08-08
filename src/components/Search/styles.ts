import styled from 'styled-components/native';
import { TextInputProps } from 'react-native';

export const Container = styled.View`
   margin-top: -24px;
   width: 100%;
   height: 56px;
   background-color: transparent;
   padding: 0px 24px;
   flex-direction: row;
   justify-content: space-between;
`;


export const Input = styled.TextInput<TextInputProps>`
    width: 80%;
    height: 56px;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 6px;
    border: 3px solid ${({theme}) => theme.colors.primary[400]};
    padding: 0px 24px;
    font-size: 18px;
`;

export const Button = styled.TouchableOpacity`
    width:56px;
    height: 56px;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 6px;
    border: 3px solid ${({theme}) => theme.colors.primary[400]};
`;