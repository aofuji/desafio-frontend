import { Observable } from "rxjs";
import { IRegister } from "../../interface/Register";

export abstract class BaseService {
  public abstract getId(id:String):Observable<any>;

  public abstract getAll():Observable<any>;

  public abstract create(data:IRegister):Observable<any>

  public abstract delete(id:string|undefined):Observable<any>

  public abstract update(id:string,data:IRegister) : Observable<any>


}
