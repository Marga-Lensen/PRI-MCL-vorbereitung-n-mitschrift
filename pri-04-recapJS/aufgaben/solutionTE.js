// Assumptions:
//   + the element_list is sorted by id.
//   + root id is 1.
const rootId = 1;

function collectChildren( id, elementList){
    // Return id array of all children.
    return elementList.filter( e => { return( e.parent === id)})
};

export function findPathToFirstMatch( elementList, tagName){
    function findPath( id){
            const tag = elementList[ id - 1].tag;
            if( tag === tagName){
                return [tagName];
            };
            for( let ch of collectChildren( id, elementList)){
                const p = findPath( ch.id);
                if( p){
                    return [ tag, ...p];
                }
            };
            return null;
        };

    return (findPath( rootId).join( " > "));
};

export function printDomTree( elementList){
    function printTree( id, depth){
        console.log( depth + elementList[ id - 1].tag);
        for( let ch of collectChildren( id, elementList)){
            printTree( ch.id, depth + " ");
        }        
    };
    
    printTree( rootId, "");
};