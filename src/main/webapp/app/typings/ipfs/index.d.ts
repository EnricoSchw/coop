// Type definitions for IPFS 0.48.1
// TypeScript Version: 3.9.5

import { EventEmitter } from 'events';

declare module 'ipfs' {
  export declare class IPFS extends EventEmitter {
    constructor(options?: IPFS.Options);
  }
}
