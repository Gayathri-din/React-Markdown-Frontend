// App.js

import React, { useState, useEffect } from 'react';
import MarkdownEditor from './components/MarkdownEditor';
import MarkdownViewer from './components/MarkdownViewer';
import axios from 'axios';

const App = () => {
  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null);

  useEffect(() => {
    // Fetch documents from the backend
    axios.get('http://localhost:3001/documents')
      .then(response => setDocuments(response.data))
      .catch(error => console.error('Error fetching documents:', error));
  }, []);

  const handleDocumentSelect = (document) => {
    setSelectedDocument(document);
  };
  

  return (
    <div>
      <h1>React Markdown Viewer</h1>
      <div className="container">
        <div className="document-list">
          <h2>Document List</h2>
          <ul>
            {documents.map((doc) => (
              <li key={doc._id} onClick={() => handleDocumentSelect(doc)}>
                {doc.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="editor-viewer">
          {selectedDocument ? (
            <MarkdownViewer document={selectedDocument} />
          ) : (
            <MarkdownEditor />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
