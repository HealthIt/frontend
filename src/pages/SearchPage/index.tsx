/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import * as S from './style';
import { HiOutlineSearch } from 'react-icons/hi';
import { SearchMenu } from '../../components/diet/SearchMenu';
import { Header } from '../../components/common/Header';
import { Footer } from '../../components/common/Footer';

export const SearchPage = () => {
  const searchData = localStorage.sarch;
  const [search, setSearch] = useState('');
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
    localStorage.setItem('searchData', e.target.value);
  };
  const onReset = () => {
    setSearch('');
    localStorage.setItem('searchData', search);
    window.location.reload();
  };
  return (
    <>
      <Header />
      <S.Wrapper>
        <div>헬스-잇 검색하기</div>
        <S.InputWrapper>
          <input
            placeholder='식단 및 재료를 입력해 주세요.'
            onChange={onSearch}
            value={searchData}
          />
          <S.InputBtn onClick={() => onSearch}>
            <HiOutlineSearch />
          </S.InputBtn>
          <S.TestBtn onClick={onReset}>X</S.TestBtn>
        </S.InputWrapper>

        <SearchMenu />
      </S.Wrapper>
      <Footer />
    </>
  );
};
