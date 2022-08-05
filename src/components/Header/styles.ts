import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native'

export const Container = styled(LinearGradient).attrs(
    (({ theme }) => ({
        colors: ['#4AF699', '#7FE7AE'],
        start: { x: 1, y: 0 },
        end: { x: 1, y: 1 }
    }))
)`
    width: 100%;
    height: 25%;
    flex-direction: column;
    padding: 0px 26px;
`;

export const Logo = styled.Image`
    margin-top: 15%;
`;