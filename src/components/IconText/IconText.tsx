function IconText(props: any) {

    return (
        <>
            <span className={props.faclasses}></span>
            &nbsp;
            {props.text}
        </>
    )
}

export default IconText;