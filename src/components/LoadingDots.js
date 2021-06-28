import React from "react";

const LoadingDots = () => (
  <div className="loading-dots-boxs mx-auto">
    <div className="spinner-grow loading-dot my-3 mx-2" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <div className="spinner-grow loading-dot my-3 mx-2" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <div className="spinner-grow loading-dot my-3 mx-2" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

export default LoadingDots;
