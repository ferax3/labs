import { AbstractControl, ValidatorFn } from "@angular/forms";
import { ValidatorCountService } from "./validator-count.service";

export function countValidator(): ValidatorFn{
    return(
        control: AbstractControl
    ): { [key: string]: boolean} | null =>{
        //оголощуємо новий валідатор кількості
        let validator = new ValidatorCountService()
        //перевіряємо валідність дати
        let valid = !control.value || validator.validate_count(control.value)
        return valid ? null : {count: true}
    }
}