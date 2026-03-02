import { useEffect } from 'react';

const AdsterraAd = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://pl28827858.effectivegatecpm.com/d7/04/98/d704985b48f4aef934098e1011bfd6ff.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <div id="adsterra-ad-container" className='min-h-34'></div>;
};

export default AdsterraAd;