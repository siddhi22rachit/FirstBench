import React from 'react';

const ApproachDataCard = () => {
  const approachData = [
    { percentage: '25', label: 'Based on Facts' },
    { percentage: '32', label: 'Based on Analysis' },
    { percentage: '19', label: 'Based on Elimination' },
    { percentage: '24', label: 'Based on Guess' }
  ];

  return (
    <div className="bg-white rounded-xl p-4 w-70">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-gray-500">⚡</span>
        <h3 className="text-gray-500 font-medium">Approach Data</h3>
      </div>

      {/* Data Items */}
      <div className="space-y-2">
        {approachData.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {/* Percentage Box */}
            <div className="bg-violet-50 rounded px-2 py-1 min-w-[3rem] text-center">
              <span className="text-violet-600 font-medium">{item.percentage}%</span>
            </div>

            {/* Label */}
            <div className="text-sm">
              <span className="text-gray-600">Based on </span>
              <span className="text-violet-600">{item.label.split('Based on ')[1]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApproachDataCard;