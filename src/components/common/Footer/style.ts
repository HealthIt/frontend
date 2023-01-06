import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #efefef;
  width: 100%;
  height: 150px;
  display: flex;
  position: relative;
`;
export const Text = styled.div`
  position: absolute;
  left: 320px;
  top: 26px;
  color: #4d4d4d;
  > div:first-child {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
  > div {
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
  }
`;
