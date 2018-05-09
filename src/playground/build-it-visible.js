// const mainApp = document.getElementById('app');

// let isVisible = false;

// const onVisibleClick = () => {
//     isVisible = ! isVisible;
//     renderPage();
// }

// const renderPage = () =>{
//     var template = (
//         <div>
//             <h1>Visible Application</h1>
//             <button onClick={onVisibleClick}>{isVisible? "Click to hide" : "Click to visible"}</button>
//             {isVisible && <p>Visible Text</p>}
//         </div>
        
//     );

//     ReactDOM.render(template, mainApp);
// }

// renderPage();

class VisibleToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visible: false
        }
    }

    handleToggle(){
        this.setState((prevState) => {
            return{
                visible: !(prevState.visible)
            }
        })
    }

    render(){
        return(
            <div>
                <h1>Visible Toggle</h1>
                <button onClick={this.handleToggle}>{this.state.visible ? 'Hide' : 'Show'}</button>
                {this.state.visible &&<p>This is some visible text.</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibleToggle />, document.getElementById('app'));