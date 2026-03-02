import React from 'react';

const AdBanner = () => {
    // We wrap the provided Adsterra ad code inside a simple HTML document.
    // This allows it to run safely inside an iframe without affecting the React app.
    // It also prevents issues where "document.write" wipes out the entire page.
    const adCode = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: transparent; }
            </style>
        </head>
        <body>
            <script>
                atOptions = {
                    'key' : '8b6aadd4b6a354c22217c04175375661',
                    'format' : 'iframe',
                    'height' : 50,
                    'width' : 320,
                    'params' : {}
                };
            </script>
            <script type="text/javascript" src="https://www.highperformanceformat.com/8b6aadd4b6a354c22217c04175375661/invoke.js"></script>
        </body>
        </html>
    `;

    return (
        <div className="flex justify-center items-center my-6 w-full">
            <iframe
                title="Adsterra Banner"
                srcDoc={adCode}
                width="320"
                height="50"
                style={{ border: 'none', overflow: 'hidden', width: '320px', height: '50px' }}
                scrolling="no"
                sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin"
            ></iframe>
        </div>
    );
};

export default AdBanner;