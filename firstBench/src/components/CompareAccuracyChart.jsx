import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Activity } from 'lucide-react';

const CompareAccuracyChart = () => {
  const accuracyData = [
    { slot: '1', value: 85 },
    { slot: '2', value: 42 },
    { slot: '3', value: 32 },
    { slot: '4', value: 58 },
    { slot: '5', value: 52 },
    { slot: '6', value: 42 },
    { slot: '7', value: 62 },
  ];

  return (
    <div className="bg-white rounded-xl p-6 w-full max-w-2xl">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <Activity className="text-gray-400 w-5 h-5" />
        <h3 className="text-gray-500 font-medium">Compare Accuracy</h3>
      </div>
      
      {/* Time markers */}
      <div className="flex justify-between mb-8">
        <div className="px-3 py-1 bg-gray-100 rounded text-sm text-gray-400">10MIN</div>
        <div className="px-3 py-1 bg-teal-400 text-white rounded text-sm">15MIN</div>
        <div className="px-3 py-1 bg-gray-100 rounded text-sm text-gray-400">30MIN</div>
        <div className="px-3 py-1 bg-gray-100 rounded text-sm text-gray-400">45MIN</div>
      </div>

      {/* Chart */}
      <div className="w-full">
        <BarChart 
          width={500} 
          height={250} 
          data={accuracyData} 
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid 
            strokeDasharray="3 3" 
            vertical={false} 
            stroke="#E5E7EB"
          />
          <XAxis 
            dataKey="slot" 
            axisLine={false} 
            tickLine={false}
            tick={{ fill: '#6B7280' }}
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false}
            ticks={[0, 25, 50, 75, 100]}
            domain={[0, 100]}
            tick={{ fill: '#6B7280' }}
            tickFormatter={(value) => `${value}%`}
            dx={-10}
          />
          <Bar 
            dataKey="value" 
            fill="#818CF8"
            radius={[4, 4, 0, 0]}
            barSize={30}
          />
        </BarChart>
      </div>
    </div>
  );
};

export default CompareAccuracyChart;