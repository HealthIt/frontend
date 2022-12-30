/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Footer } from '../../components/common/Footer';
import { Header } from '../../components/common/Header';
import * as S from './style';
import { useLocation, useParams } from 'react-router-dom';

interface type {
  calorie?: number;
  carbs?: number;
  fat?: number;
  foodNm?: string;
}

export const DetailPage = () => {
  // const [menu, setMenu] = useState();
  const [menus, setMenus] = useState<any>([]);
  const location = useLocation();
  console.log('adfsf', location);
  let params = useParams();
  console.log('useParams', params);
  console.log(params);
  console.log(params.detailId);
  const menuId = params.detailId;
  console.log('menuId', menuId);

  const getMenu = async () => {
    const response = await axios.get(`http://52.78.0.222/foods/v1/${menuId}`);
    console.log('fetch', response);
    setMenus(response.data.data);
    console.log('responseData', menus);
    console.log(menus.foodNm);
  };
  useEffect(() => {
    getMenu();
  }, []);

  const menuDetail = () => {
    console.log('menuDetail:', menus);
    return <>{menus!.foodNm}</>;
  };

  // try {
  //   const response = axios.get(`http://52.78.0.222/foods/v1/${menuId}`);
  //   console.log('fetch', response);
  //   const menu = response.data.data;
  //   console.log('responseData', menu);
  // } catch (error) {
  //   console.log(error);
  // }
  return (
    <>
      <Header />
      <S.Container>
        <S.Wrapper>
          {/* <button onClick={getMenu}>test</button> */}
          <S.Top>
            <div>메뉴 이미지</div>
            <S.TopInfo>
              <div>{menus.foodNm}</div>
              <div>{menus.calorie} Kcal</div>
              <S.Table>
                <div>
                  <div>칼로리</div>
                  <div>탄수화물</div>
                  <div>단백질</div>
                  <div>지방</div>
                </div>
                <div>
                  <div>{menus.calorie} Kcal</div>
                  <div>{menus.carbs} g</div>
                  <div>{menus.protein} g</div>
                  <div>{menus.fat} g</div>
                </div>
              </S.Table>
            </S.TopInfo>
          </S.Top>
          <S.Mid>
            <div>음식정보</div>
            <div>{menus.foodDesc}</div>
          </S.Mid>
          <S.Bot>
            <S.BotL>
              <div>식단 / 추천 칼로리 비교</div>
              <div></div>
              <S.TextWrapper>
                <div>{menus.foodNm}</div>
                <div>{menus.calorie} Kcal</div>
              </S.TextWrapper>
            </S.BotL>
            <S.BotR>
              <div>영양소 비율 그래프</div>
              <div></div>
            </S.BotR>
          </S.Bot>
        </S.Wrapper>
      </S.Container>
      <Footer />
    </>
  );
};
