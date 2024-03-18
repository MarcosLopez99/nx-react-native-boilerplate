import { initialAppState } from "../app/app.slice";
import { initialPeopleState } from "../people/peoople.slice";

import { RootState } from "@nx-monorepo-rn-boilerplate/models";

export const initialRootState: RootState = {
  app: initialAppState,
  people: initialPeopleState,
};
