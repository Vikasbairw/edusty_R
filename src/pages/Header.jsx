import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";

function Header() {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 56) {
                console.log(window.scrollY)
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className=" ">

            <div className="relative h-[100vh] ">
                <img src="./image/hero-wMB5D_Q0.png" alt="" className="h-[100vh]   w-full " />

                <div className="h-[100vh] w-full backend_color absolute top-[0px] ">
                    <div className=" w-full  ">
                        <div className={`fixed top-0 w-full z-[999] ${sticky ? 'bg-blue-400' : ''}`}>
                            <div className={` md:w-full  z-[9999] mx-auto    flex items-center justify-between mx-5 md:justify-center gap-[90px] py-[10px]`}>
                                <div className="w-[180px]">
                                    <img src="./image/logo.png" alt="" />
                                </div>
                                <div className="list-none flex  lg:gap-[40px] hidden md:flex gap-3  text-[16px] text-white font-[500] items-center">
                                    <li className="cursor-pointer">Home</li>
                                    <li className="cursor-pointer">Programe</li>
                                    <li className="cursor-pointer">About Us</li>
                                    <li className="cursor-pointer">Company</li>
                                    <li className="cursor-pointer">Testimonails</li>
                                    <li className="bg-white btn cursor-pointer text-black py-[14px] px-[25px] rounded-[30px]">Contact Us</li>
                                </div>
                                <div className="md:hidden flex justify-center items-center w-[50px] h-[40px] bg-[#6c6aab63] rounded-[15px] text-[25px] "><RiMenu2Fill/></div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center h-[90vh]">
                            <h1 className="md:text-[60px] text-[45px] font-bold text-white font-sans text-center">We Ensure better education <br /> for a better world</h1>
                            <p className=" font-sans text-white text-center">Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and <br />experiences needed to excel in the dynamic field of education</p>
                            <div className="bg-white flex py-[14px] px-[24px] rounded-[30px] items-center gap-3 cursor-pointer mt-[20px]">Explore More <FaArrowRightLong /> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;