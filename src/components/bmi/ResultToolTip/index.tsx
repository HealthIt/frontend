/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import * as S from './style';

export const ResultToolTip = () => {
  const bmi = localStorage.BMI;
  //bmi에 따른 툴팁과 위치 조절 state
  const [style, setStyle] = useState({
    right: '0',
    color: '#F1F5DD',
  });
  useEffect(() => {
    if (localStorage.BMI < 18.5) {
      console.log('저체중');
      setStyle({ right: '512px', color: '#0D6717' });
    } else if (localStorage.BMI < 22.9) {
      console.log('정상');
      setStyle({ right: '256px', color: '#C9DF8D' });
    } else if (localStorage.BMI < 24.9) {
      console.log('과체중');
      setStyle({ right: '0', color: '#ACD179' });
    } else if (localStorage.BMI < 29.9) {
      console.log('경도비만');
      setStyle({ right: '-256px', color: '#77AE59' });
    } else if (localStorage.BMI > 30) {
      console.log('중등도비만');
      setStyle({ right: '-512px', color: '#0D6717' });
    }
  }, [bmi]);

  return (
    <>
      <S.Wrapper style={style}>
        {localStorage.Name}님의 BMI
        <br />
        {localStorage.BMI}
      </S.Wrapper>
    </>
  );
};
