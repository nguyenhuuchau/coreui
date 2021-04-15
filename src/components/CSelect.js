import React, { useEffect, useState } from 'react'
import Select from 'react-select'
const CSelect = (props)  => {
  return <Select
    className={props.className}
    classNamePrefix={props.classNamePrefix}
    defaultValue={props.defaultValue}
    isDisabled={props.isDisabled}
    isLoading={props.isLoading}
    isClearable={props.isClearable}
    isRtl={props.isRtl}
    isSearchable={props.isSearchable}
    name={props.name}
    options={props.options}
    value={props.values}
    isMulti={props.isMulti}
    theme={theme => ({
      ...theme,
      borderRadius: 4,
      colors: {
        ...theme.colors,
        primary25: '#321fdb30',
        primary50: '#321fdb70',
        primary75: '#321fdbbf',
        primary: '#321fdb',
        danger: '#e55353',
      },
    })}
  />
};
export default CSelect
