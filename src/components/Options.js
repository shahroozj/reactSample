import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <button onClick={props.handleDeleteAllOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please add an item to get started</p>}
        {
            props.options.map((option)  => (
                <Option 
                    key={option} 
                    optionText={option} 
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
    </div>
)

export default Options;