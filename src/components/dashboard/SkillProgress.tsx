export default function SkillProgress() {
    const skills = [
      { name: 'Problem Solving', progress: 80 },
      { name: 'Data Structures', progress: 65 },
      { name: 'Algorithms', progress: 50 },
    ];
  
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Skill Progress</h2>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm mb-1">
                <span>{skill.name}</span>
                <span>{skill.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-purple-600 h-2 rounded-full" 
                  style={{ width: `${skill.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  