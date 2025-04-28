import Button from '@/components/common/Button';
import React from 'react';

type ReceiveFriendRequestProps = {
  handleAcceptFriendRequest: () => void;
  handleRejectFriendRequest: () => void;
  isLoading: boolean;
};

const ReceiveFriendRequest = ({
  handleAcceptFriendRequest,
  handleRejectFriendRequest,
  isLoading,
}: ReceiveFriendRequestProps) => {
  return (
    <div className="flex items-center gap-3">
      <Button size="sm" variant="secondary">
        Sent you a friend request.
      </Button>
      <Button size="sm" variant="primary" onClick={handleAcceptFriendRequest} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Accept'}
      </Button>
      <Button size="sm" variant="primary" onClick={handleRejectFriendRequest} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Reject'}
      </Button>
    </div>
  );
};

export default ReceiveFriendRequest;
