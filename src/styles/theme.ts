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
const theme = { common };

export default theme;
