class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }

    handleAdd(){
        this.setState((prevState) => {
            return{
                count : prevState.count + 1
            }
        });
    }

    handleDelete(){
        this.setState((prevState) => {
            return{
                count : prevState.count - 1
            }
        });
    }

    handleReset(){
        this.setState(() => {
            return{
                count : 0
            }
        });
    }

    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAdd}>+1</button>
                <button onClick={this.handleDelete}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        ); 
    }
}

const jsx = (
    <div>
        <Counter />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));