import NavBar from './components/NavBar/NavBar';
import './styles/style.css';

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
    </>
  )
};

export default App;
