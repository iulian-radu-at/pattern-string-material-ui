import * as React from "react";

import FormHelperText from "@material-ui/core/FormHelperText/FormHelperText";
import Input from "@material-ui/core/Input/Input";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import { Dictionary, isEmpty } from "lodash";
import { SingleSelect } from "react-select-material-ui";

const styles: Dictionary<React.CSSProperties> = {
  checkbox: {
    padding: "0 5px 0 0"
  },
  container: {
    alignItems: "center",
    display: "flex"
  },
  itemLeft: {
    flexGrow: 1
  },
  itemRight: {
    flexGrow: 1
  }
};

const optionsPatternString = [
  "can be any",
  "is exact",
  "start with",
  "ends with",
  "contains"
];

class PatternStringMaterialUi extends React.Component<
  PatternStringMaterialUiProps,
  PatternStringMaterialUiState
> {
  constructor(props: PatternStringMaterialUiProps) {
    super(props);

    this.state = {
      type: props.type || optionsPatternString[0],
      value: props.value || ""
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
        value={this.props.type || optionsPatternString[0]}
        options={optionsPatternString}
        onChange={this.handleChangePattern}
      />
    );
  }

  private renderInput() {
    const isInputEnabled: boolean = this.state.type !== optionsPatternString[0];

    return (
      <Input
        disabled={isInputEnabled === false}
        fullWidth={true}
        onChange={this.handleChangeInput}
        value={this.props.value}
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

  private handleChangePattern = (type: string) => {
    this.setState({
      type
    });

    this.props.onChange(type, this.state.value);
  };

  private handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;
    this.setState({
      value
    });
    this.props.onChange(this.state.type, value);
  };
}

interface PatternStringMaterialUiState {
  type?: string;
  value?: string;
}

interface PatternStringMaterialUiProps {
  helperText?: string;
  id?: string;
  label?: string;
  onChange: (type?: string, value?: string) => void;
  style?: React.CSSProperties;
  type?: "can be any" | "is exact" | "start with" | "ends with" | "contains";
  value?: string;
}

export default PatternStringMaterialUi;
