import React from 'react';
import { Select } from 'antd';

const CustomSelect = ({placeholder,options,setChooseId}) => {
    const onChange = (value) => {
        setChooseId(value);
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