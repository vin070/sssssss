import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Button from '../../../atomic/button'
import filterIcon from '../../../assets/icons/filter.svg'
import { AirlinesOptions, FlightClassOptions } from '../../../constants/constants';
import Dropdown from '../../../atomic/dropdown'
import RadioButton from '../../../atomic/radioButton'
import { flightActions } from '../../../redux/actions/flight';
import * as S from './styles'

const DEFAULT_FLIGHT_CLASS = { label: 'All', value: 'all' };

const Filter = () => {
    const [selectedFlightClass, setFlightClass] = useState(DEFAULT_FLIGHT_CLASS);
    const [selectedAirline, setAirline] = useState([]);
    const dispatch = useDispatch();

    const onChangeHandler = (key, selectedValue) => (option) => {
        const value = option;
        if (key == 'airline') setAirline(value);
        if (key == 'flightClass') setFlightClass(selectedValue);
    }

    const handleFilter = () => {
        dispatch(flightActions.applyFilters({ airline: selectedAirline, seatClass: selectedFlightClass?.value }))
    }

    const resetFilters = () => {
        setFlightClass(DEFAULT_FLIGHT_CLASS);
        setAirline([]);
        dispatch(flightActions.getFlightList())

    }

    return (
        <S.FilterContainer>
            <S.Header>
                <h3><img src={filterIcon} alt='' /> Filter</h3>
                <S.Reset onClick={resetFilters}>Reset</S.Reset>
            </S.Header>
            <S.Separator />
            <S.Airline>
                <h4>Airlines</h4><br />
                <Dropdown
                    label={'Select Airline'}
                    options={AirlinesOptions}
                    selected={selectedAirline}
                    isMulti
                    onChange={onChangeHandler('airline')}
                />

            </S.Airline>
            <S.Separator />
            <S.SeatClass>
                <h4>Flight Class</h4><br />
                {FlightClassOptions.map((option, index) => (
                    <RadioButton
                        key={index}
                        label={option.label}
                        value={option.value == selectedFlightClass.value}
                        onChange={onChangeHandler('flightClass', option)}
                    />
                ))}
            </S.SeatClass>
            <S.Separator />
            <S.Footer>
                <Button buttonText={'Apply Filters'} onClick={handleFilter} />
            </S.Footer>
        </S.FilterContainer>
    )
}

export default Filter