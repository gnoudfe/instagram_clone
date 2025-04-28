'use client';
import Button from '@/components/common/Button';
import Spinner from '@/components/common/Loading/Spinner';
import UserCard from '@/components/common/UserCard/UserCard';
import { useGetListUserFriends, useUnfriendMutation } from '@/services/queries/useUser';
import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const ModalFriends = ({ onClose }: { onClose: () => void }) => {
  const { data: listUserFriends, isLoading } = useGetListUserFriends();
  const unfriendMutate = useUnfriendMutation();
  const queryClient = useQueryClient();
  const router = useRouter();
  const handleUnfriend = async (userId: string) => {
    if (!userId) return;

    try {
      const response = await unfriendMutate.mutateAsync(userId);
      if (response.status === 'success') {
        router.refresh();
        queryClient.invalidateQueries({ queryKey: ['get-list-user-friends'] });
      }
    } catch (error) {
      console.log('error while unfriend', error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="w-[400px] rounded-lg relative flex flex-col items-center  justify-center bg-[#262626]">
        <span className="font-semibold p-3 ">Followers</span>
        <div className="h-[1px] w-full bg-zinc-600"></div>

        <ul className="flex flex-col p-4 gap-2 w-full">
          {isLoading && <Spinner />}
          {listUserFriends?.friends?.map((friend) => (
            <Link
              href={`${friend._id}`}
              className="w-full cursor-pointer rounded-md p-2 transition-all duration-300 relative flex  items-center justify-between"
              key={friend._id}
            >
              <UserCard userData={friend} />

              <div onClick={(e) => e.preventDefault()}>
                <Button size="sm" variant="secondary" onClick={() => handleUnfriend(friend._id)}>
                  Remove
                </Button>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ModalFriends;
