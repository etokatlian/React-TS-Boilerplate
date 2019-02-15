import * as React from 'react';

export interface ICheckBoxWithLabelProps {
  labelOn: string;
  labelOff: string;
}

export interface ICheckBoxWithLabelState {
  isChecked: boolean;
}
export class CheckboxWithLabel extends React.Component<
  ICheckBoxWithLabelProps,
  ICheckBoxWithLabelState
> {
  constructor(props: any) {
    super(props);
    this.state = { isChecked: false };
  }
  public onChange = () => {
    this.setState({ isChecked: !this.state.isChecked });
  };

  public render() {
    return (
      <label>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />

        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
}
