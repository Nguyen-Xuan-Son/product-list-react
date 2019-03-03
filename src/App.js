import React, { Component } from 'react';
import Menu from './components/menu/menu';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import './index.css';

class App extends Component {

    showContentRouter = () => {
        let result = null;

        if (routes.length) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                )
            });
        }
        return result;
    }

    render() {
        return (
            <div>
            	<Menu />
				<Switch>
                    {this.showContentRouter()}
                </Switch>
            </div>
        );
    }


}

export default App;
