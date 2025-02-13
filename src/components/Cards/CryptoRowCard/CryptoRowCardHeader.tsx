import {HeaderItemsProps} from "@/components/Cards/CryptoRowCard/index.tsx";

const headerItems: HeaderItemsProps[] = [
    {
        title: 'No',
        colSpan: 1,
    },
    {
        title: 'Name',
        colSpan: 4,
    },
    {
        title: 'Last Price',
        colSpan: 2,
    },
    {
        title: 'Change',
        colSpan: 2,
    },
    {
        title: "Market Stats",
        colSpan: 2,
    },
    {
        title: 'Explore',
        colSpan: 1,
    }
]

const CryptoRowCardHeader = () => {
    return (
        <div
            className={'grid grid-cols-12 items-center py-5 px-8 last-of-type:border-none border-b border-light-grey'}>
            {headerItems.map((headerItem) => (
                <div className={`col-span-${headerItem.colSpan} caption-medium-1 text-grey-subtitle`} key={headerItem.title}>{headerItem.title}</div>
            ))}
        </div>
    );
};

export default CryptoRowCardHeader;