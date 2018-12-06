import { Sex } from '../models/sex';
import { Race } from '../models/race';
import { ForceAlignment } from '../models/forcealignment';
import { Jedi } from '../models/jedi';

export const JEDIS: Jedi[] = [
    { name: "Stass", surname: "Allie", sex: Sex.Female, alignment: ForceAlignment.LightSide, lightsaberColor: "Green", race: Race.Human, birthPlanet: "Tholoth" },
    { name: "Adi", surname: "Gallia", sex: Sex.Female, alignment: ForceAlignment.LightSide, lightsaberColor: "Green", race: Race.Human, birthPlanet: "Coruscant" },
    { name: "Qui-Gon", surname: "Jinn", sex: Sex.Male, alignment: ForceAlignment.LightSide, lightsaberColor: "Green", race: Race.Human, birthPlanet: "Unknown" },
    { name: "Ben", surname: "Kenobi", sex: Sex.Male, alignment: ForceAlignment.LightSide, lightsaberColor: "Blue", race: Race.Human, birthPlanet: "Stewjon" },
    { name: "Plo", surname: "Koon", sex: Sex.Male, alignment: ForceAlignment.LightSide, lightsaberColor: "Blue", race: Race.Keldor, birthPlanet: "Dorin" },
    { name: "Ki-Adi", surname: "Mundi", sex: Sex.Male, alignment: ForceAlignment.LightSide, lightsaberColor: "Blue", race: Race.Cerean, birthPlanet: "Cerea" },
    { name: "Aayla", surname: "Secura", sex: Sex.Female, alignment: ForceAlignment.LightSide, lightsaberColor: "Blue", race: Race.Twilek, birthPlanet: "Ryloth" },
    { name: "Luke", surname: "Skywalker", sex: Sex.Male, alignment: ForceAlignment.LightSide, lightsaberColor: "Blue", race: Race.Human, birthPlanet: "Tatooine" },
    { name: "Mace", surname: "Windu", sex: Sex.Male, alignment: ForceAlignment.LightSide, lightsaberColor: "Purple", race: Race.Human, birthPlanet: "Haruun Kal" },
    { name: "Yoda", surname: "", sex: Sex.Male, alignment: ForceAlignment.LightSide, lightsaberColor: "Green", race: Race.Unknown, birthPlanet: "Unknown" }
  ];