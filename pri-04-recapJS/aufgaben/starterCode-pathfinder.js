function findPath(element, target) {
    // 1. BASIS: Gefunden?
    if (element.tagName === target) {
        return element.tagName;
    }
    
    // 2. REKURSIV: Kinder durchsuchen
    for (let child of element.children) {
        let path = findPath(child, target);
        if (path) {
            return `${element.tagName} > ${path}`;
        }
    }
    
    // 3. NICHT GEFUNDEN
    return null;
}
