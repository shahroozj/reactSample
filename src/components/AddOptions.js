import React from "react";

export default class AddOptions extends React.Component{
    //Old Method of defining Property and method
    // constructor(props){
    //     super(props);
    //     this.handleAdd = this.handleAdd.bind(this);
    //     this.state = {
    //         error : undefined
    //     }
    // }

    //New Method of defining Property and method
    state = {
        error : undefined
    }
    
    handleAdd = (e) =>{
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        // this.setState(()=>{
        //     return{
        //         error // it is equal to ===>   error: error
        //     }
        // });

        this.setState(() => ({error}));
        
        if(!error){
            e.target.elements.option.value = '';
        }
    }
    render(){
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}    
                <form className="add-option" onSubmit={this.handleAdd}>
                    <input type="text" name="option" className="add-option__input" />
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}