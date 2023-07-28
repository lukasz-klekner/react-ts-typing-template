import { useRef, useEffect } from 'react'

export const InputRef = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  )
}
