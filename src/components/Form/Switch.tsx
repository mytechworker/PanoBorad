import React from 'react';
import { useField } from 'formik';
import { Switch } from 'antd';

import StyleWrapper from './form.style';

export default ({ label, formik, ...props }: any): JSX.Element => {
  const [{ value, ...field }, meta] = useField(props);

  const { setFieldValue } = formik;
  const { error, touched } = meta;
  const { name, required, defaultChecked, onChange } = props;

  const handleOnChange = (name: any, option: any) => {
    let permissions = formik.values.permissions;
    let permition = { value: name, status: option };
    if ((permition as any).status) {
      permissions.push((permition as any).value as never);
      let prev;
      for (let item of permissions) {
        if (prev == item) {
          permissions.splice(permissions.indexOf(item), 1);
        }
        prev = item;
      }
    } else {
      for (let item of permissions) {
        if (item == (permition as any).value) {
          permissions.splice(permissions.indexOf(item), 1);
        }
      }
    }

    formik.setValues({
      ...formik.values,
      permissions: permissions,
    });

    setFieldValue(name, option);

    if (!!onChange) onChange(option);
  };

  return (
    <StyleWrapper className="input switch-input">
      {label && (
        <label htmlFor={name}>
          {label} {required && <span className="req-sign">*</span>}
        </label>
      )}

      <Switch
        id={name}
        data-test-id={name}
        {...props}
        {...field}
        checked={value}
        type="checkbox"
        defaultChecked={defaultChecked}
        onChange={(option) => handleOnChange(name, option)}
      />

      {touched && error && (
        <div className="text-danger">
          <span className="text-danger--text">{error}</span>
        </div>
      )}
    </StyleWrapper>
  );
};
