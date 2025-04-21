import Button from "@/components/common/Button";
import React from "react";

const FriendOptions = () => {
  return (
    <div className="flex gap-3">
      <Button size="sm" variant="secondary">
        Friends
      </Button>
      <Button size="sm" variant="primary">
        Message
      </Button>
    </div>
  );
};

export default FriendOptions;
