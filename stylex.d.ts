import '@stylexjs/stylex';

declare module '@stylexjs/stylex' {
  // `stylex` 함수의 인자로 `CSSProperties`를 받을 수 있도록 확장합니다.
  export type StyleXArray<T> = T | string | ReadonlyArray<StyleXArray<T>>;
}
