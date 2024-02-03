import React, { useState, useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const Scan = () => {
    const [user_id, setuserid] = useState(null);
    const [checkin_location,setcheckin_location] = useState("")
    useEffect(() => {
        const success = (result) => {
            scanner.clear();
            setuserid(result);
            console.log(result)
        };

        const error = (err) => {
            console.warn(err);
        };

        const scanner = new Html5QrcodeScanner('reader', { fps: 5, qrbox: { width: 250, height: 250 } });
        scanner.render(success, error);

        // Cleanup function to clear the scanner when the component is unmounted
        return () => {
            scanner.clear();
        };
    }, []);
    const handleClick=(e)=>{
        e.preventDefault()
        fetch('http://localhost:5001/Scan', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                user_id,
                checkin_location
            }),
        })
        .then((response) => response.json())
        .then((userInfo) => {
            console.log(userInfo);
        })
        .catch((error) => {
            console.error('Error during fetch:', error);
        });
        
    }

    return (
        <div className='w-full h-screen grid place-content-center'>
            {user_id ? <>
                <p className='text-3xl'>UniqueId:{user_id}</p> 
<form onSubmit={(e)=>handleClick(e)} className='flex flex-col items-center justify-center'>
<input type='text' value={checkin_location} onChange={(e)=>setcheckin_location(e.target.value)} className='border rounded-lg mt-10 h-10 w-full p-10' placeholder='Enter the location'/>

<button
    className='w-full h-20 bg-red-100 rounded-md mt-10'
    disabled={!user_id || !checkin_location}
>
    Approve
</button>

</form>
              
            </>
            : <div id='reader' className='w-[20rem] h-[20rem] grid items-center place-content-center'></div>}
        </div>
    );
};

export default Scan;
