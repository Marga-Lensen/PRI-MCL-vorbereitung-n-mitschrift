function findPathToFirstMatch(data, tag) {
    const targetId = data.find(element => element.tag === tag).id

    function makePath(data, id) {
        const element = data.find(element => element.id === id)

        if (element.parent === null) {
            return element.tag
        }

        return makePath(data, element.parent) + " > " + element.tag
    }

    return makePath(data, targetId)
}

function printDomTree(data, parent = null, level = 0) {
    const children = data.filter(element => element.parent === parent)

    children.forEach(element => {
        console.log("  ".repeat(level) + element.tag)
        printDomTree(data, element.id, level + 1)
    })
}

export { findPathToFirstMatch, printDomTree }