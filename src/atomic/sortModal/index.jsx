import React from 'react'
import RadioButton from '../radioButton'
import * as S from './styles'

const SortModal = ({
    selectedSortOption,
    sortOptions,
    setSortOption,
}) => {

    const onChangeHandler = (option) => {
        setSortOption(option);
    }
    return (
        <S.ModalContainer>

            {sortOptions?.map((option, index) => (
                <>
                    <RadioButton
                        key={index}
                        label={option.label}
                        value={option?.value == selectedSortOption?.value}
                        onChange={() => onChangeHandler(option)}
                    />
                    {index !== sortOptions.length - 1 ? <S.Separator /> : null}
                </>
            ))}
        </S.ModalContainer>
    )
}

export default SortModal