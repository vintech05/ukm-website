import '/src/index.css'
import { GiHamburger } from "react-icons/gi";
import { IconContext } from "react-icons";

const navbar = () => {
    return (
        <header className="pb-6 bg-[#18181C] lg:pb-0">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* <!-- lg+ --> */}
        <nav className="flex items-center justify-between px-4 h-16 lg:h-20 bg-[#18181C]">
            <div className="flex-shrink-0">
                <a href="#" title="" className="flex">
                    <IconContext.Provider value={{ className: "text-yellow-300 text-5xl cursor-pointer" }}>
                        <div className='text-white flex gap-4 items-center'>
                        <GiHamburger />
                            <p className='font-Inter font-semibold uppercase'>Burgerloyal</p>
                        </div>
                    </IconContext.Provider>
                </a>
            </div>

            <button type="button" className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden">
                {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                </svg>

                {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10 text-white capitalize">
                <a href="#" title="" className="font-Inter font-light text-base transition-all duration-200 hover:text-yellow-300 focus:text-yellow-300"> tentang </a>

                <a href="#" title="" className="font-Inter font-light text-base transition-all duration-200 hover:text-yellow-300 focus:text-yellow-300"> promo </a>

                <a href="#" title="" className="font-Inter font-light text-base transition-all duration-200 hover:text-yellow-300 focus:text-yellow-300"> kontak </a>

                <a href="#" title="" className="font-Inter font-light text-base transition-all duration-200 hover:text-yellow-300 focus:text-yellow-300"> harga </a>

            </div>

            <div>
                
                <a href="#" title="" className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-black transition-all duration-300 bg-yellow-300 border border-transparent rounded-full lg:inline-flex hover:bg-yellow-400 focus:bg-yellow-400 hover:text-white" role="button">Order Sekarang</a>

            </div>

        </nav>

        {/* <!-- xs to lg --> */}
        <nav className="pt-4 pb-6 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
                <div className="flex flex-col px-6 -my-2 space-y-1 text-white">
                    <a href="#" title="" className="inline-flex py-2 text-base border-b border-[#212121] font-medium transition-all duration-200 hover:text-yellow-300 focus:text-yellow-300"> Features </a>

                    <a href="#" title="" className="inline-flex py-2 text-base border-b border-[#212121] font-medium transition-all duration-200 hover:text-yellow-300 focus:text-yellow-300"> Solutions </a>

                    <a href="#" title="" className="inline-flex py-2 text-base border-b border-[#212121] font-medium transition-all duration-200 hover:text-yellow-300 focus:text-yellow-300"> Resources </a>

                    <a href="#" title="" className="inline-flex py-2 text-base border-b border-[#212121] font-medium transition-all duration-200 hover:text-yellow-300 focus:text-yellow-300"> Pricing </a>
                </div>
            </div>

            <div className="px-5 mt-6">
                <a href="#" title="" className="inline-flex justify-center px-4 py-3 text-base font-semibold ring-inset ring-yellow-400 ring-2 transition-all duration-200 text-white border border-transparent rounded-full hover:text-black focus:text-black hover:bg-yellow-400 hover:ring-0" role="button"> Order Sekarang </a>
            </div>
        </nav>
    </div>
</header>

    )
}

export default navbar