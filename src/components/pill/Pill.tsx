function Pill(props: any) {
    const text = props.text;
    return (
        <span className="pill">{text}</span>
    )
}

export default Pill;