'use client';

import { Button } from "@/components/ui/Button";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePerfilContext } from "@/contexts/PerfilContext";
import { useState } from "react";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-regular-svg-icons";

export const Profile = () => {
    const { dataPerfil, setDataPerfil } = usePerfilContext();

    const [novaSenha, setNovaSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [avatarFileName, setAvatarFileName] = useState(""); // Nome do arquivo do avatar
    const [coverFileName, setCoverFileName] = useState(""); // Nome do arquivo da capa

    const handleSave = () => {
        if (novaSenha || confirmarSenha) {
            if (novaSenha === confirmarSenha) {
                alert("Alterações salvas com sucesso!");
            } else {
                alert("As senhas não coincidem!");
                return;
            }
        }

        setDataPerfil((prev) => ({
            ...prev,
            name: dataPerfil.name,
            addres: dataPerfil.addres,
            open: dataPerfil.open,
        }));

        alert("Alterações gerais salvas com sucesso!");
    };

    const handleFileChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        field: "avatar" | "cover"
    ) => {
        const file = event.target.files?.[0];
        if (file) {
            setDataPerfil((prev) => ({
                ...prev,
                [field]: URL.createObjectURL(file),
            }));

            if (field === "avatar") {
                setAvatarFileName(file.name);
            } else if (field === "cover") {
                setCoverFileName(file.name);
            }
        }
    };

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <div className="text-xl font-bold">EDITAR PERFIL</div>
                <Button label="Salvar alterações" size="medium" cor="sky" onClick={handleSave} />
            </div>
            <div className="flex flex-col md:flex-row gap-5">
                <div className="flex-1 flex-col gap-10">
                    <div className="mb-4">
                        <label htmlFor="estabelecimento-nome" className="text-base font-bold text-gray-500">
                            Nome do Estabelecimento
                        </label>
                        <input
                            id="estabelecimento-nome"
                            type="text"
                            value={dataPerfil.name}
                            onChange={(e) => setDataPerfil({ ...dataPerfil, name: e.target.value })}
                            className="w-full h-12 rounded-md text-lg p-3 mt-2 border border-gray-300 outline-none"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="endereco" className="text-base font-bold text-gray-500">
                            Endereço
                        </label>
                        <input
                            id="endereco"
                            type="text"
                            value={dataPerfil.addres}
                            onChange={(e) => setDataPerfil({ ...dataPerfil, addres: e.target.value })}
                            className="w-full h-12 rounded-md text-lg p-3 mt-2 border border-gray-300 outline-none"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="alterar-senha" className="text-base font-bold text-gray-500">
                            Alterar senha (opcional)
                        </label>
                        <input
                            id="alterar-senha"
                            type="password"
                            placeholder="Nova senha"
                            value={novaSenha}
                            onChange={(e) => setNovaSenha(e.target.value)}
                            className="w-full h-12 rounded-md text-lg p-3 mt-2 border border-gray-300 outline-none"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="confirmar-senha" className="text-base font-bold text-gray-500">
                            Confirme nova senha (opcional)
                        </label>
                        <input
                            id="confirmar-senha"
                            type="password"
                            placeholder="Confirme nova senha"
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.target.value)}
                            className="w-full h-12 rounded-md text-lg p-3 mt-2 border border-gray-300 outline-none"
                        />
                    </div>

                    <div className="mb-4 flex items-center space-x-4">
                        <label htmlFor="status" className="text-base font-bold text-gray-500">
                            Estabelecimento Aberto
                        </label>

                        <div className="flex items-center">
                            <FontAwesomeIcon
                                icon={dataPerfil.open ? faCheckCircle : faTimesCircle}
                                className={`mr-2 text-2xl ${dataPerfil.open ? 'text-green-500' : 'text-red-500'}`}
                            />
                            <input
                                id="status"
                                type="checkbox"
                                checked={dataPerfil.open}
                                onChange={(e) => setDataPerfil({ ...dataPerfil, open: e.target.checked })}
                                className="form-checkbox h-5 w-5 text-green-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-1 gap-3 mt-8">
                    <label className="flex items-center justify-center text-gray-500 font-bold bg-white p-3 rounded-lg cursor-pointer hover:bg-zinc-200">
                        <FontAwesomeIcon icon={faUpload} className="mr-2 size-5" />
                        {avatarFileName || (dataPerfil.avatar ? "Alterar foto de perfil" : "Selecionar foto de perfil")}
                        <input
                            type="file"
                            className="hidden"
                            accept="image/*" // Apenas arquivos de imagem
                            onChange={(e) => handleFileChange(e, "avatar")}
                        />
                    </label>

                    <label className="flex items-center justify-center bg-white text-gray-500 font-bold p-3 rounded-lg cursor-pointer hover:bg-zinc-200">
                        <FontAwesomeIcon icon={faUpload} className="mr-2 size-5" />
                        {coverFileName || (dataPerfil.cover ? "Alterar foto de capa" : "Selecionar foto de capa")}
                        <input
                            type="file"
                            className="hidden"
                            accept="image/*" // Apenas arquivos de imagem
                            onChange={(e) => handleFileChange(e, "cover")}
                        />
                    </label>
                </div>
            </div>
        </>
    );
};
