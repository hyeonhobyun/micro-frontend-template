import { Text, Text2 } from 'libs/components/src/atoms/text';
import { WithPortal } from 'libs/hoc/src/withPortal';
import { useState } from 'react';

const Index = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <span>hi</span>
      <span>hello</span>
      <Text>world</Text>
      <Text2
        onClick={() => {
          setIsOpen(true);
        }}
      >
        testest
      </Text2>
      <WithPortal isOpen={isOpen} setIsOpen={setIsOpen}>
        <span>hi</span>
        <span>bye</span>
      </WithPortal>
    </div>
  );
};

export default Index;
