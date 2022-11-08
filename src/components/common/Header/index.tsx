import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <S.Wrapper>
        <S.Logo>헬스잇</S.Logo>
        <S.Menu>
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
