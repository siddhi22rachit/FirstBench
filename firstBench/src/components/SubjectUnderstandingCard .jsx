import React from 'react';
import { Brain, Clock, ArrowUp } from 'lucide-react';

const SubjectUnderstandingCard = () => {
  const subjects = [
    { name: 'Geography', color: 'bg-emerald-400' },
    { name: 'Politics', color: 'bg-amber-400' },
    { name: 'Current Affairs', color: 'bg-emerald-400' },
    { name: 'General Studies', color: 'bg-red-500' },
    { name: 'Mathematics', color: 'bg-emerald-400' },
    { name: 'Social Studies', color: 'bg-gray-300' },
    { name: 'English Literature', color: 'bg-red-500' },
    { name: 'Indian History', color: 'bg-amber-400' },
    { name: 'Economics', color: 'bg-emerald-400' }
  ];

  return (
    <div className="flex gap-4">
      {/* First Card */}
      <div className="bg-white rounded-lg p-6 shadow-sm w-82">
        <div className="flex items-center gap-2 mb-6">
          <Brain className="text-gray-400 w-5 h-5" />
          <h3 className="text-gray-500 font-medium">Improvements</h3>
        </div>

        <h4 className="text-gray-700 font-medium mb-4">Subject Understanding</h4>

        <div className="flex flex-wrap gap-2">
          {subjects.map((subject, index) => (
            <span
              key={index}
              className={`${subject.color} text-white text-xs px-3 py-1 rounded-full`}
            >
              {subject.name}
            </span>
          ))}
        </div>
      </div>

      {/* Second Card */}
      <div className="bg-white rounded-lg p-6 shadow-sm w-72">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="text-gray-400 w-5 h-5" />
          <h3 className="text-gray-500 font-medium">Response Time</h3>
        </div>

        <div className="bg-indigo-500 text-white text-xs px-3 py-1 rounded-md inline-block mb-4">
          Std Time - 2min
        </div>

        <div className="border border-dashed border-gray-200 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-teal-500 text-4xl font-semibold">60%</span>
            <span className="text-gray-400 text-xs mt-[10%]">Ans took</span>
            <div className="text-right">
              
              <div className="flex items-center text-rose-500">
                <ArrowUp className="w-4 h-4" />
                <span className="text-sm">2min</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <span className="text-gray-900">You are</span>
          <span className="text-rose-500">slow</span>
          <span className="text-gray-900">!</span>
        </div>
      </div>
    </div>
  );
};

export default SubjectUnderstandingCard;