console.log('test');

var mainApp = document.getElementById('app');

const app = {
    name : "Learn React",
    subtitle : "You are able to learn React in this sample",
    options : []
};

const onFormSubmit = (e) =>{
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderPage();
    }
};

const removeAll = () =>{
    app.options = [];
    renderPage();
}

const onMakeDesicion = () =>{
    const randNumber = Math.floor(Math.random() * app.options.length);
    alert(app.options[randNumber]);
}

const renderPage = () =>{
    var template = (
        <div>
            <h1>{app.name ? app.name : 'Untitled App'}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <button disabled={app.options.length === 0} onClick={onMakeDesicion}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button> 
            {app.options.length>0 ? <ul>
                {app.options.map((option)=>{
                    return <li key={option}>{option}</li>;
                })}
            </ul> : <p>No options are available!</p>}
            <form onSubmit={onFormSubmit}>    
            <input type="text" name="option"/>
            <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, mainApp);
}

renderPage();


