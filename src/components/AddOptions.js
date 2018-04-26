import React from "react";

export default class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.state = {
            error : undefined
        }
    }
    handleAdd(e){
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
                <form onSubmit={this.handleAdd}>
                    {this.state.error && <p>{this.state.error}</p>}    
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}