import React from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Form() {
    const notify = () => toast();
    const [result, setResult] = React.useState("Form Submitted Successfully");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "e2425176-cd27-41f8-b324-37cd297dbe01");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        notify();
        toastfy(result)
      } else {
        console.log("Error", data);
        setResult(data.message);
        toastfy(result)
      }
    };

function toastfy(result){
    {toast(result)}

}
    return (
        <>
            <div className=" flex flex-col justify-center items-center">
                <h3 className="text-[#212ea0]">CONTACT US</h3>
                <h1 className="font-bold text-[36px]">Get in Touch</h1>
            </div>
            <div className="flex gap-4 m-2 flex-col sm:flex-row">
                <div className=" sm:w-[50%] w-[100%] ">
                    <div className="flex items-center gap-3">
                        <h1 className="font-[500] text-[25px]">Send us a message</h1>
                        <img src="./image/msg-icon.png" alt="" className="w-[35px]" />
                    </div>
                    <div className="pt-4 pb-2 text-[#676767]">
                        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                    </div>
                    <div className="flex items-center py-[8px]">
                        <img src="./image/download.png" alt="" className="w-[25px] h-[18px]" />
                        <h1 className="ps-[10px] text-[#676767]">Contact@GreatStack.dev</h1>
                    </div>
                    <div className="flex items-center py-[8px]">
                        <img src="./image/download 1.png" alt="" className="w-[25px] h-[18px]" />

                        <h1 className="ps-[10px] text-[#676767]">+1 123-456-7890</h1>
                    </div>
                    <div className="flex items-center py-[8px]">
                        <img src="./image/download 2.png" alt="" className="w-[25px] h-[18px]" />

                        <h1 className="ps-[10px] text-[#676767]">77 Massachusetts Ave, Cambridge
                            MA 02139, United States</h1>
                    </div>
                </div>
                <div className=" sm:w-[50%] w-[100%] ">
                    <form action="" onSubmit={onSubmit}>
                        <div className="">
                            <label htmlFor="">
                                Your name
                            </label>
                            <br />
                            <input type="text"   required  name="name" placeholder="Enter the Your name" className="bg-[#ebecfe;] w-full h-[50px] ps-4 focus:outline-none mt-2" />
                        </div>
                        <div className="">
                            <label htmlFor="">
                                Phone Number
                            </label>
                            <br />
                            <input type="text"   required  name="phone_number" placeholder="Enter  Your Phone Number" className="bg-[#ebecfe;] w-full h-[50px] ps-4 focus:outline-none mt-2" />
                        </div>
                        <div className="">
                            <label htmlFor="">
                                Your Email
                            </label>
                            <br />
                            <input type="email   required " name="email" placeholder="Enter Your email" className="bg-[#ebecfe;] w-full h-[50px] ps-4 focus:outline-none mt-2" />
                        </div>
                        <div className="">
                            <label htmlFor="">
                                Write your messages here
                            </label>
                            <br />
                            <textarea name="message" required placeholder="Enter Your message" className="bg-[#ebecfe;] w-full  h-[150px] ps-4 focus:outline-none mt-2 pt-2" ></textarea>
                        </div>
<input type="submit" className="bg-blue-600 rounded-[30px]  py-[14px] px-[34px]  text-white font-[400] cursor-pointer mt-[20px]" />
                    </form>
                </div>
            </div>
            <hr className="w-[1050px] m-auto mt-[50px] mb-3" />
            <div className="flex justify-between container m-auto text-[#6767]">

                <div className="cursor-pointer">© 2024 Edusity. All rights reserved.</div>
                <div className="flex list-none gap-3">
                    <li className="cursor-pointer">Terms of Services</li>
                    <li className="cursor-pointer">Privacy Policy</li>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}
export default Form;