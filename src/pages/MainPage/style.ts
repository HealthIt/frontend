import styled from 'styled-components';

export const Wrap = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Banner = styled.div`
  background-color: salmon;
  width: 100%;
  height: 600px;
`;
export const TextWrap = styled.div`
  background-color: lightcoral;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Top = styled.div`
  margin-top: 110px;
  font-size: 24px;
  line-height: 28px;
`;
export const Mid = styled.div`
  margin-top: 40px;
  font-size: 56px;
  line-height: 64px;
`;
export const MidSub = styled.div`
  margin-top: 44px;
  font-size: 24px;
  line-height: 28px;
  color: rgb(174, 184, 196);
`;
export const Btn = styled.button`
  margin-top: 80px;
  width: 120px;
  height: 40px;
  border-radius: 20px;
  background-color: rgb(101, 159, 255);
  font-size: 16px;
  line-height: 18px;
  color: rgb(255, 255, 255);
`;
export const Woojoo = styled.div`
  margin-top: 50px;
  width: 186px;
  height: 184px;
  background-color: lavender;
`;
export const Bot = styled.div`
  margin-top: 170px;
  font-size: 56px;
  line-height: 64px;
  color: rgb(0, 26, 70);
`;
export const First = styled.div`
  margin-top: 88px;
  margin-bottom: 30px;
  width: 1280px;
  height: 448px;
  border-radius: 20px;
  background-color: lavender;
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
export const Last = styled.div`
  margin-top: 312px;
  font-size: 56px;
  line-height: 64px;
  color: rgb(0, 26, 70);
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
    background-color: rgb(174, 184, 196);
    width: 1278px;
    height: 1px;
  }
`;
export const ToggleIcon = styled.div`
  font-size: 40px;
`;
export const ToggleCon = styled.div`
  margin-top: 18px;
  width: 1278px;
  font-size: 24px;
  line-height: 28px;
  color: rgb(174, 184, 196);
`;
