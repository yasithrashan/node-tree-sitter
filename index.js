const Parser = require('tree-sitter');
const JavaScript = require('tree-sitter-javascript');
const https = require('https');

async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
}

const parser = new Parser();
parser.setLanguage(JavaScript);

function printTree(node, indent = 0) {
    const spaces = ' '.repeat(indent);
    console.log(`${spaces}${node.type}: "${node.text.slice(0, 50)}..."`);

    for (let i = 0; i < node.childCount; i++) {
        printTree(node.child(i), indent + 2);
    }
}

async function main() {
    const url = process.argv[2];
    if (!url) {
        console.error('Please provide a URL as an argument.');
        return;
    }
    try {
        const sourceCode = await fetchData(url);
        const tree = parser.parse(sourceCode);
        console.log('Parsing successful!');
        printTree(tree.rootNode);
    } catch (error) {
        console.error('Error during parsing:', error);
    }
}

main().catch(error => {
    console.error('An error occurred:', error);
});
