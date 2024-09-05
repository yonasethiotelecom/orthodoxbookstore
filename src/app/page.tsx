import Donate from '@/components/donate'
import FolderList from '@/components/folderList'
import React from 'react'


function page() {
  return (
    <div>
      <div className='flex flex-1  flex-col justify-center items-center  bg-ethLime-400  min-h-screen  min-w-full' >
        <FolderList/>
        <Donate/>
      </div>
    </div>
  )
}

export default page
