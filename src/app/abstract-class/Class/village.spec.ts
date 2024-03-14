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
        expect(() => new Village('Село', 50, 2, -5)).toThrow(new Error('area<=0'));
    });


    //?тестуємо метод обрахунку щільності
    it('Розрахунок щільності села з к-стю домів та к-стю в них людей 250 та 2 відповідно і площиною 4км^2', () => {
        village.Density();
        let a1 = village.density;
        let a2 = (250 * 2)/4;
        expect(a1.toFixed(2)).toBe(a2.toFixed(2));
    });
});