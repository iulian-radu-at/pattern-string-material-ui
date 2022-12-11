import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import PatternStringMaterialUi, { TYPE } from '../src/PatternStringMaterialUi';

const style: React.CSSProperties = {
  height: 20,
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
  (document.getElementById(id)!.textContent = `${type2text(type)} ${value}`);

export default {
  title: 'PatternStringMaterialUi',
  component: PatternStringMaterialUi,
} as ComponentMeta<typeof PatternStringMaterialUi>;

export const TheMinimalComponent: ComponentStory<
  typeof PatternStringMaterialUi
> = () => (
  <div>
    <PatternStringMaterialUi onChange={doNothing} />
  </div>
);

export const WithLabel: ComponentStory<typeof PatternStringMaterialUi> = () => (
  <div>
    <PatternStringMaterialUi label="Filename" onChange={doNothing} />
  </div>
);

export const WithHelperText: ComponentStory<typeof PatternStringMaterialUi> =
  () => (
    <div>
      <PatternStringMaterialUi
        helperText="Please select a type and a value (except for 'can be any')"
        onChange={doNothing}
      />
    </div>
  );

export const WithAnInitialTypeAndValue: ComponentStory<
  typeof PatternStringMaterialUi
> = () => (
  <div>
    <PatternStringMaterialUi
      defaultType={TYPE.ENDS_WITH}
      defaultValue=".pdf"
      onChange={showSelectedValue('itv')}
    />
    <div style={style} />
    Selected value: <span id="itv" />
  </div>
);

export const WithFixedTypeAndValue: ComponentStory<
  typeof PatternStringMaterialUi
> = () => (
  <div>
    <PatternStringMaterialUi
      type={TYPE.ENDS_WITH}
      value=".pdf"
      onChange={showSelectedValue('ftv')}
    />
    <div style={style} />
    Selected value: <span id="ftv" />
  </div>
);
