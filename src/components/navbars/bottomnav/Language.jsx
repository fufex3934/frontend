import React, { useState } from 'react';

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languageOptions = [
    { label: 'English', value: 'en' },
    { label: 'Afaan Oromoo', value: 'om' },
    { label: 'አምርዝ', value: 'am' },
    { label: 'አደች', value: 'ad' },
    // Add more language options as needed
  ];

  const languageChangeHandler = (selectedValue) => {
    setSelectedLanguage(selectedValue);
  };

  const languageDropdown = (
    <select
      value={selectedLanguage}
      onChange={(e) => languageChangeHandler(e.target.value)}
      className="ml-4 border border-gray-200 rounded-full px-2 py-1"
    >
      {languageOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );

  return (
    <ul className=" ">
      <li className=" flex items-center">
        {/* Your existing code */}
        {languageDropdown}
      </li>
    </ul>
  );
};

export default Language;
