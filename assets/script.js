class Carro {
    /* v = velocidade */
    constructor(v) {
        this.v = v
        this.fDeMão = false
    }
    /* Essas 3 funções vão apenas alterar o valor de v (velocidade)*/
    acelerar() {
        if (this.fDeMão === true || this.v > 169) return
        this.v++
        this.update()
    }
    frear() {
        if (this.v <= 0) return
        this.v--
        this.update()
    }
    brecar() {
        if(this.fDeMão) this.fDeMão = false
        else this.fDeMão = true
        this.v = 0
        this.update()
    }
    /* Onde vai ter os eventListener e vai rodar as outras class.functions()*/
    velocidade() {
        const botoes = document.querySelector('.botoes')
        const brek = botoes.querySelector('.freio-mao')
        document.addEventListener('keydown', (e) => {
            if (e.key == 'd' || e.key == 'w' || e.key == 'ArrowUp' || e.key == 'ArrowRight') this.acelerar()
            if (e.key == 'a' || e.key == 's' || e.key == 'ArrowLeft' || e.key == 'ArrowDown') this.frear()
            if (e.key == ' ') this.brecar()
        })
        botoes.addEventListener('click', (e) => {
            if(e.target == botoes.querySelector('.acelerador')) this.acelerar()
            if(e.target == botoes.querySelector('.freio')) this.frear()
            if(e.target == brek || e.target == brek.querySelector('div') || e.target == brek.querySelectorAll('div')[1]) this.brecar()
        })
    this.update()
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
        this.euShowSpeed()
        this.puxado()
        console.log(this.v)
    }
    // controla o velocimetro e seu ponteiro (muito bom)
    euShowSpeed(){
        const ponteiro = document.querySelector('.ponteiro')
        const p = document.querySelector('.vel-show').querySelector('p')
        ponteiro.style.rotate = 248 + this.v + 'deg'
        p.innerText = this.v + 'Km/h'
    }
    // mostra se o freio de mão está puxado ou não
    puxado(){
        const pn = document.querySelector('.freio-mao').querySelectorAll('div')[0]
        if(this.fDeMão){
            pn.style.rotate = '320deg'
            pn.style.top = '25px'
        } else {
            pn.style.rotate = '290deg'
            pn.style.top = '30px'
        }
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
