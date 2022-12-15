import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fff;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
`;
export const Logo = styled.div`
  background-image: url('https://user-images.githubusercontent.com/91241596/207931404-b802f9bf-ef70-492d-9f35-c3ab6b6f2685.png');
  width: 180px;
  height: 24px;
  font-size: 24px;
  line-height: 28px;
  position: absolute;
  left: 320px;
`;
export const Menu = styled.ul`
  display: flex;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  position: absolute;
  right: 320px;
`;
export const MenuList = styled.li`
  margin-right: 30px;
  list-style: none;
  text-decoration: none;
`;
