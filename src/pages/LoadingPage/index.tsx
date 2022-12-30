import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components/common/Footer';
import { Header } from '../../components/common/Header';
import * as S from './style';

export const LoadingPage = () => {
  const navigation = useNavigate();
  const loading = () => {
    setTimeout(() => {
      navigation('/result');
    }, 4000);
  };
  useEffect(() => {
    loading();
    return () => {
      console.log('페이지 로딩중');
    };
  });

  return (
    <>
      <Header />
      <S.Container>
        <S.Wrapper>
          <div>
            {localStorage.Name} 님의 BMI 결과를 <br />
            계산하고 있어요
          </div>
          <div>잠시만 기다려주세요</div>
          <div></div>
        </S.Wrapper>
      </S.Container>
      <Footer />
    </>
  );
};
