const Manager = () => {

    return (

        <>

            <div class="absolute top-0 -z-10 h-full w-full bg-white">
                <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-green-200 opacity-50 blur-[80px]"></div>
            </div>

            <div>
                <div className='font-bold text-2xl'>
                    <span className="text-green-400">&lt;</span>
                    Pass 
                    <span className="text-green-400">OP/&gt;</span>
                </div>
                <p>Your own Password Manager</p>
                <input type="text" /> 
                <div>
                    <input type="text" />
                    <input type="text" />
                </div>
            </div>
        </>

    );

};

export default Manager;