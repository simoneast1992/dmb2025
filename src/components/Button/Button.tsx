interface ButtonProps {
	icon?: string,
	label?: string,
	link: string,
	onClick?: () => {},
	style: 'primary' | 'secondary' | 'tertiary',
}

const Button = ({
	icon,
	label,
	link,
	onClick,
	style,
}: ButtonProps) => {
	return (
		<>
			{link ?
				<a href={link} className={`button ${style}`}>
					{icon &&
						<span className="button-icon">
							{icon}
						</span>
					}
					{label &&
						<span className="button-label">{label}</span>
					}
				</a>
			:
				<button onClick={onClick} className={`button ${style}`}>
					{icon &&
						<span className="button-icon">
							{icon}
						</span>
					}
					{label &&
						<span className="button-label">{label}</span>
					}
				</button>
			}
		</>
	)
}

export default Button;