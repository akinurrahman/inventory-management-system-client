import { ControllerRenderProps } from 'react-hook-form';

import { SelectFieldProps } from '../../types';
import MultiSelect from './multi-selector';
import SelectField from './select-field';

export const renderSelectByType = (props: SelectFieldProps, field: ControllerRenderProps) => {
  switch (props.variant) {
    case 'multi-selector':
      return <MultiSelect props={props} field={field} />;
    default:
      return <SelectField props={props} field={field} />;
  }
};
