/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import * as S from './style';
import { BiChevronRight, BiChevronDown } from 'react-icons/bi';

interface Toggle {
  id: string;
  Q: string;
  A: string;
}

const toggleArr: Toggle[] = [
  {
    id: '0',
    Q: '헬스잇, BMI 란 무엇일까요?',
    A: 'Body Mass Index 의 약자로 체질량지수입니다. 제칠량지수는 체중을 신장의 제곱으로 나눈 값으로 지방의 양을 추정하는 비만 측정법입니다.',
  },
  {
    id: '1',
    Q: '헬스잇, 식단 추천은 어떤 원리로 진행되나요?',
    A: '사용자가 입력한 나이, 키, 몸무게 정보를 바탕으로 bMI 측정 후, 해당 영역별(저체중 - 정상 제중 - 과체중 - 비만 - 고도비만)로 맞춤형 식단을 추천해 드립니다.',
  },
];

const ToggleItem = ({ tog }: { tog: Toggle }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClick = () => {
    console.log('sdf');
    setIsOpen(!isOpen);
  };

  return (
    <S.TogWrap>
      <S.Qwrap>
        <S.Qusetion> {tog.Q} </S.Qusetion>
        <button onClick={onClick}>{isOpen ? <BiChevronDown /> : <BiChevronRight />}</button>
      </S.Qwrap>
      {isOpen ? <S.Answer> {tog.A} </S.Answer> : ''}
    </S.TogWrap>
  );
};
export const MainToggle = () => {
  const setTog = toggleArr.map((tog: Toggle) => {
    return <ToggleItem key={tog.id} tog={tog} />;
  });

  return (
    <>
      <S.Container>{setTog}</S.Container>
    </>
  );
};
