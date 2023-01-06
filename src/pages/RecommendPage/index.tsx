/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { RecoMenu } from '../../components/diet/RecoMenu';
import * as S from './style';
import { HiOutlineSearch } from 'react-icons/hi';
import { SearchMenu } from '../../components/diet/SearchMenu';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/common/Header';
import { Footer } from '../../components/common/Footer';

export const RecommendPage = () => {
  const navigate = useNavigate();
  //inputValue
  const [userInput, setUserInput] = useState('');
  const onInput = (e: any) => {
    setUserInput(e.target.value);
    // console.log(userInput);
    localStorage.setItem('search', e.target.value);
  };
  return (
    <>
      <Header />
      {/* <SearchMenu /> */}
      <S.Wrapper>
        <div></div>
        <div>헬스-잇 추천 식단보기</div>
        <div>
          헬스잇 추천하기 서비스는 사용자의 BMI에 맞는 식단 정보를 제공합니다
          <br />
          현재 자신의 몸에 맞는 식단들을 알아보세요!
        </div>
        <S.InputWrapper
          onClick={(e) => {
            navigate('/search');
          }}
        >
          <input
            placeholder='더 많은 식단 검색하러가기'
            value={userInput}
            onChange={onInput}
            // onKeyUp={onKeyUp}
          />
          <button>
            <HiOutlineSearch />
          </button>
        </S.InputWrapper>
        <S.RecoDiet>
          <div>
            식단 고르기 어려우신가요?
            <br />
            헬스-잇이 준비했습니다!
          </div>
          <div>{localStorage.Name} 님의 BMI 결과 맞춤 식단 추천 모음</div>
          <S.Slide>
            <RecoMenu />
          </S.Slide>
        </S.RecoDiet>
      </S.Wrapper>
      <Footer />
    </>
  );
};
