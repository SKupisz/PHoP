import React from "react";

import Matejko_Christianization_of_Poland from "../../../images/Matejko_Christianization_of_Poland.jpg";
import saint_wojciech from "../../../images/saint_wojciech.png";
import otton_III from "../../../images/otton_III.jpg";
import Chrobry_in_Kiev from "../../../images/Chrobry_in_Kiev.jpg";
import Chrobry_coronation from "../../../images/Chrobry_coronation.jpg";
import Mieszko_and_Duchess from "../../../images/Mieszko_and_Duchess.jpg";
import Casimir_The_Restorer_coming_back_to_Poland from "../../../images/Casimir_The_Restorer_coming_back_to_Poland.jpeg";
import Saint_Stanislaus_assasination from "../../../images/Saint_Stanislaus_assasination.jpg";
import Reception_of_Jews_in_Poland from "../../../images/Reception_of_Jews_in_Poland.jpg";
import Boleslaw_Wrymouth_death from "../../../images/Boleslaw_Wrymouth_death.jpeg";
import Battle_of_Legnica from "../../../images/Battle_of_Legnica.jpg";
import Przemysl_II_assasination from "../../../images/Przemysl_II_assasination.jpg";
import Vlad_I_Elbow_High from "../../../images/Vlad_I_Elbow_High.jpg";
import Lokietek_Breaking_off_agreements from "../../../images/Lokietek_Breaking_off_agreements.jpg";
import Battle_of_Plowce from "../../../images/Battle_of_Plowce.png";
import Taking_Ruthenia_again from "../../../images/Taking_Ruthenia_again.png";
import Reception_of_Jews_2 from "../../../images/Reception_of_Jews_2.jpg";
import Sejm_of_Wislica from "../../../images/Sejm_of_Wislica.png";
import Casimir_the_Great_Grants_a_Privilege_to_Peasants from "../../../images/Casimir_the_Great_Grants_a_Privilege_to_Peasants.jpg";
import Casimir_the_Great_Listening_to_Peasants from "../../../images/Casimir_the_Great_Listening_to_Peasants.jpg";

export default class GiveTheImageElement {
    constructor(name){
        this.name = name;
    }
    changeTheName(name){
        this.name = name;
    }
    returnTheImage(){
        switch(this.name){
            case "Matejko_Christianization_of_Poland":
                return Matejko_Christianization_of_Poland;
                break;
            case "saint_wojciech":
                return saint_wojciech;
                break;
            case "otton_III":
                return otton_III;
                break;
            case "Chrobry_in_Kiev":
                return Chrobry_in_Kiev;
                break;
            case "Chrobry_coronation":
                return Chrobry_coronation;
                break;
            case "Mieszko_and_Duchess":
                return Mieszko_and_Duchess;
                break;
            case "Casimir_The_Restorer_coming_back_to_Poland":
                return Casimir_The_Restorer_coming_back_to_Poland;
                break;
            case "Saint_Stanislaus_assasination":
                return Saint_Stanislaus_assasination;
                break;
            case "Reception_of_Jews_in_Poland":
                return Reception_of_Jews_in_Poland;
                break;
            case "Boleslaw_Wrymouth_death":
                return Boleslaw_Wrymouth_death;
                break;
            case "Battle_of_Legnica":
                return Battle_of_Legnica;
                break;
            case "Przemysl_II_assasination":
                return Przemysl_II_assasination;
                break;
            case "Vlad_I_Elbow_High":
                return Vlad_I_Elbow_High;
                break;
            case "Lokietek_Breaking_off_agreements":
                return Lokietek_Breaking_off_agreements;
                break;
            case "Battle_of_Plowce":
                return Battle_of_Plowce;
                break;
            case "Taking_Ruthenia_again":
                return Taking_Ruthenia_again;
                break;
            case "Reception_of_Jews_2":
                return Reception_of_Jews_2;
                break;
            case "Sejm_of_Wislica":
                return Sejm_of_Wislica;
                break;
            case "Casimir_the_Great_Grants_a_Privilege_to_Peasants":
                return Casimir_the_Great_Grants_a_Privilege_to_Peasants;
                break;
            case "Casimir_the_Great_Listening_to_Peasants":
                return Casimir_the_Great_Listening_to_Peasants;
                break;
            default:
                break;
        }
    }
}