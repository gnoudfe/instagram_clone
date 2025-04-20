import Button from "@/components/common/Button";
import React from "react";

const ReceiveFriendRequest = () => {
  return (
    <div className="flex items-center gap-3">
      <Button size="sm" variant="secondary">
        Sent you a friend request.
      </Button>
      <Button size="sm" variant="primary">
        Accept
      </Button>
      <Button size="sm" variant="primary">
        Reject
      </Button>
    </div>
  );
};

export default ReceiveFriendRequest;
