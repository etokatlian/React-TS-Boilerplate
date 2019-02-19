import React from 'react';
import { Button } from 'antd';

const StyledButton = (props: any) => {
  const { size, text } = props;

  return (
    <div className="button-wrapper">
      <Button type="primary" size={size}>
        {text}
      </Button>
    </div>
  );
};

export default StyledButton;
