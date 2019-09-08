import React from 'react'

export default function NoMatch({status}) {
  const style = {
    padding: '20px 0',
    margin: '20px 0',
    textAlign: 'center'
  }
  return (
    <div>
      <h1 style={style}>{status} 浏览器地址不存在，请确认地址是否正确</h1>
    </div>
  )
}
