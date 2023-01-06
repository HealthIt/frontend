import React from 'react';
import * as S from './style';
import { HiOutlineSearch } from 'react-icons/hi';
import { SearchMenu } from '../../components/diet/SearchMenu';

export const SearchPage = () => {
  return (
    <>
      <S.Wrapper>
        <div>헬스-잇 검색하기</div>
        <S.InputWrapper>
          <input
            placeholder='식단 및 재료를 입력해 주세요.'
            // value={userInput}
            // onChange={onInput}
            // onKeyUp={onKeyUp}
          />
          <button
            onClick={(e) => {
              console.log('버튼클릭');
              // navigate('/search');
            }}
          >
            <HiOutlineSearch />
          </button>
        </S.InputWrapper>
        <SearchMenu />
      </S.Wrapper>
    </>
  );
};
