import React from 'react';
import { Switch } from 'antd';

export interface ISwitchButtonProps {
  id?: string;
  leftLabel?: boolean;
  bool?: boolean;
  checked?: boolean;
  onChange?: any;
}

const LeftLabel = (props: any) => {
  return props.bool ? <p>Yes</p> : <p>No</p>;
};

const SwitchButton = (props: ISwitchButtonProps) => {
  const { leftLabel, onChange, bool } = props;

  return (
    <div className="switch">
      {leftLabel ? <LeftLabel bool={bool} /> : null}
      <Switch onChange={onChange} />
    </div>
  );
};

export default SwitchButton;
