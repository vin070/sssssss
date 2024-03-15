import React from 'react'
import * as S from './styles'

const ChipsModal = ({
    chips
}) => {
    return (
        <S.ModalContainer>
            {chips.map((chip, index) => (
                <S.Chip>
                    {chip}
                </S.Chip>
            ))}
        </S.ModalContainer>
    )
}

export default ChipsModal