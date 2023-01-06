import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  > div:first-child {
    margin-top: 130px;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    /* identical to box height */

    color: #000000;
  }
`;
export const InputWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  position: relative;
  > input {
    width: 730px;
    height: 50px;
    background: #f2f2f2;
    border-radius: 10px 0px 0px 10px;
    padding: 16px 0 16px 18px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */
    ::placeholder {
      color: #ababab;
    }
  }
`;
export const InputBtn = styled.button`
  background-color: #60bf6a;
  color: #fff;
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 50px;
  border-radius: 0px 10px 10px 0px;
`;
export const TestBtn = styled.button`
  /* background-color: #fff; */
  height: 30px;
  width: 36px;
  /* border-radius: 10px; */
  position: absolute;
  margin: auto;
  left: 680px;
  top: 10px;
  color: #60bf6a;
  font-size: 28px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;
