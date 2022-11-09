import React from 'react';
import { RecommenMenu } from '../../components/bmi/RecommendMenu';
import * as S from './style';

export const BMIPage = () => {
  return (
    <div>
      <S.Wrapper>
        <div className='section1'>
          <S.TextWrap>
            <S.Logo1>원</S.Logo1>
            <S.Sub1>헬스-잇 BMI 계산기</S.Sub1>
            <S.Con1>정확한 결과를 위해 기본정보 입력이 필요합니다.</S.Con1>
          </S.TextWrap>
          <div className='userInput'>
            <S.FlexWrap>
              <S.InputWrap>
                <S.InputTop>성별을 선택해주세요</S.InputTop>
                {/* 클릭시 색상변경 */}
                <div>
                  <S.Input1Btn>남자</S.Input1Btn>
                  <S.Input1Btn>여자</S.Input1Btn>
                </div>
              </S.InputWrap>
              <S.InputWrap>
                <S.InputTop>나이를 입력해주세요</S.InputTop>
                <S.InputText>
                  <S.InputInput placeholder='21' /> 살
                </S.InputText>
              </S.InputWrap>
            </S.FlexWrap>
            <S.FlexWrap>
              <S.InputWrap>
                <S.InputTop>키를 입력해주세요</S.InputTop>
                <S.InputText>
                  <S.InputInput placeholder='170' /> cm
                </S.InputText>
              </S.InputWrap>
              <S.InputWrap>
                <S.InputTop>몸무게를 입력해주세요</S.InputTop>
                <S.InputText>
                  <S.InputInput placeholder='69' /> kg
                </S.InputText>
              </S.InputWrap>
            </S.FlexWrap>
            <S.Test>
              <S.Btn>BMI 계산하기</S.Btn>
            </S.Test>
          </div>
        </div>
        <div className='section2'>
          <S.Sub2>BMI 지수</S.Sub2>
          <S.Sub22>표</S.Sub22>
          <S.Result>
            <div>개인 BMI</div>
            <div>현재 몸무게</div>
            <div>이상적인 몸무게 범위</div>
          </S.Result>
          <S.ResultState>결과상태</S.ResultState>
        </div>
        <RecommenMenu />
      </S.Wrapper>
    </div>
  );
};
