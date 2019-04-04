# pattern-string-material-ui

A material-ui component which looks like a TEXTFIELD grouping together a dropdown and an input components

---

## Props

The component accepts the props defined bellow in the table.

### Props accepted by PatternStringMaterialUi

| Name       | Type                                  | Required | Default    | Description                                                                       |
| ---------- | ------------------------------------- | -------- | ---------- | --------------------------------------------------------------------------------- |
| helperText | string                                | no       | undefined  | The helper text of the field                                                      |
| id         | string                                | no       | undefined  | The id of the field                                                               |
| label      | string                                | no       | undefined  | The label of the field                                                            |
| onChange   | (type?: enum, value?: string) => void | yes      | -          | The callback function called when the value of the select or the input is changed |
| style      | CSSProperties                         | no       | undefined  | The style applied to the field                                                    |
| type       | enum                                  | no       | can be any | It is one of the following enums                                                  |
| value      | string                                | no       | undefined  | It is the value of the input field                                                |

### Values valid for type (they are also displayed in the dropdown)

| Enum       | Option in dropdown | Note                                             |
| ---------- | ------------------ | ------------------------------------------------ |
| CAN_BE_ANY | can be any         | when it is selected, the input field is disabled |
| IS_EXACT   | is exact           |                                                  |
| START_WITH | start with         |                                                  |
| ENDS_WITH  | ends with          |                                                  |
| CONTAINS   | contains           |                                                  |

---

## Versions

| PatternStringMaterialUi _uses_ | Material-ui | React  |
| -----------------------------: | :---------: | :----: |
|                          1.0.x |    3.2.0    | 16.5.2 |
|                          1.1.x |    3.6.0    | 16.6.3 |
|                          1.2.x |    3.9.2    | 16.8.1 |
|                          1.3.x |    3.9.3    | 16.8.6 |

### About versioning schema used for PatternStringMaterialUi

- Major - it will be increased if the major version of material-ui changes or there are breaking changes in the code of PatternStringMaterialUi
- Minor - it will be increased if no major version of the dependat package changes, but there are changes of the minor or patch versions of it
- Patch - it will be increased if there are no changes of the dependat packages, but there are non breaking changes in the code of PatternStringMaterialUi

---

## Example

The base component which allows to create read-only or creatable select components for selecting only one or more values:

```js
import * as React from "react";
import PatternStringMaterialUi, { TYPE } from "pattern-string-material-ui";
import { ColorsSelect } from "react-select-material-ui";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PatternStringMaterialUi label="Name" onChange={this.handleChangePattern} />
      </div>
    );
  }

  handleChangePattern = (type: TYPE, value: string) => {
    console.log({ type, value });
  };
}

export default App;
```

---

## Changelog

### 1.0.0

- pattern-string-material-ui is made publicly available

### 1.0.3

- Changed the type of returned argument for type in onChange from string to enum

### 1.0.4

- Fixed the export of TYPE

### 1.1.0

- Updated the react and material-ui packages

### 1.2.0

- Updated packages

### 1.3.0

- Updated packages
