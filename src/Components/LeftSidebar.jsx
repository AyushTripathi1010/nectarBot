
const  LeftSidebar = () => {
  return (
    <div className="p-3 space-y-4 flex flex-col h-full max-h-screen sm:min-w-[150px] lg:min-w-[250px] max-w-[250px] overflow-auto">
      <div className="w-full">
        {/* First Section */}
        <div className="bg-gray-300 space-y-4 rounded-lg h-auto max-h-[300px] overflow-auto transition-all duration-300 ease-in-out">
          <h3 className="text-center p-2 text-lg font-semibold">History</h3>
          <div
            className="mx-auto max-w-[200px] h-[0.5px] bg-black"
            style={{ marginTop: "0" }}
          ></div>
          {/* Line Component */}
          <div className="h-20 sm:h-40"></div>
          <div className="space-y-2"></div>
        </div>
      </div>
      <div className="w-full">
        {/* Second Section */}
        <div className="font-semibold bg-gray-300 space-y-2 px-3 py-2 rounded-lg w-full h-full min-h-[260px] transition-all duration-300 ease-in-out">
          {/* Wrapper for Form Elements */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <label className="block text-xs font-semibold w-1/3">Domain:</label>
              <select className="font-normal text-xs w-2/3 border border-gray-300 shadow-lg rounded transition-all duration-300 ease-in-out">
                {/* Options go here */}
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <label className="block text-xs font-semibold w-1/3">Purpose:</label>
              <select
                className="font-normal text-xs w-2/3 border border-gray-300 shadow-lg rounded transition-all duration-300 ease-in-out"
                defaultValue="research"
              >
                <option value="research">Summary</option>
                <option value="education">Model Comparison</option>
                <option value="business">Question and Answer</option>
                <option value="entertainment">1</option>
                <option value="personal">2</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <label className="block text-xs font-semibold w-1/3">Model:</label>
              <select className="font-normal text-xs w-2/3 border border-gray-300 shadow-lg rounded transition-all duration-300 ease-in-out">
                {/* Options go here */}
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <label className="block text-xs font-semibold w-1/3">Context:</label>
              <select className="font-normal text-xs w-2/3 border border-gray-300 shadow-lg rounded transition-all duration-300 ease-in-out">
                {/* Options go here */}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold">Instructions (Prompt):</label>
              <textarea className="font-normal text-xs w-full border border-gray-300 shadow-lg rounded transition-all min-h-[75px] duration-300 ease-in-out"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
