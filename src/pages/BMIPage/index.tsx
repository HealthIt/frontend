import React from 'react';

export const BMIPage = () => {
  return (
    <div>
      <div>
        <div>원</div>
        <div>헬스-잇 BMI 계산기</div>
        <div>정확한 결과를 위해 기본정보 입력이 필요합니다.</div>
        <div className='section1'>
          <div className='UserInput'>
            <div></div>
          </div>
          <button>BMI 계산하기</button>
        </div>
        <div className='section2'>
          <div>BMI 지수</div>
          <div>표</div>
          <div>결과화면</div>
          <div>결과상태</div>
        </div>
      </div>
    </div>
  );
};
