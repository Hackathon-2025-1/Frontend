import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { SlCamrecorder } from "react-icons/sl";
import Image from "next/image";
import { FaRegFileVideo } from "react-icons/fa";
import * as Dialog from "@radix-ui/react-dialog";

interface ProfileContentProps {
  materia: string;
  semana: string;
}

export default function ProfileContent({
  materia,
  semana,
}: ProfileContentProps) {
  // Dados simulados para exemplo
  const userName = "Ana Clara";
  const dataHoje = "Segunda - feira, 03 de junho.";

  const relatorios = [
    {
      materia: "Ciências de dados",
      semana: "Semana 1",
      questao: "Questão 3",
      feedback: "20 alunos tiveram dúvidas nesta questão",
    },
    {
      materia: "Matemática",
      semana: "Semana 2",
      questao: "Questão 1",
      feedback: "40 alunos tiveram dúvidas nesta questão",
    },
    {
      materia: "Lógica de Programação",
      semana: "Semana 4",
      questao: "Questão 2",
      feedback: "42 alunos tiveram dúvidas nesta questão",
    },
    {
      materia: "Ciências de dados",
      semana: "Semana 4",
      questao: "Questão 5",
      feedback: "3 alunos tiveram dúvidas nesta questão",
    },
  ];

  const [etapa, setEtapa] = useState(1);
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      {/* Saudação e data */}
      <div>
        <span className="text-3xl font-light text-gray-400">{dataHoje}</span>
        <h1 className="text-2xl font-semibold text-gray-800 mt-2 mb-4">
          Bom dia, <span className="text-gray-900">{userName}</span>
        </h1>
      </div>

      {/* Card de upload */}
      <Dialog.Root open={open} onOpenChange={(v) => {
        setOpen(v);
        if (!v) setEtapa(1);
      }}>
        <div className="bg-white rounded-lg shadow p-0 mb-6">
          {/* Título e linha */}
          <div className="px-4 pt-4 pb-2">
            <div className="flex items-center gap-2 text-gray-700 text-sm font-medium">
              <FaRegFileVideo className="text-lg" />
              Realizar upload de vídeo-aula
            </div>
          </div>
          {/* Linha com sombra */}
          <div className="w-full md:w-[700px] h-[1px] bg-gray-200 shadow-[0_2px_4px_0_rgba(0,0,0,0.06)]" />
          {/* Conteúdo abaixo da linha */}
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-3">
              <Image
                src="/aluna.png"
                alt="Foto de perfil"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <div className="text-gray-900 font-medium">{userName}</div>
                <div className="text-xs text-gray-500">Professor</div>
              </div>
            </div>
            <Dialog.Trigger asChild>
              <button className="hover:scale-105 duration-300 cursor-pointer bg-gradient-to-bl from-primary to-tertiary text-white px-6 py-2 rounded-md font-medium hover:bg-[#222c4f] transition text-sm">
                Realizar Upload
              </button>
            </Dialog.Trigger>
          </div>
        </div>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40" />
          <Dialog.Content className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl flex flex-col gap-6">
            <Dialog.Close asChild>
              <button className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-700">
                ×
              </button>
            </Dialog.Close>
            {/* Barra de etapas */}
            <div className="w-full flex flex-col gap-2">
              <div className="flex justify-between text-xs font-semibold text-gray-700 mb-1">
                <span className="flex-1 text-center">etapa 1</span>
                <span className="flex-1 text-center">etapa 2</span>
                <span className="flex-1 text-center">etapa 3</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r from-primary to-tertiary transition-all ${
                    etapa === 1
                      ? "w-1/3"
                      : etapa === 2
                      ? "w-2/3"
                      : "w-full"
                  }`}
                />
              </div>
            </div>
            {/* Inputs */}
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <input
                type="text"
                placeholder="QUAL MATÉRIA ?"
                className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-100"
                value={materia}
                readOnly
              />
              <input
                type="text"
                placeholder="QUAL SEMANA ?"
                className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-100"
                value={semana}
                readOnly
              />
              {etapa === 1 && (
                <button
                  className="flex-1 bg-gradient-to-bl from-primary to-tertiary text-white px-4 py-2 rounded-md font-semibold hover:bg-[#222c4f] transition"
                  onClick={() => setEtapa(2)}
                >
                  PRÓXIMO
                </button>
              )}
              {etapa === 2 && (
                <button
                  className="flex-1 bg-gradient-to-bl from-primary to-tertiary text-white px-4 py-2 rounded-md font-semibold hover:bg-[#222c4f] transition"
                  onClick={() => setEtapa(3)}
                >
                  ENVIAR
                </button>
              )}
              {etapa === 3 && (
                <button
                  className="flex-1 bg-gradient-to-bl from-primary to-tertiary text-white px-4 py-2 rounded-md font-semibold opacity-60 cursor-not-allowed"
                  disabled
                >
                  ENVIADO
                </button>
              )}
            </div>
            {/* Área de upload dinâmica */}
            <div className="w-full flex flex-col items-center">
              {etapa === 1 && (
                <label
                  htmlFor="file-upload"
                  className="w-full cursor-pointer flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-40"
                >
                  <span className="text-2xl text-gray-400 font-medium text-center">
                    Anexa video, pdf ou PowerPoint
                  </span>
                  <input id="file-upload" type="file" className="hidden" />
                </label>
              )}
              {etapa === 2 && (
                <div className="w-full flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-40">
                  <span className="text-2xl text-gray-400 font-medium text-center">
                    CARREGADO
                  </span>
                </div>
              )}
              {etapa === 3 && (
                <div
                  className="w-full flex items-center justify-center rounded-lg h-40"
                  style={{
                    background:
                      "linear-gradient(90deg, #1A2341 60%, #2B3A67 100%)",
                  }}
                >
                  <span className="text-3xl text-white font-semibold text-center">
                    ENVIADO
                  </span>
                </div>
              )}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Relatório */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Relatório</h2>
        <div className="grid grid-cols-2 gap-6">
          {relatorios.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-lg shadow-lg p-4 flex flex-col gap-2"
            >
              <span className="font-medium text-gray-800">
                Matéria - {item.materia}
              </span>
              <span className="text-sm text-gray-600">
                {item.semana} - {item.questao}
              </span>
              <span className="text-xs text-gray-500">
                FeedBack - {item.feedback}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
