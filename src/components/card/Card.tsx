import './card.scss';

function Card(props: any) {
    return (
        <div className="card">
            <div className="card-text">
                <div className="card-title">{props.title}</div>
                <div className="card-content">{props.desc}</div>
            </div>
            <img className="card-image" src={props.src} alt={`${props.title} card`}></img>
        </div>
    );
}

export default Card;