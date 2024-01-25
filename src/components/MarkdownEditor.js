// MarkdownEditor.js

import React, { useState } from 'react';
import axios from 'axios';

const MarkdownEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    // Save new document to the backend
    axios.post('http://localhost:3001/documents', { title, content }, {
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(response => console.log('Document saved:', response.data))
  .catch(error => console.error('Error saving document:', error));

  };

  return (
    <div>
      <h2>Create New Document</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Markdown Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default MarkdownEditor;
