export default function ActivityHeatmap() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm mt-6">
      <h2 className="text-lg font-semibold mb-4">Activity Heatmap</h2>
      <div className="overflow-x-auto">
        <div className="grid grid-cols-53 gap-1 min-w-max">
          {Array.from({ length: 371 }).map((_, i) => (
            <div 
              key={i} 
              className={`w-3 h-3 rounded-sm ${
                Math.random() > 0.7 ? 'bg-green-500' : 
                Math.random() > 0.5 ? 'bg-green-300' : 
                Math.random() > 0.3 ? 'bg-green-200' : 
                'bg-gray-100'
              }`}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-gray-100 rounded-sm"></div>
            <div className="w-3 h-3 bg-green-200 rounded-sm"></div>
            <div className="w-3 h-3 bg-green-300 rounded-sm"></div>
            <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
