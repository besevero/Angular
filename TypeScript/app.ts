
import {Spacecraft, Conteinership} from './base-ships'
import { MilleniumFalcom} from './starfighters'

import * as _ from 'lodash'

console.log(_.pad("typescrypt examples", 40, "="))

let ship = new Spacecraft('Hyperdrive')

ship.jumpIntoHyperspace()

let falcon = new MilleniumFalcom()
falcon.jumpIntoHyperspace()

let goodForTheJob = (ship : Conteinership) => ship.cargoContainers > 2

console.log(`Is Falcon good for the job? ${goodForTheJob(falcon) ? 'Yes': 'No'}`)
