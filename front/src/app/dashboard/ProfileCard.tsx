import React from "react";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaLinkedin, FaGlobe, FaFilePdf } from "react-icons/fa";

export default function ProfileCard() {
    const profileData = {
        name: "Ana Clara",
        role: "Professor",
        institution: "UniEVANGÉLICA - Campus Anápolis",
        description: "Estudante de Engenharia de Software apaixonada por transformar ideias em soluções tecnológicas. Minha jornada foca em desvendar desafios de programação e entender como o software pode impactar positivamente.",
        subjects: [
            {
                title: "Matemática",
            },
            {
                title: "Ciência de Dados",
            },
            {
                title: "Lógica de Dados"
            }
        ],
        contact: {
            email: "anaclara@gmail.com",
            phone: "+55 062 91234-5678",
            linkedin: "linkedin.me/anaclara",
            portfolio: "midiasocial.com/anaclara"
        }
    }
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full mx-auto">
      {/* Foto e nome */}
      <div className="flex items-center mb-6">
        <Image
          src="/aluna.png"
          alt="Foto de perfil"
          width={80}
          height={80}
          className="rounded-full object-cover mb-2"
        />
        <div className="ml-4 flex flex-col">
        <h2 className="text-xl font-semibold text-gray-900">{profileData.name}</h2>
        <p className="text-sm text-gray-600">{profileData.role}</p>
        <p className="text-xs text-gray-400">{profileData.institution}</p>
        </div>
      </div>
      <button className="w-full bg-gradient-to-bl from-primary to-tertiary text-white py-2 rounded-lg font-medium mb-6 hover:bg-gray-700 transition">Editar perfil</button>
      {/* Descrição */}
      <div className="mb-6">
        <h3 className="text-base font-semibold text-gray-800 mb-1">Descrição</h3>
        <p className="text-sm text-gray-700">{profileData.description}</p>
      </div>
      {/* Matérias */}
      <div className="mb-6">
        <h3 className="text-base font-semibold text-gray-800 mb-2">Matérias</h3>
        <div className="flex flex-wrap gap-2 max-w-xs">
          {profileData.subjects.map((subject, index) => (
            <span
              key={index}
              className="bg-gray-100 rounded-full px-4 py-1 text-sm font-medium text-gray-800 whitespace-nowrap"
            >
              {subject.title}
            </span>
          ))}
          <button className="bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center text-lg font-bold text-gray-600">+</button>
        </div>
      </div>
      {/* Contato */}
      <div>
        <h3 className="text-base font-semibold text-gray-800 mb-2">Contato</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-gray-700 text-sm">
            <FaEnvelope className="text-gray-500" /> anaclara@gmail.com
          </li>
          <li className="flex items-center gap-2 text-gray-700 text-sm">
            <FaPhone className="text-gray-500" /> +55 062 91234-5678
          </li>
          <li className="flex items-center gap-2 text-gray-700 text-sm">
            <FaLinkedin className="text-gray-500" /> linkedin.me/anaclara
          </li>
          <li className="flex items-center gap-2 text-gray-700 text-sm">
            <FaGlobe className="text-gray-500" /> midiasocial.com/anaclara
          </li>
        </ul>
      </div>
    </div>
  );
}
