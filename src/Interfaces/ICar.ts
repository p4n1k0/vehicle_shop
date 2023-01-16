export default interface ICar {
  _id?: string;
  model: string;
  year: number;
  color: string;
  buyValue: number;
  status?: boolean;
  doorsQty: number;
  seatsQty: number;
}
