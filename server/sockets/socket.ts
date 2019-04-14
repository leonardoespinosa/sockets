import { Socket } from 'socket.io';
import socketIO from 'socket.io'
import { UsuariosLista } from '../classes/usuarios-lista';
import { Usuario } from '../classes/usuario';

export const usuariosConectados = new UsuariosLista();

export const conectarCliente = (client: Socket) => {
    const usuario = new Usuario(client.id);
    usuariosConectados.agregar(usuario);
}

export const disconnectClient = (client: Socket) => {
    client.on('disconnect', () => {
        console.log('Client disconnect');
        usuariosConectados.borrarUsuario(client.id);
    });
}

// escuchar mensajes
export const message = (client: Socket, io: socketIO.Server) => {
    client.on('mensaje', (payload: { de: string, cuerpo: string }) => {
        console.log('Mensaje recibido', payload);
        io.emit('mensaje-nuevo', payload);
    });
}

// configurar usuario
export const configurarUsuario = (client: Socket, io: socketIO.Server) => {
    client.on('configurar-usuario', (payload: { nombre: string }, callback: Function) => {
        usuariosConectados.actualizarNombre(client.id, payload.nombre);
        callback({
            ok: true,
            mensaje: `Usuario ${payload.nombre}, configurado`
        });
    });
}