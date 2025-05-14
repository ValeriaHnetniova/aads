class HashTable {
    constructor(size = 32) {
        this.size = size;
        this.buckets = new Array(size).fill(null).map(() => []);
    }
 
    hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }
        return hashValue % this.size;
    }

    add(word) {
        const index = this.hash(word.toLowerCase());
        const bucket = this.buckets[index];
        
        const found = bucket.find(item => item.key === word.toLowerCase());
        
        if (found) {
            found.value++; 
        } else {
            bucket.push({ key: word.toLowerCase(), value: 1 }); 
        }
    }

    get(word) {
        const index = this.hash(word.toLowerCase());
        const bucket = this.buckets[index];
        const found = bucket.find(item => item.key === word.toLowerCase());
        
        return found ? found.value : 0;
    }

    remove(word) {
        const index = this.hash(word.toLowerCase());
        const bucket = this.buckets[index];
        const itemIndex = bucket.findIndex(item => item.key === word.toLowerCase());
        
        if (itemIndex !== -1) {
            bucket.splice(itemIndex, 1);
            return true;
        }
        return false;
    }

    display() {
        const result = {};
        for (const bucket of this.buckets) {
            for (const item of bucket) {
                result[item.key] = item.value;
            }
        }
        return result;
    }
}

function countWords(text) {

    const words = text.toLowerCase()
                     .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
                     .split(/\s+/)
                     .filter(word => word.length > 0);

    const wordCountTable = new HashTable();

   
    words.forEach(word => wordCountTable.add(word));

    return wordCountTable.display();
}

const sampleText = "Це тестовий текст. Це текст для перевірки роботи хеш-таблиці. Текст містить повторювані слова.";
const wordCounts = countWords(sampleText);

console.log("Результат підрахунку слів:");
console.table(wordCounts);