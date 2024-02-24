import { Text2 } from 'libs/components/src/atoms/text';
import { ExampleModal } from 'libs/components/src/molecules/modal/exampleModal';
import { WithPortal } from 'libs/hoc/src/withPortal';
import { makeSpriteIMG } from 'libs/style/src/getSprite';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const OrderTitle = dynamic(() => import('user/test'), {
  ssr: false,
});

const Index = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenTest, setIsOpenTest] = useState<boolean>(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <span
        style={{
          ...makeSpriteIMG({
            dir: 'test',
            img: 'ic_alert_circle_fill',
            imgSize: {
              width: 24,
              height: 24,
            },
          }),
        }}
      />
      <Text2
        onClick={() => {
          setIsOpen(true);
        }}
      >
        testest
      </Text2>
      <OrderTitle text="wtf" />
      <span>hi</span>
      <span>hello</span>
      <WithPortal isOpen={isOpen} setIsOpen={setIsOpen}>
        <h1
          onClick={() => {
            setIsOpenTest(true);
          }}
        >
          22222
        </h1>
        <h2>33333</h2>
      </WithPortal>

      <WithPortal isOpen={isOpenTest} setIsOpen={setIsOpenTest}>
        <ExampleModal text="히히" />
      </WithPortal>
    </div>
  );
};

export default Index;
