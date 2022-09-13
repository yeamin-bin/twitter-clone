import { SearchIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Trending from '../components/Trending'
function Widgets({ trendingResults, followResults }) {
  return (
    <div className='hidden lg:inline ml-8 xl:w-[450px] py-1 space-y-5'>
        <div className="sticky top-0 py-1.5 bg-white z-50 w-11/12 xl:w-9/12">
            <div className='flex items-center bg-[#ebebeb] p-3 rounded-full relative'>
                <SearchIcon className='text-gray-500 h-5 z-50' />
                <input type="text" 
                className='bg-transparent placeholder-gray-500 outline-none text-[#4d4d4d] absolute inset-0 pl-11 border border-transparent w-full focus-within:border-[#1d9bf0] rounded-full focus:bg-[#cecbcb] focus:shadow-lg'
                placeholder='Search Twitter'
                />
            </div>
        </div>

        <div className='bg-[#ebebeb] text-[#696969] space-y-3 py-2 rounded-xl w-11/12 xl:w-9/12'>
            <h4 className="font-bold text-xl px-4">What's Happening?</h4>
            {trendingResults.map((result, index) => (
                <Trending key={index} result={result} />
            ))}
            <button className='hover:bg-[#c4c4c4] hover:bg-opacity-10 px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light'>Show more</button>
        </div>

        <div className='bg-[#ebebeb] text-[#696969] space-y-3 pt-2 rounded-xl w-11/12 xl:w-9/12'>
            <h4 className="font-bold text-xl px-4">Who to follow</h4>
            {followResults.map((result, index) =>(
                <div className='hover:bg-[#c4c4c4] hover:bg-opacity-10 px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center justify-between' key={index}>
                    <div className='flex items-center'>
                    <Image
                     src={result.userImg}
                     width={50}
                     height={50}
                     objectFit="cover"
                     className="rounded-full"
                    />
                    <div className="ml-2 leading-5 group">
                        <h4 className="font-bold group-hover:underline">
                            {result.username}
                        </h4>
                        <h5 className='text-gray-500 text-[15px]'>{result.tag}</h5>
                    </div>
                    </div>
                    <button className='bg-white hover:bg-opacity-50 text-[#6e767d] py-2 px-4 rounded-full shadow-sm'>Follow</button>
                </div>
            ))}
             <button className="hover:bg-[#c4c4c4] hover:bg-opacity-10  px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light">
          Show more
        </button>
        </div>
    </div>
  )
}

export default Widgets