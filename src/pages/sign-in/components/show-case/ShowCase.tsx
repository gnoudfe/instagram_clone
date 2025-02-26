import Image from "next/image";
import React from "react";

const ShowCase = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Phone frame */}
      <div className="relative w-[465px] mx-auto">
        <Image
          src="/images/home-phones.png"
          alt="Show case"
          width={465}
          height={635}
          className="object-cover w-full"
        />
        <Image
          src="/images/screenshot1.png"
          alt="Screen shot"
          width={250}
          height={541}
          className="object-cover absolute bottom-[70px] right-[60px] "
        />
      </div>
    </div>
  );
};

export default ShowCase;
