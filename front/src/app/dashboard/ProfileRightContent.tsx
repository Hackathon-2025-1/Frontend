import { FaVideo, FaUser } from "react-icons/fa";

interface ProfileRightContentProps {
  materia: string;
  setMateria: (value: string) => void;
  semana: string;
  setSemana: (value: string) => void;
}

export default function ProfileRightContent({ materia, setMateria, semana, setSemana }: ProfileRightContentProps) {
    return (
        <div className="flex flex-col gap-4 w-full">
            {/* Card Vídeos upload */}
            <div className="bg-white rounded-lg px-6 py-4 flex items-center gap-3 shadow">
                <div className="flex items-center gap-2">
                    <div className="bg-primary px-2 rounded-lg p-2">
                        <FaVideo className="text-lg  text-white" />
                    </div>

                    <div className="text-lg font-semibold text-gray-900 leading-none">256</div>
                    <div className="text-sm text-gray-500 leading-none">Vídeos upload</div>
                </div>
            </div>

            {/* Card Atividades Criadas */}
            <div className="bg-white rounded-lg px-6 py-4 flex items-center gap-3 shadow">
                <div className="flex items-center gap-2">
                    <div className="bg-primary px-2 rounded-lg p-2">
                        <FaUser className="text-lg text-white" />
                    </div>
                    <div className="text-lg font-semibold text-gray-900 leading-none">100</div>
                    <div className="text-sm text-gray-500 leading-none">Atividades Criadas</div>
                </div>
            </div>

            {/* Relatório das atividades */}
            <div className="bg-white rounded-lg px-6 py-6 shadow flex flex-col gap-4">
                <div className="text-sm font-semibold text-gray-700 mb-2">Relatório das atividades</div>
                <div className="flex flex-col gap-3">
                    <div>
                        <label className="text-xs text-gray-600">Qual matéria ?</label>
                        <select className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-sm focus:outline-none" value={materia} onChange={e => setMateria(e.target.value)}>
                            <option value="">Selecione</option>
                            <option value="Matemática">Matemática</option>
                            <option value="Ciências de dados">Ciências de dados</option>
                            <option value="Lógica de programação">Lógica de programação</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-xs text-gray-600">Qual semana ?</label>
                        <select className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-sm focus:outline-none" value={semana} onChange={e => setSemana(e.target.value)}>
                            <option value="">Selecione</option>
                            <option value="Semana 1">Semana 1</option>
                            <option value="Semana 2">Semana 2</option>
                            <option value="Semana 3">Semana 3</option>
                            <option value="Semana 4">Semana 4</option>
                        </select>
                    </div>
                   
                    <button

                        className="w-full mt-2 py-2 rounded-md text-white font-semibold text-sm"
                        style={{
                            background: "linear-gradient(90deg, #1A2341 60%, #2B3A67 100%)",
                            boxShadow: "0px 2px 8px 0px rgba(26,35,65,0.15)",
                        }}
                    >
                        Gerar Relatório
                    </button>
                </div>
            </div>
        </div>
    );
}