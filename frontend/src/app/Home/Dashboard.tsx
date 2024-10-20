import React from "react";
import Image from "next/image";

interface LoadItemProps {
  label: string;
  percentage: number;
  color: string;
}

const LoadItem: React.FC<LoadItemProps> = ({ label, percentage, color }) => (
  <div className="flex items-center mb-2">
    <div className="flex-grow bg-gray-200 h-6 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full text-white text-xs font-bold flex items-center pl-2"
        style={{ width: `${percentage}%`, backgroundColor: color }}
      >
        {label}
      </div>
    </div>
    <span className="ml-2 text-sm">{percentage}%</span>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="flex justify-center w-full pt-5">
      <div className="bg-white border border-gray-300 rounded-3xl p-6 w-[85%] shadow-md text-customGreen">
        <div className="flex justify-between">
          <div className="text-lg font-bold flex items-center pb-3">
            <Image
              src="/assets/Trash.png"
              alt="Trash icon"
              width={20}
              height={20}
              className="mr-2"
            />
            <span className="text-sm">Bin #12391</span>
          </div>
          <div className="text-right text-sm flex items-center justify-end">
            <Image
              src="/assets/Location.png"
              alt="Location icon"
              width={20}
              height={20}
              className="mr-2 pb-4"
            />
            <div className="text-left font-semibold text-sm underline">
              1982 Clayton St,
              <br />
              San Francisco, CA
            </div>
          </div>
        </div>
        <div className="text-sm text-customGreen font-bold flex items-center">
          <Image
            src="/assets/Battery.png"
            alt="Battery icon"
            width={20}
            height={20}
            className="mr-2"
          />
          <span>97%</span>
        </div>
        <div className="font-bold">
          <div className="text-md font-bold mb-2 text-center w-full">
            Garbage Load
          </div>
          <LoadItem label="Waste" percentage={89} color="#4CAF50" />
          <LoadItem label="Plastic" percentage={23} color="#8BC34A" />
          <LoadItem label="Compost" percentage={72} color="#CDDC39" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
