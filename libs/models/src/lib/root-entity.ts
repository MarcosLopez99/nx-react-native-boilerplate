import { AppEntity } from "./app-entity";
import { PeopleEntity } from "./people-entity";

export interface RootState {
  app: AppEntity;
  people: PeopleEntity;
}
