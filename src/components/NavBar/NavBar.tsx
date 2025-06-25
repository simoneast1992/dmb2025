import { useEffect, useState } from 'react';
import styles from './NavBar.module.css';

import Button from "../Button/Button";
import SVGClose from "../../images/svg/SVGClose";
import SVGMenu from "../../images/svg/SVGMenu";

import DMBLogo from "../../images/dmb-logo.png";
import SVGDropdown from '../../images/svg/SVGDropdown';

interface LinksProps {
	name: string,
	link: string,
}

interface LinkProps {
	name: string,
	link: string,
	linkType: 'default' | 'hash' | 'nav' | 'navHash',
	subItems: Array<LinksProps> | undefined;
}

interface NavBarProps {
	items: Array<LinkProps>;
}

const NavBar = ({
	items,
}: NavBarProps) => {
	const [dropdownVisible, setDropdownVisible] = useState(false);

	// Collapse dropdown if you get to desktop width
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1024) {
				setDropdownVisible(false);
			}
		}

		window.addEventListener('resize', handleResize);
	}, []);

	return (
		<nav className={styles.navbar}>
			<img
				className={styles.navbarLogo}
				src={DMBLogo}
				alt="DMB Consultant Services (UK) Logo"
			/>
			<Button
				className={styles.navbarButton}
				onClick={() => setDropdownVisible(!dropdownVisible)}
				style="primaryContrast"
				icon={dropdownVisible ?
					<SVGClose />
				:
					<SVGMenu />
				}
			/>
			{dropdownVisible &&
				<>
					<span className={styles.navbarDropdownOutside} onClick={() => setDropdownVisible(false)}/>
					<ul className={styles.navbarDropdown}>
						{items.map((item) => {
							return (
								<li key={item.name}>
									<Button
										link={item.link}
										linkType={item.linkType}
										label={item.name}
										style='primary'
										onClick={() => setDropdownVisible(false)}
									/>
									{item.subItems !== undefined &&
										<div className={styles.navbarDropdownInner}>
											{item.subItems.map((subItem) => {
												return (
													<Button
														link={subItem.link}
														linkType='default'
														label={subItem.name}
														style='primary'
														key={subItem.name}
													/>
												)
											})}
										</div>
									}
								</li>
							)
						})}
					</ul>
				</>
			}
			<ul className={styles.navbarLinks}>
				{items.map((item) => {
					return (
						<li key={item.name} className={item.link === './#OurServices' ? `${styles.navbarLinkDropdown}` : ''}>
							<Button
								link={item.link}
								linkType={item.linkType}
								label={item.name}
								style='primary'
								icon={item.name === 'Our Services' &&
									<SVGDropdown />
								}
							/>
							{item.subItems !== undefined &&
								<div className={styles.navbarDropdownDesktopWrapper}>
									<div className={styles.navbarDropdownDesktop}>
										{item.subItems.map((subItem) => {
											return (
												<Button
													link={subItem.link}
													linkType='default'
													label={subItem.name}
													style='primary'
													key={subItem.name}
												/>
											)
										})}
									</div>
								</div>
							}
						</li>
					)
				}
				)}
			</ul>
			<Button
				label="Contact us"
				link="./contact-us"
				linkType='default'
				style="secondary"
			/>
		</nav>
	)
}

export default NavBar;