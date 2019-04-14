export class Usuario {
    public idSocket: string;
    public nombre: string;
    public sala: string;

    constructor(idSocket: string) {
        this.idSocket = idSocket;
        this.nombre = 'sin-nombre';
        this.sala = 'sin-sala';
    }
}