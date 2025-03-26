// import style from './NavBar.module.css';

import Button from "../Button/Button";

interface LinksProps {
	name: string,
	link: string,
}

interface LinkProps {
	name: string,
	link: string,
	links: Array<LinksProps> | undefined;
}

interface NavBarProps {
	links: Array<LinkProps>;
}

const NavBar = ({
	links,
}: NavBarProps) => {
	return (
		<nav>
			{/* <Image link="./" /> */}
			<ul>
				{links.map((link) => {
					return (
						<>
							<li>
								<a href={link.link}>
									{link.name}
								</a>
							</li>
							{link.links !== undefined &&
								<div>
									{link.links.map((link) => {
										return (
											<a href={link.link}>
												{link.name}
											</a>
										)
									})}
								</div>
							}
						</>
					)
				})}
			</ul>
			<Button
				label="Contact us"
				link="./contact-us"
				style="secondary"
			/>
		</nav>
	)
}

export default NavBar;