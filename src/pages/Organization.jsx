import { LikeOutlined, MedicineBoxOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import React, {useEffect, useState } from 'react'
import CustomSelect from '../components/CustomSelect'
import CustomTable from '../components/CustomTable'
import { DeleteOutlined, EditOutlined, MoreOutlined } from '@ant-design/icons';
import axios from 'axios'

function Organization() {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Tashkilot nomi',
      dataIndex: 'companyName',
    },
    {
      title: 'INN',
      dataIndex: 'inn',
    },
    {
      title: 'Holati',
      dataIndex: 'status',
    },
    {
      title: 'Manzil',
      dataIndex: 'address',
    },
    {
      title: 'Batafsil',
      dataIndex: 'action',
    },
  ];
  const [data,setData]= useState( [
    { 
      key: '1',
      id:1,
      companyName: "Najot Talim",
      inn: 110827095,
      status: "Faol",
      address:"Toshkent, Chilonzor 9kv",
      createdat:"27.09.2018",
      action: <div className='flex items-center gap-4'>
        <EditOutlined className='!text-green-600 hover:scale-150 duration-300 scale-125 cursor-pointer ' />
        <MoreOutlined className='!text-blue-600 hover:scale-150 duration-300 scale-125 rotate-90 cursor-pointer' />
        <DeleteOutlined className='!text-red-500 hover:scale-150 duration-300 scale-125 cursor-pointer ' />
      </div>
  
    }
  ]);


  const [isLOading, setIsloading] = useState(false)
  const [regionId, setRegionId] = useState(null)
  const regionsList = [
    {
       value:1,
       label:"Toshkent shahar"
    },
    {
       value:2,
       label:"Samarqand viloyati"
    },
    {
       value:3,
       label:"Fargona viloyati"
    },
    {
       value:4,
       label:"Buxoro viloyati"
    },
    {
       value:5,
       label:"Qoraqalpoqiston avtonom Respublikasi"
    },
  ]

  useEffect(() =>{
    axios.get("http://localhost:3000/organization").then(res =>{
      setData(res.data.map(item =>{
        item.companyName = item.companyName ? item.companyName : <LikeOutlined/>
        item.inn = item.inn ? item.inn : <LikeOutlined/>
        item.action = <div className='flex items-center gap-4'>
        <EditOutlined className='!text-green-600 hover:scale-150 duration-300 scale-125 cursor-pointer ' />
        <MoreOutlined className='!text-blue-600 hover:scale-150 duration-300 scale-125 rotate-90 cursor-pointer' />
        <DeleteOutlined className='!text-red-500 hover:scale-150 duration-300 scale-125 cursor-pointer ' />
      </div>
      return item
      }))
    })
  },[])
  return (
    <div className='p-5'>
      <div className='flex items-center justify-between '>
        <div>
          <h2 className='text-[25px] font-bold'>Tashkilotlar</h2>
          <span className='text-[15px] pl-[3px] text-slate-400'>tashkilotlar(o)</span>
        </div>
        <Button icon={<MedicineBoxOutlined/>} htmlType='submit' type='primary' size='large'>Qoshish</Button>
      </div>
      <div className='flex items-center  space-x-5 mt-[10px]'>
        <Input className='w-[350px]' size='large' type='text' allowClear placeholder='Qidirish...'/>
        <CustomSelect placeholder={"Tanlash..."} setChooseId={setRegionId} options={regionsList}/>
      </div>
      <div className='mt-5'>
        <CustomTable columns={columns} data={data} isLoading={isLOading}/>
      </div>
    </div>
  )
}

export default Organization