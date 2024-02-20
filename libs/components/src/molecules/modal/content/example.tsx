interface ExampleModalContentProps {
  text: string;
}

const ExampleModalContent = ({ text }: ExampleModalContentProps) => {
  return (
    <section>
      <span>예제</span>
      <span>인가요?</span>
      <span>입니다</span>
      <span>{text}</span>
    </section>
  );
};

export { ExampleModalContent };
export type { ExampleModalContentProps };
