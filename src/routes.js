import React from 'react';
import HomePage from './pages/homePage/homePage';
import ProductsPage from './pages/productsPage/productsPage';
import PageNotFound from './pages/pageNotFound/pageNotFound';
import EditPage from './pages/editPage/editPage';

const routes = [
	{
		path: '/',
		exact: true,
		main: () => <HomePage />
	},
	{
		path: '/products',
		exact: true,
		main: () => <ProductsPage />
	},
	{
		path: '/product/create',
		exact: true,
		main: ({history}) => <EditPage history={history}/>
	},
	{
		path: '/products/:id/edit',
		exact: true,
		main: ({match, history}) => <EditPage history={history} match={match}/>
	},
	{
		path: '',
		exact: true,
		main: () => <PageNotFound />
	}
]

export default routes;