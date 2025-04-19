export default function PlatformProfiles() {
    const platforms = [
      { name: 'LeetCode', username: '', rank: '' },
      { name: 'CodeChef', username: '', rank: '' },
      { name: 'HackerRank', username: '', rank: '' },
      { name: 'GitHub', username: '', rank: '' },
    ];
  
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm mt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Platform Profiles</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="divide-y divide-gray-200">
              {platforms.map((platform, index) => (
                <tr key={index}>
                  <td className="py-3 text-sm text-gray-900">{platform.name}</td>
                  <td className="py-3 text-sm text-gray-500">{platform.username || 'Not connected'}</td>
                  <td className="py-3 text-sm text-gray-500 text-right">{platform.rank || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-center">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium">
            Connect Profile
          </button>
        </div>
      </div>
    );
  }
  