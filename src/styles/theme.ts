//색상
const palette = {
  Ellipse31: '#AEB8C4',
  Ellipse32: '#191919',
  Ellipse33: '#0D6717',
  Ellipse34: '#D8FADC',
  Ellipse35: '#60BF6A',
  Ellipse36: '#7EC585',
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
