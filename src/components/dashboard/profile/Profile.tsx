'use client';

import { Button } from "@/components/ui/Button";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { perfilList } from "@/data/perfilList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Profile = () => {
    const perfil = perfilList[0];

    // Estados para os campos do formulário
    const [nome, setNome] = useState(perfil.name); // Nome padrão vindo do perfil
    const [novaSenha, setNovaSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [fileName, setFileName] = useState("");
    const [fileName2, setFileName2] = useState("");

    const handleAdd = () => {
        // Função para salvar alterações
        if (novaSenha && novaSenha === confirmarSenha) {
            alert("Alterações salvas com sucesso!");
        } else if (novaSenha !== confirmarSenha) {
            alert("As senhas não coincidem!");
        } else {
            alert("Preencha os campos de senha!");
        }
    };

    const handleFileChange = (event, setFileNameCallback) => {
        const file = event.target.files[0];
        if (file) {
            setFileNameCallback(file.name);
        } else {
            setFileNameCallback(""); // Reseta se nenhum arquivo for selecionado
        }
    };

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <div className="text-xl font-bold">EDITAR PERFIL</div>
                <Button label="Salvar alterações" size="medium" cor="sky" onClick={handleAdd} />
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
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className="w-full h-12 rounded-md text-lg p-3 mt-2 border border-gray-300 outline-none"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="alterar-senha" className="text-base font-bold text-gray-500">
                            Alterar senha
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
                            Confirme nova senha
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
                </div>
                <div className="flex flex-col flex-1 gap-3 mt-8">
                    {/* Upload de arquivo */}
                    <label className="flex items-center justify-center text-gray-500 font-bold bg-white p-3 rounded-lg cursor-pointer hover:bg-zinc-200">
                        <FontAwesomeIcon icon={faUpload} className="mr-2 size-5" />
                        {fileName || "Selecionar foto de perfil"}
                        <input
                            type="file"
                            className="hidden"
                            onChange={(e) => handleFileChange(e, setFileName)}
                        />
                    </label>

                    {/* Upload de capa */}
                    <label className="flex items-center justify-center bg-white text-gray-500 font-bold p-3 rounded-lg cursor-pointer hover:bg-zinc-200">
                        <FontAwesomeIcon icon={faUpload} className="mr-2 size-5" />
                        {fileName2 || "Selecionar foto de capa"}
                        <input
                            type="file"
                            className="hidden"
                            onChange={(e) => handleFileChange(e, setFileName2)}
                        />
                    </label>
                </div>
            </div>
        </>
    );
};
