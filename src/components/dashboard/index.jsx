import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../common/filter';
import FlightCard from '../common/flightCard';
import FlightSearchForm from '../common/flightSearchForm';
import Header from '../common/header';
import { flightActions } from '../../redux/actions/flight';
import FlightCardLoader from '../common/skeleton-loaders/flightCardLoader'
import * as S from './styles'

const Dashboard = () => {
    const [flights, setFlights] = useState();
    const { flightList, loading } = useSelector(({ flightReducer }) => flightReducer);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(flightActions.getFlightList());
    }, [])

    useEffect(() => {
        if (!flightList?.length) return;
        setFlights(flightList)
    }, [flightList])

    return (
        <>
            <S.Wrapper>
                <Header />
                <FlightSearchForm />
            </S.Wrapper>
            <S.Content>
                <S.FilterWrapper>
                    <Filter />
                </S.FilterWrapper>
                <S.CardWrapper>
                    {!loading ? flights?.map((flight, index) => (
                        <FlightCard flightDetails={flight} key={index} />
                    )) : <FlightCardLoader />}
                </S.CardWrapper>
            </S.Content>
        </>
    )
}

export default Dashboard;