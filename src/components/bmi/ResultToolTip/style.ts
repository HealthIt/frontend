import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 18px;
  background-color: #f1f5dd;
  width: 200px;
  height: 100px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #191919;
  position: relative;
  right: 0;
  ::after {
    content: '';
    position: absolute;
    right: 85px;
    top: 100px;
    bottom: 100px;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    border-top: 20px solid #f1f5dd;
  }
  > div {
    margin-top: 30px;
  }
`;
