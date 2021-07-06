import React, { memo } from 'react';

const NotFoundPage = () => (
  <div className="something-went-wrong">
    <div className="container">
      <div className="message">Not found.</div>
    </div>
  </div>
);

export default memo(NotFoundPage);
