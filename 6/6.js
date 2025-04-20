class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Додає елемент у дерево
function addToTree(node, value) {
    if (!node) return new TreeNode(value);
    if (value < node.value) {
        node.left = addToTree(node.left, value);
    } else {
        node.right = addToTree(node.right, value);
    }
    return node;
}

// Створення дерева з масиву
function createTree(array) {
    let root = null;
    for (let item of array) {
        root = addToTree(root, item);
    }
    return root;
}

function printTree(node, space = 0, indent = 4) {
    if (node === null) return;
    space += indent;

    printTree(node.right, space, indent);
    console.log(" ".repeat(space - indent) + node.value);
    printTree(node.left, space, indent);
}

// Симетричний обхід з підрахунком парних та вузлів з одним нащадком
function countEvenAndPrintSingleChild(node) {
    let count = 0;

    function inOrder(n) {
        if (!n) return;

        inOrder(n.left);

        if (n.value % 2 === 0) count++;

        if ((n.left && !n.right) || (!n.left && n.right)) {
            console.log(`Вузол з одним нащадком: ${n.value}`);
        }

        inOrder(n.right);
    }

    inOrder(node);
    return count;
}


let array = [5, 3, 8, 1, 4, 7, 9, 6]; 
let tree = createTree(array);

console.log("Дерево:");
printTree(tree);

console.log("\n--- Симетричний обхід ---");
let evenCount = countEvenAndPrintSingleChild(tree);
console.log(`\nКількість парних елементів: ${evenCount}`);
