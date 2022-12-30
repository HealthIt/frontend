import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

export const Scroll = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <div>BMI지수로 시작하는 헬스잇 식단 프로그램</div>
          <button onClick={() => navigate('/bmi')}>지금 시작하기</button>
        </S.Wrapper>
      </S.Container>
    </>
  );
};
