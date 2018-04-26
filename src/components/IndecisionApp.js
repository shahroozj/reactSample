import React from 'react';
import AddOptions from './AddOptions';
import Action from './Action';
import Header from './Header';
import Options from './Options';

export default class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        //very important to override the constructor to bind the event
        this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options : props.options
        }
    }

    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options){
                this.setState(() => ({ options }));
            }
        }
        catch (e) {
            //do nothing
        }
    }

    componentDidUpdate(preProps, preState){
        if(preState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
         
    }

    componentWillUnmount(){
        console.log('Component Will Unmount')
    }

    handleDeleteAllOptions(){
        // this.setState(() => {
        //     return {
        //         options : []
        //     }
        // })

        //Same action with short code
        this.setState(() => ({
            options : []
        }));
    }

    handleDeleteOption(option){
        this.setState((preState) => {
            return{
                options : preState.options.filter(curoption => curoption !== option)
            }
        })
    }

    handlePick(){
        const randNumber = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randNumber]);
    }

    handleAddOption(option){
        if (!option){
            return "Invalid Data, You need to add an Item";
        }
        else if(this.state.options.indexOf(option)>-1){
            return "This item allready exists, try again";
        }

        this.setState((prevState)=>({options : prevState.options.concat(option)}));
    }

    render(){
        const subtitle= "Let put your life in hands of computer.";
        
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOption={this.state.options.length >0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteAllOptions={this.handleDeleteAllOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOptions handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options : []
}