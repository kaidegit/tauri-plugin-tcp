import { invoke } from '@tauri-apps/api/core';
import { listen as _listen } from '@tauri-apps/api/event';
import { Buffer } from 'buffer';
/**
 *
 * @param id A unique ID
 * @param endpoint e.g. 0.0.0.0:8080
 */
export async function bind(id, endpoint) {
    await invoke('plugin:tcp|bind', {
        id, endpoint,
    });
}
/**
 *
 * @param id A unique ID
 */
export async function unbind(id) {
    await invoke('plugin:tcp|unbind', {
        id
    });
}
/**
 *
 * @param id A unique ID
 * @param endpoint e.g. 0.0.0.0:8080
 */
export async function connect(id, endpoint) {
    await invoke('plugin:tcp|connect', {
        id, endpoint,
    });
}
export async function connect_with_bind(id, localAddr, endpoint) {
    await invoke('plugin:tcp|connect_with_bind', {
        id, localAddr, endpoint,
    });
}
/**
 *
 * @param id A unique ID
 */
export async function disconnect(id) {
    await invoke('plugin:tcp|disconnect', {
        id
    });
}
/**
 *
 * @param id A unique ID
 * @param message A string or a uint8 array
 * @param addr Optional destination address. e.g. 0.0.0.0:8080
 */
export async function send(id, message, addr) {
    await invoke('plugin:tcp|send', {
        id,
        message: typeof message === 'string' ? Array.from(Buffer.from(message)) : message,
        addr,
    });
}
export function listen(handler, options) {
    return _listen('plugin://tcp', handler, options);
}
