import React, { useState } from 'react';

function SingleTitle({ title }) {
  return (
    <h2 className="module-title mb-4  mt-5 pt-2 mt-sm-0 pt-sm-0">
      {title}
    </h2>
  );
}

export default SingleTitle;