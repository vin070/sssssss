import React from 'react'
import Select from 'react-select';
import * as S from './styles';

const Dropdown = ({
    defaultValue = [],
    label,
    isMulti = false,
    name,
    options,
    isDisabled,
    onChange,
    required,
    selected,
    disabledOption = null
}) => {
    return (
        <>
            {label ? <S.Label>{label}</S.Label> : null}
            <Select
                defaultValue={defaultValue}
                isMulti={isMulti}
                name={name}
                value={selected}
                options={options.map(item => ({ ...item, isDisabled: disabledOption && item.value == disabledOption.value }))}
                isDisabled={isDisabled}
                onChange={onChange}
                required={required}
            />
        </>
    )
}

export default Dropdown;