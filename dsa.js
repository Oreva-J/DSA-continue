// Arreays

class ToDoList {
    constructor(){
        this.tasks = []
    }

    addTask(task){
        this.tasks.push(task)
    }

    removeTask(task){
        this.tasks.pop()
    }

    showTask(){
        this. tasks.forEach((task, index)=> {
            console.log(` ${index +1 }: ${task} `);
        })
    }
}


let toDo = new ToDoList()
toDo.addTask("learn sql")
toDo.addTask("learn Express")
toDo.addTask("learn Mongodb")
toDo.addTask("learn Mongoose")

//toDo.showTask()

toDo.removeTask()

//toDo.showTask()


//  Linked List

class Track{
    constructor(data){
        this.data = data
        this.next = null
    }

}

class Album{
    constructor(){
        this.head = null
    }

    addTrack(data){
        let newTrack = new Track(data)
        if(!this.head){
            this.head = newTrack
        }else {
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = newTrack
        }
    }

    playAllSong(){
        let current = this.head

        while(current){
            console.log(`playing: ${current.data}`)
            current = current.next

        }
    }

    playSingleSong(songName){
        let current = this.head
        while(current){
            if(current.data === songName){
                console.log(`playing : $(current.data)`);

                return
            }
            current = current.next
        }
        console.log(`song: $(songName) not found in the playList`);
    }
}


let Fela = new Album()
Fela.addTrack('mms')
Fela.addTrack('Amapiano')
Fela.addTrack('Nzaza')
Fela.addTrack('Acive')
//Fela.playSingleSong('palazo')
Fela.playAllSong('palazo')


//  Stack

class UnDoTask{
    constructor(){
        this.stack = []
    }

    addText(text){
        this.stack.push(text)
    }

    undoText(){
        if(this.stack.length > 0){
            console.log(`undoing: ${this.stack.pop()}`)
        }else {
            console.log('nothing to undo')
        }
    }

    showText(){
        console.log(this.stack)
    }
}

let word = new UnDoTask()
word.addText("hello")
word.addText("world")

word.showText()
word.undoText()
word.showText()

// implementing a print queue

class PrintQueue{
    constructor(){
        this.queue = []
    }

    addDocument(doc){
        this.queue.push(doc)
    }

    printDocument(){
        if(this.queue.lenght > 0){
            console.log(`printing: ${this.queue.shift()}`);
        }else{
            console.log("no document in the queue")
        }
    }

    showQueue(){
        console.log(` document in queue:`, this.queue)
    }
}

let library = new PrintQueue()

library.addDocument("half of a yellow sun")
library.addDocument("purple heart")
library.addDocument("yellow sun")
library.addDocument("Egg of Life")


library.showQueue()
library.printDocument("egg if life")
library.showQueue()
library.printDocument()
library.showQueue()


// set

class CryptoPortfolio{
    constructor(){
        this.portfolio = new Set()
    }

    addCrypto(cryptoSymbol){
        this.portfolio.add(cryptoSymbol)
        console.log(` ${cryptoSymbol} has been added to your wallet`);

    }

    removeCrypto(cryptoSymbol){
        if(this.portfolio.has(cryptoSymbol)){
            this.portfolio.delete(cryptoSymbol)
            console.log(` ${cryptoSymbol} has been remove from your wallet`);
        }
    }

    hasCrypto(cryptoSymbol){
        return this.portfolio.has(cryptoSymbol)
    }

    showPortfolio(){
        if(this.portfolio.size === 0){
            console.log("Your portfolio is empty")
        }else {
            console.log(`current portfolio:`, ...this.portfolio);

        }
    }
}

let wallet = new CryptoPortfolio()
wallet.addCrypto("BTC")
wallet.addCrypto("USDT")
wallet.addCrypto("DODGE")
wallet.addCrypto("LTN")
wallet.addCrypto("ETH")

wallet.showPortfolio()
wallet.hasCrypto("DODGE")
wallet.showPortfolio()
wallet.removeCrypto("DODGE")
wallet.showPortfolio()


