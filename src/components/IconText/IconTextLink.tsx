function IconTextLink(props: any) {
    const iconAfter: boolean = props?.iconAfter ?? false;
    let innerHtml;
    if (iconAfter) {
        innerHtml = <>{props.text}&nbsp;<span className={props.faclasses}></span></>
    }
    else {
        innerHtml = <><span className={props.faclasses}></span>&nbsp;{props.text}</>
    }

    if (props.newTab) {
        return (<a href={props.href} target="_blank" rel="noreferrer">{innerHtml}</a>);
    }
    else {
        return (<a href={props.href}>{innerHtml}</a>);
    }
}

export default IconTextLink;