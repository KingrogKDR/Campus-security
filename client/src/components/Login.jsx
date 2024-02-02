import { useState,useContext,} from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";
function Login() {
  const [emailid, setEmailid] = useState("");
  const [aadhar_number, setAadharNumber] = useState("");
  const {setUserInfo}=useContext(UserContext)
  const navigate = useNavigate()
  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/login", {
        method: "POST",
        headers: {
          'content-type': 'application/json',
        },
        credentials: "include",
        body: JSON.stringify({
          emailid,
          aadhar_number
        })
<<<<<<< HEAD
        if(res.ok){
            alert("Successful")
=======
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        // You can handle the successful login here, e.g., redirect to another page
        console.log(response)
        setUserInfo(emailid)
        const user = await response.json()
        console.log(user)
        if(user.admin===1){
          navigate("/admin")
>>>>>>> daa6a7f0156fb81a292e1ce527fe9418ba8157bd
        }
        else{

            navigate("/dashboard")
        }

      } else {
        // If the server returns an error status, handle it accordingly
        console.error("Login failed:", response.status);
      }
    } catch (error) {
      // Handle network errors or other issues
      console.error("An error occurred during login:", error);
    }
<<<<<<< HEAD
    return(
        <>
            <div className="w-full h-screen grid grid-rows-[200px_minmax(200px,_1fr)_250px] justify-center items-center">
                <p className="text-center text-4xl text-slate-400 font-semibold">Already a Trusted User,</p>
                <div className="shadow-lg flex items-center justify-center text-gray-500 border-[1px] border-slate-300 rounded-2xl">
                    <form onSubmit={(e)=>{handleSubmitLogin(e)}}>
                        <p className="mb-8 mt-6 font-medium text-xl">LOGIN</p>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="shadow-lg border-2 border-slate-200 block mb-8 px-4 py-2 rounded-2xl"/>
                        <label htmlFor="aadhar">Aadhar Number</label>
                        <input type="tel" id="aadhar" value={aadhar_number} onChange={(e)=>{setAadharNumber(e.target.value)}} className="shadow-lg border-2 border-slate-200 block mb-8 px-4 py-2 rounded-2xl"/>
                        <button className="shadow-lg py-3 px-6 rounded-2xl bg-gradient-to-t from-purple-500 to-violet-300 text-white mb-8 hover:ring-2 hover:ring-violet-200 hover:text-lg active:to-blue-200 transition duration-150 ease-in-out">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
=======
  };

  return (
    <>
      <div className="w-full h-screen grid grid-rows-[200px_minmax(200px,_1fr)_250px] justify-center items-center">
        <p className="text-center text-4xl text-slate-400 font-semibold">Already a Trusted User,</p>
        <div className="shadow-lg flex items-center justify-center text-gray-500 border-[1px] border-slate-300 rounded-2xl">
          <form onSubmit={(e) => { handleSubmitLogin(e) }}>
            <p className="mb-8 mt-6 font-medium text-xl">LOGIN</p>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" value={emailid} onChange={(e) => { setEmailid(e.target.value) }} className="shadow-lg border-2 border-slate-200 block mb-8 px-4 py-2 rounded-2xl" />
            <label htmlFor="aadhar">Aadhar Number</label>
            <input type="text" id="aadhar" value={aadhar_number} onChange={(e) => { setAadharNumber(e.target.value) }} className="shadow-lg border-2 border-slate-200 block mb-8 px-4 py-2 rounded-2xl" />
            <button className="shadow-lg py-3 px-6 rounded-2xl bg-gradient-to-t from-purple-500 to-violet-300 text-white mb-8 hover:ring-2 hover:ring-violet-200 hover:text-lg active:to-blue-200 transition duration-150 ease-in-out">Login</button>
          </form>
        </div>
      </div>
    </>
  );
>>>>>>> daa6a7f0156fb81a292e1ce527fe9418ba8157bd
}

export default Login;
