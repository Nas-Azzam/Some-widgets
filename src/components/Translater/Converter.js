import React, { useEffect, useState } from 'react'
import axios from 'axios'
import userEvent from '@testing-library/user-event'

const Converter = ({ Language, Text }) => {
  const [translated, setTranslated] = useState('')
  const [debouncedText, setdebouncedText] = useState(Text)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setdebouncedText(Text)
    }, 1000)
    return () => {
      clearTimeout(timerId)
    }
  }, [Text])

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        'https://translation.googleaips.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedText,
            target: Language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      )
      setTranslated(data.data.translation[0].translatedtext)
    }
    doTranslation()
    return <div className='ui header'>{translated}</div>
  }, [Language, debouncedText])

  return (
    <div>
      <h4 className='ui header'>OutPut :</h4>
    </div>
  )
}

export default Converter

// 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
