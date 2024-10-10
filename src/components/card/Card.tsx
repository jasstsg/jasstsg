import './card.scss';

function Card(props: any) {
    return (
        <div className="card">
            <div className="image content-tile">
                <img src={props.src}></img>
            </div>
            <div className="text content-tile">
                <div className="title">{props.title}</div>
                <div className="desc">{props.desc}</div>
            </div>
        </div>
    );
}

export default Card;