import { Radar } from "../entities/Radar";

export interface radarRepositoryInt {
    getAllRadar(): Array<Radar>;
}