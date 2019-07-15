import * as React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText/FormHelperText';
import Input from '@material-ui/core/Input/Input';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import OptionsPatternString, { TYPE } from './OptionsPatternString';
import { Dictionary, isEmpty } from 'lodash';
import { SingleSelect } from 'react-select-material-ui';

const styles: Dictionary<React.CSSProperties> = {
  checkbox: {
    padding: '0 5px 0 0'
  },
  container: {
    alignItems: 'center',
    display: 'flex'
  },
  itemLeft: {
    flexGrow: 1
  },
  itemRight: {
    flexGrow: 1
  }
};

class PatternStringMaterialUi extends React.Component<PatternStringMaterialUiProps, PatternStringMaterialUiState> {
  constructor(props: PatternStringMaterialUiProps) {
    super(props);

    const type: TYPE = props.type || props.defaultType || TYPE.CAN_BE_ANY;

    this.state = {
      type,
      value: props.value || props.defaultValue || ''
    };
  }

  public render() {
    return (
      <div id={this.props.id} style={this.props.style}>
        {this.renderLabel()}
        <div style={styles.container}>
          <div style={styles.itemLeft}>{this.renderPattern()}</div>
          <div style={styles.itemRight}>{this.renderInput()}</div>
        </div>
        {this.renderHelperText()}
      </div>
    );
  }

  private renderLabel() {
    const { label } = this.props;

    if (isEmpty(label)) {
      return null;
    }

    return <InputLabel>{label}</InputLabel>;
  }

  private renderPattern() {
    return (
      <SingleSelect
        value={OptionsPatternString.getOption(this.state.type)}
        options={OptionsPatternString.getOptions()}
        onChange={this.handleChangePattern}
      />
    );
  }

  private renderInput() {
    const isInputEnabled: boolean = this.state.type !== TYPE.CAN_BE_ANY;

    return (
      <Input
        disabled={isInputEnabled === false}
        fullWidth={true}
        onChange={this.handleChangeInput}
        value={isInputEnabled ? this.state.value : ''}
      />
    );
  }

  private renderHelperText() {
    const { helperText } = this.props;

    if (isEmpty(helperText)) {
      return null;
    }

    return <FormHelperText>{helperText}</FormHelperText>;
  }

  private handleChangePattern = (option: string) => {
    const type: TYPE = OptionsPatternString.getType(option);

    if (this.props.type === undefined) {
      this.setState({
        type
      });
    }

    this.props.onChange(type, this.state.value);
  };

  private handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;

    if (this.props.value === undefined) {
      this.setState({
        value
      });
    }

    this.props.onChange(this.state.type, value);
  };
}

interface PatternStringMaterialUiState {
  type?: TYPE;
  value?: string;
}

interface PatternStringMaterialUiProps {
  defaultType?: TYPE;
  defaultValue?: string;
  helperText?: string;
  id?: string;
  label?: string;
  onChange: (type?: TYPE, value?: string) => void;
  style?: React.CSSProperties;
  type?: TYPE;
  value?: string;
}

export { TYPE };
export default PatternStringMaterialUi;
