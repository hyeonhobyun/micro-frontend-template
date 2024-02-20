import { ModalContainer } from 'libs/components/src/molecules/modal/container';
import { ExampleModalContent } from 'libs/components/src/molecules/modal/content/example';

const ExampleModal = () => {
  return (
    <ModalContainer>
      <ExampleModalContent text="aaa" />
    </ModalContainer>
  );
};

export { ExampleModal };
