import { useEffect, useRef } from 'react';

export default function AdBanner({ scriptUrl }) {
    const banner = useRef();

    useEffect(() => {
        if (!banner.current || banner.current.hasChildNodes()) {
            return;
        }

        const script = document.createElement('script');
        script.type = 'text/javascript';
        if (scriptUrl) {
            script.src = scriptUrl;
        } else {
            // Default script provided by user
            script.src = 'https://pl28827858.effectivegatecpm.com/d7/04/98/d704985b48f4aef934098e1011bfd6ff.js';
        }

        banner.current.append(script);
    }, [scriptUrl]);

    return (
        <div
            className="flex justify-center items-center w-full py-5 z-50 relative"
            ref={banner}
        ></div>
    );
}
