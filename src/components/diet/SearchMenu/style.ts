import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: mistyrose;
`;
export const FoodContainer = styled.div`
  /* background-color: pink; */
  display: flex;
  flex-wrap: wrap;
  width: 1340px;
  margin-top: 100px;
`;
export const FoodWrapper = styled.div`
  width: 290px;
  height: 350px;
  margin: 30px 20px;
`;
export const FoodNm = styled.div`
  margin-top: 10px;
  width: 288px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #191919;
`;
export const FoodDesc = styled.div`
  margin-top: 16px;
  height: 56px;
  width: 288px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #afafaf;
  display: -webkit-box;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
