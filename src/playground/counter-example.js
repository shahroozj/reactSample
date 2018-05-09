class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        }
    }

    componentDidMount(){
        const countString = localStorage.getItem('count');
        if (!isNaN(countString)){
            this.setState(() => ({ count : parseInt(countString, 10) }));
        }
    }

    componentDidUpdate(preProps, preState){
        if(preState.count !== this.state.count){
            localStorage.setItem('count', this.state.count);
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

Counter.defaultProps = {
    count : 0
};

const jsx = (
    <div>
        <Counter count={100} />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));