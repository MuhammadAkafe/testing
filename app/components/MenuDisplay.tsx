'use client'



export default function MenuDisplay() {


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-center md:text-left">
          Diet Art Restaurant Menu
        </h1>
        
        {/* Language Toggle Button */}
        <button
          className="mt-4 md:mt-0 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold text-lg"
        >
          العربية
        </button>
      </div>
      
      {/* Search and Filter Controls */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search menu items..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Categories</option>
        </select>
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
          {/* Image Section */}
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-500 text-sm">Food Image</p>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-gray-800 text-left">
                Sample Item
              </h3>
              <span className="text-xl font-bold text-green-600">
                25 QR
              </span>
            </div>
            
            <h4 className="text-lg font-medium text-gray-700 mb-2 text-left">
              عينة طعام
            </h4>
            
            <p className="text-sm text-gray-600 mb-3 line-clamp-2 text-left">
              This is a sample menu item description.
            </p>
            
            <div className="text-xs text-gray-500 mb-3">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-left">
                Main Course
              </span>
            </div>
            
            <div className="text-xs text-gray-500 text-left">
              <strong>Add-ons:</strong> 
              Sample add-ons
            </div>
          </div>
        </div>
        
      </div>

    </div>
  );
} 