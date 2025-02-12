import GithubIcon from "@/assets/icon/GithubIcon.tsx";
import {Link} from "react-router";

const GithubLink = () => {
    return (
        <Link target={'_blank'} to={'https://github.com/mohamad-es/crypto-explorer'}>
            <GithubIcon/>
        </Link>
    );
};

export default GithubLink;