const rsaKeyPair = new JSEncrypt({ default_key_size: 2048 });
rsaKeyPair.getKey();

const splashMessages = [
    "Initializing secure vault...",
    "Generating cipher keys...",
    "Checking for hidden messages...",
    "Encrypting thoughts, one key at a time.",
    "Shaping secure channels...",
    "CipherBox booting up..."
];

function aesEncrypt(inputString) {
    return CryptoJS.AES.encrypt(inputString, 'cipherbox-secret-key').toString();
}

function aesDecrypt(encryptedString) {
    try {
        const bytes = CryptoJS.AES.decrypt(encryptedString, 'cipherbox-secret-key');
        const plainText = bytes.toString(CryptoJS.enc.Utf8);
        return plainText || 'Unable to decrypt this value.';
    } catch (error) {
        return 'Invalid AES input.';
    }
}

function md5Hash(inputString) {
    return CryptoJS.MD5(inputString).toString();
}

function sha256Hash(inputString) {
    return CryptoJS.SHA256(inputString).toString();
}

function rsaEncrypt(inputString) {
    try {
        const encrypt = new JSEncrypt();
        encrypt.setPublicKey(rsaKeyPair.getPublicKey());
        const encrypted = encrypt.encrypt(inputString);
        return encrypted || 'RSA encryption failed.';
    } catch (error) {
        return 'RSA encryption failed.';
    }
}

function rsaDecrypt(encryptedString) {
    try {
        const decrypt = new JSEncrypt();
        decrypt.setPrivateKey(rsaKeyPair.getPrivateKey());

        const plainText = decrypt.decrypt(encryptedString);
        return plainText || 'Unable to decrypt this RSA value.';
    } catch (error) {
        return 'Invalid RSA input.';
    }
}

function desEncrypt(inputString) {
    return CryptoJS.DES.encrypt(inputString, 'cipherbox-secret-key').toString();
}

function desDecrypt(encryptedString) {
    try {
        const bytes = CryptoJS.DES.decrypt(encryptedString, 'cipherbox-secret-key');
        const plainText = bytes.toString(CryptoJS.enc.Utf8);
        return plainText || 'Unable to decrypt this value.';
    } catch (error) {
        return 'Invalid DES input.';
    }
}

function encryptString(algorithm, inputString) {
    if (!inputString || !inputString.trim()) {
        return 'Please enter text to encrypt.';
    }

    switch (algorithm) {
        case 'AES':
            return aesEncrypt(inputString);
        case 'MD5':
            return md5Hash(inputString);
        case 'SHA-256':
            return sha256Hash(inputString);
        case 'RSA':
            return rsaEncrypt(inputString);
        case 'DES':
            return desEncrypt(inputString);
        default:
            return 'Unsupported algorithm';
    }
}

function decryptString(algorithm, encryptedString) {
    if (!encryptedString || !encryptedString.trim()) {
        return 'Please enter text to decrypt.';
    }

    switch (algorithm) {
        case 'AES':
            return aesDecrypt(encryptedString);
        case 'RSA':
            return rsaDecrypt(encryptedString);
        case 'DES':
            return desDecrypt(encryptedString);
        case 'MD5':
            return 'MD5 is a hash function and cannot be decrypted.';
        case 'SHA-256':
            return 'SHA-256 is a hash function and cannot be decrypted.';
        default:
            return 'Unsupported algorithm for decryption';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const splashScreen = document.getElementById('splashScreen');
    const splashMessage = document.getElementById('splashMessage');

    if (splashScreen && splashMessage) {
        const randomIndex = Math.floor(Math.random() * splashMessages.length);
        splashMessage.textContent = splashMessages[randomIndex];

        setTimeout(() => {
            splashScreen.classList.add('hidden');
        }, 2200);
    }

    const inputField = document.getElementById('input');
    const algorithmSelector = document.getElementById('algorithmSelector');
    const encryptButton = document.getElementById('encryptButton');
    const decryptButton = document.getElementById('decryptButton');
    const encryptedResult = document.getElementById('encryptedResult');
    const decryptedResult = document.getElementById('decryptedResult');

    if (!inputField || !algorithmSelector || !encryptButton || !decryptButton || !encryptedResult || !decryptedResult) {
        return;
    }

    encryptButton.addEventListener('click', function () {
        const algorithm = algorithmSelector.value;
        const inputString = inputField.value;

        const encryptedText = encryptString(algorithm, inputString);
        encryptedResult.textContent = encryptedText;
        decryptedResult.textContent = '';
    });

    decryptButton.addEventListener('click', function () {
        const algorithm = algorithmSelector.value;
        const encryptedString = encryptedResult.textContent;

        const decryptedText = decryptString(algorithm, encryptedString);
        decryptedResult.textContent = decryptedText;
    });
});