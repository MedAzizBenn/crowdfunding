export enum FetchState {
    DEFAULT = 'DEFAULT',
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
  }
  
export type Project = {
    userId: number;
    _id: number;
    titre: string;
    description: string;
    maxcap : number;
    category: string;
    photo: Buffer;
    delay: Date;
}