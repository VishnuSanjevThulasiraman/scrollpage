
import styled from 'styled-components';

const Dynamci = styled.div 
`

height: 4px;
position : fixed;
background: ${props => props.len ? "rgb(58,58,58)" : "white "};
width: ${props => props.len}%;
`;

const D = styled.div
`

height: 4px;
position : fixed;
background: rgb(251,226,76);
width: 100%;
`;

export { Dynamci, D };