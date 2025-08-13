import BeforeAfter from './components/BeforeAfter';
import * as SC from './styled/BeforeAfter.styled';
import { useState } from 'react';

const Main = () => {
   const [value, setValue] = useState<number>(50);

   const onBefore = (e) => {
      setValue(0);
   };

   const onAfter = (e) => {
      setValue(100);
   };
   return (
      <SC.ComponentBody>
         <BeforeAfter
            beforeImg="../assets/before.jpg"
            afterImg="../assets/after.jpg"
            isVertical={false}
            isHoverEnabled={false}
            value={value}
            onChange={setValue}
         />
         <SC.BtnContainer>
            <SC.Btn onClick={onBefore}>Before</SC.Btn>
            <SC.Btn onClick={onAfter}>After</SC.Btn>
         </SC.BtnContainer>
      </SC.ComponentBody>
   );
};

export default Main;
