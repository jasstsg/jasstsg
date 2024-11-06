export function getCSSVariable(varName: string){
    return getComputedStyle(document.body).getPropertyValue(varName);
}

