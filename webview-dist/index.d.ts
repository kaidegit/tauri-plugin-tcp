import { EventCallback, Options } from '@tauri-apps/api/event';
/**
 *
 * @param id A unique ID
 * @param endpoint e.g. 0.0.0.0:8080
 */
export declare function bind(id: string, endpoint: string): Promise<void>;
/**
 *
 * @param id A unique ID
 */
export declare function unbind(id: string): Promise<void>;
/**
 *
 * @param id A unique ID
 * @param endpoint e.g. 0.0.0.0:8080
 */
export declare function connect(id: string, endpoint: string): Promise<void>;
export declare function connect_with_bind(id: string, localAddr: string, endpoint: string): Promise<void>;
/**
 *
 * @param id A unique ID
 */
export declare function disconnect(id: string): Promise<void>;
/**
 *
 * @param id A unique ID
 * @param message A string or a uint8 array
 * @param addr Optional destination address. e.g. 0.0.0.0:8080
 */
export declare function send(id: string, message: string | number[] | Uint8Array, addr?: string): Promise<void>;
export interface Payload {
    id: string;
    event: {
        bind?: string;
        unbind?: [];
        connect?: string;
        disconnect?: string;
        message?: {
            addr: string;
            data: number[];
        };
    };
}
export declare function listen(handler: EventCallback<Payload>, options?: Options): Promise<import("@tauri-apps/api/event").UnlistenFn>;
