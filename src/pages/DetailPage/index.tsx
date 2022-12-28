import React from 'react';
import * as S from './style';

export const DetailPage = () => {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Top>
            <div>메뉴 이미지</div>
            <S.TopInfo>
              <div>식단명</div>
              <div>{localStorage.Name}</div>
              <S.Table>
                <div>
                  <div>칼로리</div>
                  <div>탄수화물</div>
                  <div>단백질</div>
                  <div>지방</div>
                </div>
                <div>
                  <div>123 Kcal</div>
                  <div>1 g</div>
                  <div>1 g</div>
                  <div>1 g</div>
                </div>
              </S.Table>
            </S.TopInfo>
          </S.Top>
          <S.Mid>
            <div>음식정보</div>
            <div>
              아삭하고 풋풋한 향의 마늘종은 마늘의 알싸한 맛을 내는 알리신부터 식이섬유, 비타민 등
              좋은 영양분이 풍부하죠. 마늘종을 좀 더 특별하게 즐길 수 있도록 그리팅이 직접 만든
              굴소스에 제주 흑돈과 함께 볶아 감칠맛이 맴도는 샐러드 토핑으로 담았어요. 여기에 감자를
              푹 삶아 으깬 뒤 아마씨와 마요네즈에 버무린 메쉬드포테이토는 부드럽고, 담백한 맛을
              더해줍니다. 참나물, 치커리 등 신선한 잎채소 위에 돼지 마늘종 볶음과 구운 버섯,
              메쉬드포테이토를 올리고 산뜻함을 더해줄 방울토마토와 마늘 레몬 오일 드레싱을 곁들이면
              훌륭한 밸런스의 한 끼 식사가 완성돼요.
            </div>
          </S.Mid>
          <S.Bot>
            <S.BotL>
              <div>식단 / 추천 칼로리 비교</div>
              <div></div>
              <S.TextWrapper>
                <div>식단명</div>
                <div>{localStorage.Name} Kcal</div>
              </S.TextWrapper>
            </S.BotL>
            <S.BotR>
              <div>영양소 비율 그래프</div>
              <div></div>
            </S.BotR>
          </S.Bot>
        </S.Wrapper>
      </S.Container>
    </>
  );
};
