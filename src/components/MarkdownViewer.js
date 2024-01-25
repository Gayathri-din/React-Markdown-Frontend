// MarkdownViewer.js

import React from 'react';

const MarkdownViewer = ({ document }) => {
  return (
    <div>
      <h2>{document.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: document.content }} />
    </div>
  );
};

export default MarkdownViewer;
