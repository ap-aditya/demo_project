import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center h-16">
          <div className="block md:hidden relative group">
            <button className="p-2 focus:outline-none" aria-label="Navigation menu">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 hidden group-hover:block">
              <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">DSA Sheet</Link>
              <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Blog</Link>
              <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AskCode</Link>
              <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">HR</Link>
              <Link href="#" className="block px-4 py-2 text-sm text-purple-600 hover:bg-gray-100 font-medium">Premium</Link>
            </div>
          </div>
        
          <div className="flex-1 flex items-center">
            <Link href="/" className="text-purple-600 font-bold text-xl ml-2 md:ml-0">
              Senior
            </Link>
            
            <div className="hidden md:flex ml-10 space-x-8">
              <Link href="#" className="text-gray-500 hover:text-gray-900">DSA Sheet</Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">Blog</Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">AskCode</Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">HR</Link>
              <Link href="#" className="text-gray-500 hover:text-purple-600 font-medium">Premium</Link>
            </div>
          </div>
          
          <div className="flex items-center">
            <span className="hidden md:inline-block text-sm text-gray-700 mr-2">Shubh Kumar</span>
            
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-xs">SK</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
