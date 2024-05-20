import { City } from "./City";
import { ConfigService } from "./config.service";

export class CityList{
    private cityList=new Array();
    private searchCity=new Array();
    searchCityResult: string[]=[];
    cntSub = this.configService.cnt$
    .subscribe(()=>{
        let cnt=this.configService.cnt$.value;
        this.search(cnt.id);
    });
    constructor(private configService: ConfigService){
        let city = new City();
        city.name='Київ';
        city.cnt_id=0;
        city.count=2000000;
        city.devision = 10;
        city.sq = 1600;
        city.tel = '+380-44';

        this.add(city);
        let city1 = new City();
        city1.name='Лондон';
        city1.cnt_id=1;
        city1.count=2000000;
        city1.devision=56;
        city1.sq=835;
        city1.tel='+44-20';

        this.add(city1);
        this.search(0);
    }
    add(city: City){
        this.cityList.push(city);
        this.search(city.cnt_id);
    }
    search(id_cnt:number){
        this.searchCity = this.cityList.filter((city)=>{
            return city.cnt_id == id_cnt;
        })
        this.searchCityResult =[];
        this.searchCity.forEach(el =>{
            this.searchCityResult.push("Назва: "+el.name);
            this.searchCityResult.push("Кількість населення: "+el.count);
            this.searchCityResult.push("Поділ міста: "+el.devision);
            this.searchCityResult.push("Площа "+el.sq);
            this.searchCityResult.push("Телефонний код: "+el.tel);
        })
    }
}