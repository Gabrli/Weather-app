interface weatherMainDescryptionObject {
  description:string;
  temp:number
  speed: number;
  humidity: number
}


interface weather {
  cod: string;
  wind: weatherMainDescryptionObject;
  main: weatherMainDescryptionObject;
  name: string;
  description: string;
  weather: weatherMainDescryptionObject
}



export type { weather };
