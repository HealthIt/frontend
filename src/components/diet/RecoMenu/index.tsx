/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import * as S from './style';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const RecoMenu = () => {
  const bmi = localStorage.BMI;
  const [recoMenu, setRecoMenu] = useState<any[]>([]);
  async function getMenu() {
    try {
      axios.get(`http://52.78.0.222/foods/v1/bmi?count=5&gender=0&bmi=${bmi}`).then((response) => {
        setRecoMenu(response.data.data);
      });
    } catch (error) {
      console.log(error);
    }
    // console.log(recoMenu);
    // console.log('1', recoMenu[0]);
  }
  useEffect(() => {
    getMenu();
  }, []);

  // const menu = recoMenu.map((name) => console.log(name));
  // const menuIndex = recoMenu.map((nameIndex, index) => <p key={index}>{nameIndex}</p>);
  // // // keys {id, foodNm, calorie, img, irdntNames}

  const menuList = recoMenu.map((name) => {
    return (
      <S.MenuWrapper key={name.id}>
        <Link to={`/detail/${name.id}`}>
          <S.MenuImg>
            <img
              src={name.img}
              alt={name.foodNm}
              width='400px'
              height='300px'
              style={{ borderRadius: '20px 20px 10px 10px ' }}
            />
          </S.MenuImg>
          <S.TextWrapper>
            <S.MenuName>{name.foodNm}</S.MenuName>
            <S.MenuKcal>{name.calorie}Kcal</S.MenuKcal>
          </S.TextWrapper>
        </Link>
      </S.MenuWrapper>
    );
  });

  return (
    <>
      <S.Wrapper>
        <S.Menu>{menuList}</S.Menu>
      </S.Wrapper>
    </>
  );
};
