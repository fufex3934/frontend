import React, { useState } from 'react';

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languageOptions = [
    { label: 'English', value: 'en' },
    { label: 'Afaan Oromoo', value: 'om' },
    { label: 'አማረኛ', value: 'am' },
    { label: 'አደረኛ', value: 'ad' },
    // Add more language options as needed
  ];

  const languageChangeHandler = (selectedValue) => {
    setSelectedLanguage(selectedValue);
  };

  const languageDropdown = (
    <select
      value={selectedLanguage}
      onChange={(e) => languageChangeHandler(e.target.value)}
      className="ml-4 border text-lg rounded-0 p-2 border-grey h-12 w-40 "
    >
      {languageOptions.map((option) => (
        <option key={option.value} value={option.value} >
          {option.label} 
        </option>
      ))}
    </select>
  );

  return (
    <ul>
      <li className=" flex items-center text-[#1e293b]  ">
        {/* Your existing code */}
        {languageDropdown}
      </li>
    </ul>
  );
};

export default Language;
