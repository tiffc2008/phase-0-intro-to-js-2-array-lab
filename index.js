const cats = ["Milo", "Otis", "Garfield"]

function  destructivelyAppendCat(Cat1){
    return cats.push(Cat1)
}
function  destructivelyPrependCat(Cat2){
    return cats.unshift(Cat2)
}

function  destructivelyRemoveLastCat(){
    return cats.pop()
}
function  destructivelyRemoveFirstCat(){
    return cats.shift()
}


function  appendCat(name){
    return [...cats,name]
}

function  prependCat(name){
    return [name,...cats,]
}

function  removeLastCat(){
    return [cats[0],cats[1]]
}

function  removeFirstCat(){
    return [cats[1],cats[2]]
}
