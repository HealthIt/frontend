/* eslint-disable */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components/common/Footer';
import { Header } from '../../components/common/Header';
import { LoadingPage } from '../LoadingPage';
import * as S from './style';

interface BMIForm {
  name: string;
  age: number;
  currentAge: number;
  height: number;
  weight: number;
  gender: string;
}
export const BMIPage = (e: any) => {
  const navigation = useNavigate();
  //인풋
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  //에러메세지
  const [nameMsg, setNameMsg] = useState('');
  const [ageMsg, setAgeMsg] = useState('');
  const [heightMsg, setHeightMsg] = useState('');
  const [weightMsg, setWeightMsg] = useState('');
  //유효성검사
  const [isName, setIsName] = useState(false);
  const [isAge, setIsAge] = useState(false);
  const [isHeight, setIsHeight] = useState(false);
  const [isWeight, setIsWeight] = useState(false);
  //색상변경
  const [nameColor, setNameColor] = useState({ borderBottom: '1px solid #7E7E7E' });
  const [ageColor, setAgeColor] = useState({ borderBottom: '1px solid #7E7E7E' });
  const [heightColor, setHeightColor] = useState({ borderBottom: '1px solid #7E7E7E' });
  const [weightColor, setWeightColor] = useState({ borderBottom: '1px solid #7E7E7E' });

  //이름
  const onName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const currentName = e.target.value;
    setName(currentName);
    if (currentName === '') {
      setNameMsg('입력한 이름이 없습니다.');
      setIsName(false);
      setNameColor({ borderBottom: '1px solid #7E7E7E' });
    } else {
      setNameMsg('');
      setIsName(true);
      setNameColor({ borderBottom: '2px solid #88C566' });
    }
    // console.log('이름', name, 'v', currentName);
  };
  //성별
  // const onGender = (e: any) => {
  //   const gen = e.target.value;
  //   console.log(gen);
  // };
  //나이
  const onAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const currentAge = e.target.value;
    setAge(currentAge);
    if (currentAge === '') {
      setAgeMsg('입력한 나이가 없습니다.');
      setIsAge(false);
      setAgeColor({ borderBottom: '1px solid #7E7E7E' });
    } else if (99 < parseInt(currentAge)) {
      setAgeMsg('입력한 나이를 확인해주세요.');
      setIsAge(false);
      setAgeColor({ borderBottom: '1px solid #7E7E7E' });
    } else {
      setAgeMsg('');
      setIsAge(true);
      setAgeColor({ borderBottom: '2px solid #88C566' });
    }
    // console.log('나이', age);
  };
  //신장
  const onHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const currentHeight = e.target.value;
    setHeight(currentHeight);
    const h = parseFloat(e.target.value);
    // console.log('h', h, typeof h);
    if (currentHeight === '') {
      setHeightMsg('입력을 확인해주세요');
      setIsHeight(false);
      setHeightColor({ borderBottom: '1px solid #7E7E7E' });
    } else if (!Number(h)) {
      setHeightMsg('숫자만 입력해주세요');
      setIsHeight(false);
      setHeightColor({ borderBottom: '1px solid #7E7E7E' });
    }
    // else if (!Number.isInteger(h)) {
    //   setHeightMsg('소수점은 제외하고 입력해주세요')
    //   setIsHeight(false)
    // }
    else if (h < 1 || h > 3) {
      setHeightMsg('1m ~ 3m 사이의 키를 m단위로 입력해주세요. ');
      setIsHeight(false);
      setHeightColor({ borderBottom: '1px solid #7E7E7E' });
    } else {
      setHeightMsg('');
      setIsHeight(true);
      setHeightColor({ borderBottom: '2px solid #88C566' });
    }
    // console.log('ㅋl', h);
    // console.log('local', h, typeof h);
  };
  //체중
  const onWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const currentWeight = e.target.value;
    setWeight(currentWeight);
    const w = parseFloat(e.target.value);
    if (currentWeight === '') {
      setWeightMsg('입력을 확인해주세요');
      setIsWeight(false);
      setWeightColor({ borderBottom: '1px solid #7E7E7E' });
    } else if (!Number(w)) {
      setWeightMsg('숫자만 입력해주세요');
      setIsWeight(false);
      setWeightColor({ borderBottom: '1px solid #7E7E7E' });
    } else if (!Number.isInteger(w)) {
      setWeightMsg('소수점은 제외하고 입력해주세요');
      setIsWeight(false);
      setWeightColor({ borderBottom: '1px solid #7E7E7E' });
    } else if (w < 0 || w > 151) {
      setWeightMsg('1kg ~ 150kg 사이의 몸무게만 입력해주세요. ');
      setIsWeight(false);
      setWeightColor({ borderBottom: '1px solid #7E7E7E' });
    } else {
      setWeightMsg('');
      setIsWeight(true);
      setWeightColor({ borderBottom: '2px solid #88C566' });
    }
    // console.log('몸무게', w);
    // console.log('local', w, typeof w);
  };
  //계산
  const onBMI = (e: any) => {
    e.preventDefault();
    console.log(name, age, height, weight);
    const bw = parseFloat(weight);
    const bh = parseFloat(height);
    const bmi = (bw / (bh * bh)).toFixed(2);
    console.log('bmi', bmi);
    // console.log('그아래', bw, bh);
    localStorage.setItem('Name', name);
    localStorage.setItem('Age', age);
    localStorage.setItem('Height', height);
    localStorage.setItem('Weight', weight);
    localStorage.setItem('BMI', String(bmi));

    navigation('/loading');
  };
  return (
    <>
      <Header />
      <S.Wrapper>
        <div>헬스-잇 BMI 계산기</div>
        {/* <form> */}
        <S.InputWrapper>
          <div>1. 고객님의 이름을 적어주세요</div>
          <input placeholder='이름' onChange={onName} style={nameColor} />
          <span>{nameMsg}</span>
        </S.InputWrapper>

        {/*       
          <div>2. 성별을 선택해주세요</div>
          <button value='male' onClick={onGender}>
            남성
          </button>
          <button value='female'>여성</button>
          <S.Gender>
            <label htmlFor='0'>
              <input type='radio' name='gender' value='0' />
              남성
            </label>
            <label htmlFor='1'>
              <input type='radio' name='gender' value='1' />
              여성
            </label>
          </S.Gender>
          {/* <label className='sex' htmlFor='apple'>
              <S.Radio type='radio' name='fruit' value='male'></S.Radio>
              <S.RadioSpan>남성</S.RadioSpan>
            </label>
            <label className='sex'>
              <input type='radio' name='fruit' value='female'></input>
              <span>여성</span>
            </label> */}

        <S.InputWrapper>
          <div>2. 고객님의 나이를 적어주세요</div>
          <input placeholder='나이' onChange={onAge} style={ageColor} />
          <span>{ageMsg}</span>
        </S.InputWrapper>
        <S.InputWrapper>
          <div>3. 고객님의 키를 적어주세요</div>
          <input placeholder='m' onChange={onHeight} style={heightColor} />
          <span>{heightMsg}</span>
        </S.InputWrapper>
        <S.InputWrapper>
          <div>4. 마지막으로 고객님의 몸무게를 적어주세요</div>
          <input placeholder='kg' onChange={onWeight} style={weightColor} />
          <span>{weightMsg}</span>
        </S.InputWrapper>
        <S.BMIBtn
          type='submit'
          disabled={!(isName && isAge && isHeight && isWeight)}
          style={{
            backgroundColor: isName && isAge && isHeight && isWeight ? '#77AE59' : '#D2D2D2',
          }}
          onClick={onBMI}
        >
          BMI 결과보기
        </S.BMIBtn>
        {/* </form> */}
      </S.Wrapper>
      <Footer />
    </>
  );
};
