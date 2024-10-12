import { GitlabOutlined } from '@ant-design/icons'
import React from 'react'

function Header() {
  return (
<div className='py-8 bg-[#001529] px-10 border-b-[2px] border-white'>
   <div className='flex items-center space-x-10 '>
    <GitlabOutlined className='scale-[3] text-white' />
    <h2 className='text-white text-[22px] font-semibold'>Admin Panel</h2>
   </div>
</div>
  )
}

export default Header