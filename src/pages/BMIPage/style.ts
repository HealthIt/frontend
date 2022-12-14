import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div:first-child {
    margin: 80px 0;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #191919;
  }
`;
export const InputWrapper = styled.div`
  /* background-color: mistyrose; */
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  height: 150px;
  > div {
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
  }
  > input {
    margin-bottom: 8px;
    background-color: #f8f8f8;
    width: 200px;
    border-bottom: 2px solid #7e7e7e;
    display: flex;
    text-align: center;
    &::placeholder {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #ababab;
    }
  }
  > span {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #ff3b3b;
  }
  > button {
    /* margin-right: 40px; */
    width: 180px;
    height: 48px;
    background: #f3f3f3;
    border-radius: 32px;
  }
  button:nth-child(1) {
    margin-right: 40px;
    color: red;
  }
`;
export const Gender = styled.div`
  > input {
    display: none;
    /* appearance: none; */
    /* -webkit-appearance: button;
    vertical-align: middle; */
  }
`;
export const RadioSpan = styled.span`
  background-color: #f3f3f3;
  display: inline-block;
  width: 180px;
  height: 48px;
  border: 1px solid #dfdfdf;
  border-radius: 32px;
  background-color: #ffffff;
  text-align: center;
  cursor: pointer;
  :checked {
    background-color: #113a6b;
    color: #ffffff;
  }
`;
export const BMIBtn = styled.button`
  background-color: #d2d2d2;
  margin-bottom: 144px;
  width: 196px;
  height: 48px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  border-radius: 24px;
`;
