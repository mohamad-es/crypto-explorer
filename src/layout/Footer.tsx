import {layoutData} from "@/layout/layoutData.ts";

const Footer = () => {
    return (
        <div className={'container mx-auto border-t text-center border-t-light-grey py-10 bg-white mt-40'}>
            <p className={'text-green-title mb-2'}>{layoutData.footer.title}</p>
            <p className={'text-green-subtitle'}>{layoutData.footer.subtitle}</p>
        </div>
    );
};

export default Footer;