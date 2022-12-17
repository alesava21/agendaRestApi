import { User } from "./user";

export class Agenda {
    constructor(
        public id?: number,
        public descrizione?: string,
        public dataOraInizio?: Date,
        public dataOraFine?: Date,
        public utenteDTO?: User
    ) { }
}