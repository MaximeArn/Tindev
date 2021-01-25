export interface SocketMessage {
  id: string;
  name: string;
}

export interface HasBeenSuspended {
  status: boolean;
  message?: string;
}
