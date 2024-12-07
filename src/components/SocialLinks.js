import React from 'react';
import { FacebookShareButton, InstapaperShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, InstapaperIcon, LinkedinIcon, XIcon } from "react-share";

const SocialLinks = () => {
    //added the web url for the props
    const fbUrl = "facebook.com"
    const twUrl = "x.com"
    const lnUrl = "linkedln.com"
    const igUrl = "instagram.com"

    return (<div className="flex justify-center space-x-4 mt-4">
        <FacebookShareButton
            url={fbUrl}
            className="Demo__some-network__share-button"
        >
        <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton
            url={twUrl}
        >
        <XIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton
            url={lnUrl}
        >
        <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <InstapaperShareButton
            url={igUrl}
        >
            <InstapaperIcon size={32} round />
        </InstapaperShareButton>
    </div>)
}

export default SocialLinks