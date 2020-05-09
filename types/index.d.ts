declare var API_SERVER_PREFIX: string;
declare namespace NodeJS {
  interface Global {
    API_SERVER_PREFIX: string;
  }
}
