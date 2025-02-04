import { RedirectIconProps } from "../../../types/types";

function RedirectIcon(params: RedirectIconProps) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            height="20px"
            width="20px" 
            viewBox="0 -960 960 960"
            fill="#11111"
            {...params}
        >
                <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/>
        </svg>
    );
}

export default RedirectIcon;