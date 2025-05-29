import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router";
import './styles/style.css';
import Homepage from './pages/Homepage';
import ProjectManagement from './pages/ProjectManagement';
import NoPage from './pages/NoPage';

function App() {

  return (
    <>
		<NavBar
			items={[
				{
					name: 'Home',
					link: './',
					subItems: undefined,
				},
				{
					name: 'What we do',
					link: './#WhatWeDo',
					subItems: undefined,

				},
				{
					name: 'Our Services',
					link: './#OurServices',
					subItems: [
						{
							name: 'Project Management',
							link: './project-management',
						},
						{
							name: 'Land Surveying & Site Engineering',
							link: './land-surveying-and-site-engineering',
						},
						{
							name: 'Design & Modelling',
							link: './design-and-modelling',
						},
						{
							name: 'Health & Safety',
							link: './health-and-safety',
						},
						{
							name: 'Training',
							link: './training',
						},
					]
				},
				{
					name: 'Clients',
					link: './#Clients',
					subItems: undefined,

				},
				{
					name: 'Blog',
					link: './blog',
					subItems: undefined,
				},
			]}
		/>
		<BrowserRouter>
			<Routes>
				<Route index element={<Homepage />} />
				<Route path='project-management' element={<ProjectManagement />} />
				{/* <Route path='land-surveying-and-site-engineering' element={<LandSurveying />} />
				<Route path='design-and-modelling' element={<DesignAndModelling />} />
				<Route path='health-and-safety' element={<HealthAndSafety />} />
				<Route path='training' element={<Training />} />
				<Route path='blog' element={<Blog />} /> */}
				<Route path='*' element={<NoPage />} />
			</Routes>
		</BrowserRouter>
    </>
  )
};

export default App;
