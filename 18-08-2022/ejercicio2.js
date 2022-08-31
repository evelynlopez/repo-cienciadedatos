class Queue {
    constructor() {
        this.items = [];
        this.tikectFalse=[];
        this.tikectTrue=[];
    }

    enqueue(item) {
        //Agrega elementos al final de la fila
        this.items.push(item);
    }
    
    dequeue() {
        //elimina elementos del inicio de la fila
        return this.tikectTrue.shift();
    }
    
    separar_queues(){
        this.items.forEach((index) => {
            index.ticket== true? this.tikectTrue.push({'user':index.user,'ticket':index.ticket})
            : this.tikectFalse.push({'user':index.user,'ticket':index.ticket});
        });
        this.items.length=0;
        this.print();
    }
    
    peek() {
        //Regresa la primer posicion de la Fila
        return this.tikectTrue[0]; 
    }
    
    size() {
        //Regresa el tamaño de la fila
        return this.tikectTrue.length;
    }
    
    print() {
        //Imprime la fila
        console.log('Personas con ticket')
        console.log(this.tikectTrue);
        console.log('Personas sin ticket')
        console.log(this.tikectFalse);
    }
    
    isEmpty() {
        //Pregunta si está vacía
        return this.items.length == 0
    }
}