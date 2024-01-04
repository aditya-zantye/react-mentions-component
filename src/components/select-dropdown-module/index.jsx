import React from 'react'
import "./index.scss"
import jsonData from "../../constants/data.json";

const SelectDropdpwnModule = (props) => {
  return (
    <div className='select-main-container'>
        {
            jsonData.data.filter(item => item.first_name.toLowerCase().includes(props.userInput)).map((option) => {
                return(
                    <div onClick={() => {

                        props.setAreaTextInput(props.textAreaInput.replace("@"+props.userInput, "@"+option.first_name+option.last_name))

                        /*
                        if(props.userInput.length < 0){
                            props.setAreaTextInput(
                                props.textAreaInput.replace(/@([^@]*)$/, "@"+option.first_name+option.last_name + '$1')
                            )
                        }else{
                            props.setAreaTextInput(props.textAreaInput.replace("@"+props.userInput, "@"+option.first_name+option.last_name))
                        }*/
                        
                        
                        }}>
                        <span>{option.first_name} {option.last_name}</span>
                    </div>
                )
            })
        }
    </div>
  )
}

export default SelectDropdpwnModule