import { Timestamp } from "firebase/firestore";

export class Meci{
    id: string;
    id_stadion: string;
    adversar: string;
    competitie: string;
    data: Timestamp; //aici este de tip timestamp in Firestore, nu stiu daca e bn pus asa tipul dar incercam
    scor: string;
    arbitru: string;
}
