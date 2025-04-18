import React from 'react'

const EditBio = () => {
  return (
    <div className='w-full flex flex-col gap-4'>
        <h4 className='text-white text-lg font-semibold'>Bio</h4>
        <textarea name="" id="" placeholder='Bio' className='resize-none rounded-lg bg-transparent text-white text-sm border border-neutral-200 p-4'></textarea>
    </div>
  )
}

export default EditBio
