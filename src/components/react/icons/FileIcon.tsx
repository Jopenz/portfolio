interface Props {
  icon: string;
}

export default function FileIcon(props: Props) {
  const { icon } = props;
  return <img style={{ height: 20, width: 'auto', marginLeft: 2, marginRight: 5 }} src={`./assets/icons/${icon}.svg`} alt={`${icon} icon`} />;
}
