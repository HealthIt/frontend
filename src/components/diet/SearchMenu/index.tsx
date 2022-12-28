/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState } from 'react';

export const SearchMenu = () => {
  const [menu, setMenu] = useState<any[]>([]);
  const bmi = localStorage.BMI;
  async function getSearch() {
    try {
      axios
        .get(`http://52.78.0.222/foods/v1/?irdntNm=INGREDIENT_NAME&bmi=${bmi}&page=0&size=3`)
        .then((response) => {
          setMenu(response.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(menu);
  // const searchList = () => {
  //   const filtered = menu.filter((itemList)=>{
  //     return itemList.data.content.[].foodNm
  //   })
  // };
  return (
    <>
      <button onClick={getSearch}>test</button>
      <div></div>
    </>
  );
};
