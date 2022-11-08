import React, { useState } from 'react';
import * as S from './style';
import { IoRocketOutline } from 'react-icons/io5';
import { BiChevronRight, BiChevronDown } from 'react-icons/bi';
import { MainToggle } from '../../components/common/MainToggle';

export const MainPage = () => {
  const [tog, setTog] = useState(false);

  const test = () => {
    console.log('test');
    setTog(!tog);
  };
  return (
    <div>
      <S.Wrap>
        <S.Banner>
          BMI지수를 겨냥한 <br />
          헬스잇 식단 프로그램
        </S.Banner>
        <S.TextWrap>
          <S.Top>
            <IoRocketOutline />
            &nbsp;인사이트
          </S.Top>
          <S.Mid>
            헬스-잇
            <br /> 데이터로 말하다
          </S.Mid>
          <S.MidSub>
            얼마나 합리적이고, 정확한지
            <br />
            그리고 어디까지 성장하는지
          </S.MidSub>
          <S.Btn>지금 시작하기</S.Btn>
          <S.Woojoo>우주인 이미지</S.Woojoo>
          <S.Bot>
            건강한 성장을 위해
            <br />
            필요한 지표들만 모아서
          </S.Bot>
        </S.TextWrap>
        <S.First>식단관리 잘하고 계신가요?</S.First>
        <S.ImgWrap>
          <S.Sec>영양소 보충은 잘하고 계신가요?</S.Sec>
          <S.Thi>얼마 정도만 먹어야 할까요?</S.Thi>
        </S.ImgWrap>
        <S.Fou>얼마나 더 먹을 수?</S.Fou>
        <S.Last>
          마지막 궁금증까지
          <br />
          확실하게 알려드릴게요.
        </S.Last>
        <S.ToggleWrap>
          <S.ToggleSub>
            헬스잇, BMI 테스트는 어떤 원리로 진행되나요?
            <S.ToggleIcon onClick={test}>
              {tog ? <BiChevronDown /> : <BiChevronRight />}
            </S.ToggleIcon>
          </S.ToggleSub>
          {tog ? <MainToggle /> : ''}
        </S.ToggleWrap>
      </S.Wrap>
    </div>
  );
};
