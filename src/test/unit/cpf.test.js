const { validaCpf } = require("../../commom/CPF")

describe('CPF', () => {
    it('menos d 11 digitos', () => {
        let cpf = validaCpf("123")
        expect(cpf).toBe(false)
    })
    it('testando nada', () => {
        let cpf = validaCpf('')
        expect(cpf).toBe(false)
    })
    it('Deve retornar false', () => {
        let cpf = validaCpf('11111111111')
        expect(cpf).toBe(false)
    })
    it('Testando primeiro digito validador ', () => {
        let cpf = validaCpf('11111111111')
        expect(cpf).toBe(false)
    })
    it('Testando segundo digito validador ', () => {
        let cpf = validaCpf('11111111111')
        expect(cpf).toBe(false)
    })
    it('testando verdadeiro', () => {
        let cpf = validaCpf("13303655936")
        expect(cpf).toBe(true)
    })
})