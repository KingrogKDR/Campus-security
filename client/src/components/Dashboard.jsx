import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("http://localhost:5001/qr/getQr", { credentials: "include" }).then(
      (response) => {
        response.json().then((userInfo) => {
          console.log(userInfo);
          setData(userInfo.userid);
        });
      }
    );
  });
  console.log(data);
  return (
    <div className="w-full lg:h-[45rem] lg:grid lg:grid-rows-2 grid-cols-2 gap-3 bg-[#ddc4dd] p-10">
      <div className="row-span-2 lg:bg-white bg-none rounded-3xl lg:shadow-lg grid place-content-center mb-12">
        <div className="w-[23rem] bg-[#dfd4ff] h-[34.5rem] rounded-2xl shadow-2xl p-4">
          <div
            className="w-[20.813rem] h-[18.25rem] bg-gray-50 rounded-xl bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
                data
              )}&amp;size=333x292)`,
            }}
          ></div>
        </div>
      </div>
      <div className="bg-white rounded-3xl shadow-lg p-8 mb-6 lg:mb-2">
        {" "}
        <div
          className="lg:w-[46rem] h-[15rem] bg-red-50 rounded-xl bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(thumbnail.jpeg)',
          }}
        ></div>
      </div>
      <div className="bg-white rounded-3xl shadow-lg p-12 mb-6 text-red-800 font-extrabold text-xl lg:text-2xl flex justify-start">
        <span className="mt-1 mr-1">HELP</span>
        <div className="w-12 h-8 flex justify-center items-center">
          <img
            src="help.jpeg"
            alt="help"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
