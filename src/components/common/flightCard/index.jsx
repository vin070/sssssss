import React from 'react';
import fligtIcon from '../../../assets/icons/flight.svg'
import seatIcon from '../../../assets/icons/seat.svg'
import facilityIcon from '../../../assets/icons/facility.svg'
import aircraftIcon from '../../../assets/icons/aircraft.svg'
import gateIcon from '../../../assets/icons/gate.svg'
import RupeeIcon from '../../../assets/icons/rupee.svg'
import planeIcon from '../../../assets/icons/plane.svg'
import Button from '../../../atomic/button';
import { DateFormatConverter } from '../../../utils/utils';
import Tooltip from '../../../atomic/tooltip';
import ChipsModal from '../../../atomic/chipsModal';
import { Facilities } from '../../../constants/constants';
import * as S from './styles'

const FlightCard = ({ flightDetails }) => {
    return (
        <S.Container>
            <S.CardRow>
                <S.Detail>
                    <S.DetailWrapper>
                        <S.FlightIcon><img src={fligtIcon} alt='flight-icon' /></S.FlightIcon>
                        <S.FlightName>{flightDetails?.airline}</S.FlightName>
                    </S.DetailWrapper>
                    <S.DetailWrapper>
                        <S.FlightNumber>{flightDetails?.flightNumber}</S.FlightNumber>
                        <S.FlightClass> {flightDetails?.seatClass}</S.FlightClass>
                    </S.DetailWrapper>
                </S.Detail>
                <S.Detail>
                    <S.DetailWrapper>
                        <S.DepartureTime>{DateFormatConverter(flightDetails?.departureTime)}</S.DepartureTime>
                        <S.MotionLine>---------
                            <img src={planeIcon} alt='' />
                            ---------</S.MotionLine>
                        <S.ArrivalTime>{DateFormatConverter(flightDetails?.arrivalTime)}</S.ArrivalTime>
                    </S.DetailWrapper>
                    <S.DetailWrapper>
                        <S.Source>{flightDetails?.origin}</S.Source>
                        <S.Duration>{flightDetails?.duration}</S.Duration>
                        <S.Destination>{flightDetails?.destination}</S.Destination>
                    </S.DetailWrapper>
                </S.Detail>
            </S.CardRow>
            <S.FlightInfo>
                <S.Info><img src={seatIcon} alt='' /> {`${flightDetails?.seatsAvailable} seats available`}</S.Info>
                <S.Info><img src={aircraftIcon} alt='' />{flightDetails?.aircraft}</S.Info>
                <Tooltip
                    id={'facilities'}
                    position='bottom'
                    htmlContent={<ChipsModal chips={Facilities} />}
                >
                    <S.Info><img src={facilityIcon} alt='' />Facilities</S.Info>
                </Tooltip>

                <S.Info><img src={gateIcon} alt='' />Gate: {`${flightDetails?.gate}`}</S.Info>
            </S.FlightInfo>
            <S.CardRow>
                <S.Price><img src={RupeeIcon} alt='rupee-icon' /> {flightDetails?.price}</S.Price>
                <Button
                    buttonText={'Select Flight'}
                    onClick={() => { }}
                />
            </S.CardRow>
        </S.Container>
    )
}

export default FlightCard;