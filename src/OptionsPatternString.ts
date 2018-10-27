import { findIndex } from "lodash";

const optionsPatternString = [
  "can be any",
  "is exact",
  "start with",
  "ends with",
  "contains"
];

class OptionsPatternString {
  public static getOptions() {
    return optionsPatternString;
  }

  public static getOption(type?: TYPE) {
    switch (type) {
      case TYPE.CAN_BE_ANY:
        return optionsPatternString[0];
      case TYPE.IS_EXACT:
        return optionsPatternString[1];
      case TYPE.START_WITH:
        return optionsPatternString[2];
      case TYPE.ENDS_WITH:
        return optionsPatternString[3];
      case TYPE.CONTAINS:
        return optionsPatternString[4];
      default:
        return optionsPatternString[0];
    }
  }

  public static getType(option?: string) {
    switch (option) {
      case optionsPatternString[0]:
        return TYPE.CAN_BE_ANY;
      case optionsPatternString[1]:
        return TYPE.IS_EXACT;
      case optionsPatternString[2]:
        return TYPE.START_WITH;
      case optionsPatternString[3]:
        return TYPE.ENDS_WITH;
      case optionsPatternString[4]:
        return TYPE.CONTAINS;
      default:
        return TYPE.CAN_BE_ANY;
    }
  }
}

export enum TYPE {
  CAN_BE_ANY,
  IS_EXACT,
  START_WITH,
  ENDS_WITH,
  CONTAINS
}

export default OptionsPatternString;
