export default function ContestsSection() {
    const contests = [
      {
        title: 'Weekly Contest 389',
        platform: 'LeetCode',
        date: 'April 20, 2025',
        time: '8:00 AM IST',
      },
      {
        title: 'Codeforces Round #917',
        platform: 'Codeforces',
        date: 'April 23, 2025',
        time: '7:35 PM IST',
      },
    ];
  
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Upcoming Contests</h2>
          <a href="#" className="text-xs text-purple-600">See all</a>
        </div>
        <div className="space-y-4">
          {contests.map((contest, index) => (
            <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
              <h3 className="font-medium">{contest.title}</h3>
              <p className="text-sm text-gray-500">{contest.platform} • {contest.date} at {contest.time}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  