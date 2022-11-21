import styled from 'styled-components';
export const Container = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 694px;

  div:first-child {
    margin-bottom: 24px;
    background-image: url(https://user-images.githubusercontent.com/91241596/203069088-a27f9cd4-eb98-4c6d-980c-7e2ca6b51b06.png);
    width: 344px;
    height: 174px;
  }
  div:nth-child(2) {
    margin-bottom: 10px;
    font-size: 40px;
    font-weight: 400;
    line-height: 48px;
  }
  div:nth-child(3) {
    margin-bottom: 100px;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
  }
`;
export const Btn = styled.div`
  width: 196px;
  height: 48px;
  background-color: #60bf6a;
  border-radius: 24px;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
