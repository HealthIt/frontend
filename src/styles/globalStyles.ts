import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Pretendard Variable' !important;
}
html {
  font-size: 62.5%;
  background-color: #F4F6F9;
}
body {
  margin: 0;
  /* 스크롤바숨기기 */
  -ms-overflow-style: none;
}
::-webkit-scrollbar {
  display: none;
}
input, textarea { 
  -moz-user-select: auto;
  -webkit-user-select: auto;
  -ms-user-select: auto;
  user-select: auto;
}
input {
  border: none;
  :focus {outline: none}
}
button {
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
}
a{
  text-decoration: none;
  color: inherit;
}
ul {
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
}
`;
