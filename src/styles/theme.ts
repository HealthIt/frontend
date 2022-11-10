//색상
const palette = {
  navy: 'rgb(0, 26, 70)',
  gray: 'rgb(174, 184, 196)',
  skyblue: 'rgb(101, 159, 255)',
};

// 레이아웃
const common = {
  flexCenter: `
      display: flex;
      align-items: center;
      justify-content: center;
    `,
  flexEnd: `
      display: flex;
      align-items: center;
      justify-content: flex-end;
    `,
  flexAround: `
      display: flex;
      align-items: center;
      justify-content: space-around;
    `,
  flexSpaceBetWeen: `
      display: flex;
      align-items: center;
      justify-content: space-between;
    `,
  flexColumnStart: `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    `,
};
const theme = { palette, common };

export default theme;
