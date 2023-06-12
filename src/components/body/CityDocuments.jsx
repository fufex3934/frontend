import React, { useState, useEffect } from 'react';
import './css/UpcomingEvent.css';
import createClient from './../../client';
import { RiFileTextFill } from 'react-icons/ri';

const CityDocuments = () => {
  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        // Fetch documents from Sanity
        const query = `*[_type == "pdfDocument"]{
            title,
            file,
            time
        }`; // Replace with your own query
        const response = await createClient.fetch(query);

        // Update state with fetched documents
        setDocuments(response);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    fetchDocuments();
  }, []);

  const handleDocumentChange = (documentIndex, fileIndex) => {
    setSelectedDocument({ documentIndex, fileIndex });
  };

  const handleDownload = () => {
    if (selectedDocument) {
      const { documentIndex, fileIndex } = selectedDocument;
      const selectedFile = documents[documentIndex].file[fileIndex];
      window.open(selectedFile.asset.url, '_blank');
    }
  };

  return (
    <div className='sub-main-upcoming-event-right'>
      <h1>City Document</h1>
      <div className='unnderline'>
        <div className='left-top-icon'>
          <RiFileTextFill className='text-white text-6xl relative top-0 mx-auto text-center'/>
        </div>
        {documents.map((document, documentIndex) => (
          <div className='div-under-line' key={documentIndex}>
            <span>{document.title}</span><br />
            {document.file.map((file, fileIndex) => (
              <div key={fileIndex}>
                <input
                  type='radio'
                  id={`doc-${documentIndex}-${fileIndex}`}
                  name={`doc-${documentIndex}`}
                  checked={selectedDocument && selectedDocument.documentIndex === documentIndex && selectedDocument.fileIndex === fileIndex}
                  onChange={() => handleDocumentChange(documentIndex, fileIndex)}
                />
                <label htmlFor={`doc-${documentIndex}-${fileIndex}`}>{file.asset.originalFilename}</label>
              </div>
            ))}
            <span>{document.time}</span>
          </div>
        ))}
        <div className='pt-4 ms-[70px] mb-5'>
          <button onClick={handleDownload} disabled={!selectedDocument} className='text-blue-600/100 hover:text-red-600 more'>
            Download Selected Document
          </button>
        </div>
      </div>
    </div>
  );
};

export default CityDocuments;
