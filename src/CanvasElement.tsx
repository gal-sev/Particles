import React, { useEffect, useRef } from 'react';
import PropTypes from "prop-types";

interface CanvasProps {
  height: number,
  width: number,
  id: string,
  draw: (context: CanvasRenderingContext2D) => void,
}

function CanvasElement(props: CanvasProps) {
  //deconstruct props
  const {height, width, id, draw} = props;

  // Has to be null instead of undefined
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if(!canvas) {
      return;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }

    draw(context);

  }, [draw])  

  return (
    <canvas ref={canvasRef} height={height} width={width} id={id}/>
  )
}

// Only used on runtime, unlike interface which is used during the compiling
CanvasElement.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default CanvasElement;
