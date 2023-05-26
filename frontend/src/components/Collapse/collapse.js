import styled from 'styled-components';

export const CollapseWrapper = styled.div`
  background-color: #00bc77;
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.padding && props.padding};
  flex-direction: ${(props) => props.flexDirection && props.flexDirection};
`;

export const CollapseItem = styled.div`
  padding: 8px 24px;
  display: flex;
  width: 30%;
  justify-content: space-between;
  align-items: baseline;
`;

export const CollapseText = styled.span`
  color: #fff;
  font-weight: bold;
  font-size: 1.1rem;
`;

export const Icon = styled.i`
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: ${(props) => props.margin && props.margin};
`;
