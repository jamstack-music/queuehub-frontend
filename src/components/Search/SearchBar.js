import React from 'react'
import { IoIosSearch as SearchIcon } from 'react-icons/io'
import styled from 'styled-components'

import Input from './Input'

const Bar = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  padding: 0.5em 0;
  align-items: center;
  justify-content: center;
  background-color: #E6E6E6;
  border-bottom: 1px solid #D6D6D6;
`

const SearchBar = (props) => {
  const {
    onChange,
  } = props
  
  return (
    <Bar>
      <SearchIcon style={{ margin: '0 0 0 0.5em', flex: 1 }}/>
      <Input type='text' placeholder='Search...' onChange={onChange} />
    </Bar>    
  )
}

export default SearchBar
