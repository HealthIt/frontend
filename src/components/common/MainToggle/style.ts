import styled from 'styled-components';

export const Container = styled.div`
  margin: 120px 0;
  width: 1280px;
`;
export const TogWrap = styled.div`
  margin-bottom: 80px;
  /* background-color: pink; */
  width: 1280px;
`;
export const Qwrap = styled.div`
  /* background-color: mistyrose; */
  /* margin-bottom: 32px; */

  display: flex;
  justify-content: space-between;
  text-align: center;
  padding-right: 10px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 66px;
    width: 1px;
    background-color: #aeb8c4;

    width: 1278px;
    height: 1px;
  }
  > button {
    font-size: 36px;
    display: flex;
    align-items: center;
    /* text-align: center;
    justify-content: center; */
  }
`;
export const Qusetion = styled.div`
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  color: #000000;
`;
export const Answer = styled.div`
  padding-top: 36px;
  padding-left: 30px;
  font-weight: 400;
  font-size: 25px;
  line-height: 34px;
  color: #000000;
`;
