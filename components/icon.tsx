interface withIconProps {
  size?: any
  color?: any
}

const withIcon: (icon: any) => React.FunctionComponent<withIconProps> = icon => {
  const Icon: React.FC<withIconProps> = ({
    size = 24,
    color
}) => {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={color}
        dangerouslySetInnerHTML={{__html: icon}}
      />
    )
  }

  return Icon
}

export default withIcon