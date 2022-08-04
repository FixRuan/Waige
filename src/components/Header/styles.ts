import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native'

export const Container = styled(LinearGradient).attrs(
    (({ theme }) => ({
        colors: ['#68EDA5', '#185D42'],
        start: { x: 0, y: 1 },
        end: { x: 0.5, y: 0.5 }
    }))
)`
    width: 100%;
    height: 36%;
`;