import styled from 'styled-components';
export const Wrapper = styled.div`
  margin-bottom: 80px;
`;
export const BMIResult = styled.div`
  /* background-color: mistyrose; */
  text-align: center;
  > div:first-child {
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    color: #191919;
  }
  > div:nth-child(2) {
    /* background-color: red; */
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #191919;
    display: flex;
    flex-direction: column;
  }
  > button {
    margin-top: 30px;
    background-color: #00780c;
    width: 184px;
    height: 48px;
    border-radius: 24px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
  }
`;
export const BMIResult1 = styled.div`
  display: flex;
  > div {
    margin: 0 50px 10px;
  }
`;
