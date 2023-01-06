import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: mistyrose;
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
