import React from 'react';
import { FileText } from 'lucide-react';

const TimeComparisonBoxes = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {[1, 2, 3].map((index) => (
        <div key={index} className="bg-white rounded-lg p-3 shadow-md h-64">
          <div className="flex items-center gap-2 text-gray-600">
            <FileText className="w-5 h-5" />
            <span>Compare Accuracy</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeComparisonBoxes;