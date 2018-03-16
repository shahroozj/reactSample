class IndecisionApp extends React.Component{
    render(){
        const title = "Indecision";
        const subtitle= "Let put your life in hands of computer.";
        const options = ["Item One", "Item Two", "Item Four"];
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
    render(){
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render(){
        return (
            <div>
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
    render(){
        return (
            <div>
                <button>Add Option</button>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));