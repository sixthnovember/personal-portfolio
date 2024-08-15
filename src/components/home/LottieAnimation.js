import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../img/about-me3.json';

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className="lottie-container">
      <Lottie options={defaultOptions} height={400} width={600} />
    </div>
  );
};

export default LottieAnimation;