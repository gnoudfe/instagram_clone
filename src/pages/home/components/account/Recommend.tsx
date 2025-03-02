import UserCard from "@/components/common/UserCard/UserCard";
import React from "react";

const listUserMock = [
  {
    id: 1,
    avatar:
      "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg",
    name: "_gnoud0208",
    username: "Dai Duong",
  },
  {
    id: 2,
    avatar:
      "https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-1/457238580_1778477022679988_6592424874090844498_n.jpg?stp=cp0_dst-jpg_s60x60_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=L1P6g4GRbawQ7kNvgEOSAd3&_nc_oc=Adj06ysW8wDFq7Hdb80dRfMmFeyZPpNchxVS_mmLFGHLWtNVGhk5ugzXUuvxAaX_rYk&_nc_zt=24&_nc_ht=scontent-hkg1-2.xx&_nc_gid=AdW9YqPtT0Voy9PYrFypWy_&oh=00_AYBE87c7XtfuVBvIr8gfpKJ5CMu2Q053zrRsBuGWo2O6kg&oe=67C9B177",
    name: "Cham Anh",
    username: "Cham Anh",
  },
  {
    id: 3,
    avatar:
      "https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-1/472315918_1977659389368537_5786804638805177159_n.jpg?stp=cp0_dst-jpg_s60x60_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_ohc=FMI9LoCzgvYQ7kNvgFwYxUa&_nc_oc=Adg3KvHXUxgjsgeksfS6kQK8kRwo_Pl-rUWSqadd5sIl9Cg1DIc5Mgji_NtR6Di_4U4&_nc_zt=24&_nc_ht=scontent-hkg1-2.xx&_nc_gid=ALw028xTbi7fE6JgDtptwuU&oh=00_AYA3rjbhI7JKmpO5-aOflFuIvKLgJRmZfmIwYZJ41AcS8Q&oe=67C98A5B",
    name: "Kieu Anh",
    username: "Kieu Anh",
  },
  {
    id: 4,
    avatar:
      "https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-1/430034116_3617007445235464_4005039941036027635_n.jpg?stp=cp0_dst-jpg_s74x74_tt6&_nc_cat=102&ccb=1-7&_nc_sid=9a2c5d&_nc_ohc=d00q4C9qm-IQ7kNvgHcTp4W&_nc_oc=AdiYHD28_NuhVriGr_Jl00Z532R2QHG1G2DbwFdjoUZOSWJpytdVBv2qhXxnxdXBFpc&_nc_zt=24&_nc_ht=scontent-hkg1-2.xx&_nc_gid=AudYSvaZHZtzRwVEUfGAN7A&oh=00_AYAX4vsZj68IMywQMjPrRW85RXo0jisYm_EyLhwigYA-wg&oe=67C9927C",
    name: "Quynh Diem",
    username: "diemquynh",
  },
];

const Recommend = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex items-center justify-between w-full">
        <span className="text-sm font-bold text-zinc-500">
          Suggested for you
        </span>
        <span className="text-xs text-white cursor-pointer">See All</span>
      </div>

        <div className="flex flex-col w-full gap-5">
            {listUserMock.map((user) => (
            <UserCard userData={user} key={user.id} type="recommend" />
        ))}
      </div>
    </div>
  );
};

export default Recommend;
