import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(true); // Inicialmente aberto
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    // Animar a entrada ao montar o componente
    if (isOpen) {
      setTimeout(() => {
        setAnimateIn(true);
      }, 50);
    }
  }, []);

  const toggleChat = () => {
    if (isOpen) {
      setAnimateIn(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 300);
    } else {
      setIsOpen(true);
      setTimeout(() => {
        setAnimateIn(true);
      }, 50);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Widget de chat aberto - sempre visível inicialmente */}
      {isOpen && (
        <div 
          className={`bg-white rounded-lg w-[500px] mb-4 overflow-hidden 
                     ${animateIn 
                       ? 'fade-up-active opacity-100 transform translate-y-0' 
                       : 'fade-up-inactive opacity-0 transform translate-y-10'}`}
          style={{ 
            boxShadow: "0px 2px 10px rgba(0,0,0,0.08)", 
            transition: "all 0.3s ease-out",
            border: "1px solid rgba(0,0,0,0.06)"
          }}
        >
          {/* Layout em duas colunas */}
          <div className="flex h-[450px] relative">
            <div className="w-[170px] flex flex-col self-end ">
              {/* Cabeçalho Histórico */}
              <div className="py-6 text-center">
                <h3 className="font-semibold text-gray-800">Histórico</h3>
              </div>
              
              {/* Itens de menu */}
              <div className="flex flex-col">
                <button className="py-4 px-2 text-center border-t text-gray-500 text-xs hover:bg-gray-50">
                  Verificação de atividade
                </button>
                <button className="py-4 px-2 text-center border-t text-gray-500 text-xs hover:bg-gray-50">
                  Resumo do conteúdo
                </button>
              </div>
            </div>
            
            {/* Borda vertical que vai do topo até o final */}
            <div 
              className="absolute top-0 bottom-0 w-px bg-gray-200" 
              style={{ left: "170px" }}
            ></div>
            
            {/* Coluna da direita - Conteúdo */}
            <div className="flex-1 flex flex-col">
              {/* Cabeçalho Inteligência Artificial */}
              <div className="py-6 text-center">
                <h3 className="text-gray-400 font-light">Inteligência Artificial</h3>
              </div>
              
              {/* Área principal - flex-grow para ocupar todo espaço disponível */}
              <div className="flex-grow flex flex-col">
                {/* Espaço vazio que cresce */}
                <div className="flex-grow"></div>
                
                {/* Campo de pesquisa no final */}
                <div className="p-4 flex justify-center">
                  <div className="w-full max-w-sm relative">
                    <input 
                      type="text" 
                      className="w-full pl-4 pr-10 py-2 rounded-full bg-gray-100 border-none text-gray-600 focus:outline-none" 
                      placeholder="α" 
                    />
                    <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <FaSearch />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Botão flutuante circular */}
      <button 
        onClick={toggleChat}
        className="border-secondary border-2 justify-self-end cursor-pointer bg-primary w-18 h-18 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        aria-label={isOpen ? "Fechar chat" : "Abrir chat"}
      >
        <span className="text-secondary font-bold">IA</span>
      </button>

      {/* Estilos para animações */}
      <style jsx>{`
        .fade-up-active {
          transition: opacity 0.3s ease-out, transform 0.3s ease-out;
        }
        
        .fade-up-inactive {
          transition: opacity 0.3s ease-in, transform 0.3s ease-in;
        }
      `}</style>
    </div>
  );
}