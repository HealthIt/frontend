import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #f8f8f8;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.div`
  background-image: url('https://user-images.githubusercontent.com/91241596/209869798-f1e6b622-6bbb-4190-9a3f-2e698b501022.png');
  width: 212px;
  height: 24px;
  font-size: 24px;
  line-height: 28px;
  position: absolute;
  left: 320px;
  display: flex;
  align-items: center;
  cursor: pointer;
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
