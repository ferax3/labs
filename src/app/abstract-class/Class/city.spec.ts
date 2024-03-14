import { City } from './city';

//обгортка
describe('City Testing', () => {
    let city: City;
    //Перед виконанням усіх тестів створимо екземпляр класу city
    beforeEach(() => {
        city = new City("City", 100000, 150);
    });
    //?тестуємо чи створили екземпляр класу
    it('Створення екземпляру класу', () => {
        expect(city).toBeTruthy();
    });
});