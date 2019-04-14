import { Usuario } from "./usuario";

export class UsuariosLista {
    private lista: Usuario[] = [];

    constructor() {

    }

    // Agregar un usuario
    public agregar(usuario: Usuario) {
        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;
    }

    // Actualizar nombre de un usuario
    public actualizarNombre(id: string, nombre: string) {
        for (let usuario of this.lista) {
            if (usuario.idSocket = id) {
                usuario.nombre = nombre;
                break;
            }
        }
        console.log('=== Actualizando usuario ===');
        console.log(this.lista);
    }

    // Obtener lista de usuarios
    public getLista() {
        return this.lista;
    }

    // Obtener un usuario
    public getUsuario(id: string) {
        return this.lista.find(usuario => usuario.idSocket === id);
    }

    // Obtener usuario en una sala en particular
    public getUsuariosEnSala(sala: string) {
        return this.lista.filter(usuario => usuario.sala === sala);
    }

    // Borrar usuario
    public borrarUsuario(id: string) {
        const tempUsuario = this.getUsuario(id);
        this.lista = this.lista.filter(usuario => usuario.idSocket !== id);
        console.log(this.lista);
        return tempUsuario;
    }
}