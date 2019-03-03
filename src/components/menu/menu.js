import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {

    render() {

    	const routes = [
    		{
    			name: 'Home',
    			path: '/',
    			exact: true
    		},
    		{
    			name: 'Products',
    			path: '/products',
    			exact: false
    		}
    	];

   		

        return (
            <div>
            	<nav className="navbar navbar-expand-md navbar-light bg-info">
				  	<ul className="navbar-nav">
					    {this.showRoute(routes)}
				 	 </ul>
				</nav>
            </div>
        );
    }

    showRoute = (routes) => {
		let result = null;

		if (routes.length) {
			result = routes.map((route, index) => {
				return (
					<li key={index} className="nav-item">
				      	<Link className="nav-link" to={route.path}>{route.name}</Link>
				    </li>
				)
			});
		}

		return result;
	}

}

export default Menu;
