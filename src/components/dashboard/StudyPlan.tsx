export default function StudyPlan() {
    const topics = [
      { name: 'Dynamic Programming', date: 'June 15-20, 2025', completed: false },
      { name: 'Graph Algorithms', date: 'June 21-25, 2025', completed: false },
      { name: 'Binary Trees', date: 'June 26-30, 2025', completed: true },
    ];
  
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Study Plan</h2>
        <div className="space-y-4">
          {topics.map((topic, index) => (
            <div key={index} className="flex items-start">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 ${
                topic.completed ? 'bg-green-500 text-white' : 'bg-gray-200'
              }`}>
                {topic.completed && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <div>
                <p className="font-medium text-sm">{topic.name}</p>
                <p className="text-xs text-gray-500">{topic.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  