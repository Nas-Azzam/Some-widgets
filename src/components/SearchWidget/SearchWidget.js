import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SearchWidget = () => {
  const [input, setInput] = useState('programing')
  const [results, setResults] = useState([])

  // console.log(results)
  useEffect(() => {
    // console.log('run after and inital render once')
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: input,
        },
      })
      // crawl from log object
      setResults(data.query.search)
    }
    const timerID = setTimeout(() => {
      if (input) {
        search()
      }
    }, 500)
    return () => {
      clearTimeout(timerID)
    }
  }, [input])

  const renderResults = results.map((results) => {
    return (
      <div key={results.pageid} className='item'>
        <div className='right floated content'>
          <a
            className=' ui button'
            href={`https://en.wikipedia.org?curid=${results.pageid}`}
          >
            Go to Page
          </a>
        </div>
        <div className='content'>
          <div className='header'>{results.title}</div>
          {/* XSS Attact Precautions */}
          <span dangerouslySetInnerHTML={{ __html: results.snippet }}></span>

          {/* {results.snippet} */}
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className='ui form ui gred'>
        <div className='field'>
          <label>Enter Search</label>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='input'
            placeholder='Topic Search'
          />
        </div>
      </div>
      <div className='ui  celled  list'>{renderResults}</div>
    </div>
  )
}

export default SearchWidget
