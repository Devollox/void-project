interface withIconProps {
	size?: any
	color?: any
	sizeImage?: any
}

const withIcon: (
	icon: any,
	sizeImage: number
) => React.FunctionComponent<withIconProps> = icon => {
	const Icon24: React.FC<withIconProps> = ({ sizeImage = 20, color }) => {
		return (
			<svg
				viewBox='0 0 24 24'
				width={sizeImage}
				height={sizeImage}
				fill={color}
				dangerouslySetInnerHTML={{ __html: icon }}
			/>
		)
	}

	return Icon24
}

export default withIcon
