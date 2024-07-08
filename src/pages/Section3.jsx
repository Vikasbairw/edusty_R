
import { FaArrowRightLong } from "react-icons/fa6";
function Section3(){
    return(
        <>
        <div className="  grid grid-cols-2 sm:grid-cols-4 gap-[25px] m-3">
            <div className=" border  rounded-[20px] overflow-hidden">
                <img src="./image/gallery-1.png" alt="" />
            </div>
            <div className=" border  rounded-[20px] overflow-hidden">
            <img src="./image/gallery-2-DYatBGZh.png" alt="" />
            </div>
            <div className="border  rounded-[20px] overflow-hidden">
            <img src="./image/gallery-3.png" alt="" />
            </div>
            <div className="border  rounded-[20px] overflow-hidden">
            <img src="./image/gallery-4.png" alt="" />
            </div>
        </div>

        <div className=" flex justify-center mt-[40px]">
        <div className="bg-[#4576] w-[180px] flex py-[14px] px-[24px] rounded-[30px] items-center gap-3 cursor-pointer mt-[20px]">See more here <FaArrowRightLong/> </div>
</div>
<div className="h-[200px] flex flex-col justify-center items-center">
                    <h3 className="text-[#212ea0]">TESTIMONIALS</h3>
                    <h1 className="font-bold text-[36px]">What Student Says</h1>
                </div>
        </>  
        )
}

export default Section3; 