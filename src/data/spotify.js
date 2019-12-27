import jamstackAPI from './core';

export const authorize = () => jamstackAPI.get('authorize');
export const searchSongs = (query) => jamstackAPI.get(`search/songs/${query}`);
