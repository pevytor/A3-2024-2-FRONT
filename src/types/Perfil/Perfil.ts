export type Perfil = {
    id: number;
    name: string;
    email: string;
    addres: string | null; // Pode ser string ou null
    avatar: string;
    cover: string;
    open: boolean;
}