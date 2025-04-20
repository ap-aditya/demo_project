export default function ProfileSection() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-sm">SK</span>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Shubh Kumar</h2>
          <p className="text-sm text-gray-500">Competitive Programmer</p>
          <p className="text-sm text-gray-600 mt-2">
            Track your consistency,programming practice across multiple platforms in one place.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 mt-6">
        <button className="flex items-center bg-yellow-50 text-yellow-800 px-4 py-2 rounded-md text-sm font-medium border-2 border-black">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Track Progress
        </button>
        <button className="flex items-center bg-violet-100 text-gray-700 px-4 py-2 rounded-md text-sm font-medium border-2 border-black">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Set Coding Goals
        </button>
        <button className="flex items-center bg-emerald-50 text-gray-700 px-4 py-2 rounded-md text-sm font-medium border-2 border-black">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          Improve Skill
        </button>
      </div>
    </div>
  );
}
