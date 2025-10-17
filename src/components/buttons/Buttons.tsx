interface ButtonContent2Props {
  titleBtn?: string;
  linkBtn?: string;
  btnstyle?: string;
  gmbUrl?: boolean;
}

const ButtonContent: React.FC<ButtonContent2Props> = ({
  titleBtn,
  linkBtn,
  btnstyle,
  gmbUrl,
}) => {
  return (
    <div>
      <a
        href={`${linkBtn ? linkBtn : "/contact"} `}
        className="capitalize button border-2 border-white"
        target={linkBtn && gmbUrl ? "_blank" : "_self"}
        aria-label={titleBtn ? titleBtn : "Contact Us!"}
      >
        <span className="icon">
          <i className="fa-solid fa-circle-arrow-right text-white text-2xl"></i>
        </span>
        <p className="text ml-2 text-white">
          {titleBtn ? titleBtn : "Contact Us!"}
        </p>
      </a>
    </div>
  );
};
export default ButtonContent;
