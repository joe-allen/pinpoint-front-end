import React from 'react';
import { Home } from './views/Home';
import { TeamView } from './views/Teams';
import { TeamDetail } from './views/Teams';
// import { employeeView } from './views/employeeView';
// import { employeeDetail } from './views/employeeDetail';
import { Route, Switch } from 'react-router-dom';

export const Routes = () => {
	return (
		<>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/teams" component={TeamView} />
				<Route exact path="/teams/:id" component={TeamDetail} />
				{/* <Route exact path="/Employee/" component={employeeView} />
				<Route exact path="/Employee/:id" component={employeeDetail} /> */}
			</Switch>
		</>
	)
}