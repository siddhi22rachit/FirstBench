import React from 'react';
import { Lightbulb } from 'lucide-react';

const SuggestionsCard = () => {
  const suggestions = [
    { range: 'Q. 1-12', time: '40sec', difficulty: 'Easy', color: 'text-emerald-400' },
    { range: 'Q. 12-32', time: '1.5min', difficulty: 'Medium', color: 'text-amber-400' },
    { range: 'Q. 32-40', time: '3min', difficulty: 'Hard', color: 'text-red-400' }
  ];

  return (
    <div className="bg-white rounded-xl p-4 w-64">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-gray-600">✨</span>
        <h3 className="text-gray-600 font-medium">Suggestions</h3>
      </div>

      {/* Suggestions Grid */}
      <div className="grid grid-cols-3 gap-2">
        {suggestions.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Q. Range */}
            <div className="bg-violet-50 rounded text-xs text-violet-600 py-1 px-2 mb-2 w-full text-center">
              {item.range}
            </div>
            
            {/* Time with dotted border */}
            <div className="border-2 border-dashed border-violet-100 rounded p-1 mb-1 w-full">
              <div className={`${item.color} font-medium text-sm text-center`}>
                {item.time}
              </div>
            </div>

            {/* Difficulty */}
            <div className={`text-xs text-center w-full ${
              item.difficulty === 'Easy' ? 'text-emerald-400' :
              item.difficulty === 'Medium' ? 'text-amber-400' : 'text-red-400'
            }`}>
              {item.difficulty}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestionsCard;