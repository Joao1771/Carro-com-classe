// Classe se constrói usando a palavra class
class Pessoa{
// contructor: new Pessoa(constructor(v1,x),constructor(x,v2))
    constructor(nome,sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
    falar(){
        console.log(`${this.nome} está falando`)
    }
    comer(){
        console.log(`${this.nome} está comendo`)
    }
    beber(){
        console.log(`${this.nome} está bebendo`)
    }
}
const p1 = new Pessoa('Luiz','Miranda')

//----------AULA 2 GET E SET--------------------------------------------------------------

const _speed = Symbol('velocidade')
class Carro{
    constructor(nome){
        this.nome = nome
        this[_speed] = 0
    }

//Carro.velocidade = valor (Setter)
//atribuir "setar" o valor depois do =
set velocidade(valor){//(valor)
if(typeof valor !== 'number') return
if(valor >= 100 || valor <0) return
this[_speed] = valor
}
//console.log(Carro.velocidade) (Getter)
//      pedir/usar "get" the value
get velocidade(){
    return this[_speed]
}

    acelerar(){
        if(this[_speed] >= 100) return
        return this[_speed]++
    }
    frear(){
        if(this[_speed] <= 0) return
        return this[_speed]--
    }
}
const c1 = new Carro('supra')

for(let i = 0;i <= 2;i++){
    c1.acelerar() // [Symbol(velociade)] : n + 1
    console.log(c1) // Carro { nome: 'supra', [Symbol(velocidade)]: 1 }
}

//----------AULA 3 HERANÇA--------------------------------------------------------------

class DispositivoEletro{ // classe pai
    constructor(nome){
    this.nome = nome
    this.ligado = false
    }
    ligar(){
        if(this.ligado) return
        console.log(this.nome + ' ligou')
        this.ligado = true
    }
    desligar(){
        if(!this.ligado) return
        console.log(this.nome + ' desligou')
        this.ligado = false
    }
}

const d1 = new DispositivoEletro('microondas')

class Smartphone extends DispositivoEletro{ // classe filha
    constructor(nome,cor, modelo){
    super(nome) // super: usado em classes filhas (class filha extends pai), puxa alguma
    this.cor = cor;
    this.modelo = modelo;
}
}

const s1 = new Smartphone('Motorola', 'Prata','Moto 7 play')
/* Smartphone {
    nome: 'Motorola',
    ligado: false,
    cor: 'Prata',
    modelo: 'Moto 7 play'
  } */
//----------AULA 4 MÉTODOS DE INSTÂNCIA E ESTÁTICOS--------------------------------------------------------------

class ControleRemoto{
    constructor(tv){
        this.tv = tv
        this.volume = 0
    }
    //método de instância (const 1 = new Controle...)
    aumentarVolume(){return this.volume+= 2}
    abaixarVolume(){return this.volume-= 2}
    /* Método estático (ControleRemoto.trocapilha())
       é acessado por ControleRemoto.trocapilha
       não usa new e pode ser chamado de forma mais independente */
    static trocapilha(){}
}

const controle1 = new ControleRemoto('LG')
console.log()
console.log(controle1)// ControleRemoto { tv: 'LG', volume: 0 }
controle1.aumentarVolume() // ControleRemoto.volume += 2
controle1.aumentarVolume() // ControleRemoto.volume += 2
controle1.aumentarVolume() // ControleRemoto.volume += 2
console.log(controle1) // ControleRemoto { tv: 'LG', volume: 6 }

class Semnada {
    static nada =  'oi eu sou goku (classe Semnada)'
}
console.log(Semnada.nada) // oi eu sou goku (classe Semnada)