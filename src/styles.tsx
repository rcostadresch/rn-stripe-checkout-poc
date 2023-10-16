import styled from 'styled-components/native';

export const View = styled.View`
  flex: 1;
  padding: 10px;
`;

export const TouchableOpacityButton = styled.TouchableOpacity<{
  backgroundColor: string;
}>`
  background-color: ${props => props.backgroundColor};
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
`;

export const Line = styled.View`
  border: 1px solid gray;
  margin: 15px;
`;
