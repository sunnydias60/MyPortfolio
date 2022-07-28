import React from 'react'

export default function CustomButton({type, link, text}) {

    if(type=="one") {
        return (
            <div>
                <a href={link} target="_blank" className="btn btn-primary">{text}</a>
            </div>
          )
    }
    else if(type=="two") {
        return (
            <div>
                <a href={link} target="_blank" className="btn">{text}</a>
            </div>
          )
    }
    else {
        return (
            <div></div>
          )
    }
 
}
