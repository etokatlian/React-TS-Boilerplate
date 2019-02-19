import React from 'react';
import { Button } from 'antd';
import classnames from 'classnames';

const StyledButton = (props: any) => {
  const { size, text, type, secondary, secondaryBold } = props;

  const buttonClasses = classnames('button', {
    'button--secondary': secondary,
    'button--secondary-bold': secondaryBold,
  });

  return (
    <div className="button-wrapper">
      <Button type={type} className={buttonClasses} size={size}>
        {text}
      </Button>
    </div>
  );
};

export default StyledButton;
