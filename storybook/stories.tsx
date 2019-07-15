import PatternStringMaterialUi, { TYPE } from '../src/PatternStringMaterialUi';
import React from 'react';
import { storiesOf } from '@storybook/react';

const style: React.CSSProperties = {
  height: 20
};

const doNothing = (type?: TYPE, value?: string) => {};

const type2text = (type?: TYPE) => {
  switch (type) {
    case undefined:
      return '';
    case TYPE.CAN_BE_ANY:
      return 'Can be any - the value is ignored: ';
    case TYPE.CONTAINS:
      return 'Contains';
    case TYPE.ENDS_WITH:
      return 'Ends with';
    case TYPE.IS_EXACT:
      return 'Is exact';
    case TYPE.START_WITH:
      return 'Start with';
  }
};

const showSelectedValue = (id: string) => (type?: TYPE, value?: string) =>
  (document.getElementById(id).textContent = `${type2text(type)} ${value}`);

storiesOf('PatternStringMaterialUi', module)
  .add('the minimal component', () => (
    <div>
      <PatternStringMaterialUi onChange={doNothing} />
    </div>
  ))
  .add('with label', () => (
    <div>
      <PatternStringMaterialUi label="Filename" onChange={doNothing} />
    </div>
  ))
  .add('with helper text', () => (
    <div>
      <PatternStringMaterialUi
        helperText="Please select a type and a value (except for 'can be any')"
        onChange={doNothing}
      />
    </div>
  ))
  .add('with an initial type and value', () => (
    <div>
      <PatternStringMaterialUi defaultType={TYPE.ENDS_WITH} defaultValue=".pdf" onChange={showSelectedValue('itv')} />
      <div style={style} />
      Selected value: <span id="itv" />
    </div>
  ))
  .add('with fixed type and value', () => (
    <div>
      <PatternStringMaterialUi type={TYPE.ENDS_WITH} value=".pdf" onChange={showSelectedValue('ftv')} />
      <div style={style} />
      Selected value: <span id="ftv" />
    </div>
  ));
