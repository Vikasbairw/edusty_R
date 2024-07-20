function Section1() {
    return (
        <>
            <div className=" m-[40px]">
                <div className=" flex flex-col justify-center items-center row-span-2 " id="programe">
                    <h3 className="text-[#212ea0]">OUR PROGRAM</h3>
                    <h1 className="text-[40px] mb-[40px] font-bold text-[#3443]">What We Offer</h1>
                </div>


                <div className=" md:flex flex-col flex md:flex-row gap-[25px] justify-center items-center ">
                    <div className=" h-[300px] w-full rounded-[15px] relative overflow-hidden duration-100">
                        <img src="./image/program-1.png" alt="" className="w-full h-full hover_effcet duration-100 " />
                        <div className="bg-black h-full w-full absolute top-[100%] effect_body"></div>
                    </div>
                    <div className=" h-[300px] w-full rounded-[15px] overflow-hidden ">
                        <img src="./image/program-2.png" alt="" className="w-full h-full" />

                    </div>
                    <div className=" h-[300px] w-full rounded-[15px] overflow-hidden">
                        <img src="./image/program-3.png" alt="" className="w-full h-full" />

                    </div>
                </div>
            </div>
        </>
    )
}
export default Section1;