import React from 'react';
import CompanyLogo from '../../../assets/icons/jetsetgo.svg'
import UserProfileIcon from '../../../assets/icons/user-profile.svg'
import * as S from './styles'

const Header = () => (
    <S.NavBar>
        <S.CompanyLogo>
            <S.Image src={CompanyLogo} alt='company_logo' />
            <S.Name>Jet Set Go</S.Name>
        </S.CompanyLogo>
        <S.NavLink>
            <a href='javascript:void(0)'>Home</a>
            <a href='javascript:void(0)'>Dashboard</a>
            <a href='javascript:void(0)'>About</a>
            <a href='javascript:void(0)'>Company</a>
        </S.NavLink>
        <S.UserProfile>
            <img src={UserProfileIcon} alt='user-profile' />
        </S.UserProfile>
    </S.NavBar>
)

export default Header;