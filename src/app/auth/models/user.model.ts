
export interface User {
    data: {
        domicilio: {
            ciudad: string;
            departamento: string;
            direccion: string;
        };
        rol: string;
        genero: string;
        estado: boolean;
        google: boolean;
        _id: string;
        email: string;
        nombre: string;
    },
    token: string;
}