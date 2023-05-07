import React from 'react'
import { Space, Spin } from 'antd';
import '../../Sass/Loader.scss'

export default function Loader() {
  return (
    <div className='loader'>
       <Space size="middle">
      <Spin size="large" />
       </Space>
      <p>Loading... Please Wait</p>
    </div>
  )
}
