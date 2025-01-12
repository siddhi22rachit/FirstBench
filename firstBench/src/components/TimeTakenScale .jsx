import React from 'react';
import { Clock } from 'lucide-react';

const TimeTakenScale = () => {
  // Generate major and minor ticks for upper scale (10sec to 90)
  const upperTicks = Array.from({ length: 9 }, (_, i) => (i + 1) * 10);

  return (
    <div className="bg-white rounded-lg p-6 max-w-2xl">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="text-gray-400 w-5 h-5" />
        <h3 className="text-gray-400 font-medium text-sm">Time Taken</h3>
      </div>

      {/* Upper Scale */}
      <div className="relative h-32 mb-4">
        {/* Scale background */}
        <div className="absolute w-full h-22 bg-gray-50 rounded-lg top-0" />

        {/* Main scale line */}
        <div className="absolute w-full h-0.5 top-4">
          {/* Tick marks container */}
          {Array.from({ length: 81 }, (_, i) => (
            <div
              key={i}
              className={`absolute w-0.5 bg-indigo-700 transform -translate-x-1/2
                ${i % 10 === 0 ? 'h-4' : 'h-2'}`}
              style={{ left: `${i * (100 / 80)}%` }}
            />
          ))}

          {/* Major tick labels */}
          {upperTicks.map((value, index) => (
            <div
              key={index}
              className="absolute transform -translate-x-1/2"
              style={{ left: `${index * (100 / 8)}%` }}
            >
              <span className="absolute top-4 text-gray-600 font-bold text-sm">
                {index === 0 ? `${value}sec` : value}
              </span>
            </div>
          ))}
        </div>

        {/* Center marker */}
        <div className="absolute left-[25%] h-20 w-4 bg-indigo-500 bg-opacity-50 top-6 rounded" />

        {/* Colored bars */}
        <div className="absolute w-full top-10 flex flex-col gap-1">
          <div className="h-4 bg-red-500 w-[60.5%] mt-[4%]" />
          <div className="h-4 bg-green-400 w-[24%] mt-[1%]" />
        </div>
      </div>

      <div className="text-gray-500 text-m mb-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </div>

      {/* Lower Scale */}
      <div className="relative h-32 mb-4">
        {/* Scale background */}
        <div className="absolute w-full h-22 bg-gray-50 rounded-lg top-0" />

        {/* Main scale line */}
        <div className="absolute w-full h-0.5 top-4">
          {/* Tick marks container */}
          {Array.from({ length: 81 }, (_, i) => (
            <div
              key={i}
              className={`absolute w-0.5 bg-indigo-700 transform -translate-x-1/2
                ${i % 10 === 0 ? 'h-4' : 'h-2'}`}
              style={{ left: `${i * (100 / 80)}%` }}
            />
          ))}

          {/* Major tick labels */}
          {[4, 3, 2, 1, 0, 1, 2, 3, 4].map((value, index) => (
            <div
              key={index}
              className="absolute transform -translate-x-1/2"
              style={{ left: `${index * (100 / 8)}%` }}
            >
              <span className="absolute top-4 text-gray-600 font-bold text-sm">
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Center marker */}
        <div className="absolute left-1/2 h-20 w-4 bg-indigo-300 bg-opacity-50 top-6 rounded" />

        {/* Colored bars */}
        <div className="absolute w-full top-16 flex gap-1">
          <div className="h-4 bg-green-400 w-[25%] rounded ml-[25%] mt-[3%]" />
          <div className="h-4 bg-red-500 w-[36%] rounded ml-[3%] mt-[3%]" />
        </div>
      </div>

      <div className="text-gray-500 text-m mb-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </div>
    </div>
  );
};

export default TimeTakenScale;