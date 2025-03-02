"use client";
import React, { useState } from "react";

const PostFooter = () => {
  const [expanded, setExpanded] = useState(false);

  // Giả sử đây là nội dung từ CMS, bao gồm cả HTML tags
  const fullContent = `<h4 class="font-bold inline-block">kenh14official</h4> Xót xa trước
  hoàn cảnh của bé trai 11 tuổi: Bố mất, mẹ ung thư, trên mặt có vết sẹo
  dài vì bị ngã khi đi nhặt ve chai kiếm sống 😢  <br/> <br/>  Phan Lê Tấn Lộc (11 tuổi,
  học lớp 5 tại Quảng Bình) mất bố từ năm 2019 do đột quỵ. <br/> <br/> Hiện em sống
  với mẹ là chị Lê Thị Liển, người đang điều trị <span style="color: #ff0000;">ung thư</span> vòm họng giai đoạn
  3.`;

  const truncatedContent = fullContent.split(" ").slice(0, 30).join(" ");

  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm text-white font-bold cursor-pointer">
        2,268 likes
      </span>
      <div className="text-sm text-white font-medium pr-4">
        {expanded ? (
          <div dangerouslySetInnerHTML={{ __html: fullContent }} />
        ) : (
          <>
            <div
              className="text-sm text-white font-medium inline pr-1"
              dangerouslySetInnerHTML={{ __html: truncatedContent }}
            />

            <span
              className="text-sm text-zinc-400 font-bold cursor-pointer inline-block "
              onClick={() => setExpanded(true)}
            >
              ... more
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default PostFooter;
