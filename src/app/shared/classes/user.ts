import { WAM } from './wam';

export class User {
  public badgeNo:         string       = '';
  public userName:        string       = '';       // Login/user id (fflintstone)
  public name:            string       = '';       // Formatted last, first (Flintstone, Fred)
  public personId:        number       = 0;        // Oracle eBS pirmary key
  public positionId:      number       = 0;
  public orgNo:           string       = '';       // Users 4 char org number
  public classification:  string       = '';
  public wams:            Array<WAM>  = [];
}
