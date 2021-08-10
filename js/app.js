var app = new Vue({
    el: '#app',
    data: {
      num1: 0,
      num2: 0,
      rta: 0,
    },
    methods{
        sumar(){
                this.rta = this.num1 + this.num2;
            },
        }
        restar(){
                this.rta = this.num1 - this.num2;
        },
        multiplicar(){
                this.rta = this.num1 * this.num2;
        },
        dividir()
        {
            if(this.num2==0){
                this.rta= "ERROR, NO SE puede dividir por cero";
            }
            else
            {
                this.rta = this.num1 / this.num2;
            }
        }

        },

    });