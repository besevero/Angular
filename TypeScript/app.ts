
import {Spacecraft, Conteinership} from './base-ships'
import { MilleniumFalcom} from './starfighters'

let ship = new Spacecraft('Hyperdrive')

ship.jumpIntoHyperspace()

let falcon = new MilleniumFalcom()
falcon.jumpIntoHyperspace()

let goodForTheJob = (ship : Conteinership) => ship.cargoContainers > 2

console.log(`Is Falcon good for the job? ${goodForTheJob(falcon) ? 'Yes': 'No'}`)
