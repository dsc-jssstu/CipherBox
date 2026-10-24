# CipherBox

CipherBox is an open-source web application built to help users encrypt and decrypt text using common cryptographic techniques. It provides a simple, user-friendly interface for learning and experimenting with encryption methods in the browser.

## Features

- Encrypt text using AES, DES, RSA, MD5, and SHA-256
- Decrypt supported encrypted text
- Simple single-page web interface
- Beginner-friendly project structure
- Open-source contribution-friendly repository

## Project Structure

```text
CipherBox/
├── assets/
│   ├── Back.png
│   ├── Shape.png
│   ├── Vector.png
│   ├── lock.png
│   ├── maximize-2.png
│   └── output.png
├── crypto/
│   ├── aes.js
│   ├── base64.js
│   ├── binary.js
│   ├── morse.js
│   ├── rot13.js
│   ├── rsa.js
│   ├── sha256.js
│   └── keys/
│       ├── private.pem
│       └── public.pem
├── css/
│   └── styles.css
├── public/
│   ├── About.html
│   ├── about.html
│   ├── index.html
│   └── js/
│       └── app.js
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
└── package.json (if added in future)
```

## Tech Stack

- HTML
- CSS
- JavaScript
- CryptoJS
- JSEncrypt

## Prerequisites

Before running this project locally, make sure you have:

- A modern web browser
- A local web server or Python installed
- Git installed

## Getting Started

### 1. Fork the repository

Click the Fork button on the GitHub repository page to create your own copy.

### 2. Clone your fork

```bash
git clone https://github.com/your-username/CipherBox.git
cd CipherBox
```

### 3. Run the app locally

You can use Python's built-in HTTP server:

```bash
python3 -m http.server 8000
```

Then open your browser and go to:

```text
http://localhost:8000/public/index.html
```

## How to Use CipherBox

1. Open the app in your browser.
2. Type or paste the text you want to process into the input box.
3. Select an algorithm from the dropdown menu:
   - AES
   - DES
   - RSA
   - MD5
   - SHA-256
4. Click Encrypt to generate encrypted text.
5. Click Decrypt to reverse a supported encrypted value.
6. View the output in the result panel.

## Supported Algorithms

### AES
- Symmetric encryption
- Good for quick encrypt/decrypt operations
- Uses a shared secret key

### DES
- Another symmetric encryption method
- Older algorithm but still used in learning and educational projects

### RSA
- Public-key encryption
- Used for secure communication and key exchange

### MD5
- Hashing algorithm
- Not reversible
- Best used for checksums and verification

### SHA-256
- Secure hashing function
- Commonly used for data integrity
- Not reversible

## Example Workflow

### Encrypt
- Input: `Hello CipherBox`
- Algorithm: `AES`
- Result: encrypted text string

### Decrypt
- Input: encrypted text
- Algorithm: `AES`
- Result: `Hello CipherBox`

## Development Notes

The app is designed as a lightweight front-end project. Most logic is handled in:

- `public/index.html` for UI structure
- `public/js/app.js` for encryption and decryption handling
- `css/styles.css` for styling
- `crypto/*.js` for algorithm-specific implementations

## Contributing

We welcome contributions from beginners and experienced developers.

Before contributing, please read:

- [CONTRIBUTING.md](./CONTRIBUTING.md)
- [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)

### Good First Issues
Some beginner-friendly tasks include:

- improving UI styling
- updating documentation
- fixing small JavaScript logic bugs
- adding missing assets
- polishing the homepage layout

## Pull Request Process

1. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit:
```bash
git add .
git commit -m "Add your descriptive commit message"
```

3. Push to your fork:
```bash
git push origin feature/your-feature-name
```

4. Open a Pull Request on the original repository and describe your changes clearly.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.

## Acknowledgements

Thanks to all contributors and the open-source community for supporting CipherBox.

## Maintainers

For questions or support, feel free to reach out through the project repository discussions or contact the maintainers via GitHub.

---

If you want to contribute to this project, start with a small issue, make one clean change, and submit a focused pull request.