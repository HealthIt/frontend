import styled from 'styled-components';
export const Container = styled.div`
  background-color: #fff;
`;
export const Wrapper = styled.div`
  /* background-color: mistyrose; */
  width: 1048px;
  margin: 0 auto;
`;
export const Top = styled.div`
  padding-top: 60px;

  /* background-color: lavenderblush; */
  display: flex;
  > div:first-child {
    margin-right: 40px;
    background-color: mistyrose;
    width: 290px;
    height: 220px;
    border-radius: 20px;
  }
`;
export const TopInfo = styled.div`
  /* background-color: pink; */
  > div:first-child {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;

    color: #191919;
  }
  > div:nth-child(2) {
    margin-top: 4px;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */

    color: #00780c;
  }
`;
export const Table = styled.div`
  margin-top: 86px;
  /* background-color: salmon; */
  width: 440px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  border-radius: 20px;
  display: flex;
  text-align: center;
  justify-content: center;
  table-layout: fixed;
  flex-direction: column;
  > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    background-color: #00780c;
    border-radius: 20px 20px 0 0;
    > div {
      width: 110px;
      color: #f1f5dd;
    }
  }
  > div:nth-child(2) {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f1f5dd;
    border-radius: 0 0 20px 20px;
    > div {
      width: 110px;
      color: #00780c;
    }
  }
`;
export const Mid = styled.div`
  /* background-color: salmon; */
  margin-top: 100px;
  > div:first-child {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;

    color: #191919;
  }
  > div:nth-child(2) {
    margin-top: 30px;
    /* padding-left: 10px; */
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    color: #191919;
  }
`;
export const Bot = styled.div`
  /* background-color: thistle; */
  margin-top: 120px;
  padding-bottom: 100px;
  /* height: 380px; */
  display: flex;
  justify-content: space-between;
`;
export const BotL = styled.div`
  /* background-color: pink; */
  position: relative;
  width: 300px;
  > div:first-child {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;

    color: #191919;
  }
  > div:nth-child(2) {
    margin-top: 60px;
    background-image: url('https://user-images.githubusercontent.com/91241596/209827015-66162f5f-ffa3-46d6-8c21-483ec11190f4.png');
    width: 220px;
    height: 380px;
  }
`;
export const TextWrapper = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 90px;
  > div:first-child {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height */

    color: #00780c;
  }
  > div:nth-child(2) {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;

    color: #000000;
  }
`;
export const BotR = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #191919;
  > div:first-child {
    padding-left: 40px;
  }
  > div:nth-child(2) {
    margin-top: 30px;
    background-image: url('https://user-images.githubusercontent.com/91241596/209829050-24370dbb-33de-4a0e-aecc-cdb5e042232a.png');
    width: 378px;
    height: 378px;
  }
`;
