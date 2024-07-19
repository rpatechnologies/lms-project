type Props = {
  imgSrc: string;
  title:string;
  text:string;
};

const Card = ({ imgSrc, title, text }: Props) => {
  return (
    <div className="col">
      <div className="card" style={{ borderRadius: "10px" }}>
        <img
          style={{ borderRadius: "10px", padding: "10px" }}
          src={imgSrc}
          className="card-img-top"
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
