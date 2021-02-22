import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import useUserId from 'hooks/useUserId';
import { projectsCollection, tasksCollection } from 'firebase/index.js';
import { loadProjects, loadTasks } from 'redux/actions';

import ProtectedRoute from './pages/ProtectedRoute';
import AppBar from './components/AppBar/AppBar';
import AppMenu from './components/AppMenu/AppMenu';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MainView from './pages/MainView';
import Project from './pages/Project';
import Today from './pages/Today';
import ProjectEditor from 'components/ProjectEditor/ProjectEditor';
// import Upcoming from './pages/Upcoming';

function App() {
	const [menuOpen, setMenuOpen] = useState(true);
	const isDataLoaded = useSelector(state => state.loader.projects && state.loader.tasks);
	const userId = useUserId();
	const dispatch = useDispatch();

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	}

	useEffect(() => {
		if(userId && !isDataLoaded) {
			projectsCollection.where('ownerId', '==', userId).get()
				.then((querySnapshot) => {
					const projects = [];
					querySnapshot.forEach((doc) => {
						projects.push(doc.data());
					});
					dispatch(loadProjects(projects));
				})

			tasksCollection.where('ownerId', '==', userId).get()
				.then((querySnapshot) => {
					const tasks = [];
					querySnapshot.forEach((doc) => {
						tasks.push(doc.data());
					});
					dispatch(loadTasks(tasks));
				})
		}
	}, [userId, isDataLoaded, dispatch])

	return (
		<Router>
			<div className="app">
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/signup" component={SignUp} />
				<Route path='/'>
					<AppBar toggleMenu={toggleMenu} />
					<AppMenu isOpen={menuOpen} closeMenu={toggleMenu}/>
					<ProjectEditor />
					<MainView>
					<Switch>
						<ProtectedRoute path="/inbox" component={Project} />
						<ProtectedRoute path="/project/:projectId" component={Project} />
						<ProtectedRoute path="/today" component={Today} />
						{/* <ProtectedRoute path="/upcoming" component={Upcoming} /> */}
						<Route path='/' render={() => <Redirect to= "/today" />} />
					</Switch>
					</MainView>
				</Route>
			</Switch>
			</div>
		</Router>
	);
}

export default App;
