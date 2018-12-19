import { HubEvents } from './enums';

export interface HubMessage extends MessageEvent {
    data: {
      payload: any,
      header: HubEvents,
      id: number
    };
  }


  export interface Stream {
    value: any;
  }
