import React from 'react';

const BusinessSummary = () => {
  return (
    <div className='mx-6 my-4'>
      <h1 className='text-center text-4xl my-3'>Business Summary</h1>
      <div class="flex">
        <div class="stats stats-vertical w-full lg:stats-horizontal shadow text-center">

          <div class="stat">
            <div class="stat-title">Page Views</div>
            <div class="stat-value">31K</div>
            <div class="stat-desc">Jan 1st - May 1st</div>
          </div>

          <div class="stat">
            <div class="stat-title">New Users</div>
            <div class="stat-value">4,200</div>
            <div class="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div class="stat">
            <div class="stat-title">New Registers</div>
            <div class="stat-value">1,200</div>
            <div class="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BusinessSummary;