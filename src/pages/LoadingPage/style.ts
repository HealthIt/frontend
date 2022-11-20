import styled from 'styled-components';
export const Container = styled.div`
  background-color: mistyrose;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = styled.div`
  width: 412px;
  height: 466px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div:first-child {
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 700;
    line-height: 36px;
    align-items: center;
    justify-content: center;
  }
  div:nth-child(2) {
    margin-bottom: 50px;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
  }
  position: relative;
`;
export const Circle = styled.div`
  /* background-color: ${({ theme }) => theme.palette.Ellipse33}; */
  background-color: #ebf6e6;
  width: 280px;
  height: 280px;
  border-radius: 50%;
`;
export const Tomatos = styled.div`
  background-image: url(https://user-images.githubusercontent.com/91241596/202892183-5b726146-bb4e-4cee-8d7a-a4335a695a82.png);
  width: 412px;
  height: 280px;
  position: absolute;
  z-index: 1;
  bottom: 65px;
`;
