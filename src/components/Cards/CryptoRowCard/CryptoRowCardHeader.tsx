import { HeaderItemsProps } from "@/components/Cards/CryptoRowCard/index.tsx";

const headerItems: HeaderItemsProps[] = [
  {
    title: "Name",
    colSpan: 3,
  },
  {
    title: "Price",
    colSpan: 1,
  },
  {
    title: "24h %",
    colSpan: 1,
  },
  {
    title: "Volume (24h)",
    colSpan: 1,
  },
  {
    title: "Market Cap",
    colSpan: 1,
  },
  {
    title: "Last 7 days",
    colSpan: 1,
  },
];

const CryptoRowCardHeader = () => {
  return (
    <div
      className={
        "grid grid-cols-8 items-center py-5 ps-6 pe-10 last-of-type:border-none border-b border-light-grey dark:border-main"
      }
    >
      {headerItems.map((headerItem) => (
        <div
          className={`col-span-${headerItem.colSpan} text-grey-subtitle dark:text-light-subtitle caption-medium-2`}
          key={headerItem.title}
        >
          {headerItem.title}
        </div>
      ))}
    </div>
  );
};

export default CryptoRowCardHeader;
