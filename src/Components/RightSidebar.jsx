import React, { useState } from 'react';
import { FaFilePdf, FaFileExcel, FaFileWord, FaFileAlt } from 'react-icons/fa'; // Importing file icons

function RightSidebar() {
  const [maxResponse, setMaxResponse] = useState(50);
  const [temperature, setTemperature] = useState(0.5);
  const [topP, setTopP] = useState(50);
  const [fileType, setFileType] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setUploadedFiles([...uploadedFiles, { name: file.name, url: fileUrl, type: fileType }]);
    }
  };

  const handleFileTypeChange = (event) => {
    setFileType(event.target.value);
    setUploadedFiles([]); // Clear the list when a new file type is selected
  };

  const openFile = (url) => {
    window.open(url, '_blank');
  };

  const getFileIcon = (type) => {
    switch (type) {
      case 'application/pdf':
        return <FaFilePdf className="text-red-500" />;
      case 'application/vnd.ms-excel':
        return <FaFileExcel className="text-green-500" />;
      case 'application/msword':
        return <FaFileWord className="text-blue-500" />;
      default:
        return <FaFileAlt className="text-gray-500" />;
    }
  };

  return (
    <div className="p-3 space-y-4 flex flex-col h-full max-h-screen sm:min-w-[150px] lg:min-w-[250px] max-w-[250px] overflow-auto">
      <div className="bg-gray-300 rounded-lg flex flex-col flex-grow h-full">
        <div className="p-2 flex-grow">
          <h3 className="text-center text-lg font-semibold">Upload Files</h3>
          <div className="mx-auto max-w-[200px] h-[0.5px] bg-black my-2"></div>
          <label className="pb-1 block text-xs font-semibold">Select File Type</label>
          <div className="flex items-center space-x-2 mb-2">
            <select 
              className="flex-grow h-6 border border-gray-300 shadow-lg rounded font-normal text-sm"
              value={fileType}
              onChange={handleFileTypeChange}
            >
              <option value="">Select File Type</option>
              <option value="application/pdf">PDF</option>
              <option value="application/vnd.ms-excel">Excel</option>
              <option value="application/msword">Word</option>
            </select>
            {fileType && (
              <>
                <input
                  type="file"
                  accept={fileType}
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="text-xs bg-blue-600 text-white px-2 py-1 rounded cursor-pointer shadow-lg"
                >
                  Upload
                </label>
              </>
            )}
          </div>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {uploadedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center p-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:bg-gray-200 transition-colors"
                onClick={() => openFile(file.url)}
              >
                <div className="mr-2">
                  {getFileIcon(file.type)}
                </div>
                <div className="text-sm font-normal text-gray-700">
                  {file.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-2 flex-grow">
          <h3 className="text-center text-lg font-semibold">Properties</h3>
          <div className="space-y-4 mt-4">
            <div>
              <label className="block text-xs font-medium">Max Response: {maxResponse}</label>
              <input
                type="range"
                min="0"
                max="100"
                value={maxResponse}
                onChange={(e) => setMaxResponse(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-xs font-medium">Temperature: {temperature}</label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={temperature}
                onChange={(e) => setTemperature(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-xs font-medium">Top P: {topP}</label>
              <input
                type="range"
                min="0"
                max="100"
                value={topP}
                onChange={(e) => setTopP(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
