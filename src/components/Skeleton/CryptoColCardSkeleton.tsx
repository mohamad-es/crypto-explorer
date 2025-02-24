type CryptoRowCardSkeletonProps = {
  count: number[];
};

const CryptoColCardSkeleton = ({ count }: CryptoRowCardSkeletonProps) => {
  return (
    <div className="grid grid-cols-4 container mx-auto gap-7">
      {count.map((item) => (
        <div
          className="rounded-2xl py-4.5 h-40 justify-between flex flex-col border border-light-grey bg-white dark:bg-main/20 dark:border-light-grey/5 cursor-pointer transition-all animate-pulse"
          key={item}
        >
          <div className="flex mx-5 items-center border-b border-b-light-grey dark:border-b-light-grey/5 pb-7 gap-3.5">
            <div className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
            <div className="w-20 h-4 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
            <div className="w-12 h-4 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
            <div className="ms-auto w-6 h-6 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          </div>

          <div className="flex gap-10 justify-between px-5 font-sans mt-4">
            <div className="w-16 h-5 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
            <div className="w-12 h-4 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CryptoColCardSkeleton;
