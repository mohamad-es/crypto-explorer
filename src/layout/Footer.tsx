import {layoutData} from "@/layout/layoutData.ts";

const Footer = () => {
    return (
        <div className={'container mx-auto text-center py-10 mt-40'}>
            <p className={'text-green-title dark:text-light-title mb-2'}>{layoutData.footer.title}</p>
            <p className={'text-green-subtitle dark:text-light-subtitle font-sans'}>{layoutData.footer.subtitle}</p>
        </div>
    );
};

export default Footer;