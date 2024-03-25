
function sample<T> (collection: T[]): T {
    console.log(collection)
    return (collection[0])
}

const value = sample([true, false,'hello'])