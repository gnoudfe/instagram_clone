import SaveIcon from '@/components/icons/Save/SaveIcon';
import SavedIcon from '@/components/icons/Saved/SavedIcon';
import React from 'react';

interface SavedButtonProps {
  isSaved: boolean;
  handleSavePost: () => void;
}

const SavedButton = ({ isSaved, handleSavePost }: SavedButtonProps) => {
  return (
    <div className={`cursor-pointer ${isSaved ? '' : 'hover:opacity-80'}`} onClick={handleSavePost}>
      {isSaved ? <SavedIcon /> : <SaveIcon />}
    </div>
  );
};

export default SavedButton;
