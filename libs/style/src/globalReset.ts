// language=scss
const GlobalResetStyle = `
  /* box-sizing 규칙을 명시합니다. */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    --100vh: calc(var(--1vh-as-px, 1vh) * 100);
    --100vw: calc(var(--1vw-as-px, 1vw) * 100);

    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
    font-family: Apple SD Gothic Neo, arial, sans-serif;
    font-size: 100%;
    line-height: 1.5;
    min-height: 100%;
    display: flex;
    overflow-x: hidden;
  }

  body {
    -ms-overflow-style: scrollbar;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  }

  #__next {
    display: flex;
  }

  html, body, #__next {
    flex: 1;
    width: var(--100vw);
    min-height: var(--100vh);
    margin: 0;
    padding: 0;
    background-color: #F7F8FA;
  }

  .app {
    width: 100vw;
  }

  /* 폰트 크기의 팽창을 방지합니다. */

  /* 기본 여백을 제거하여 작성된 CSS를 더 잘 제어할 수 있습니다. */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  /* list를 role값으로 갖는 ul, ol 요소의 기본 목록 스타일을 제거합니다. */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* 핵심 body의 기본값을 설정합니다. */
  body {
    min-height: 100vh;
    line-height: 1.5;
  }

  /* 제목 요소와 상호작용하는 요소에 대해 line-height를 더 짧게 설정합니다. */
  h1,
  h2,
  h3,
  h4,
  button,
  input,
  label {
    line-height: 1.1;
  }

  input {
    border: none;
    outline: none;
  }

  /* 제목에 대한 text-wrap을 balance로 설정합니다. */
  //h1,
  //h2,
  //h3,
  //h4 {
  //  text-wrap: balance;
  //}

  a {
    text-decoration: none;
  }

  /* 클래스가 없는 기본 a 태그 요소는 기본 스타일을 가져옵니다. */
  a:not([class]) {
    text-decoration-skip-ink: auto;
    color: currentColor;
  }

  /* 이미지 관련 작업을 더 쉽게 합니다. */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* input 및 button 항목들이 글꼴을 상속하도록 합니다. */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* 행 속성이 없는 textarea가 너무 작지 않도록 합니다. */
  textarea:not([rows]) {
    min-height: 10em;
  }

  /* 고정된 모든 항목에는 여분의 스크롤 여백이 있어야 합니다. */
  :target {
    scroll-margin-block: 5ex;
  }

  button,
  abbr,
  span,
  div {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: border-box;
    text-decoration: none;
  }

  th {
    padding: 0;
  }`;

export { GlobalResetStyle };
