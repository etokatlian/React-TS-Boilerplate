import { Switch } from 'antd';
import styled from 'styled-components';

export const SwitchButtonWrapper = styled.div`
  width: 36px;
  height: 20px;
`;

export const StyledSwitchButton = styled(Switch)`
  .ant-switch-checked {
    background-color: ${props => props.theme.main} !important;
  }
`;
