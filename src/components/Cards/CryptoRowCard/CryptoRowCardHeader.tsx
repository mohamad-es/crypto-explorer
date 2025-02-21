import { HeaderItemsProps } from "@/components/Cards/CryptoRowCard/index.tsx";

const headerItems: HeaderItemsProps[] = [
  {
    title: "Name",
    colSpan: 4,
  },
  {
    title: "Price",
    colSpan: 2,
  },
  {
    title: "Change",
    colSpan: 2,
  },
  {
    title: "24h Volume",
    colSpan: 2,
  },
  {
    title: "Market Cap",
    colSpan: 2,
  },
];

const CryptoRowCardHeader = () => {
  return (
    <div
      className={
        "grid grid-cols-12 items-center py-5 px-8 last-of-type:border-none border-b border-light-grey dark:border-main"
      }
    >
      {headerItems.map((headerItem) => (
        <div
          className={`col-span-${headerItem.colSpan} text-grey-subtitle dark:text-light-subtitle caption-medium-1`}
          key={headerItem.title}
        >
          {headerItem.title}
        </div>
      ))}
    </div>
  );
};

export default CryptoRowCardHeader;
