export default function LogoLink(props: any) {
  const { href, src, alt } = props;
  return (
    <a
      href={href}
      className="
        transition-opacity
        duration-150
        ease-out
        hover:opacity-70"
      onMouseDown={() => {
        console.log("done");
      }}
    >
      <img src={src} alt={alt} className={"h-12 sm:h-20"} />
    </a>
  );
}
