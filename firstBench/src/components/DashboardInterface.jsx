import React from "react";
import CompareAccuracyChart from "./CompareAccuracyChart";
import SubjectUnderstandingCard from "./SubjectUnderstandingCard ";
import ResultsCard from "./ResultsCard";
import SuggestionsCard from "./SuggestionsCard ";
import TimeComparisonBoxes from "./TimeComparisonBoxes";
import TimeTakenScale from "./TimeTakenScale ";
import ApproachDataCard from "./ApproachDataCard ";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 w-full">
      {/* Main Grid */}
      <div className="w-full px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-2">
          {/* Left Column - Results Card */}
          <div className="lg:col-span-1">
            <ResultsCard />
          </div>
          {/* Right Section - Col span 3 */}
          <div className="lg:col-span-3 space-y-4 lg:space-y-8">
            {/* Compare Accuracy Boxes */}
            <TimeComparisonBoxes />
            {/* Three Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-8">
              {/* Subject Understanding Card */}
              <div className="md:col-span-2">
                <SubjectUnderstandingCard />
              </div>
              {/* Approach Data Card */}
              <div className="lg:col-span-1">
                <ApproachDataCard />
              </div>
              {/* Suggestions Card */}
              <div className="lg:col-span-1">
                <SuggestionsCard />
              </div>
            </div>
            {/* Charts Row - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
              <div className="w-full">
                <CompareAccuracyChart />
              </div>
              <div className="w-full">
                <TimeTakenScale />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
