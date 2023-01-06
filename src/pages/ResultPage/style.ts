import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fff;
  min-height: calc(100vh - 150px - 70px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div:first-child {
    margin: 70px 0;
    width: 206px;
    height: 188px;
    background-image: url('https://user-images.githubusercontent.com/91241596/208525886-a70a6a08-cd68-4e4c-8d9b-034194f06535.png');
  }
`;
export const BMIDiet = styled.div`
  /* background-color: lavenderblush; */
  margin-top: 70px;
  text-align: center;
  > div:first-child {
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    color: #191919;
  }
  > div:nth-child(2) {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #191919;
    > span {
      color: #77ae59;
    }
  }
`;
export const ImgWrapper = styled.div`
  /* background-color: pink; */
  position: relative;
  display: flex;
  z-index: 10;
  > div:first-child {
    background-image: url('https://user-images.githubusercontent.com/91241596/209669551-f942af7b-02b6-4740-a013-fc32feaf4a2b.png');
    width: 180px;
    height: 180px;
    position: relative;
    bottom: 1750px;
    left: 850px;
  }
  > div:nth-child(2) {
    background-image: url('https://user-images.githubusercontent.com/91241596/209669817-cd7f6575-4fbc-4861-8bde-a98290d89765.png');
    width: 180px;
    height: 180px;
    position: relative;
    bottom: 1250px;
    right: 650px;
  }
  > div:nth-child(3) {
    background-image: url('https://user-images.githubusercontent.com/91241596/209669909-2f75bde4-08a9-4dae-afe2-80031ba91956.png');
    width: 180px;
    height: 180px;
    position: relative;
    bottom: 700px;
    left: 550px;
  }
`;
