class Triangle {
    constructor (a, b) {
        this.a = a;
        this.b = b;
    }
}

class Queue {
    constructor () {
        this.items = [];
    }

    enqueue (triangle) {
        this.items.push(triangle);
    }

    calculatePerimeter() {
        if(this.isEmpty()) {
            console.log("Черга пуста. Неможливе обчислення");
            return 0;
        } else {
            const firsttriangle = this.items [0];
            const c = Math.sqrt(Math.pow(firsttriangle.a, 2) + Math.pow(firsttriangle.b, 2));
            console.log(`Периметр трикутника напочатку черги: ${firsttriangle.a + firsttriangle.b + c}`);
        }
    }

    dequeue () {
        if(this.isEmpty()) {
            console.log("Ця черга пуста");
        } else {
            this.items.shift();
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }

    display () {
        if(this.isEmpty()) {
            console.log("Ця черга пуста");
        } else {
            this.items.forEach((triangle, index) =>
                console.log(`${index + 1}. Перший катет: ${triangle.a}. Другий катет: ${triangle.b}`));
        }
    }

    clean () {
        this.items = [];
        console.log("Черга очищена");
    }
}

function Main () {
    const queue = new Queue;

    queue.enqueue(new Triangle(3, 4));
    queue.enqueue(new Triangle(5, 12));
    queue.enqueue(new Triangle(2, 4));

    queue.display();
    queue.calculatePerimeter();

    queue.dequeue();
    queue.display();

    queue.clean();
    queue.display();
}

Main ();