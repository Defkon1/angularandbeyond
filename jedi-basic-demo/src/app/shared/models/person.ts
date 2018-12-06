import { Sex } from './sex';
import { Race } from './race';

export class Person {
	public race: Race = Race.Human;    
 	public birthPlanet: string;
									
 	constructor(public name: string, public surname: string, public sex : Sex) {
	}
}