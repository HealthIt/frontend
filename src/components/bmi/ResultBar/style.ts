import styled from 'styled-components';

export const Wrapper = styled.div`
  /* background-color: lavenderblush; */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
export const BarBMI = styled.div`
  margin: 18px 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #191919;
  display: flex;
  > div {
    text-align: center;
    margin: 0 86px;
  }
`;
export const Bar = styled.div`
  width: 1280px;
  height: 50px;
  background-image: url('https://user-images.githubusercontent.com/91241596/208516881-518df65b-15b1-4a89-af22-f46df3a89597.png');
`;
export const BarWeight = styled.div`
  margin-top: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #191919;
  display: flex;
  > div {
    margin: 0 96px;
    position: relative;
    ::after {
      content: '';
      position: absolute;
      width: 132px;
      height: 1px;
      background-color: #191919;
      top: 50%;
      left: 90px;
    }
  }
  > div:last-child {
    ::after {
      display: none;
    }
  }
`;
