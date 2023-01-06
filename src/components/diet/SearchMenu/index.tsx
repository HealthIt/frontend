/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState } from 'react';
import * as S from './style';

export const SearchMenu = () => {
  const bmi = localStorage.BMI;
  const [searchMenu, setSearchMenu] = useState<any[]>([]);

  async function getSearch() {
    try {
      axios
        .get(`http://52.78.0.222/foods/v1/?irdntNm=&bmi=${bmi}&page=0&size=43`)
        .then((response) => {
          setSearchMenu(response.data.data.content);
        });
      console.log(searchMenu);
    } catch (error) {
      console.log(error);
    }
  }

  const searchList = searchMenu.map((name) => {
    return (
      <>
        <S.FoodWrapper key={name.id}>
          <div>
            <img
              src={name.foodDesc}
              alt={name.foodNm}
              width='290px'
              height='220px'
              style={{ borderRadius: '20px' }}
            />
          </div>
          <S.FoodNm>{name.foodNm}</S.FoodNm>
          <S.FoodDesc>{name.img}</S.FoodDesc>
        </S.FoodWrapper>
      </>
    );
  });
  return (
    <>
      <button onClick={() => getSearch()}>test</button>
      <S.Fo>{searchList}</S.Fo>
    </>
  );
};
