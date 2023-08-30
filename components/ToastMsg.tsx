import { ToastMsgProps } from '@/common.types'
import React from 'react'

function ToastMsg({msg}:ToastMsgProps) {
  return (
    <div>
    <div className="toast toast-top toast-end">
    <div className="alert alert-success">
        <span>{msg}</span>
    </div>
    </div>
    </div>
  )
}

export default ToastMsg