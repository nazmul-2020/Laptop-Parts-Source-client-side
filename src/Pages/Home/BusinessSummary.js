import React from 'react';

const BusinessSummary = () => {
  return (
    <div className='mx-6 my-4'>
      <h1 className='text-center text-4xl my-3'>Business Summary</h1>
      <div className="flex">
        <div className="stats stats-vertical w-full lg:stats-horizontal shadow text-center">

          <div className="stat">
            <div className="stat-title">Page Views</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Jan 1st - May 1st</div>
          </div>

          <div className="stat">
            <div className="stat-title">New Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BusinessSummary;