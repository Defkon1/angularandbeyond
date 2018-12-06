import { Person } from './person';
import { Sex } from './sex';
import { Race } from './race';
import { ForceAlignment } from './forcealignment';

export class Jedi extends Person {
	public readonly alignment: ForceAlignment;
	public lightsaberColor: string;

	constructor(public name : string, public surname : string, public sex : Sex) {
		super(name, surname, sex);
		this.alignment = ForceAlignment.LightSide;
	}
}