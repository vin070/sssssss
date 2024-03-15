import React from 'react';
import TextLoader from '../textLoader';
import LogoLoader from '../logoLoader';
import * as S from './styles';

const CardLoader = () => (
    <S.Container>
        <S.CardRow>
            <S.Detail>
                <S.DetailWrapper>
                    <S.FlightIcon><LogoLoader /></S.FlightIcon>
                    <S.FlightName><TextLoader width={100} height={30} /></S.FlightName>
                </S.DetailWrapper>
                <S.DetailWrapper>
                    <S.FlightNumber><TextLoader width={100} height={30} /></S.FlightNumber>
                    <S.FlightClass> <TextLoader width={100} height={30} /></S.FlightClass>
                </S.DetailWrapper>
            </S.Detail>
            <S.Detail>
                <S.DetailWrapper>
                    <TextLoader width={200} height={30} />
                    <TextLoader width={200} height={30} />
                </S.DetailWrapper><br />
                <S.DetailWrapper>
                    <TextLoader width={200} height={30} />
                    <TextLoader width={200} height={30} />
                </S.DetailWrapper>
            </S.Detail>
        </S.CardRow>
        <S.FlightInfo>
            {Array.from({ length: 4 }).map((_, index) => (
                <S.Info key={index}><TextLoader width={160} height={35} /></S.Info>
            ))}
        </S.FlightInfo>
        <S.CardRow>
            <S.Price><TextLoader width={100} height={40} /> </S.Price>
            <TextLoader width={200} height={40} />
        </S.CardRow>
    </S.Container>
)

export default CardLoader;