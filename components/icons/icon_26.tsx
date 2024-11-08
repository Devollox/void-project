interface withIconProps {
	size?: any
	color?: any
	sizeImage?: any
}

const withIcon: (
	icon: any,
	sizeImage: number
) => React.FunctionComponent<withIconProps> = icon => {
	const Icon26: React.FC<withIconProps> = ({ sizeImage = 26, color }) => {
		return (
			<svg
				viewBox='0 0 26 26'
				width={sizeImage}
				height={sizeImage}
				fill={color}
				dangerouslySetInnerHTML={{ __html: icon }}
			/>
		)
	}

	return Icon26
}

export default withIcon
