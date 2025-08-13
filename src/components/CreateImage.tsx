import styled from 'styled-components';

const StyledImage = styled.img`
   position: absolute;
   top: 0;
   left: 0;
   height: 100%;
   width: 100%;
   overflow: hidden;
   object-fit: cover;
`;
interface CreateImageProps {
   src: string;
   isBefore: boolean;
   isVertical: boolean;
   borderValue: number;
}

function CreateImage({ src, isBefore, borderValue, isVertical }: CreateImageProps) {
   const clipPath: string = isBefore
      ? isVertical
         ? `polygon(0 0, ${borderValue}% 0, ${borderValue}% 100%, 0 100%)`
         : `polygon(0 0, 100% 0, 100% ${borderValue}%, 0 ${borderValue}%)`
      : 'none';

   return (
      <StyledImage
         src={src}
         alt={isBefore ? 'beforeImg' : 'afterImg'}
         style={{ zIndex: isBefore ? 2 : 1, clipPath: isBefore ? clipPath : 'none' }}
      />
   );
}

export default CreateImage;
