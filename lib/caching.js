import NodeCache from 'node-cache';
const cache = new NodeCache();

export const getCachedData = (key) => {
  return cache.get(key);
};

export const setCachedData = (key, value) => {
  cache.set(key, value);
};