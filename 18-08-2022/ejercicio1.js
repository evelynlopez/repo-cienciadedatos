class Queue {
    constructor() {
        this.items = [];
        this.fila1=[];
        this.fila2=[];
    }

    enqueue(item) {
        //Agrega elementos al final de la fila
        this.items.push(item);
    }
    
    dequeue() {
        //elimina elementos del inicio de la fila
        return this.items.shift();
    }
    
    separar_queues(){
        let count=0;
        this.items.forEach((index) => {
            count = Number(count)+ 1;
            count%2==0? this.fila2.push(index): this.fila1.push(index);
        });
        this.items.length=0
        return `Fila1=${this.fila1} --- fila2=${this.fila2}`
    }
    
    peek() {
        //Regresa la primer posicion de la Fila
        return this.items[0]; 
    }
    
    size() {
        //Regresa el tamaño de la fila
        return this.items.length;
    }
    
    print() {
        //Imprime la fila
        console.log(this.items);
    }
    
    isEmpty() {
        //Pregunta si está vacía
        return this.items.length == 0
    }
}