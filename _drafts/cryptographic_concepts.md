- TLS
- key exchange protocols
    - https://en.wikipedia.org/wiki/Key_exchange
- Diffie-Hellman
- PKI - "web of trust"
- certificates
- x.509
- RSA

- what is a TLS certificate
    - mire állítják ki? domainre? IP-re? egyikre sem, csak legyen a szerveren?
    - SSH kapcsolatnál van certificate?
    - IP alapján indított kapcsolatnál mit ad hozzá?

- is HTTPS not secure without a certificate?
    - that means that all PKI infrastructure depends on a centralized authority?
    - what about plain SSH?
    - HTTPS vs SSH: differences, similarities?

- ways to misunderstand asymmetric key crypto
    1. public keys solve the problem of key exchange - NO: MITM!
    2. signatures protect from MITM attacks
        - DO THEY? HOW?
