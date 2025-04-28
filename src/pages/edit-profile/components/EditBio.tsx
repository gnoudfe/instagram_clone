'use client';
import React, { useState } from 'react';
import Button from '@/components/common/Button';
import { UserSocialsApi } from '@/services/apiRequest';
import { useRouter } from 'next/navigation';
import { UserDataType } from '@/types/users';

interface EditBioProps {
  userData?: UserDataType;
}

const EditBio = ({ userData }: EditBioProps) => {
  const [bio, setBio] = useState(userData?.bio || '');
  const [bioRaw, setBioRaw] = useState(userData?.bio || ''); // Thêm state cho bioRaw
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newBio = e.target.value;
    setBio(newBio);
    setBioRaw(newBio);
  };

  const handleUpdateBio = async () => {
    try {
      setIsLoading(true);
      await UserSocialsApi.UpdateBio(bio);
      router.refresh(); // Refresh để cập nhật dữ liệu từ server
    } catch (error) {
      console.error('Error updating bio:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <h4 className="text-white text-lg font-semibold">Bio</h4>
      <textarea
        value={bio}
        onChange={handleBioChange}
        placeholder="Bio"
        className="resize-none rounded-lg bg-transparent text-white text-sm border border-neutral-200 p-4 h-24"
      />
      {bioRaw !== userData?.bio && (
        <div className="flex justify-end animate-fade-in">
          <Button onClick={handleUpdateBio} disabled={isLoading} size="md">
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Updating...
              </>
            ) : (
              'Update Bio'
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default EditBio;
