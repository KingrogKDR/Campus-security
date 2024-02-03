import React ,{useEffect, useState} from 'react'

const Dashboard = () => {
  const [data,setData] = useState("")
  useEffect(()=>{
    fetch("http://localhost:5001/qr/getQr", {credentials:'include'
  }).then((response) => {
    response.json().then((userInfo) => {
      console.log(userInfo)
      setData(userInfo.userid)
    });
  });
  })
  console.log(data);
  return (
    <div className='w-full lg:h-[45rem] lg:grid lg:grid-rows-2 grid-cols-2 gap-3 bg-[#ddc4dd] p-10'>
        <div className='row-span-2 lg:bg-white bg-none rounded-3xl lg:shadow-lg grid place-content-center mb-12'>
          <div className='w-[23rem] bg-[#dfd4ff] h-[34.5rem] rounded-2xl shadow-2xl p-4'>
            <div className='w-[20.813rem] h-[18.25rem] bg-gray-50 rounded-xl bg-contain bg-center bg-no-repeat' style={{backgroundImage:`url(https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(data)}&amp;size=333x292)`,}}></div>
          </div>
        </div> 
        <div className='bg-white rounded-3xl shadow-lg p-12 mb-8 lg:mb-3'> map</div> 
        <div className='bg-white rounded-3xl shadow-lg p-12 mb-6'>help</div> 
    </div>
  )
}

export default Dashboard