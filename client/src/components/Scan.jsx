import React, { useState, useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const Scan = () => {
    const [scanResult, setScanResult] = useState(null);

    useEffect(() => {
        const success = (result) => {
            scanner.clear();
            setScanResult(result);
        };

        const error = (err) => {
            console.warn(err);
        };

        const scanner = new Html5QrcodeScanner('reader', { fps: 10, qrbox: { width: 250, height: 250 } });
        scanner.render(success, error);

        // Cleanup function to clear the scanner when the component is unmounted
        return () => {
            scanner.clear();
        };
    }, []);

    return (
        <div className='w-full h-screen'>
            {scanResult ? <p>{scanResult}</p> : <div id='reader'></div>}
        </div>
    );
};

export default Scan;
