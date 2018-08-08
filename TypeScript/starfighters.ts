import {Spacecraft, Conteinership} from './base-ships'

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

export {MilleniumFalcom}
