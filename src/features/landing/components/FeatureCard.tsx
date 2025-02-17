type FeatureCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard = ({title, description, icon}: FeatureCardProps) => {
    return (
        <div className={'bg-white border border-light-grey  dark:bg-main/30 dark:border-white/5 rounded-2xl px-6 py-7'}>
            {icon}
            <h6 className={'mt-7 mb-3 heading-6 text-black-title dark:text-light-title'}>{title}</h6>
            <p className={'text-grey-subtitle caption-regular-1 dark:text-light-subtitle'}>{description}</p>
        </div>
    );
};

export default FeatureCard;