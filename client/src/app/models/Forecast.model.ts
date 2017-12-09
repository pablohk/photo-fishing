import { Daily } from '../models/Daily.model';
import { Prediction } from '../models/Prediction.model';

export class Forecast {
  prediction : Prediction;
  weather : Daily;
}
