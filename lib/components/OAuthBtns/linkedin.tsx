import { OAuthBtnInterface, OAuthType } from "./types";

export const OAuthWithLinkedinBtn: React.FC<OAuthBtnInterface> = (props: { btnType: OAuthType }) => {
    return (
        <button
            className="flex items-center bg-white border border-gray-300 rounded-lg w-full my-2 shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -2 44 44" version="1.1">
                <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Color-" transform="translate(-702.000000, -265.000000)" fill="#007EBB">
                        <path
                            d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z"
                            id="LinkedIn">

                        </path>
                    </g>
                </g>
            </svg>
            <span>{props.btnType} LinkedIn</span>
        </button>
    );
}
