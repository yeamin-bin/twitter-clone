import { BellIcon, BookmarkIcon, ClipboardListIcon, DotsCircleHorizontalIcon, HashtagIcon, InboxIcon, UsersIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon, HomeIcon } from '@heroicons/react/solid';
import { signOut, useSession } from 'next-auth/react';
import Image from "next/image";
import SidebarLink from '../components/SidebarLink';
function Sidebar() {
    const {data:session} = useSession();
  return (
    <div className='hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full'>
        <div className="flex items-center justify-center w-14 h-14 p-0 xl:ml-24 hoverAnimation">
            <Image src="https://links.papareact.com/drq" width={30} height={30} />
        </div>

        <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
            <SidebarLink text="Home" Icon={HomeIcon} active/>
            <SidebarLink text="Explore" Icon={HashtagIcon}/>
            <SidebarLink text="Notifications" Icon={BellIcon}/>
            <SidebarLink text="Messages" Icon={InboxIcon}/>
            <SidebarLink text="Bookmarks" Icon={BookmarkIcon}/>
            <SidebarLink text="Lists" Icon={ClipboardListIcon}/>
            <SidebarLink text="Profile" Icon={UsersIcon}/>
            <SidebarLink text="More" Icon={DotsCircleHorizontalIcon}/>
        </div>

        <button className='hidden xl:inline-block ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]'>Tweet</button>

        <div className='flex items-center justify-center hoverAnimation xl:ml-auto xl:mr-5 mt-auto' onClick={signOut}>
            <Image src={session.user.image} height={40} width={40} className="rounded-full xl:mr-2.5"/>
            <div className='hidden xl:inline-block leading-5'>
                <h4 className='font-bold'>{session.user.name}</h4>
                <p className='text-[#6e767d]'>@{session.user.tag}</p>
            </div>
            <DotsHorizontalIcon className='h-5 hidden xl:inline-block ml-10' />
        </div>
    </div>
  )
}

export default Sidebar