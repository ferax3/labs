import { Village } from './village';

//обгортка
describe('Village Testing', () => {
    let village: Village;
    //Перед виконанням усіх тестів створимо екземпляр класу city
    beforeEach(() => {
        village = new Village("Village", 250, 2, 4);
    });
    //?тестуємо чи створили екземпляр класу
    it('Створення екземпляру класу', () => {
        expect(village).toBeTruthy();
    });
    //?створення Села з від'ємними значеннями
    it("Створення екземпляру класу з від\'ємною площею", ()=> {
        expect(() => new Village('Село', 50, 2, -5)).toThrow(new Error('area <= 0'));
    });
    it("Створення екземпляру класу з від\'ємним значенням к-сті домів", ()=> {
        expect(() => new Village('Село', -50, 2, 5)).toThrow(new Error('numberOfHouses <= 0'));
    });
    it("Створення екземпляру класу з від\'ємним значенням к-стю людей в домах", ()=> {
        expect(() => new Village('Село', 50, -2, 5)).toThrow(new Error('residentsPerHouse <= 0'));
    });

    //?тестування на більше населення ніж 10000
    it("Створення екземпляру класу з населенням 15000", ()=> {
        expect(() => new Village('Село', 3750, 4, 15)).toThrow(new Error('THIS IS NOT A VILLAGE'));
    })
    //?тестуємо метод обрахунку щільності
    it('Розрахунок щільності села з к-стю домів та к-стю в них людей 250 та 2 відповідно і площиною 4км^2', () => {
        village.Density();
        let a1 = village.density;
        let a2 = (250 * 2)/4;
        expect(a1.toFixed(2)).toBe(a2.toFixed(2));
    });
});