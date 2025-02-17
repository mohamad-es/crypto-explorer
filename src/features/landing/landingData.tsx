import CIcon from "@/assets/icon/CIcon.tsx";
import ShieldIcon from "@/assets/icon/ShieldIcon.tsx";
import CryptoIcon from "@/assets/icon/CryptoIcon.tsx";
import BookPlayIcon from "@/assets/icon/BookPlayIcon.tsx";

export const landingData = {
    hero: {
        title: "Start and Build Your Crypto Portfolio Here",
        description: "Only at CryptoCap, you can build a good portfolio and learn \n" +
            "best practices about cryptocurrency.",
        button: 'Explore crypto',
    },
    trend: {
        title: "Market Trend",
    },
    features: {
        title: 'CryptoCap Amazing Features',
        description: 'Explore sensational features to prepare your best investment in cryptocurrency',
        cards: [
            {
                icon: <CIcon/>,
                title: 'Decentralization',
                description: 'Cryptocurrencies operate on decentralized networks, eliminating the need for intermediaries like banks.'
            },
            {
                icon: <ShieldIcon/>,
                title: 'Anonymity and Privacy',
                description: 'Cryptocurrencies offer varying levels of privacy, allowing users to transact without revealing personal information.'
            },
            {
                icon: <CryptoIcon/>,
                title: 'Blockchain Technology',
                description: 'Transactions are recorded on a secure, transparent, and immutable public ledger.'
            },
            {
                icon: <BookPlayIcon/>,
                title: "Blockchain Technology",
                description: 'Transactions are recorded on a secure, transparent, and immutable public ledger.'
            }
        ]
    },
    categories: {
        title: 'Market Update',
        description: 'Cryptocurrencies categories',
        categories: [
            {
                title: 'Popular'
            },
            {
                title: 'Metaverse'
            },
        ],
        link: {
            title: 'See all cryptocurrencies',
            link: '/market'
        }
    }
}