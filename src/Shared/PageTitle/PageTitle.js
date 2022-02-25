import React from 'react';

export default function PageTitle(title) {
      return (
        <div style={{textAlign:"left"}}>
          <i className="open-details fa fa-chevron-left" aria-hidden="true"></i>
          <h1>{title}</h1>
        </div>
      );
}