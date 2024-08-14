import React, { useState, useRef } from 'react';

function MainContent() {
  const [userQuery, setUserQuery] = useState(''); // State for the input field
  const [conversations, setConversations] = useState([]); // State for storing all query-response pairs
  const inputRef = useRef(null); // Reference for the input textbox

  const handleSend = () => {
    if (userQuery.trim()) {
      // Simulate a chatbot response
      const newResponse = `This is a response to your query: "${userQuery}"`;
      
      // Update the conversations array
      setConversations([...conversations, { query: userQuery, response: newResponse }]);
      
      // Clear the input box after sending
      setUserQuery('');

      // Focus the input textbox
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default form submission behavior
      handleSend();
    }
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Scrollable Conversations */}
      <div className="flex-1 overflow-y-auto p-4">
        {conversations.map((conversation, index) => (
          <div key={index} className="mb-4">
            {/* User's Query */}
            <div className="flex justify-end mb-2">
              <div className="bg-gray-300 h-auto w-[250px] p-4 rounded-md">
                <p className="text-gray-700">{conversation.query}</p>
              </div>
            </div>
            {/* Chatbot's Response */}
            <div className="flex justify-start mb-2">
              <p className="text-gray-700">{conversation.response}</p>
            </div>
          </div>
        ))}
      </div>

      {/* User Query Input and Send Button */}
      <div className="p-4 bg-white flex">
        <input
          ref={inputRef} // Attach the ref to the input element
          type="text"
          className="bg-gray-300 flex-1 p-2 border border-gray-300 shadow rounded-md mr-2 border "
          value={userQuery}
          onChange={(e) => setUserQuery(e.target.value)}
          onKeyDown={handleKeyDown} // Add onKeyDown handler
          placeholder="Type your query here..."
        />
        <button
          className="p-2 bg-blue-600 text-white rounded-md"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default MainContent;
