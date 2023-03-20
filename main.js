const findElection = () => {
    return ("Find appropriate electional time.")
}
const elect = findElection()
console.log(elect)

const researchPrimarySources = () => {
    return ("Research tried and true texts.")
}
const research = researchPrimarySources()
console.log(research)

const gatherMaterial = () => {
    return ("Gather appropriate materials")
}
const gather = gatherMaterial()
console.log(gather)


const craftTalisman = () => {
    return ("Craft materials into a talisman found in your chosen source.")
}
const craft = craftTalisman()
console.log(craft)


const invokeTalisman = () => {
    return ("Invoke planetary influence into the talisman at the given election.")
}
const invoke = invokeTalisman()
console.log(invoke)


const suffumigateTalisman = () => {
    return ("Seal in the influence with sacred smoke")
}
const suffumigate = suffumigateTalisman()
console.log(suffumigate)

const observeResult = () => {
    return ("Wear the talisman")
}
observe = observeResult()
console.log(observe)

const add = (firstNumber, secondNumber) => {
    const sum = firstNumber + secondNumber

    return sum
}
const subtact = (firstNumber, secondNumber) => {
    const remainder = firstNumber - secondNumber

    return remainder
}

const multiply = (firstNumber, secondNumber) => {
    const product = firstNumber * secondNumber

    return product
}

const divide = (firstNumber, secondNumber) => {
    const quotient = firstNumber / secondNumber

    return quotient
}

const square = (firstNumber) => {
    const squared = firstNumber * firstNumber

    return squared
}

let result = multiply(0.25, 4)
console.log(result)
let result1 = multiply(0.75, 2)
console.log(result1)
let result2 = add(result, result1)
console.log(result2)
let result3 = divide(60, 2.5)
console.log(result3)

/*Produce a car chassis (no input, outputs new chassis object)
Add 4 wheels to chassis (input is a chassis, output is chassis with wheels)
Add an engine to chassis (input is a chassis, output is chassis with an engine)
Add a steering wheel to chassis (input is a chassis, output is chassis with a steering wheel)
Add a body to chassis (input is a chassis, output is chassis with a body)
Add a drive train to chassis (input is a chassis, output is chassis with a drive train)*/

const addBody = (chassisObject) => {
    // Use dot notation to add a new property
    chassisObject.body = "Fever"

    // Return the chassis that now has a body property on it
    return chassisObject
}

// No parameters defined because function needs nothing to do its job
const createChassis = () => {
    // Create a new object. No properties yet.
    const newChassisObject = {

    }

    return newChassisObject
}

let chassis = createChassis()
console.log(chassis)


/*
    Note in the code below that the object that gets returned from the
    makeChassis() function above is stored in the chassis variable. That
    value is then sent to the addBody() function as that function's input.
*/
/*let chassisWithBody = addBody(chassisObject)
console.log(chassisWithBody)
> { body: "Fever" } */


const car = {

}


const addWheels = (car) => {
    car.wheels = 4
    return car
}


const addEngine = (car) => {
    car.engine = "4.8L"
    return car
}


const addSteeringWheel = (car) => {
    car.steerinWheel = "Tilting"
    return car
}


const addDriveTrain = (car) => {
    car.driveTrain = "Two wheel drive"
    return car
}
addWheels(car)
addEngine(car)
addSteeringWheel(car)
addDriveTrain(car)
console.log(car)



const buyChocolate = () => {
    const chocolate = {
        flavor: "Milk chocolate"
    }
    return chocolate
}
let chocolateBought = buyChocolate()


const addFlavoring = (chocolate) => {
    chocolate.flavor = "Mint"
    return chocolate
}
let flavorAdded = addFlavoring(chocolateBought)

const makeBarkMixture = (chocolate) => {
    if (chocolate.flavor = "Mint") {
        chocolate.mixed = true
    } else {
        chocolate.mixed = false
    }
    return chocolate
}
const rightChocolate = makeBarkMixture(flavorAdded)


const bakeCandy = (chocolate) => {
    if (chocolate.baked = true) {
    } else {
        chocolate.baked = false
    }
    return chocolate
}
const bakedChocolate = bakeCandy(rightChocolate)


const breakBark = (chocolate) => {
    if (chocolate.baked === true) {

        return ["Mint chocolate bark piece",
        "Mint chocolate bark piece",
        "Mint chocolate bark piece",
        "Mint chocolate bark piece",
        "Mint chocolate bark piece",
        "Mint chocolate bark piece"]


    }
    return []
}
let brokenChocolate = breakBark(rightChocolate)
console.log(brokenChocolate)



const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}


const computerMaker = (computer) => {
const computerHTMLSection = [`
    <section id="computer--1">
<h1>Apple Macbook</h1>
<div>Model: ${computer.model}</div>
<div>Memory: ${computer.specs.memory}</div>
<div>Hard drive space: ${computer.specs.hardDrive} </div>
<div>Processor speed: ${computer.specs.processor}</div>
</section>`
]
return computerHTMLSection
}
const stringReturnedFromFunction = computerMaker(computer)
console.log(stringReturnedFromFunction)



/*<section id="computer--1">
	<h1>Apple Macbook</h1>
	<div>Model: Pro</div>
	<div>Memory: 32 GB</div>
	<div>Hard drive space: 500 GB</div>
	<div>Processor speed: 2.4 Ghz</div>
</section>*/

