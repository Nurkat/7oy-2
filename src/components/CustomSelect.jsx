import React from 'react';
import { Select } from 'antd';

const CustomSelect = ({placeholder,options,setChooseId,setIsloading}) => {
    const onChange = (value) => {
      setIsloading(true)
      value? setTimeout(()=>setChooseId(value),1000) :  setTimeout(()=>setChooseId(""),1000)
  };
       return(
        <Select
           className='w-[350px]'
          allowClear
          size='large'
          showSearch
          placeholder={placeholder}
          optionFilterProp="label"
          onChange={onChange}
          options={options}    
  />
        )
};
export default CustomSelect;