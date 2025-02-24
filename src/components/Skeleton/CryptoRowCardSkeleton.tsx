type CryptoRowCardSkeletonProps = {
  count: number[];
};

const CryptoRowCardSkeleton = ({ count }: CryptoRowCardSkeletonProps) => {
  return (
    <div className="border border-light-grey bg-white dark:border-white/5 dark:bg-[#160622] dark:text-light-grey rounded-lg">
      <div className="grid grid-cols-12 items-center py-5 px-8 last-of-type:border-none border-b border-light-grey dark:border-main">
        <div className="col-span-4 w-32 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="col-span-2 w-16 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="col-span-2 w-16 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="col-span-2 w-16 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="col-span-2 w-16 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>

      {count.map((item) => (
        <div
          key={item}
          className="grid grid-cols-12 caption-regular-1 items-center py-2 border-b dark:border-b-white/5 border-b-light-grey px-6 last-of-type:border-none transition-all"
        >
          <div className="flex items-center gap-3 col-span-4">
            <div className="w-11 h-11 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
            <div className="flex flex-col gap-2">
              <div className="w-20 h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
          <div className="col-span-2 w-16 h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="col-span-2 w-16 h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="col-span-2 w-16 h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="col-span-2 w-16 h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default CryptoRowCardSkeleton;
