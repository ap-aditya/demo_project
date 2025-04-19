export default function RecommendedProblems() {
    const problems = [
      {
        title: 'Two Sum',
        difficulty: 'Easy',
        platform: 'LeetCode',
        tags: ['Arrays'],
      },
      {
        title: 'Valid Palindrome',
        difficulty: 'Medium',
        platform: 'Codeforces',
        tags: ['Strings'],
      },
    ];
  
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm mt-6">
        <h2 className="text-lg font-semibold mb-4">Recommended Problems</h2>
        <div className="space-y-4">
          {problems.map((problem, index) => (
            <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
              <h3 className="font-medium">{problem.title}</h3>
              <div className="flex items-center mt-1">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' : 
                  problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-red-100 text-red-800'
                }`}>
                  {problem.difficulty}
                </span>
                <span className="text-xs text-gray-500 ml-2">{problem.platform} • {problem.tags.join(', ')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  