import React from 'react';
import * as S from './style';

export const Footer = () => {
  return (
    <div>
      <S.Wrapper>
        <S.Logo>헬스잇</S.Logo>
        <S.Text>
          <S.TopText>(주)헬스잇</S.TopText>
          <S.MidText>
            <br /> 대표자 전윤제 사업자 등록번호 106-81-86800
            <br /> 서울 용산구 한강로2가 2-194
          </S.MidText>
          <S.BotText>
            <br /> Copyright©2022 HealthEat All rights reserved.
          </S.BotText>
        </S.Text>
      </S.Wrapper>
    </div>
  );
};
