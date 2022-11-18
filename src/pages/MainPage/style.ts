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
  margin-top: 338px;
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
  background-color: lavender;
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
  background-color: salmon;
  width: 1280px;
  display: flex;
  justify-content: space-between;
`;
export const Sec = styled.div`
  width: 620px;
  height: 636px;
  border-radius: 20px;
  background-color: lavender;
`;
export const Thi = styled.div`
  width: 620px;
  height: 636px;
  border-radius: 20px;
  background-color: lavender;
`;
export const Fou = styled.div`
  margin-top: 88px;
  width: 1280px;
  height: 448px;
  border-radius: 20px;
  background-color: lavender;
`;
export const Tomato = styled.div`
  width: 334px;
  height: 430px;
  background-image: url(https://user-images.githubusercontent.com/91241596/202796976-cf2002fc-7944-497e-bcea-03931979aef9.png);
  z-index: 0;
  position: relative;
  bottom: 2500px;
  right: 600px;
`;
export const Paprika = styled.div`
  width: 590px;
  height: 706px;
  background-image: url(https://user-images.githubusercontent.com/91241596/202798502-a3c72f26-2107-4948-8d25-b4e80ffdfb1c.png);
  z-index: 0;
  position: relative;
  bottom: 2000px;
  left: 500px;
`;
export const Leaf = styled.div`
  width: 350px;
  height: 402px;
  background-image: url(https://user-images.githubusercontent.com/91241596/202802004-95ad7995-dbb3-4005-8437-70bcdbc4c69d.png);
  z-index: 0;
  position: relative;
  bottom: 1700px;
  right: 600px;
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
