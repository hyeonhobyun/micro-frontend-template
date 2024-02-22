interface ExampleModalContentProps {
  text: string;
}

const ExampleModal = ({ text }: ExampleModalContentProps) => {
  return (
    <section>
      <span>예제</span>
      <span>인가요?</span>
      <span>입니다</span>
      <span>{text}</span>
    </section>
  );
};

export { ExampleModal };
export type { ExampleModalContentProps };
