import styled from 'styled-components';

export const Container = styled.div`
   position: relative;
   width: 500px;
   height: 500px;
   overflow: hidden;
   cursor: pointer;
   user-select: none;
`;

export const Btn = styled.p`
   border-radius: 8px;
   padding: 10px 20px;
   border: 1px solid black;
   cursor: pointer;
`;

export const ComponentBody = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const BtnContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   gap: 20px;
`;
