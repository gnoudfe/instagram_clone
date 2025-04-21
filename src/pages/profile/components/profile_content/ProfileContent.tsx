import { Postdata } from "@/types/users";
import Link from "next/link";
import React from "react";

interface ProfileContentProps {
  postsData: Postdata[];
}

const ProfileContent = ({ postsData }: ProfileContentProps) => {
  return (
    <div className=" w-full max-w-[1000px]  border-t-zinc-500 border-t pt-10">
      <div className=" grid grid-cols-3 gap-2 w-full pb-14">
        {postsData?.map((post) => (
          <Link href={`/${post.user?._id}/${post._id}`} key={post._id}>
            <img
              src={post.images[0]}
              alt={post.content.slice(0, 30)}
              className="w-full h-full object-cover aspect-[307/410]"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProfileContent;
