export default function StatsCards() {
    const stats = [
      { label: 'Total Problems', value: 0, bgColor: 'bg-red-50', textColor: 'text-red-700' },
      { label: 'Weekly streak', value: 0, bgColor: 'bg-blue-50', textColor: 'text-blue-700' },
      { label: 'Active Streak', value: 0, bgColor: 'bg-gray-50', textColor: 'text-gray-700' },
      { label: 'Average Rating', value: 0, bgColor: 'bg-yellow-50', textColor: 'text-yellow-700' },
    ];
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {stats.map((stat, index) => (
          <div key={index} className={`${stat.bgColor} rounded-lg p-4 shadow-sm`}>
            <div className="text-center">
              <h3 className={`text-3xl font-bold ${stat.textColor}`}>{stat.value}</h3>
              <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  