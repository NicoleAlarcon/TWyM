document.addEventListener("DOMContentLoaded"), function() {
    document.getElementById("generar").addEventListener("click", function() {
        const longitud = parseInt(document.getElementById("longitud"));
        const incluirMayusculas = document.getElementById ("Mayusculas");
        const incluirMinusculas = document.getElementById ("Minusculas");
        const incluirNumeros = document.getElementById ("Números");
        const incluirCaracteresEspeciales = document.getElementById("Caracteres Especiales");


        let caracteresPermitidos = '';
        if (incluirMayusculas) caracteresPermitidos += 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        if (incluirMinusculas) caracteresPermitidos += 'abcdefghijklmnñopqrstuvwxyz';
        if (incluirNumeros) caracteresPermitidos += '0123456789';
        if (incluirCaracteresEspeciales) caracteresPermitidos += '@|!¡"#$%&/\¿?^~*¨+-';

        function generarCaracteres(){
            const randomIndex = Math.floor(Math.random() * caracteresPermitidos.length);
            return caracteresPermitidos.charAt(randomIndex);
        }

        let contraseña = '';
        for (let i = 0; i < longitud; i++) {
            contraseña += generarCaracteres();
        }
        document.getElementById("Contraseña Generada").value = contraseña;
    })
};