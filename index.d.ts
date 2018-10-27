import * as React from "react";

export interface PatternStringMaterialUiProps extends React.Props<PatternStringMaterialUi> {
  helperText?: string;
  label?: string;
  onChange: (type?: string, value?: string) => void;
  style?: React.CSSProperties;
  type?: "can be any" | "is exact" | "start with" | "ends with" | "contains";
  value?: string;
}

declare class PatternStringMaterialUi extends React.Component<PatternStringMaterialUiProps> {}

declare module "pattern-string-material-ui" {
}

export default PatternStringMaterialUi;
