import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
export const Wrap = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Banner = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(https://user-images.githubusercontent.com/91241596/202784589-e2e97e01-85f0-4414-a3a1-26815407a2f7.png);
`;
export const BannerInner = styled.div`
  margin: 92px 0 0 320px;
  color: #fff;
  font-size: 56px;
  font-weight: 400;
  line-height: 67px;
  & > span {
    font-weight: 500;
  }
  & > div {
    margin-top: 16px;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
  }
  & > button {
    margin-top: 30px;
    width: 196px;
    height: 48px;
    background-color: #00650a;
    border-radius: 24px;
    font-size: 18px;
    line-height: 21px;
    color: #fff;
  }
`;
export const Section1 = styled.div`
  /* background-color: mistyrose; */
  margin-top: 140px;
  margin-bottom: 300px;
  font-size: 50px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > span {
    background: linear-gradient(to top, #7ec585 40%, transparent 20%);
  }
  & > div {
    margin-top: 30px;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
  }
`;
export const Section2 = styled.div`
  /* background-color: mistyrose; */
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  font-size: 50px;
  line-height: 64px;
  & > span {
    /* background: linear-gradient(to top, #7ec585 30%, transparent 30%); */
    box-shadow: inset 0 -20px 0 #7ec585;
  }
`;
export const First = styled.div`
  margin-top: 88px;
  margin-bottom: 30px;
  width: 1280px;
  height: 448px;
  border-radius: 20px;
  background-image: url(https://user-images.githubusercontent.com/91241596/202880039-290294c1-0ffa-428e-a184-4b0a37e9491e.png);
  z-index: 3;
`;
export const Inner = styled.div`
  margin: 92px 0 0 110px;
  div:first-child {
    margin-bottom: 30px;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
  }
  div:nth-child(2) {
    margin-bottom: 50px;
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
  }
  div:nth-child(3) {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }
`;
export const ImgWrap = styled.div`
  /* background-color: salmon; */
  width: 1280px;
  display: flex;
  justify-content: space-between;
  z-index: 3;
`;
export const Sec = styled.div`
  width: 620px;
  height: 636px;
  border-radius: 20px;
  background-image: url(https://user-images.githubusercontent.com/91241596/202880155-77f81679-5373-4111-9b5c-313a9fa01bfb.png);
`;
export const Thi = styled.div`
  width: 620px;
  height: 636px;
  border-radius: 20px;
  background-image: url(https://user-images.githubusercontent.com/91241596/202880219-0c1fd67f-1c31-4cac-a868-6484eaa31b41.png);
`;
export const Fou = styled.div`
  margin-top: 40px;
  width: 1280px;
  height: 448px;
  border-radius: 20px;
  background-image: url(https://user-images.githubusercontent.com/91241596/202880238-59b32011-b2a0-4cd8-8d99-9e19c1464c57.png);
`;
export const Img = styled.div`
  display: flex;
`;
export const Tomato = styled.div`
  width: 290px;
  height: 290px;
  background-image: url(https://user-images.githubusercontent.com/91241596/202879541-0f9abe19-d990-4b72-90af-b68cfbf210a7.png);
  z-index: 0;
  position: relative;
  bottom: 1800px;
  right: 180px;
`;
export const Paprika = styled.div`
  width: 290px;
  height: 290px;
  background-image: url(https://user-images.githubusercontent.com/91241596/202879591-9bb600e5-295d-4fe3-8ece-44fa882d5ee2.png);
  z-index: 0;
  position: relative;
  bottom: 1350px;
  left: 800px;
`;
export const Leaf = styled.div`
  width: 290px;
  height: 290px;
  background-image: url(https://user-images.githubusercontent.com/91241596/202879596-35d811a4-c8ab-4b38-83ed-7d63696c25c8.png);
  z-index: 0;
  position: relative;
  top: 100px;
  right: 550px;
`;
export const TopLogo = styled.div`
  width: 110px;
  height: 90px;
  background-image: url(https://user-images.githubusercontent.com/91241596/202879599-a02b5e2d-422b-4b76-8f65-11e67e166dc0.png);
  z-index: 1;
  position: relative;
  bottom: 2530px;
  right: 220px;
`;
export const MidLogo = styled.div`
  width: 110px;
  height: 90px;
  background-image: url(https://user-images.githubusercontent.com/91241596/202879608-0de0c576-a28c-41fd-8c86-9ac54057c1f8.png);
  z-index: 1;
  position: relative;
  bottom: 2000px;
  right: 560px;
`;
export const BotLogo = styled.div`
  width: 110px;
  height: 90px;
  background-image: url(https://user-images.githubusercontent.com/91241596/202879608-0de0c576-a28c-41fd-8c86-9ac54057c1f8.png);
  z-index: 1;
  position: relative;
  top: 270px;
  right: 680px;
`;
export const ToggleWrap = styled.div`
  margin: 174px 0 74px;
`;
export const ToggleSub = styled.div`
  width: 1278px;
  height: 60px;
  font-size: 32px;
  line-height: 38px;
  display: flex;
  justify-content: space-between;
  position: relative;
  color: rgb(0, 26, 70);
  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 1px;
    background-color: #7ec585;
    width: 1278px;
    height: 1px;
  }
`;
export const ToggleIcon = styled.div`
  font-size: 40px;
  cursor: pointer;
`;
export const ToggleCon = styled.div`
  margin-top: 18px;
  width: 1278px;
  font-size: 24px;
  line-height: 28px;
  color: rgb(174, 184, 196);
`;
