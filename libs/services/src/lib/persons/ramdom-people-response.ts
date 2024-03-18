import { RandomPeopleResponse } from '../models/ramdom-people';

export async function fetchRandomPeople(): Promise<RandomPeopleResponse> {
  const response = await fetch('https://randomuser.me/api/');

  if (response.ok) {
    return response.json();
  }

  throw response;
}
