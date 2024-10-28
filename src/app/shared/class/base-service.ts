import { Observable } from "rxjs";
import { IRegister } from "../../interface/Register";

export abstract class BaseSerice {
  public abstract getId():Observable<any>;

  public abstract getAll():Observable<any>;

  public abstract create(data:IRegister):Observable<any>
}
