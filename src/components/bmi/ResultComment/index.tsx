/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

export const ResultComment = () => {
  const navigate = useNavigate();
  const onRecommend = () => {
    navigate('/recommend');
  };
  // console.log(bmi);
  const bmi = localStorage.BMI;
  const [topic, setTopic] = useState(<></>);
  const [cont, setCont] = useState(<></>);
  useEffect(() => {
    if (bmi < 18.4) {
      setTopic(
        <S.Topic>
          <S.TopicEmph>조금 더 분발</S.TopicEmph>&nbsp;해야겠어요!
        </S.Topic>,
      );
      setCont(
        <S.Content>
          칼로리를 적게 섭취하셨어요!
          <br /> 헬스-잇이 추천해 주는 칼로리가 높은 식단을 먹어보는 건 어떨까요?
          <br /> 기대 이상으로 맛있을 거에요!
        </S.Content>,
      );
    } else if (bmi < 22.9) {
      setTopic(
        <S.Topic>
          식단 관리를&nbsp;<S.TopicEmph>잘 하고 있어요!</S.TopicEmph>
        </S.Topic>,
      );
      setCont(
        <S.Content>
          칼로리를 알맞게 섭취하셨어요!
          <br /> 헬스-잇이 추천해 주는 칼로리가 건강한 식단을 먹어보는 건 어떨까요?
          <br /> 기대 이상으로 맛있을 거에요!
        </S.Content>,
      );
    } else if (bmi < 24.9) {
      setTopic(
        <S.Topic>
          <S.TopicEmph>조금 더 분발</S.TopicEmph>&nbsp;해야겠어요!
        </S.Topic>,
      );
      setCont(
        <S.Content>
          칼로리를 많이 섭취하셨어요!
          <br /> 헬스-잇이 추천해 주는 칼로리가 낮은 식단을 먹어보는 건 어떨까요?
          <br /> 기대 이상으로 맛있을 거에요!
        </S.Content>,
      );
    } else if (bmi > 25) {
      setTopic(
        <S.Topic>
          <S.TopicEmph>조금 더 분발</S.TopicEmph>&nbsp;해야겠어요!
        </S.Topic>,
      );
      setCont(
        <S.Content>
          칼로리를 많이 섭취하셨어요!
          <br /> 헬스-잇이 추천해 주는 칼로리가 낮은 식단을 먹어보는 건 어떨까요?
          <br /> 기대 이상으로 맛있을 거에요!
        </S.Content>,
      );
    }
  }, [bmi]);
  return (
    <>
      <S.Wrapper>
        <div>{topic}</div>
        <div>{cont}</div>
        <button onClick={onRecommend}>추천식단 바로가기</button>
      </S.Wrapper>
    </>
  );
};
