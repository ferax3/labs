import { City } from "./City";
import { ConfigService } from "./config.service";

export class CityList{
    cityList=new Array();
    searchCity=new Array();
    cntSub = this.configService.cnt$
    .subscribe(()=>{
        let cnt=this.configService.cnt$.value;
        this.search(cnt.id);
    });
    constructor(private configService: ConfigService){}
    add(city: City){
        this.cityList.push(city);
        this.search(city.cnt_id);
    }
    search(id_cnt:number){
        this.searchCity = this.cityList.filter((city)=>{
            return city.cnt_id == id_cnt;
        })
    }
}