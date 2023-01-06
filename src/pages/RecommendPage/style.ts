import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div:first-child {
    margin-top: 40px;
    background-image: url('https://user-images.githubusercontent.com/91241596/209697612-5653f004-c1ef-49e1-b2b8-c581f6c8fcd4.png');
    width: 188px;
    height: 188px;
  }
  > div:nth-child(2) {
    margin-top: 36px;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    /* identical to box height */

    color: #191919;
  }
  > div:nth-child(3) {
    margin-top: 18px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;

    color: #191919;
  }
`;
export const InputWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  > input {
    width: 730px;
    height: 50px;
    background: #f2f2f2;
    border-radius: 10px 0px 0px 10px;
    padding: 16px 0 16px 18px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    cursor: pointer;
    /* identical to box height */
    ::placeholder {
      color: #ababab;
    }
  }
  > button {
    background-color: #60bf6a;
    color: #fff;
    font-size: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 50px;
    border-radius: 0px 10px 10px 0px;
  }
`;
export const RecoDiet = styled.div`
  background-color: #388939;
  margin-top: 50px;
  margin-bottom: 150px;
  width: 100vw;
  height: 595px;
  > div:first-child {
    margin-top: 40px;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    text-align: center;

    color: #ffffff;
  }
  > div:nth-child(2) {
    margin-top: 16px;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */

    text-align: center;

    color: #ffffff;
  }
`;
export const Slide = styled.div`
  /* overflow: hidden; */
  margin: 0 auto;
  width: 1920px;
  transform: translateX(-150px);
`;
