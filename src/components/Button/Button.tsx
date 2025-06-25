import { Link, NavLink } from 'react-router';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import styles from './Button.module.css';

interface ButtonProps {
	className?: string,
	icon?: React.ReactNode,
	label?: string,
	link?: string,
	linkType?: 'default' | 'hash' | 'nav' | 'navHash',
	onClick?: () => void,
	style: 'primary' | 'primaryContrast' | 'secondary' | 'tertiary',
}

const Button = ({
	className = '',
	icon,
	label,
	link,
	linkType = 'default',
	onClick,
	style,
}: ButtonProps) => {
	return (
		<>
			{link ?
				<>
					<>
						{linkType === 'hash' &&
							<HashLink to={link} className={`${styles.button} ${styles[style]} ${className}`}>
								{label &&
									<span className={styles.buttonLabel}>
										{label}
									</span>
								}
								{icon}
							</HashLink>
						}
					</>
					<>
						{linkType === 'nav' &&
							<NavLink to={link} className={`${styles.button} ${styles[style]} ${className}`}>
								{label &&
									<span className={styles.buttonLabel}>
										{label}
									</span>
								}
								{icon}
							</NavLink>
						}
					</>
					<>
						{linkType === 'default' &&
							<Link to={link} className={`${styles.button} ${styles[style]} ${className}`}>
								{label &&
									<span className={styles.buttonLabel}>
										{label}
									</span>
								}
								{icon}
							</Link>
						}
					</>
					<>
						{linkType === 'navHash' &&
							<NavHashLink to={link} className={`${styles.button} ${styles[style]} ${className}`}>
								{label &&
									<span className={styles.buttonLabel}>
										{label}
									</span>
								}
								{icon}
							</NavHashLink>
						}
					</>
				</>
			:
				<button onClick={onClick} className={`${styles.button} ${styles[style]} ${className}`}>
					{label &&
						<span className={styles.buttonLabel}>
							{label}
						</span>
					}
					{icon}
				</button>
			}
		</>
	)
}

export default Button;


