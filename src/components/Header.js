import React from 'react';

//Stateless function Header Component
const Header = (props) => (
// const Header = (props) => {
//     return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
);
//};

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

export default Header;