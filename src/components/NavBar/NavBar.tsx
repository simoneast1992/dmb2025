import { useState } from 'react';
import styles from './NavBar.module.css';

import Button from "../Button/Button";
import SVGClose from "../../images/svg/SVGClose";
import SVGMenu from "../../images/svg/SVGMenu";

import DMBLogo from "../../images/dmb-logo.png";

interface LinksProps {
	name: string,
	link: string,
}

interface LinkProps {
	name: string,
	link: string,
	subItems: Array<LinksProps> | undefined;
}

interface NavBarProps {
	items: Array<LinkProps>;
}

const NavBar = ({
	items,
}: NavBarProps) => {
	const [dropdownVisible, setDropdownVisible] = useState(false);
	const [secondaryDropdownVisible, setSecondaryDropdownVisible] = useState(true);

	return (
		<nav className={styles.navbar}>
			<img
				className={styles.navbarLogo}
				src={DMBLogo}
				alt="DMB Consulta Service (UK) Logo"
			/>
			<Button
				className={styles.navbarButton}
				onClick={() => setDropdownVisible(!dropdownVisible)}
				style="primaryContrast"
			>
				{dropdownVisible ?
					<SVGClose />
				:
					<SVGMenu />
				}
			</Button>
			{dropdownVisible &&
				<ul className={styles.navbarDropdown}>
					{items.map((item) => {
						return (
							<>
								<li>
									<Button
										link={item.link}
										label={item.name}
										style='primary'
									/>
								</li>
								{secondaryDropdownVisible && item.subItems !== undefined &&
									<div className={styles.navbarDropdownInner}>
										{item.subItems.map((subItem) => {
											return (
												<Button
													link={subItem.link}
													label={subItem.name}
													style='primary'
												/>
											)
										})}
									</div>
								}
							</>
						)
					})}
				</ul>
			}
			<ul className={styles.navbarLinks}>
				{items.map((item) => {
					return (
						<li key={item.name}>
							<Button
								link={item.link}
								label={item.name}
								style='primary'
							/>
						</li>
					)
				}
				)}
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