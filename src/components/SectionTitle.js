import React, { useState } from 'react';

const SectionTitle = ({ title, subtitle })  => {
  
  return (
    <div class="container my-2 pt-4 container-title">
      <h2 class="module-subtitle txt-green mb-0 mb-sm-2 Graphik-Semibold-Web">
        {subtitle}
      </h2>
      <h3 class="module-title mb-4 Graphik-Semibold-Web">{title}</h3>
    </div>
  );
}

export default SectionTitle;