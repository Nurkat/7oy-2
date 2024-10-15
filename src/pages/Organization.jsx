import { LikeOutlined, MedicineBoxOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import React, {useEffect, useState } from 'react'
import CustomSelect from '../components/CustomSelect'
import CustomTable from '../components/CustomTable'
import { DeleteOutlined, EditOutlined, MoreOutlined } from '@ant-design/icons';
import { useAxios } from '../hooks/useaxios'
import { useNavigate } from 'react-router-dom'

function Organization() {
   const [refresh,setRefresh] = useState(false) 
   const navigate = useNavigate()
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
      title: 'Filial',
      dataIndex: 'regionName',
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
  const [data,setData]= useState([]);
  const [regionId, setRegionId] = useState("")

  // Search part  start
function handleSearchChange(e){
     setIsloading(true)
     if(e.target.value){
       const filteredData =  data.filter(item => item.companyName.length > 0 ? item.companyName.toLowerCase().includes(e.target.value.toLowerCase()) : "")
       setTimeout(() => {
        setData(filteredData)
        setIsloading(false)
       }, 1000)
     }
     else{
      setTimeout(() =>{
        setRefresh(!refresh)
        setIsloading(false)
      }, 1000)
     }
}

  // Search part  end


  const [isLOading, setIsloading] = useState(false)
  const regionsList = [
    {
       value:1,
       label:"Toshkent shahar"
    },
    {
       value:2,
       label:"Fargona viloyati"
    },
    {
       value:3,
       label:"Samarqand viloyati"
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
    useAxios().get(`/organization?regionId=${regionId}`).then(res =>{
      setIsloading(false)
      setData(res.data.map(item =>{
        item.companyName = item.companyName ? item.companyName : <LikeOutlined/>
        item.inn = item.inn ? item.inn : <LikeOutlined/>
        item.action = <div className='flex items-center gap-4'>
        <EditOutlined className='!text-green-600 hover:scale-150 duration-300 scale-125 cursor-pointer ' />
        <MoreOutlined onClick={() => navigate(item.id)} className='!text-blue-600 hover:scale-150 duration-300 scale-125 rotate-90 cursor-pointer' />
        <DeleteOutlined className='!text-red-500 hover:scale-150 duration-300 scale-125 cursor-pointer ' />
      </div>
      return item
      }))
    })
  },[refresh,regionId])

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
        <Input onChange={handleSearchChange} className='w-[350px]' size='large' type='text' allowClear placeholder='Qidirish...'/>
        <CustomSelect setIsloading={setIsloading} placeholder={"Tanlash..."} setChooseId={setRegionId} options={regionsList}/>
      </div>
      <div className='mt-5'>
        <CustomTable columns={columns} data={data} isLoading={isLOading}/>
      </div>
    </div>
  )
}

export default Organization