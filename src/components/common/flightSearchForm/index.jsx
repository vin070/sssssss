import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../../atomic/button'
import DateInput from '../../../atomic/dateInput/index'
import Dropdown from '../../../atomic/dropdown'
import { LocationOptions } from '../../../constants/constants'
import { flightActions } from '../../../redux/actions/flight'
import DownArrowIcon from '../../../assets/icons/downArrowBlue.svg';
import { SortOptions } from '../../../constants/constants'
import SortModal from '../../../atomic/sortModal'
import useOutsideClick from '../../../hooks/useOutsideClick'
import * as S from './styles'

const FlightSearchForm = () => {
  const sortContainerRef = useRef();
  const [source, setSource] = useState();
  const [destination, setDestination] = useState();
  const [departureDate, setDepartureDate] = useState();
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSortOption, setSortOption] = useState();

  const dispatch = useDispatch();

  const handleSort = (option) => {
    setSortOption(option)
    dispatch(flightActions.sortFlights(option))
    setSortOpen(false);
  }

  const onChangeHandler = (key) => (event) => {
    const value = event?.target?.value ?? event

    if (key == 'from') setSource(value)
    if (key == 'to') setDestination(value)
    if (key == 'departure') setDepartureDate(value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(flightActions.searchFlightList({ source: source.value, destination: destination.value, departureDate }))
  }

  useOutsideClick(sortContainerRef, handleSort)

  return (
    <S.FormContainer>
      <S.Source>
        <Dropdown
          label={'From'}
          selected={source}
          options={LocationOptions}
          onChange={onChangeHandler('from')}
          required
          disabledOption={destination}
        />
      </S.Source>
      <S.Destination>
        <Dropdown
          label={'To'}
          selected={destination}
          options={LocationOptions}
          onChange={onChangeHandler('to')}
          required
          disabledOption={source}
        />
      </S.Destination>
      <S.DateInputWrapper>
        <DateInput
          label={'Departure Date'}
          onChange={onChangeHandler('departure')}
          required
        />
      </S.DateInputWrapper>
      <S.ButtonWrapper>
        <Button
          type='submit'
          buttonText={'Search Flights'}
          disabled={false}
          onClick={handleSearch}
        />
      </S.ButtonWrapper>
      <S.SortByWrapper ref={sortContainerRef} onClick={() => setSortOpen(true)}>
        <S.SortBy>Sort by</S.SortBy>
        <S.DropDown src={DownArrowIcon} alt='dropdown' />
        {sortOpen ?
          <SortModal
            selectedSortOption={selectedSortOption}
            setSortOption={handleSort}
            sortOptions={SortOptions}
          />
          : null}
      </S.SortByWrapper>
    </S.FormContainer>
  )
}

export default FlightSearchForm