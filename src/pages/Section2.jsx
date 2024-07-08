function Section2() {
    return (
        <>
            <div className="m-[50px]">

                <div className="flex sm:flex-row flex-col gap-[30px]">

                    <div className=" rounded-[20px] overflow-hidden mt-[40px]  relative">
                        <img src="./image/about-Bupj5-5F.png" alt="" className="h-full w-full " />
                        <img src="./image/play-icon.png" alt="" className="absolute top-[47%] left-[43%] w-[60px]" />

                    </div>
                    <div className=" ">
                        <h1 className="text-[20px] font-[500] text-[#212ea0]">ABOUT UNIVERSITY</h1>
                        <h1 className="text-[35px] font-bold font-sans">Nurturing Tomorrow's <br /> Leaders Today</h1>
                        <p className="font-sans text-[#676767] pb-[10px] ">Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
                        <p className="font-sans text-[#676767] pb-[10px]">With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
                        <p className="font-sans text-[#676767] pb-[10px]">Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
                    </div>
                </div>
                <div className="h-[200px] flex flex-col justify-center items-center">
                    <h3 className="text-[#212ea0]">GALLERY</h3>
                    <h1 className="font-bold text-[36px]">Campus Photos</h1>
                </div>
            </div>

        </>
    )
}
export default Section2;