import Footer from "../components/Footer/Footer";
import DMBLogo from "../images/dmb-logo.png";

const Homepage = () => {
	return (
		<main>
			<aside>
				<div className="image-gallery">

				</div>
			</aside>
			<section>
				<div className="content-block">
					<img
						className="homepage-logo"
						src={DMBLogo}
						alt="DMB Consultant Services (UK) Logo"
					/>
					<h1>Expert Consulting & Surveying Solutions for Every Industry</h1>
					<p>With over 30 years of experience and expertise across a diverse range of industries and surveying processes, we have developed a deep understanding of the complexities involved in various sectors. Our expertise spans construction, civil engineering, renewable energy, surface mining, mineral processing, land remediation, and reclamation, as well as compaction and development. Through years of dedicated service, we have built a reputation for providing reliable, high-quality solutions that drive efficiency and success in every project we undertake.</p>
				</div>
				<div className="content-block" id="WhatWeDo">
					<h2>What we do</h2>
					<p>
						We provide the specialised security and support that form the foundation of any development project, ensuring that each phase is executed with precision and confidence. With a wide range of expert knowledge, DMB Consultant Services excels in offering practical, hands-on advice throughout the entire lifecycle of a project. Our approach is tailored individually to suit the specific needs of each Client, ensuring that solutions are both effective and adaptable. From initial planning and feasibility studies to on-site execution and final assessments, we work closely with our Clients to navigate challenges, optimise resources, and deliver sustainable, compliant, and high-performing outcomes.
					</p>
				</div>
				<div className="content-block" id="OurServices">
					<h2>Our Services</h2>
					<p>
						We provide the specialised security and support that form the foundation of any development project, ensuring that each phase is executed with precision and confidence. With a wide range of expert knowledge, DMB Consultant Services excels in offering practical, hands-on advice throughout the entire lifecycle of a project. Our approach is tailored individually to suit the specific needs of each Client, ensuring that solutions are both effective and adaptable. From initial planning and feasibility studies to on-site execution and final assessments, we work closely with our Clients to navigate challenges, optimise resources, and deliver sustainable, compliant, and high-performing outcomes.
					</p>
				</div>
				<div className="content-block" id="Clients">
					<h2>Clients</h2>
					<p>
						We provide the specialised security and support that form the foundation of any development project, ensuring that each phase is executed with precision and confidence. With a wide range of expert knowledge, DMB Consultant Services excels in offering practical, hands-on advice throughout the entire lifecycle of a project. Our approach is tailored individually to suit the specific needs of each Client, ensuring that solutions are both effective and adaptable. From initial planning and feasibility studies to on-site execution and final assessments, we work closely with our Clients to navigate challenges, optimise resources, and deliver sustainable, compliant, and high-performing outcomes.
					</p>
				</div>
				<Footer />
			</section>
		</main>
	)
}

export default Homepage;