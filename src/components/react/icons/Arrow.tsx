import React from 'react';

interface ArrowProps {
  position: string;
}

const Arrow: React.FC<ArrowProps> = ({ position }) => {
  const className = `arrow ${position}`;

  return (
    <div className={className}>
      <svg width='25px' height='25px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z'></path>
      </svg>
      <style>
        {`
          .arrow {
            width: 25px;
            height: 25px;
          }
          svg {
            width: 25px;
            height: 25px;
          }
          .arrow path {
            fill: var(--text);
          }
          .left {
            transform: rotate(180deg);
          }
          .top {
            transform: rotate(90deg);
          }
          .bottom {
            transform: rotate(270deg);
          }
        `}
      </style>
    </div>
  );
};

export default Arrow;
