import styles from './Button.module.css';

interface ButtonProps {
	children?: React.ReactNode,
	className?: string,
	label?: string,
	link?: string,
	onClick?: () => void,
	style: 'primary' | 'primaryContrast' | 'secondary' | 'tertiary',
}

const Button = ({
	children,
	className = '',
	label,
	link,
	onClick,
	style,
}: ButtonProps) => {
	return (
		<>
			{link ?
				<a href={link} className={`${styles.button} ${styles[style]} ${className}`}>
					{children}
					{label &&
						<span className={styles.buttonLabel}>
							{label}
						</span>
					}
				</a>
			:
				<button onClick={onClick} className={`${styles.button} ${styles[style]} ${className}`}>
					{children}
					{label &&
						<span className={styles.buttonLabel}>
							{label}
						</span>
					}
				</button>
			}
		</>
	)
}

export default Button;