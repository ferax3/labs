import { UrbanTown } from './urbantown';

//обгортка
describe('Urbantown Testing', () => {
    let urbantown: UrbanTown;
    //Перед виконанням усіх тестів створимо екземпляр класу city
    beforeEach(() => {
        urbantown = new UrbanTown("City", 10000, 100);
    });
    //?тестуємо чи створили екземпляр класу
    it('Створення екземпляру класу', () => {
        expect(urbantown).toBeTruthy();
    });
    //?створення Міста з від'ємними значеннями
    it("Створення екземпляру класу з від\'ємною площею", ()=> {
        expect(() => new UrbanTown('Село', 10000, -50)).toThrow(new Error('area <= 0'));
    });
    it("Створення екземпляру класу з від\'ємним значенням популяції", ()=> {
        expect(() => new UrbanTown('Село', -11000, 50)).toThrow(new Error('population_urbantown <= 0'));
    });

    //?тестуємо метод обрахунку щільності
    it('Розрахунок щільності міста з популяції людей 10000 та площиною 100км^2', () => {
        urbantown.Density();
        let a1 = urbantown.density;
        let a2 = 10000/100;
        expect(a1.toFixed(2)).toBe(a2.toFixed(2));
    });
});