class Spacecraft {
  constructor(public propulsor: string){}
  jumpIntoHyperspace(){
    console.log(`Entering Hyperspace with ${this.propulsor}`)

  }
}

let ship = new Spacecraft('Hyperdrive')

ship.jumpIntoHyperspace()

class MilleniumFalcom extends Spacecraft implements Conteinership{

cargoContainers: number

  constructor(){
    super("Hyperdrive")
    this.cargoContainers = 4
  }
  jumpIntoHyperspace(){
    if(Math.random() >= 0.5){
      super.jumpIntoHyperspace()
    }else{
      console.log('Failed to jump into hyperspace')
    }
  }
}

let falcon = new MilleniumFalcom()
falcon.jumpIntoHyperspace()

interface Conteinership{
  cargoContainers: number
}
let goodForTheJob = (ship : Conteinership) => ship.cargoContainers > 2

console.log(`Is Falcon good for the job? ${goodForTheJob(falcon) ? 'Yes': 'No'}`)
