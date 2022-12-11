import * as React from 'react';

export interface PatternStringMaterialUiProps {
  helperText?: string;
  label?: string;
  onChange: (type?: TYPE, value?: string) => void;
  style?: React.CSSProperties;
  type?: TYPE;
  value?: string;
}

declare class PatternStringMaterialUi extends React.Component<PatternStringMaterialUiProps> {}

declare module 'pattern-string-material-ui' {}

export enum TYPE {
  CAN_BE_ANY,
  IS_EXACT,
  START_WITH,
  ENDS_WITH,
  CONTAINS,
}

export default PatternStringMaterialUi;
