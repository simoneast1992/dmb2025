import styles from './Button.module.css';

interface ButtonProps {
	className?: string,
	icon?: React.ReactNode,
	label?: string,
	link?: string,
	onClick?: () => void,
	style: 'primary' | 'primaryContrast' | 'secondary' | 'tertiary',
}

const Button = ({
	className = '',
	icon,
	label,
	link,
	onClick,
	style,
}: ButtonProps) => {
	return (
		<>
			{link ?
				<a
					href={link}
					onClick={onClick}
					className={`${styles.button} ${styles[style]} ${className}`}
				>
					{label &&
						<span className={styles.buttonLabel}>
							{label}
						</span>
					}
					{icon}
				</a>
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