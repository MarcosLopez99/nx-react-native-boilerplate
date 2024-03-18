import { PersonEntity } from '@nx-monorepo-rn-boilerplate/models';

export function mapApiResponseToPerson(apiPerson: any): PersonEntity {
  return {
    name: apiPerson.name,
    email: apiPerson.email,
    phone: apiPerson.phone,
  } as PersonEntity;
}
