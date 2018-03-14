"use strict";

var mainApp = document.getElementById('app');

var isVisible = false;

var onVisibleClick = function onVisibleClick() {
    isVisible = !isVisible;
    renderPage();
};

var renderPage = function renderPage() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visible Application"
        ),
        React.createElement(
            "button",
            { onClick: onVisibleClick },
            isVisible ? "Click to hide" : "Click to visible"
        ),
        isVisible && React.createElement(
            "p",
            null,
            "Visible Text"
        )
    );

    ReactDOM.render(template, mainApp);
};

renderPage();
