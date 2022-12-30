import React from 'react';
import * as S from './style';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <S.Wrapper>
        <S.Logo
          onClick={() => {
            navigate('/');
          }}
        ></S.Logo>

        <S.Menu>
          <Link to='/'>
            <S.MenuList>헬스잇</S.MenuList>
          </Link>
          <Link to='/recommend'>
            <S.MenuList>식단보기</S.MenuList>
          </Link>
          <Link to='/bmi'>
            <S.MenuList>계산하기</S.MenuList>
          </Link>
        </S.Menu>
      </S.Wrapper>
    </div>
  );
};
