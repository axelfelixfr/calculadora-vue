const app = Vue.createApp({
	// Podemos declarar la data también de esta forma (arrow function)
	data: () => ({
		title: 'Calculadora Vue',
		n1: 0,
		n2: 0
	}),
	// Una propiedad computada es una función que retorna todo lo que cacha en la data del DOM
	// La regla es que siempre debe retornar un valor
	computed:{
		suma(){
			return this.n1 + this.n2;
		},
		resta(){
			return this.n1 - this.n2;
		},
		multiplicar(){
			return this.n1 * this.n2;
		},
		dividir(){
			const res = this.n1 / this.n2;

			return res === Infinity || res === -Infinity ? "Error - No calculable" : res;
		}
	}
})