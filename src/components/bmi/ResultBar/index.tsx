/* eslint-disable no-unused-vars */
import React from 'react';
import { ResultToolTip } from '../ResultToolTip';
import * as S from './style';

export const ResultBar = () => {
  const h = localStorage.Height;
  if (localStorage.BMI < 18.5) {
    // console.log('저체중');
  } else if (localStorage.BMI < 22.9) {
    // console.log('정상');
  } else if (localStorage.BMI < 24.9) {
    // console.log('과체중');
  } else if (localStorage.BMI > 25) {
    // console.log('비만');
  }
  return (
    <div>
      <S.Wrapper>
        <ResultToolTip />
        <S.BarBMI>
          <div>
            <div>저체중</div>
            <div>0.0 - 18.4</div>
          </div>
          <div>
            <div>정상 체중</div>
            <div>18.5 - 22.9</div>
          </div>
          <div>
            <div>과체중</div>
            <div>23 - 24.9</div>
          </div>
          <div>
            <div>경도비만</div>
            <div>25 - 29.9</div>
          </div>
          <div>
            <div>중등도비만</div>
            <div>30.0 +</div>
          </div>
        </S.BarBMI>
        <S.Bar></S.Bar>
        <S.BarWeight>
          <div>{(18.4 * h * h).toFixed(2)} kg</div>
          <div>{(22.9 * h * h).toFixed(2)} kg</div>
          <div>{(24.9 * h * h).toFixed(2)} kg</div>
          <div>{(29.9 * h * h).toFixed(2)} kg</div>
        </S.BarWeight>
      </S.Wrapper>
    </div>
  );
};
