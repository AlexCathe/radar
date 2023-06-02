import { Radar } from "../entities/radar";

export interface radarRepositoryInt {
    getAllRadar(): Array<Radar>;
}