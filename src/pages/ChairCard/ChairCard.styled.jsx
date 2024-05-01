import styled from "styled-components";

export const DivImages = styled.div`

`;

export const DivListImages = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;
`;

export const Button = styled.button`
background-color: transparent;
`;

export const IconButton = styled.svg`
  width: ${(props) => props.size || '36px'};
  height: ${(props) => props.size || '36px'};
  fill: ${(props) => props.color || '#000'};
  display: inline-block;
`;