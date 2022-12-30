import React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/common/Header';
import { Footer } from '../../components/common/Footer';

export const ErrorPage = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate('/');
  };
  return (
    <>
      <Header />
      <S.Container>
        <S.Wrapper>
          <div></div>
          <div>죄송합니다. 현재 페이지는 찾을 수 없습니다.</div>
          <div>요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요 :)</div>
          <S.Btn onClick={home}>홈으로 이동</S.Btn>
        </S.Wrapper>
      </S.Container>
      <Footer />
    </>
  );
};
