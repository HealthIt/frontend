/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { RecoMenu } from '../../components/diet/RecoMenu';
import * as S from './style';
import { HiOutlineSearch } from 'react-icons/hi';
import { SearchMenu } from '../../components/diet/SearchMenu';
import { useNavigate } from 'react-router-dom';

export const RecommendPage = () => {
  const navigate = useNavigate();
  //inputValue
  const [userInput, setUserInput] = useState('');
  const onInput = (e: any) => {
    setUserInput(e.target.value);
    console.log(userInput);
  };
  return (
    <>
      <SearchMenu />
      <S.Wrapper>
        <div></div>
        <div>헬스-잇 추천 식단보기</div>
        <div>
          헬스잇 추천하기 서비스는 사용자의 BMI에 맞는 식단 정보를 제공합니다
          <br />
          현재 자신의 몸에 맞는 식단들을 알아보세요!
        </div>
        <S.InputWrapper>
          <input
            placeholder='식단 및 재료를 입력해 주세요.'
            value={userInput}
            onChange={onInput}
            // onKeyUp={onKeyUp}
          />
          <button
            onClick={(e) => {
              console.log('버튼', userInput);
              navigate('/search');
            }}
          >
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
    </>
  );
};
