
import styled from 'styled-components';

const Dynamci = styled.div 
`
margin-top: -22px;
height: 4px;
position : fixed;
background: ${props => props.len ? "red" : "white "};
width: ${props => props.len}%;
`;

const D = styled.div
`
margin-top: -22px;
height: 4px;
position : fixed;
background: blue;
width: 100%;
`;

export { Dynamci, D };