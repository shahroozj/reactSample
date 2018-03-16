const mainApp = document.getElementById('app');

let isVisible = false;

const onVisibleClick = () => {
    isVisible = ! isVisible;
    renderPage();
}

const renderPage = () =>{
    var template = (
        <div>
            <h1>Visible Application</h1>
            <button onClick={onVisibleClick}>{isVisible? "Click to hide" : "Click to visible"}</button>
            {isVisible && <p>Visible Text</p>}
        </div>
        
    );

    ReactDOM.render(template, mainApp);
}

renderPage();
