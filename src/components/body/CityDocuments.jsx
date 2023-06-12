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
            files[]{
              name,
              "asset": asset->{
                url
              }
            },
            time
        }`;
        const response = await createClient.fetch(query);

        // Update state with fetched documents
        setDocuments(response);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    fetchDocuments();
  }, []);

  const handleDocumentChange = (documentIndex) => {
    setSelectedDocument(documentIndex);
  };

  const handleDownload = () => {
    if (selectedDocument !== null) {
      const selectedFile = documents[selectedDocument].files[0];
      window.open(selectedFile.asset.url, '_blank');
    }
  };

  const formatTime = (time) => {
    const date = new Date(time);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Limit the number of documents to display
  const limitedDocuments = documents.slice(0, 8);

  return (
    <div className='sub-main-upcoming-event-right'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-8 '>City Document</h1>
      <div className='flex flex-col items-center lg:items-start'>
        <div className='left-top-icon mb-8'>
          <RiFileTextFill className='text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl' />
        </div>
        {limitedDocuments.map((document, documentIndex) => (
          <div className='my-4' key={documentIndex}>
            <div className='flex items-center'>
              <input
                className='mr-2'
                type='radio'
                id={`doc-${documentIndex}`}
                name='document'
                checked={selectedDocument === documentIndex}
                onChange={() => handleDocumentChange(documentIndex)}
              />
              <label
                htmlFor={`doc-${documentIndex}`}
                className='text-sm text-slate-600 hover:text-[#329898] hover:underline cursor-pointer
                 font-serif leading-snug tracking-tight font-bold'
              >
                {document.title.substring(0, 16)}
              </label>
              <span className='ml-4 md:ml-8 whitespace-nowrap'>{formatTime(document.time)}</span>
            </div>
            {selectedDocument === documentIndex && (
              <div className='mt-2'>
                {document.files && document.files.length > 0 ? (
                  document.files.map((file, fileIndex) => (
                    <div key={fileIndex} className=''>
                      <label htmlFor={`doc-${documentIndex}-${fileIndex}`} className=''>
                        {file.name}
                      </label>
                    </div>
                  ))
                ) : (
                  <div className='no-files'>No files available</div>
                )}
              </div>
            )}
          </div>
        ))}
        <div className='pt-4'>
          <button
            onClick={handleDownload}
            disabled={selectedDocument === null}
            className='bg-gray-300 cursor-pointer hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
          >
            <svg className='fill-current w-4 h-4 mr-2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
              <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
            </svg>
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CityDocuments;
