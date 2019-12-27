import jamstackAPI from './core';

export const retrieveRoom = (roomId) => jamstackAPI.get(`room/${roomId}`);
