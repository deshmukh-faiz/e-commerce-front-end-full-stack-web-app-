import React from "react"

const Languageoption = (props) => {
    return(
        <div style={{marginTop:'50px'}}>
            <select onChange={props.onChange}>
                <option>Select Language</option>
                <option value={'en'}>English</option>
                <option value={'hi'}>Hindi</option>
            </select>
        </div>
    )
}
export default Languageoption;