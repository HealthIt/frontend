import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 200px;
  background-color: #acd179;
  width: 840px;
  height: 400px;
  border-radius: 40px;
  /* color: red; */
  text-align: center;
  position: relative;
  > button {
    margin-top: 68px;
    width: 196px;
    height: 48px;
    background: #00780c;
    border-radius: 24px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    text-align: center;

    color: #ffffff;
  }
`;
export const Topic = styled.div`
  /* margin-top: 78px; */
  padding-top: 78px;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  display: flex;
  justify-content: center;
  color: #ffffff;
  position: relative;
  ::after {
    content: '';
    position: absolute;
    background-color: #fff;
    width: 530px;
    top: 128px;
    left: 50%;
    transform: translateX(-50%);
    height: 1px;
  }
`;
export const TopicEmph = styled.div`
  font-weight: 700;
`;
export const Content = styled.div`
  margin-top: 54px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: #ffffff;
`;
