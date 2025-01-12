import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

const ResultsCard = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="flex flex-col items-center mb-6">
        <div className="relative mb-6">
          <img 
            src="https://telecrm.in/blog/wp-content/uploads/2023/12/806021d7-2563-4d85-98ab-014ef4047875.png" 
            alt="Results" 
            className="w-32 h-32"
          />
          <div className="absolute -right-2 -top-2 bg-purple-100 p-2 rounded-lg">
            <FileText className="text-purple-600 w-6 h-6" />
          </div>
        </div>
        <h2 className="text-purple-600 text-xl font-semibold mb-2">Your Result!</h2>
        <p className="text-gray-500 text-sm">All your insights & details in one place</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded">YOU'VE PASSED</span>
            <div className="mt-1">
              <span className="text-2xl font-bold">136</span>
              <span className="text-sm text-gray-500">/240</span>
            </div>
          </div>
          <div className="bg-teal-500 text-white px-2 py-1 rounded text-sm">
            76% ACCURACY
          </div>
        </div>
      </div>

      <div className="mb-8 mt-5">
        <div className="flex items-center gap-4 mb-2">
          <img 
            src="/api/placeholder/48/48" 
            alt="Top Scorer" 
            className="w-12 h-12 rounded-full"
          />
          <div>
            <div className="text-sm text-gray-500">Top Score</div>
            <div className="text-2xl font-bold">230<span className="text-sm text-gray-500">/240</span></div>
          </div>
        </div>
        <div className="text-sm mt-8">By Parth Akotkar</div>
        <div className="bg-teal-500 text-white px-2 py-1 rounded text-sm ml-[60%]">92% accuracy</div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="text-sm mb-1">Improve your Marks</div>
          <div className="text-gray-500 text-sm mb-2">Improve your score by practicing more.</div>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-lg">
            Practice more
          </button>
        </div>

        </div>

      <div className="bg-white border rounded-lg p-4 mt-[30%]">
        <h3 className="font-bold mb-2">Revisit Paper</h3>
        <p className="text-sm text-gray-500 mb-4">
          Challenge your friends by simply sharing a link to this test
        </p>
        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2">
          <span>Visit</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ResultsCard;