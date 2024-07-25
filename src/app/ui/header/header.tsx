interface HeaderProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export default function Header(props: HeaderProps) {
  const { title, description, imageUrl, imageAlt } = props;
  return (
    <header id="header">
      <h1 className="intro-title">{title}</h1>
      <p className="intro-subtitle">{description}</p>
      <img src={imageUrl} alt={imageAlt} className="intro-image" />
    </header>
  )
};