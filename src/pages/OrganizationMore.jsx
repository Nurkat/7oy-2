import { ArrowLeftOutlined, EditFilled,LineOutlined} from '@ant-design/icons'
import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAxios } from '../hooks/useaxios'


function OrganizationMore() {
    const navigate = useNavigate()
    const {id} = useParams()

    const[singleData, setSingleData] = useState({})
    useEffect(()=>{
       useAxios().get(`/organization/${id}`).then(res =>{
        setSingleData(res.data);
    })
    },[])
  return (
    <div className='p-5'>
       <div className='flex items-center mb-10 justify-between '>
    <div className='flex space-x-4'>
    <ArrowLeftOutlined onClick={() => navigate(-1)} className='scale-150'/>
      <h2 className='text-[25px] font-bold'>{singleData.companyName ? singleData.companyName : <LineOutlined/> }</h2>
    </div>
    <Button icon={<EditFilled/>} htmlType='submit' type='primary' size='large'>Tahrirlash</Button>
       </div>
       <ul className='w-[40%]  flex justify-between p-5 rounded-xl border-[2px] border-slate-500'>
        <li className='space-y-3'>
           <li className='flex flex-col'>
            <span className='text-[15px] text-slate-400'>ID</span>
            <strong className='text-[22px]'>{singleData.id}</strong>
           </li>
           <li className='flex flex-col'>
            <span className='text-[15px] text-slate-400'>Tashkilot Nomi</span>
            <strong className='text-[22px]'>{singleData.companyName}</strong>
           </li>
           <li className='flex flex-col'>
            <span className='text-[15px] text-slate-400'>INN</span>
            <strong className='text-[22px]'>{singleData.inn ? singleData.inn : <LineOutlined/> }</strong>
           </li>
           <li className='flex flex-col'>
            <span className='text-[15px] text-slate-400'>Viloyat Nomi</span>
            <strong className='text-[22px]'>{singleData.regionName}</strong>
           </li>
        </li>
           <li className='space-y-3'>
           <li className='flex flex-col'>
            <span className='text-[15px] text-slate-400'>Holati</span>
            <strong className='text-[22px]'>{singleData.status ? "Faol" : "Faol emas"}</strong>
           </li>
           <li className='flex flex-col'>
            <span className='text-[15px] text-slate-400'>Manzil</span>
            <strong className='text-[22px]'>{singleData.address}</strong>
           </li>
           <li className='flex flex-col'>
            <span className='text-[15px] text-slate-400'>Yaratilgan Vaqt</span>
            <strong className='text-[22px]'>{singleData.createdat}</strong>
           </li>
           </li>
       </ul>

    </div>
  )
}

export default OrganizationMore