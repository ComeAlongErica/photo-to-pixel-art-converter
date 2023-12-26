import React, { FC, createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Canvas.module.css';

interface CanvasProps {
  img: string,
  height: number;
  width: number;
}

const Canvas: FC<CanvasProps> = ({ img, height, width }) => {
  const canvas = createRef<HTMLCanvasElement>();
  React.useEffect(() => {
    debugger
    const context = canvas?.current?.getContext('2d');
    if (!context || img.trim() === '') {
        return;
    }
    const image = new Image();
    image.src = img;
    image.onload = () => {
    context.drawImage(image, 0, 0, canvas.current!.width, canvas.current!.height);
  };
  }, [canvas, img]);
return (
    <canvas ref={canvas} height={height} width={width} />
  );
}
export default Canvas;

Canvas.propTypes = {
  img: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};
