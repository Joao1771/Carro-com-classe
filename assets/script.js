// O objetivo desse site é usar a classe para faze-lo
class Carro {
    // constructor: talvez onde fique as var que podem ser usadas em toda a classe
    /* v = velocidade */
    constructor(v) {
        this.v = v
        this.fDeMão = false
        this.p = document.querySelector('.vel-show').querySelector('p')
    }
    /* Essas 3 funções vão alterar o valor de v (velocidade)*/
    acelerar() {
        if (this.fDeMão === true || this.v > 169) return
        this.v++
        this.update()
        this.p.style.color = 'blue'
        setInterval(()=>{this.p.style.color = 'black'} , 1000)
    }
    frear() {
        if (this.v <= 0) return
        this.v--
        this.update()
        this.p.style.color = 'red'
        setInterval(()=>{this.p.style.color = 'black'} , 1000)
    }
    brecar() {
        if(this.fDeMão) this.fDeMão = false
        else this.fDeMão = true
        this.v = 0
        this.update()
        this.p.style.color = 'red'
        setInterval(()=>{this.p.style.color = 'black'} , 3000)
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
    }
    // controla o velocimetro e seu ponteiro (muito bom)
    euShowSpeed(){
        const ponteiro = document.querySelector('.ponteiro')
        ponteiro.style.rotate = 248 + this.v + 'deg'
        this.p.innerText = this.v + 'Km/h'
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
    /* retorna o valor da duração em ms sem possibilade de ser 0ms 

    (parâmetro (total))   (cont. das contas anteriores)    (redução em ms por v - v somado (40 + 70))
    inicial               - 40 * 400 - 70 * 150            - (this.v - 110) *  35
    Basicamente, ele continua a redução das velocidades anteriores, por isso deve-se tirar de v
    as contas anteriores (40km/h e 70km/h = 110) e usar o resto para reduzir os ms (dificil de entender).
    Se não tivesse as contas anteriores, ele apenas subtrairia usando a conta atual e daria um resultado maior.
    (Com certeza tem uma forma mais simples de fazer esse "degradê" de velocidades, porém esse não é meu foco.)
    */
    msvalue(inicial = 0, roda = false) {
        console.log(inicial - 40 * 400 - 70 * 150 - (this.v - 110) * 35)
        if (this.v === 0) return '0ms'
        if(roda) return `${inicial - this.v * 30}ms`
        if (40 * 400 - 50 * 150 - (this.v - 90) * 50 >= inicial - 1000) return '100ms'
        if(this.v <= 40) return `${inicial - this.v * 400}ms`
        else if(this.v <= 90) return `${inicial - 40 * 400 - (this.v - 40) * 150}ms`
        return `${inicial - 40 * 400 - 50 * 150 - (this.v - 90) * 35}ms`
        // q vergonha desse código f***do ^^^^
    }
}
const c = new Carro(1)
c.velocidade()
