import React, { useState } from 'react';
import * as S from './style';
import { BiChevronRight, BiChevronDown } from 'react-icons/bi';
import { MainToggle } from '../../components/common/MainToggle';
import { useNavigate } from 'react-router-dom';

export const MainPage = () => {
  const [tog, setTog] = useState(false);
  const navigate = useNavigate();
  const nav = () => {
    navigate('/bmi');
  };
  const test = () => {
    console.log('test');
    setTog(!tog);
  };
  return (
    <S.Container>
      <S.Wrap>
        <S.Banner>
          <S.BannerInner>
            BMI지수를 겨냥한 <br />
            <span>헬스잇 식단 프로그램</span>
            <div>
              Health-eat Accurate diet management <br />
              based on BMI index
            </div>
            <button onClick={nav}>지금 시작하기</button>
          </S.BannerInner>
        </S.Banner>
        <S.Section1>
          <span>
            헬스-잇 <br />
          </span>
          <span>데이터로 말하다</span>
          <div>
            얼마나 합리적이고, 정확한지 <br />
            그리고 어디까지 성장하는지
          </div>
        </S.Section1>
        <S.Section2>
          <span>
            헬스-잇 <br />
          </span>
          <span>
            건강한 성장을 위한 <br />
          </span>
          <span>
            필요한 지표들을 한눈에 <br />
          </span>
        </S.Section2>
        <S.First>
          <S.Inner>
            <div>주간 칼로리 소비량 그래프</div>
            <div>
              식단관리 잘하고 <br /> 계신가요?
            </div>
            <div>
              최신 데이터 기술로 <br /> 정확한 칼로리 소비량을 확인해보세요.
            </div>
          </S.Inner>
        </S.First>
        <S.ImgWrap>
          <S.Sec>
            <S.Inner>
              <div>일일 영양소 섭취</div>
              <div>
                영양소 보충은 <br /> 잘하고 계신가요?
              </div>
            </S.Inner>
          </S.Sec>
          <S.Thi>
            <S.Inner>
              <div>일일 권장 칼로리</div>
              <div>
                얼마 정도만 <br /> 먹어야할까요?
              </div>
            </S.Inner>
          </S.Thi>
        </S.ImgWrap>
        <S.Fou>
          <S.Inner>
            <div>일일 칼로리 요약</div>
            <div>
              얼마나 더 <br /> 먹을 수 있을까요?
            </div>
            <div>
              BMI에 맞춘 칼로리 요약 리포트로 <br /> 하루 칼로리를 확인해보세요.
            </div>
          </S.Inner>
        </S.Fou>
        <S.Section2>
          <span>
            헬스-잇 <br />
          </span>
          <span>
            궁금증 해결까지 <br />
          </span>
          <span>
            확실하게 알려드려요 <br />
          </span>
        </S.Section2>
        <S.Tomato />
        <S.Paprika />
        <S.Leaf />
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
    </S.Container>
  );
};
