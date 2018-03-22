class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        //very important to override the constructor to bind the event
        this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : props.options
        }
    }

    handleDeleteAllOptions(){
        this.setState(() => {
            return {
                options : []
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

        this.setState((prevState)=>{
            return{
                options : prevState.options.concat(option)
            }
        });
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
                />
                <AddOptions handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options : []
}

//Stateless function Header Component
const Header = (props) =>{
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title : "Indecision"
};

// class Header extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

//Stateless function of the Action Component
const Action = (props) =>{
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOption}
            >
            What should I do?
            </button>
        </div>
    );
};

// class Action extends React.Component{
//     render(){
//         return (
//             <div>
//                 <button 
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOption}
//                 >
//                 What should I do?
//                 </button>
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteAllOptions}>Remove All</button>
            {
                props.options.map((option)  => <Option key={option} optionText={option} />)
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            <p>{props.optionText}</p>
        </div>
    );
};

class AddOptions extends React.Component{
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

        this.setState(()=>{
            return{
                error // it is equal to ===>   error: error
            }
        });
        
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

ReactDOM.render(<IndecisionApp options={['Item 1', 'Item 2']} />, document.getElementById('app'));