import React from "react";

import Matejko_Christianization_of_Poland from "../../../images/Matejko_Christianization_of_Poland.jpg";
import saint_wojciech from "../../../images/saint_wojciech.png";
import otton_III from "../../../images/otton_III.jpg";
import Chrobry_in_Kiev from "../../../images/Chrobry_in_Kiev.jpg";
import Chrobry_coronation from "../../../images/Chrobry_coronation.jpg";
import Casimir_The_Restorer_coming_back_to_Poland from "../../../images/Casimir_The_Restorer_coming_back_to_Poland.jpeg";
import Saint_Stanislaus_assasination from "../../../images/Saint_Stanislaus_assasination.jpg";
import Reception_of_Jews_in_Poland from "../../../images/Reception_of_Jews_in_Poland.jpg";
import Boleslaw_Wrymouth_death from "../../../images/Boleslaw_Wrymouth_death.jpeg";

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
            default:
                break;
        }
    }
}