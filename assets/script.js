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
        this.v++
        this.update()
    }
    frear() {
        this.v--
        this.update()
    }
    brecar() {
        this.v = 0
        this.update()
    }
    /* Onde vai ter os eventListener e vai rodar as outras class.functions()*/
    velocidade() {
        document.addEventListener('keypress', (e) => {
            if(e.key == 'd' || e.key == 'w'){
                this.acelerar()
            }
            if(e.key == 'a' || e.key == 's'){
                this.acelerar()
            }
            if(e.key == ' '){
                this.brecar()
            }
        })
    }
    /* Define os valores das animações do fundo, da rua, etc. */
    update() {
        const rua = document.querySelector('.rua')
        const arvores = document.querySelectorAll('.arvore')
        const rodas = document.querySelectorAll('.roda')
        rua.style.animationDuration = this.msvalue(12100) //<- deve ser a duração no css + 100
        arvores[0].style.animationDuration = this.msvalue(5100)
        arvores[1].style.animationDuration = this.msvalue(5100)
        rodas.style.animationDuration = this.msvalue(800)
    }
    /* retorna o valor da duração em ms sem possibilade de ser 0ms */
    msvalue(inicial = 0){
        if (this.v === 0) return '0ms'
        if (this.v * 100 > inicial) return '100ms'
        return `${inicial - this.v * 100}ms`
    }
}
const c = new Carro(1)
c.velocidade()
