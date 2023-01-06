/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ResultBar } from '../../components/bmi/ResultBar';
import { ResultComment } from '../../components/bmi/ResultComment';
import { ResultInfo } from '../../components/bmi/ResultInfo';
import { Footer } from '../../components/common/Footer';
import { Header } from '../../components/common/Header';
import { ResultMenu } from '../../components/diet/ResultMenu';
import * as S from './style';
//로컬스토리지에 비엠아이 및 정보 값이 없으면 접근 불가
export const ResultPage = () => {
  const bmi = localStorage.BMI;
  const navigate = useNavigate();
  useEffect(() => {
    if (bmi === undefined) {
      alert('결과를 보기위해서는 먼저 bmi계산이 필요합니다!');
      navigate('/bmi');
    }
  }, []);

  return (
    <>
      <Header />
      <S.Wrapper>
        <div></div>
        <ResultInfo />
        <ResultBar />
        <div>
          <ResultComment />
        </div>
        <S.BMIDiet>
          <div>
            {localStorage.Name} 님을 위해 <br />
            준비했어요!
          </div>
          <div>
            BMI 결과값에 맞춘 <span>추천 식단 레시피</span>
          </div>
        </S.BMIDiet>
        <ResultMenu />
        <S.ImgWrapper>
          <div></div>
          <div></div>
          <div></div>
        </S.ImgWrapper>
      </S.Wrapper>
      <Footer />
    </>
  );
};
