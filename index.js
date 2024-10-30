// const obj = {
//     name: 'Alex'
// }

// console.log(Object.getOwnPropertyDescriptor(obj, 'name'))

// Object.defineProperty(obj, 'job', {
//     value: 'dev',
//     writable: true,
//     enumerable: true,
//     configurable: false,
// })

// Object.defineProperties(obj, {
//     job: {
//         value: 'dev',
//         writable: true,
//         configurable: true
//     },
//     city: {
//         value: 'Chisinau',
//         configurable: true
//     }
// })

// console.log(Object.getOwnPropertyDescriptors(obj))

// for(let key in obj){
//     console.log(key)
// }

// console.log(Object.values(obj))
// console.log(Object.keys(obj))

// console.log(obj)

// obj.job = 'tester'

// console.log(obj)

// console.log(Object.getOwnPropertyDescriptors(obj))


// const obj = {
//     name: 'Victor'
// }

// Object.defineProperty(obj, 'job', {
//     value: 'dev',
//     writable: true,
//     enumerable: true,
//     configurable: true,
// })

// Object.preventExtensions(obj)

// Object.prototype.func = (arg) => console.log(arg)

// obj.job = 'dev'

// console.log(Object.isExtensible(obj))

// obj.func('pass')

// Object.seal(obj)

// obj.name = 'Alex'

// console.log(Object.isSealed(obj))

// Object.defineProperty(obj, 'job', {    
//     enumerable: false,  
// })

// Object.freeze(obj)

// obj.name = 'Vasile'

// console.log(Object.isFrozen(obj))


// const func = (arg1, arg2) => {
//     return arg1 + ' ' + 'My name is: ' + this.name + arg2
// }

// const obj = {
//     name: 'Alex',
//     age: 90,
//     greet: func,
// }

// const obj1 = {
//     name: 'Igor',
//     greet: func,
// }

// const obj2 = {
//     name: 'Elena',
//     greet: func,
// }

// const bound = func.bind(obj2)

// console.log(obj.greet('Salut', ')'))
// console.log(obj1.greet.call(obj, 'Hey', '!'))
// console.log(obj2.greet.apply(obj, ['Hi', '!!']))

// console.log(bound('HI', '!'))

// const func = (nume, age) => {
//     const obj2 = {
//         name: nume,
//         age
//     }
//     console.log('obj2', obj2)
// }

// const obj = {
//     name: 'Alex',
//     age: 23
// }


// func('Alex', 43)


class SalesManager {
    constructor({name, age, section}) {
        this.name = name
        this.age = age
        this.section = section
        this.post = 'manager'
    }

    responsability(){
        console.log('consultanta')
    }
}

const sergiu = new SalesManager({name: 'Sergiu', age: 23, section: 'Botanica'})

// console.log(sergiu)

// sergiu.responsability()

class SalesDirector extends SalesManager {
    constructor(options) {
        super(options)
        this.experienta = options.experienta
        this.post = 'diector vanzari'
    }

    responsability(){
        super.responsability()
        console.log('conducere')
    }
}

const andrei = new SalesDirector({name: 'Andrei', age: 40, section: 'Centru', experienta: 15})

console.log(andrei)

andrei.responsability()






