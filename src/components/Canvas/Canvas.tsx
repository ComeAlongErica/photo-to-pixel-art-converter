import React, { FC } from 'react';
import styles from './Canvas.module.css';

interface CanvasProps {}

const Canvas: FC<CanvasProps> = () => (
  <div className={styles.Canvas}>
    Canvas Component
  </div>
);

export default Canvas;
