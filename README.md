# Tree-Sitter JavaScript Parser

A simple Node.js application that fetches JavaScript/JSON files from URLs and parses them using Tree-Sitter to display the Abstract Syntax Tree (AST) in a readable format.

## Features

- Fetch JavaScript/JSON files from any URL
- Parse code using Tree-Sitter JavaScript grammar
- Display AST in a hierarchical, indented format
- Built-in error handling
- Uses Node.js built-in fetch (no external dependencies except Tree-Sitter)

## Prerequisites

- Node.js v18+ (for built-in fetch support)
- npm

## Installation

1. Clone or download this repository
2. Install dependencies:

```bash
npm install tree-sitter tree-sitter-javascript
```

## Usage

```bash
node index.js <URL>
```

### Examples

Parse a JSON file:
```bash
node index.js https://raw.githubusercontent.com/facebook/react/main/packages/react/package.json
```

Parse a JavaScript file:
```bash
node index.js https://raw.githubusercontent.com/nodejs/node/main/lib/util.js
```

## Sample Output

```
Parsing successful!
program: "{"name": "react","version": "18.3.1","descriptio..."
  expression_statement: "{"name": "react","version": "18.3.1","descriptio..."
    object: "{"name": "react","version": "18.3.1","descriptio..."
      pair: ""name": "react""
        string: ""name""
          string_fragment: "name"
        string: ""react""
          string_fragment: "react"
      pair: ""version": "18.3.1""
        string: ""version""
          string_fragment: "version"
        string: ""18.3.1""
          string_fragment: "18.3.1"
```

## How It Works

1. **Fetch**: Downloads the source code from the provided URL
2. **Parse**: Uses Tree-Sitter to create an Abstract Syntax Tree
3. **Display**: Recursively prints the tree structure with proper indentation

## Dependencies

- `tree-sitter`: Core Tree-Sitter parsing library
- `tree-sitter-javascript`: JavaScript language grammar for Tree-Sitter

## Error Handling

The application handles:
- Invalid URLs (404 errors)
- Network connection issues
- Parsing errors
- Missing arguments

## Notes

- Only displays the first 50 characters of each node's text content
- Uses 2-space indentation for each tree level
- Supports any publicly accessible URL that returns JavaScript or JSON content

## License

MIT
