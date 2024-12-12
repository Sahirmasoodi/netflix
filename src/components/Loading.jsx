import React from 'react';

const LoadingCircle = () => {
  return (
    <div className="flex items-center justify-center ">
      <div
        className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"
        role="status"
        aria-label="loading"
      ></div>
    </div>
  );
};

export default LoadingCircle;
