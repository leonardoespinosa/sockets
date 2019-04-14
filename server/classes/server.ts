import express from 'express';
import { SERVER_PORT } from '../global/environment';
import socketIO from 'socket.io';
import http from 'http';

import * as socket from '../sockets/socket';

export default class Server {
    private static _instance: Server;

    public app: express.Application;
    public port: number;

    public io: socketIO.Server;
    private httpServer: http.Server;

    private constructor() {
        this.app = express();
        this.port = SERVER_PORT;
        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer);
        this.listenSockets();
    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    private listenSockets() {
        console.log('Listening sockets');
        this.io.on('connection', client => {
            //console.log('Cliente conectado');
            
            //console.log(client.id); // --> id del socket

            // conectar cliente
            socket.conectarCliente(client);
            
            // configurar usuario
            socket.configurarUsuario(client, this.io);

            // Mensajes
            socket.message(client, this.io);

            // Desconectar
            socket.disconnectClient(client);

        });
    }

    start(callback: any) {
        this.httpServer.listen(this.port, callback);
    }
}