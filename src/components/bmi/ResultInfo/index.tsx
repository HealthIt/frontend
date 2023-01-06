import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

export const ResultInfo = () => {
  const navigate = useNavigate();
  const onRecali = () => {
    localStorage.clear();
    navigate('/bmi');
  };
  return (
    <S.Wrapper>
      <S.BMIResult>
        <div>{localStorage.Name} 님의 BMI 지수 결과</div>
        <div>
          <S.BMIResult1>
            <div>이름 : {localStorage.Name}</div>
            <div>나이 : {localStorage.Age} 세</div>
          </S.BMIResult1>
          <S.BMIResult1>
            <div>키 : {localStorage.Height} m</div>
            <div>몸무게 : {localStorage.Weight} kg</div>
          </S.BMIResult1>
        </div>
        <button onClick={onRecali}>BMI 재측정하기</button>
      </S.BMIResult>
    </S.Wrapper>
  );
};
