const app = document.querySelector('#app');

class Char{
    constructor(name, x, y){
        this.name = name;
        this.hp = 100;
        this.x = x;
        this.y = y;
        this.domElement = null;
        this.interval = null;
    }

    create(){
        const charElement = document.createElement('img');
        charElement.className = 'char';
        charElement.src = './assets/d0.png';
        charElement.style.top = `${this.y}px`;
        charElement.style.left = `${this.x}px`;
        this.domElement = charElement;

        return charElement;
    }

    up(){
        let index = 0;
        clearInterval(this.interval)
        this.interval = null
        
        this.interval = setInterval(() => {
            this.domElement.src = `./assets/w${index}.png`;
            index++;
            if(index > 2) index = 0;
            const positionY = Number(this.domElement.style.top.replace('px', ''));
            this.domElement.style.top = `${positionY - 5}px`;
        }, 50)
    }

    down(){
        let index = 0
        clearInterval(this.interval)
        this.interval = null
        
        this.interval = setInterval(() => {
            this.domElement.src = `./assets/s${index}.png`;
            index++
            if(index > 2) index = 0
            const positionY = Number(this.domElement.style.top.replace('px', ''));
            this.domElement.style.top = `${positionY + 5}px`;
        }, 50)
    }

    left(){
        let index = 0
        clearInterval(this.interval)
        this.interval = null
        
        this.interval = setInterval(() => {
            this.domElement.src = `./assets/a${index}.png`;
            index++
            if(index > 1) index = 0
            const positionX = Number(this.domElement.style.left.replace('px', ''));
            this.domElement.style.left = `${positionX - 5}px`;
        }, 50)
    }

    rigth(){
        let index = 0
        clearInterval(this.interval)
        this.interval = null;

        this.interval = setInterval(() => {
            this.domElement.src = `./assets/d${index}.png`;
            index++
            if(index > 1) index = 0
            const positionX = Number(this.domElement.style.left.replace('px', ''));
            this.domElement.style.left = `${positionX + 5}px`;
        }, 50)
    }

    stop(){
        clearInterval(this.interval);
        this.interval = null;
    }
}

const newChar = new Char('Paquito', 400, 600);
const charTwo = new Char('Juanito', 200, 200);


app.append(newChar.create(), charTwo.create())


document.addEventListener('keydown', (e) => {
    if(!newChar.interval){
        if(e.key === 'w') newChar.up()
        if(e.key === 'd') newChar.rigth()
        if(e.key === 's') newChar.down()
        if(e.key === 'a') newChar.left()
    }
});

document.addEventListener('keyup', (e) => {
        newChar.stop()
        if(e.key === 'w') newChar.domElement.src = './assets/w0.png';
        if(e.key === 'd') newChar.domElement.src = './assets/d0.png';
        if(e.key === 's') newChar.domElement.src = './assets/s0.png';
        if(e.key === 'a') newChar.domElement.src = './assets/a0.png';
})