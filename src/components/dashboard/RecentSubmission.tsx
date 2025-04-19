export default function RecentSubmission() {
    const submissions = [
      { 
        title: 'Two Sum', 
        platform: 'LeetCode',
        status: 'Accepted',
        statusColor: 'text-green-600',
        time: '2 hours ago'
      },
      { 
        title: 'Valid Anagram', 
        platform: 'LeetCode',
        status: 'Accepted',
        statusColor: 'text-green-600',
        time: '1 day ago'
      },
      { 
        title: 'Reverse Linked List', 
        platform: 'CodeChef',
        status: 'Wrong Answer',
        statusColor: 'text-red-600',
        time: '2 days ago'
      },
    ];
  
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm mt-6">
        <h2 className="text-lg font-semibold mb-4">Recent Submission</h2>
        <div className="space-y-4">
          {submissions.map((submission, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-3 last:border-0 last:pb-0">
              <div>
                <h3 className="font-medium">{submission.title}</h3>
                <p className="text-xs text-gray-500">{submission.platform}</p>
              </div>
              <div className="text-right">
                <p className={`text-sm ${submission.statusColor}`}>{submission.status}</p>
                <p className="text-xs text-gray-500">{submission.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  