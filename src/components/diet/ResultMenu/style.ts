import styled from 'styled-components';

export const Wrapper = styled.div`
  /* background-color: pink; */
  margin-top: 100px;
`;
export const MenuContainer = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
`;
export const MenuWrapper = styled.div`
  /* background-color: mistyrose; */
  margin-left: 20px;
  margin-right: 20px;

  /* align-items: left; */
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 50px;
`;
export const MenuImg = styled.div`
  /* background-color: lavenderblush; */
  width: 400px;
  height: 300px;
`;
export const TextWrapper = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  /* text-align: left !important;
  align-items: left !important; */
`;
export const MenuName = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  align-items: left;
  color: #191919;
`;
export const MenuKcal = styled.div`
  margin-top: 4px;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  align-items: right;
  color: #191919;
`;
export const Menu = styled.div`
  width: 980px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* flex: auto; */
`;
