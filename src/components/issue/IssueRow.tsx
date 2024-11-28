import React from 'react';
import { Checkbox } from "@material-tailwind/react";
import { useRouter } from 'next/navigation';

interface IssueRowProps {
  name: string;
  sentiment: 'Positive' | 'Negative' | 'Neutral';
  message: string;
  createAt: string;
}

const IssueRow: React.FC<IssueRowProps> = ({ name, sentiment, message, createAt }) => {
  const router = useRouter();

  const sentimentColor = sentiment === 'Positive' ? 'bg-[#ccf0eb] text-[#00b69b]' :
    sentiment === 'Negative' ? 'bg-[#fcd7d4] text-[#ef3826]' :
      'bg-[#ccd0d9] text-[#2b3641]';

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const hour = date.getUTCHours().toString().padStart(2, '0');
    const minute = date.getUTCMinutes().toString().padStart(2, '0');

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${hour}:${minute} - ${day}/${month}/${year}`;
  }


  return (
    <div 
      // onClick={() => router.push(`issue-history/${name}`)}
      className={`flex flex-wrap w-full border-b border-gray-200 max-md:max-w-full items-start lg:items-center h-auto lg:py-4 px-2.5 cursor-pointer bg-white hover:bg-[#f4f7ff]`}>
      <div className={`flex flex-col lg:flex-1 grow shrink justify-center w-full lg:w-[66px]`}>
        <div className="flex overflow-hidden items-center ml-4 pl-px w-full min-h-[48px]">
          <Checkbox onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
        </div>
      </div>
      <div className={`flex flex-col lg:flex-2 grow shrink justify-center pl-2.5 text-sm font-bold text-neutral-800 w-full lg:w-[70px]`}>
        <div className="overflow-hidden self-stretch px-3 lg:py-4 py-2 w-full  font-Averta-Bold text-[15px]">{name}</div>
      </div>
      <div className={`flex flex-col lg:flex-5 grow shrink justify-center pl-2.5 text-sm font-semibold min-w-[240px] text-neutral-800 lg:w-[450px] w-full max-md:max-w-full`}>
        <div className="overflow-hidden self-stretch px-3 lg:py-4 py-2 w-full max-md:max-w-full font-Averta-Bold text-[15px]">{message}</div>
      </div>
      <div className={`flex flex-col grow shrink justify-center pl-2.5 text-sm text-neutral-800 w-full lg:w-[145px]`}>
        <div className="overflow-hidden self-stretch px-3 lg:min-w-[152px] lg:py-4 pt-2 pb-3 w-full font-Averta-SemiBold text-[14px]">{formatDate(createAt)}</div>
      </div>
    </div>
  );
};

export default IssueRow;