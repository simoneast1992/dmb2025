import NavBar from './components/NavBar/NavBar';
import './styles/style.css';

function App() {

  return (
    <>
		<NavBar
			links={[
				{
					name: 'Home',
					link: './',
					links: undefined,
				},
				{
					name: 'What we do',
					link: './#WhatWeDo',
					links: undefined,

				},
				{
					name: 'Our Services',
					link: './#OurServices',
					links: [
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
					links: undefined,

				},
				{
					name: 'Blog',
					link: './blog',
					links: undefined,

				},
			]}
		/>
    </>
  )
};

export default App;
