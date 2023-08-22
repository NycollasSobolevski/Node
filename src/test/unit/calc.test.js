const { Sum, Sub, Mult, Div  } = require("../../commom/calc")

describe( 'calculadora', () => {
    it('deve retornar o resultado de 1 + 2', () => {
        const res = Sum(1,2)
        expect(res).toBe(3)
    })
    it('deve retornar o resultado de 2 - 1', () => {
        let res = Sub(2,1)
        expect(res).toBe(1)
    })
    it('deve retornar o resultado de 2 * 1', () => {
        let res = Mult(2,1)
        expect(res).toBe(2)
    })
    it('deve retornar o resultado de 250 / 2', () => {
        let res = Div(250, 2)
        expect(res).toBe(125)
    })

})