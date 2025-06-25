import Button from '../Button/Button';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerLeft}>
				<div>
					<Button style='primary' label="Terms of use" />
					<Button style='primary' label="Privacy policy" />
				</div>
				<p>
					© 2025 - DMB Consultant Services UK
				</p>
			</div>
			<div className={styles.footerRight}>
				<div>
					{/* Socials */}
				</div>
				<div>
					{/* Contact details */}
				</div>
			</div>
		</footer>
	)
}

export default Footer;