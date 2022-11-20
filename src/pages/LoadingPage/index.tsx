import React from 'react';
import * as S from './style';

export const LoadingPage = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <div>
          {'사용자 '}님의 BMI 결과를 <br />
          계산하고 있어요
        </div>
        <div>잠시만 기다려주세요</div>
        <S.Circle />
        <S.Tomatos />
      </S.Wrapper>
    </S.Container>
  );
};
