import { get } from './baseApi';

export async function getCorporate() {
  return get(`/api/corporate `);
}

export async function getCommunities() {
  return get(`/api/community `);
}
export async function getForecasts() {
  return get(`/api/forecast `);
}
export async function getTotal() {
  return get(`/api/total`);
}
