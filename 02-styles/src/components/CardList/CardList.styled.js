import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ init }) => {
    console.log('init', init);
    return init.toString() + 'px';
  }};
`;
