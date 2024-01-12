// useFacebookSdk.js
import { useState, useEffect } from 'react';

const useFacebookSdk = (appId) => {
    const [isSdkReady, setIsSdkReady] = useState(false);

    useEffect(() => {
        if (window.FB) {
            console.log("FB SDK already initialized");
            setIsSdkReady(true);
            return;
        }

        window.fbAsyncInit = function () {
            // eslint-disable-next-line no-undef
            FB.init({
                appId,
                cookie: true,
                xfbml: true,
                version: 'v14.0'
            });
            setIsSdkReady(true);
        };

        const script = document.createElement('script');
        script.src = "https://connect.facebook.net/en_US/sdk.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }, [appId]);

    return isSdkReady;
};

export default useFacebookSdk;