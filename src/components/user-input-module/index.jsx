import React, { useEffect, useState } from 'react'
import "./index.scss"
import SelectDropdpwnModule from '../select-dropdown-module'
import { CHECK_CHAR_CODE, checkAsciiValue, checkEscapeChar, checkIfNotSpecialChar } from '../../constants/generic-constants'

const UserInputModule = () => {

const ROWS = 5
const COLUMNS = 100
const [showSelect, setShowSelect] = useState(false)
const [textAreaInput, setAreaTextInput] = useState("")
const [userInput, setUserInput] = useState("")

const onInputHandler = (currChar) => {
    if(currChar.length == 1){
        checkAsciiValue(currChar) && setShowSelect(true)
    }
    showSelect && captureInput(currChar)
}

const captureInput = (currChar) => {
    console.log(userInput)
   if(checkIfNotSpecialChar(currChar) && !checkEscapeChar(currChar) && currChar != "Shift"){
        setUserInput((userInput+currChar).trim())
   }else{
        setShowSelect(false)
        setUserInput("")
   }
}

useEffect(() => {
    setUserInput("")  
},[showSelect])

  return (
    <div className='main-input-container'>
        <textarea className='input-text-area' value={textAreaInput} rows={ROWS} cols={COLUMNS} placeholder='Mention' onKeyDown={(e) => {
            !checkEscapeChar(e.key) && onInputHandler(e.key)
            }
        } onChange={(e) => {setAreaTextInput(e.target.value)}}/>
        {
            showSelect && <SelectDropdpwnModule userInput={userInput} setAreaTextInput={setAreaTextInput} textAreaInput={textAreaInput}/>
        }
    </div>
  )
}

export default UserInputModule