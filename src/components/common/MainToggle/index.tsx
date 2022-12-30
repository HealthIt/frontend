/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import * as S from './style';

export const MainToggle = () => {
  const toggle = [
    {
      id: '1',
      Q: 'testQ',
      A: 'testA',
      isOpen: false,
    },
    {
      id: '2',
      Q: 'testQQ',
      A: 'testAA',
      isOpen: false,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [list, setList] = useState(toggle);
  // const toggleItem = (id: any) => {
  //   setList(...[list].map((item) => (item.id === id ? { ...item, isOpen: !item.isOpen } : item)));
  // };
  return (
    <div>
      <S.ToggleCon>ㅇㄻ</S.ToggleCon>
      {toggle.map((ques) => (
        <S.Answer key={ques.id}> {ques.A} </S.Answer>
      ))}
      {/* {toggleItem} */}
    </div>
  );
};
