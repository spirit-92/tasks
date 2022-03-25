// describe("pow", function() {
//
//     describe("возводит x в степень 3", function() {
//         before(() => console.log("Тестирование началось – перед тестами"));
//         after(() => console.log("Тестирование закончилось – после всех тестов"));
//
//
//         function makeTest(x) {
//             let expected = x * x * x;
//             it(`${x} в степени 3 будет ${expected}`, function() {
//                 assert.equal(pow(x, 3), expected);
//             });
//
//         }
//
//         for (let x = 1; x <= 5; x++) {
//             makeTest(x);
//         }
//         // after(() => alert("Тестирование закончилось – после всех тестов"));
//     });
//     it("для отрицательных n возвращает NaN", function() {
//         assert.isNaN(pow(2, -1));
//     });
//
//     it("для дробных n возвращает NaN", function() {
//         assert.isNaN(pow(2, 1.5));
//     });
// });
describe('plus',function () {
    it('проверка на + 2 и 3 ',function () {
        let expected = 2+3
        assert.equal(plus('2',3),expected)
    })
    // it('проверка на Nan', function () {
    //     assert.isN   aN(plus('sd','sd'))
    // });
        it("для дробных n возвращает NaN", function() {
        assert.isNaN(plus('e', 'e'));
    });
})