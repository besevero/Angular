class Spacecraft {
  constructor(public propulsor: string){}
  jumpIntoHyperspace(){
    console.log(`Entering Hyperspace with ${this.propulsor}`)
  }
}

interface Conteinership{
  cargoContainers: number
}
export{Spacecraft, Conteinership}
