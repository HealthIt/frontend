/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RecoMenu } from '../RecoMenu';
import * as S from './style';

interface Sinter {
  onSearchMenu: () => void;
}

export const SearchMenu = () => {
  const [searchMenu, setSearchMenu] = useState<any[]>([]);

  async function getSearch() {
    try {
      axios.get(`http://52.78.0.222/foods/v1/?irdntNm=&bmi=&page=0&size=43`).then((response) => {
        setSearchMenu(response.data.data.content);
      });
      console.log(searchMenu);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getSearch();
  }, []);
  //검색어 로컬스토리지 저장하여
  const searchData = localStorage.searchData;
  //음식카드 배열 필터링
  const test = searchMenu.filter((name) => name.foodNm.includes(searchData));

  const searchList = test.map((name) => {
    return (
      <S.FoodWrapper key={name.id}>
        <Link to={`/detail/${name.id}`}>
          <div>
            <img
              src={name.img}
              alt={name.foodNm}
              width='290px'
              height='220px'
              style={{ borderRadius: '20px' }}
            />
          </div>
          <S.FoodNm>{name.foodNm}</S.FoodNm>
          <S.FoodDesc>{name.foodDesc}</S.FoodDesc>
        </Link>
      </S.FoodWrapper>
    );
  });
  return (
    <>
      {/* <button onClick={() => getSearch()}>test</button> */}
      <S.FoodContainer>{searchList}</S.FoodContainer>
      {/* <RecoMenu /> */}
    </>
  );
};
