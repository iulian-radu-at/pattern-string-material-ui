import FormHelperText from '@mui/material/FormHelperText/FormHelperText';
import Input from '@mui/material/Input/Input';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import isEmpty from 'lodash/isEmpty';
import React from 'react';
import { SingleSelect } from 'react-select-material-ui';
import OptionsPatternString, { TYPE } from './OptionsPatternString';
import { SxProps } from '@mui/material';

const styles: Record<string, React.CSSProperties> = {
  container: {
    alignItems: 'center',
    display: 'flex',
  },
  itemLeft: {
    flexGrow: 1,
  },
  itemRight: {
    flexGrow: 1,
    height: '1rem',
    paddingLeft: 4,
  },
};

const sxSingleSelect: SxProps = {
  '& [data-value]': {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
};

class PatternStringMaterialUi extends React.Component<
  PatternStringMaterialUiProps,
  PatternStringMaterialUiState
> {
  constructor(props: PatternStringMaterialUiProps) {
    super(props);

    const type: TYPE = props.type || props.defaultType || TYPE.CAN_BE_ANY;

    this.state = {
      type,
      value: props.value || props.defaultValue || '',
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
        sx={sxSingleSelect}
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
        type,
      });
    }

    this.props.onChange(type, this.state.value);
  };

  private handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;

    if (this.props.value === undefined) {
      this.setState({
        value,
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
