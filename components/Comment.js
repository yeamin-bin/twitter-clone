import { ChartBarIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, ShareIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import Moment from 'react-moment';
function Comment({ id, comment }) {
  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-300">
      <div className="mr-4">
        <Image
          src={comment?.userImg}
          width={40}
          height={40}
          alt="Pro Pic"
          className="rounded-full"
        />
      </div>

      <div className="flex flex-col space-y-2 w-full">
        <div className="flex justify-between">
            <div className="text-[#6e7674]">
                <div className="inline-block group">
                    <h4 className="font-bold text-[15px] sm:text-base inline-block group-hover:underline">{comment?.username}</h4>
                    <span className="ml-1.5 text-sm sm:text-[15px]">@{comment?.tag}</span>
                </div>{" "}
                .{" "}
                <span className="hover:underline text-sm sm:text-[15px]">
                    <Moment fromNow>{comment?.timestamp?.toDate()}</Moment>
                </span>
                <p className="text-[#8d8d8d] mt-0.5 max-w-lg  text-[15px] sm:text-base">{comment?.comment}</p>
            </div>
            <div className="icon group flex-shrink-0">
                <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
            </div>
        </div>

        <div className="text-[#6e767d] flex justify-between w-10/12">
          <div className="icon group">
            <ChatIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>

          <div className="flex items-center space-x-1 group">
            <div className="icon group-hover:bg-pink-600/10">
              <HeartIcon className="h-5 group-hover:text-pink-600" />
            </div>
            <span className="group-hover:text-pink-600 text-sm"></span>
          </div>

          <div className="icon group">
            <ShareIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
          <div className="icon group">
            <ChartBarIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
