import React, { useState } from 'react'
import Accordion from './components/AccordionWidget/Accordion.js'
import SearchWidget from './components/SearchWidget/SearchWidget'
import DropdownWidget from './components/DropdownWidget/DropdownWidget'
import Translate from './components/Translater/Translate'
import Header from './Header.js'
import Route from './components/Route'

const items = [
  {
    title: 'what is React?',
    contents: 'ARctjaslkdjlasjlkdjas',
  },
  {
    title: 'Whis is use for?',
    contents: 'apmsdnaslndlasdasldas',
  },
  {
    title: 'title 3',
    contents: 'asndlkashdlkajlksda',
  },
]

// const App = () => {
//   return (
//     <div>
//       <br />
//       {<Accordion items={items} />}
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <br />
//       <div className='container ui grid'>
//         <SearchWidget />
//       </div>
//     </div>
//   )
// }

// //  Dropdown Widgets part
const Options = [
  {
    id: 1,
    label: 'Color Red',
    value: 'red',
  },
  {
    id: 2,
    label: 'Color Blue',
    value: 'blue',
  },
  {
    id: 3,
    label: 'Color Purple',
    value: 'purple',
  },
]

// const App = () => {
//   const [selected, setSelected] = useState(Options[0])
//   const [ShowDropDown, setShowDropDown] = useState(true)
//   const color = selected.value

//   return (
//     <div>
//       <button
//         type='button'
//         className='btn btn-primary'
//         onClick={() => setShowDropDown(!ShowDropDown)}
//       >
//         toggle dropdown
//       </button>
//       {ShowDropDown ? (
//         <DropdownWidget
//           color={color}
//           selected={selected}
//           onSelected={setSelected}
//           Options={Options}
//         />
//       ) : null}
//     </div>
//   )
// }

// export default App

//  Fro Translate

const App = () => {
  const [selected, setSelected] = useState(Options[0])
  const [ShowDropDown, setShowDropDown] = useState(true)
  const color = selected.value

  return (
    <div>
      <Header />

      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/SearchWidget'>
        <SearchWidget />
      </Route>
      <Route path='/DropdownWidget '>
        <DropdownWidget
          color={color}
          selected={selected}
          onSelected={setSelected}
          Options={Options}
        />
      </Route>
      <Route path='/Translate'>
        <Translate />
      </Route>
    </div>
  )
}

export default App
