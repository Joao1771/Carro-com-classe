class Carro {
    /* v = velocidade */
    constructor(v) {
        this.v = v
    }
    fala() {
        console.log(this.v)
    }
    /* Essas 3 funções vão apenas alterar o valor de v (velocidade)*/
    acelerar() {
        if (this.v > 119) return
        this.v++
        this.update()
    }
    frear() {
        if (this.v > 119) return
        this.v--
        this.update()
    }
    brecar() {
        if (this.v > 119) return
        this.v = 0
        this.update()
    }
    /* Onde vai ter os eventListener e vai rodar as outras class.functions()*/
    velocidade() {
        document.addEventListener('keypress', (e) => {
            if (e.key == 'd' || e.key == 'w') {
                this.acelerar()
            }
            if (e.key == 'a' || e.key == 's') {
                this.frear()
            }
            if (e.key == ' ') {
                this.brecar()
            }
        })
    }
    /* Define os valores das animações do fundo, da rua, etc. */
    update() {
        const rua = document.querySelector('.rua')
        const rodas = document.querySelectorAll('.roda')
        const cenario = document.querySelector('.cenario')
        rua.style.animationDuration = this.msvalue(30200) //<- deve ser a duração no css
        rodas[0].querySelector('img').style.animationDuration = this.msvalue(4820, true)
        rodas[1].querySelector('img').style.animationDuration = this.msvalue(4820, true)
        cenario.style.animationDuration = this.msvalue(25100)
        console.log(this.v)
    }
    /* retorna o valor da duração em ms sem possibilade de ser 0ms */
    msvalue(inicial = 0, roda = false) {
        if (this.v === 0) return '0ms'
        if(roda) return `${inicial - this.v * 30}ms`
        else if (this.v * 150 >= inicial) return '100ms'
        return `${inicial - this.v * 150}ms`
    }
}
const c = new Carro(1)
c.velocidade()
