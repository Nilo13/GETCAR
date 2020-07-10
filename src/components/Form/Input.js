import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core'

import './styles.css'

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null)
  const { fieldName, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      placeholder: fieldName,
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <div>
      <input ref={inputRef} placeholder={fieldName} {...rest} />
      { error && <span>{error}</span>}
    </div>
  )
}