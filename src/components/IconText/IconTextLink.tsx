function IconTextLink(props: any) {
    const innerHtml = <><span className={props.faclasses}></span>&nbsp;{props.text}</>

    if (props.newTab) {
        return (<a href={props.href} target="_blank" rel="noreferrer">{innerHtml}</a>);
    }
    else {
        return (<a href={props.href}>{innerHtml}</a>);
    }
}

export default IconTextLink;