class IndecisionApp extends React.Component{
    render(){
        const title = "Indecision";
        const subtitle= "Let put your life in hands of computer.";
        const options = ["Item One", "Item Two", "Item Four", "Item Five"];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/>
                <AddOptions />
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    clickHandle(){
        alert('Clicked');
    }

    render(){
        return (
            <div>
                <button onClick={this.clickHandle}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    //very important to override the constructor to bind the event
    constructor(props){
        super(props);
        this.removeAll = this.removeAll.bind(this);
    }
    removeAll(){
        console.log(this.props.options);
    }
    render(){
        return (
            <div>
                <button onClick={this.removeAll}>Remove All</button>
                {
                    this.props.options.map((option)  => <Option key={option} optionText={option} />)
                }
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return (
            <div>
                <p>{this.props.optionText}</p>
            </div>
        );
    }
}

class AddOptions extends React.Component{
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        if (option){
            alert(option);
    //     app.options.push(option);
    //     e.target.elements.option.value = '';
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleAddOption}>    
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));