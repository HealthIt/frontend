import styled from 'styled-components';
export const Sticky = styled.div`
  position: fixed;
`;
export const Container = styled.div`
  background-color: #fff;
  border-top: 1px solid #0d6717;
  /* width: calc(100vh - 80px); */
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  z-index: 10;
  /* padding-bottom: 80px; */
  position: sticky;
  bottom: 0;
  /* transform: translateY(-50%); */
`;

export const Wrapper = styled.div`
  display: flex;
  /* position: absolute;
  right: 10%; */

  margin-left: 60%;
  text-align: center;
  align-items: center;
  > div:first-child {
    margin-right: 24px;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;

    color: #0d6717;
  }
  > button {
    background-color: #0d6717;
    width: 196px;
    height: 46px;
    border-radius: 24px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;

    color: #ffffff;
  }
`;
