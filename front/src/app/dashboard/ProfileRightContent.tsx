import { FaVideo, FaUser } from "react-icons/fa";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

interface ProfileRightContentProps {
  materia: string;
  setMateria: (value: string) => void;
  semana: string;
  setSemana: (value: string) => void;
}

interface RelatorioItem {
  titulo: string;
  feedback: string;
  materia: string; // Adicionando matéria para filtrar
  ativo: boolean;
  detalhesFeedback?: {
    assunto: string;
    para: string;
    dificuldades: string[];
    sugestoes: {
      titulo: string;
      descricao: string;
      exercicios?: string[];
    }[];
  };
}

export default function ProfileRightContent({ 
  materia, setMateria, semana, setSemana 
}: ProfileRightContentProps) {
  const [relatorioModalOpen, setRelatorioModalOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  // Dados simulados para o relatório
  const relatorioItems: RelatorioItem[] = [
    {
      titulo: "ATIVIDADE 5 - LÓGICA DE PROGRAMAÇÃO",
      feedback: "FeedBack - 40 alunos teram dúvidas neste assuntos",
      materia: "Lógica de programação",
      ativo: false,
      detalhesFeedback: {
        assunto: "Feedback Construtivo sobre a Turma e o Tópico de Vetores em C",
        para: "Prezado(a) Professor(a) Éder",
        dificuldades: [
          "Indexação a partir do zero: A ideia de que o primeiro elemento está na posição vetor[0] ainda causa muita confusão, levando a erros comuns em loops e no acesso a elementos (erros \"off-by-one\").",
          "Manipulação com Loops (for): Muitos alunos entendem o for e entendem o que é um vetor, mas têm dificuldade em juntar os dois. A sintaxe for (i=0; i < tamanho; i++) para percorrer o vetor não está totalmente internalizada.",
          "Leitura e Escrita de Dados: A tarefa de preencher um vetor com dados do usuário (usando scanf dentro de um loop) e depois exibir todos é um desafio para grande.",
          "Acesso a posições inválidas: Por não dominarem a lógica do loop, muitos acabam tentando acessar posições fora do limite do vetor (ex: vetor[10] em um vetor de 10 posições), o que gera comportamentos inesperados no programa e frustração."
        ],
        sugestoes: [
          {
            titulo: "Analogia Visual Forte",
            descricao: "Talvez iniciar a próxima aula de exercícios com uma analogia visual clara, como desenhar um \"prédio\" (o vetor) com \"andares\" numerados a partir do 0. Reforçar essa imagem pode ajudar a fixar a indexação."
          },
          {
            titulo: "Codificação ao Vivo com Erros Proposital",
            descricao: "Uma sugestão seria o(a) senhor(a) codificar um exercício ao vivo e, propositalmente, cometer um erro comum (como começar o for em 1). Em seguida, depurar o código junto com a turma, mostrando por que o erro acontece e como corrigi-lo. Isso costuma ser extremamente eficaz."
          },
          {
            titulo: "Exercícios de \"Aquecimento\"",
            descricao: "Propor uma lista de exercícios com complexidade gradual. Por exemplo:",
            exercicios: [
              "Exercício 1: Apenas declarar um vetor e preenchê-lo com valores fixos.",
              "Exercício 2: Preencher um vetor com dados do usuário e depois imprimi-lo.",
              "Exercício 3: Achar o maior valor dentro de um vetor já preenchido."
            ]
          },
          {
            titulo: "Contexto Prático Simples",
            descricao: "Usar um exemplo prático e contínuo, como um programa que armazena as 4 notas de um aluno em um vetor e depois calcula a média. Usar o mesmo contexto em vários exercícios ajuda na associação."
          }
        ]
      }
    },
    {
      titulo: "ATIVIDADE 4 - LÓGICA DE PROGRAMAÇÃO",
      feedback: "FeedBack - 35 alunos teram dúvidas neste assuntos",
      materia: "Lógica de programação",
      ativo: false,
      detalhesFeedback: {
        assunto: "Feedback sobre Estruturas de Repetição",
        para: "Prezado(a) Professor(a) Éder",
        dificuldades: [
          "Diferenciação entre while, do-while e for",
          "Condições de parada em loops",
          "Loops aninhados"
        ],
        sugestoes: [
          {
            titulo: "Exemplos comparativos",
            descricao: "Mostrar o mesmo problema resolvido com diferentes estruturas de repetição"
          },
          {
            titulo: "Depuração passo a passo",
            descricao: "Demonstrar o fluxo de execução usando ferramentas de depuração"
          }
        ]
      }
    },
    {
      titulo: "ATIVIDADE 5 - MATEMÁTICA",
      feedback: "FeedBack - 40 alunos teram dúvidas neste assuntos",
      materia: "Matemática",
      ativo: false,
      detalhesFeedback: {
        assunto: "Feedback sobre dificuldades em Cálculo Diferencial",
        para: "Prezado(a) Professor(a) Éder",
        dificuldades: [
          "Compreensão conceitual de limites e continuidade",
          "Aplicação prática das regras de derivação",
          "Interpretação geométrica da derivada"
        ],
        sugestoes: [
          {
            titulo: "Abordagem visual",
            descricao: "Utilizar mais gráficos e simulações visuais para demonstrar os conceitos"
          },
          {
            titulo: "Exercícios contextualizados",
            descricao: "Criar problemas relacionados a situações do cotidiano"
          }
        ]
      }
    },
    {
      titulo: "ATIVIDADE 3 - MATEMÁTICA",
      feedback: "FeedBack - 22 alunos teram dúvidas neste assuntos",
      materia: "Matemática",
      ativo: false,
      detalhesFeedback: {
        assunto: "Feedback sobre Álgebra Linear",
        para: "Prezado(a) Professor(a) Éder",
        dificuldades: [
          "Operações com matrizes",
          "Sistemas de equações lineares",
          "Transformações lineares"
        ],
        sugestoes: [
          {
            titulo: "Representações visuais",
            descricao: "Usar representações gráficas para as transformações lineares"
          },
          {
            titulo: "Aplicações práticas",
            descricao: "Mostrar aplicações reais de álgebra linear em computação gráfica e ciência de dados"
          }
        ]
      }
    },
    {
      titulo: "ATIVIDADE 5 - CIÊNCIAS DE DADOS",
      feedback: "FeedBack - 3 alunos teram dúvidas neste assuntos",
      materia: "Ciências de dados",
      ativo: false,
      detalhesFeedback: {
        assunto: "Feedback sobre Visualização de Dados",
        para: "Prezado(a) Professor(a) Éder",
        dificuldades: [
          "Escolha do tipo de gráfico adequado",
          "Interpretação de correlações",
          "Preparação de dados para visualização"
        ],
        sugestoes: [
          {
            titulo: "Análise crítica de visualizações",
            descricao: "Apresentar exemplos bons e ruins de visualizações para análise comparativa"
          },
          {
            titulo: "Projetos práticos",
            descricao: "Propor projetos que envolvam análise exploratória completa"
          }
        ]
      }
    },
    {
      titulo: "ATIVIDADE 2 - CIÊNCIAS DE DADOS",
      feedback: "FeedBack - 12 alunos teram dúvidas neste assuntos",
      materia: "Ciências de dados",
      ativo: false,
      detalhesFeedback: {
        assunto: "Feedback sobre Estatística Descritiva",
        para: "Prezado(a) Professor(a) Éder",
        dificuldades: [
          "Interpretação de medidas de tendência central",
          "Análise de dispersão e variabilidade",
          "Identificação de outliers"
        ],
        sugestoes: [
          {
            titulo: "Conjuntos de dados reais",
            descricao: "Trabalhar com datasets do mundo real e não exemplos artificiais"
          },
          {
            titulo: "Interpretação contextualizada",
            descricao: "Enfatizar a interpretação dos resultados no contexto do problema"
          }
        ]
      }
    }
  ];

  // Filtra os itens do relatório com base na matéria selecionada
  const filteredItems = materia 
    ? relatorioItems.filter(item => item.materia === materia)
    : [];

  const handleCardClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  // Reset do item selecionado quando o modal é fechado
  const handleModalOpenChange = (open: boolean) => {
    setRelatorioModalOpen(open);
    if (!open) {
      setSelectedItemIndex(null);
    }
  };

  const handleGerarRelatorio = () => {
    if (!materia) {
      alert("Por favor, selecione uma matéria antes de gerar o relatório.");
      return;
    }
    setRelatorioModalOpen(true);
  };

  return (
    <div className="flex flex-col gap-4 w-full md:min-w-[220px]">
      {/* Card Vídeos upload */}
      <div className="bg-white rounded-lg px-6 py-4 flex items-center gap-3 shadow">
        <div className="flex items-center gap-2">
          <div className="bg-primary px-2 rounded-lg p-2">
            <FaVideo className="text-lg text-white" />
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
            <select 
              className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-sm focus:outline-none" 
              value={materia} 
              onChange={e => {
                setMateria(e.target.value);
                setSelectedItemIndex(null); // Reset seleção ao mudar matéria
              }}
            >
              <option value="">Selecione</option>
              <option value="Matemática">Matemática</option>
              <option value="Ciências de dados">Ciências de dados</option>
              <option value="Lógica de programação">Lógica de programação</option>
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-600">Qual semana ?</label>
            <select 
              className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-sm focus:outline-none" 
              value={semana} 
              onChange={e => setSemana(e.target.value)}
            >
              <option value="">Selecione</option>
              <option value="Semana 1">Semana 1</option>
              <option value="Semana 2">Semana 2</option>
              <option value="Semana 3">Semana 3</option>
              <option value="Semana 4">Semana 4</option>
            </select>
          </div>
          
          {/* Dialog para o modal de relatório */}
          <Dialog.Root open={relatorioModalOpen} onOpenChange={handleModalOpenChange}>
            <Dialog.Trigger asChild>
              <button
                className="w-full hover:scale-105 duration-300 transition cursor-pointer mt-2 py-2 rounded-md text-white font-semibold text-sm"
                style={{
                  background: "linear-gradient(90deg, #1A2341 60%, #2B3A67 100%)",
                  boxShadow: "0px 2px 8px 0px rgba(26,35,65,0.15)",
                }}
                onClick={handleGerarRelatorio}
              >
                Gerar Relatório
              </button>
            </Dialog.Trigger>
            
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40" />
              <Dialog.Content className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg p-6 w-full max-w-3xl flex flex-col gap-6 max-h-[90vh] overflow-y-auto">
                <Dialog.Close asChild>
                  <button className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-700">
                    ×
                  </button>
                </Dialog.Close>
                
                {/* Título do Relatório */}
                <h2 className="text-center text-xl font-bold">RELATÓRIO</h2>
                
                {/* Mensagem se nenhuma matéria foi selecionada */}
                {filteredItems.length === 0 && (
                  <p className="text-center text-gray-500">
                    {materia ? `Nenhuma atividade encontrada para ${materia}` : "Selecione uma matéria para ver as atividades."}
                  </p>
                )}
                
                {/* Cards de atividades filtradas por matéria */}
                {filteredItems.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredItems.map((item, index) => (
                      <div 
                        key={index} 
                        className={`rounded-lg p-4 ${
                          selectedItemIndex === index 
                            ? "bg-gradient-to-r from-primary to-tertiary text-white" 
                            : "bg-gray-100 text-gray-800"
                        } cursor-pointer hover:opacity-90 transition-all`}
                        onClick={() => handleCardClick(index)}
                      >
                        <h3 className="text-sm font-medium mb-2">{item.titulo}</h3>
                        <p className="text-sm">{item.feedback}</p>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Linha divisória - só exibir se um card foi selecionado */}
                {selectedItemIndex !== null && (
                  <div className="w-full h-px bg-gray-300 my-2" />
                )}
                
                {/* Detalhes do feedback - só exibir se um card foi selecionado */}
                {selectedItemIndex !== null && filteredItems[selectedItemIndex]?.detalhesFeedback && (
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-bold mb-2">FeedBack</h3>
                    <p className="mb-2">Assunto: {filteredItems[selectedItemIndex].detalhesFeedback?.assunto}</p>
                    <p className="mb-2">Para: {filteredItems[selectedItemIndex].detalhesFeedback?.para}</p>
                    <p className="mb-4">Prezado(a) Professor(a),</p>
                    
                    <h4 className="font-bold mb-2">1. Pontos de Dificuldade Observados</h4>
                    <p className="mb-2">Identificamos alguns pontos específicos onde a maioria das dúvidas se concentra:</p>
                    <ul className="list-disc pl-6 mb-4">
                      {filteredItems[selectedItemIndex].detalhesFeedback?.dificuldades.map((dificuldade, idx) => (
                        <li key={idx}>{dificuldade}</li>
                      ))}
                    </ul>
                    
                    <h4 className="font-bold mb-2">2. Sugestões Construtivas</h4>
                    <p className="mb-2">Com base nesses pontos, gostaríamos de sugerir, respeitosamente, algumas abordagens que talvez pudessem ajudar a turma a solidificar o conhecimento:</p>
                    <ul className="list-disc pl-6 mb-4">
                      {filteredItems[selectedItemIndex].detalhesFeedback?.sugestoes.map((sugestao, idx) => (
                        <li key={idx}>
                          <strong>{sugestao.titulo}:</strong> {sugestao.descricao}
                          {sugestao.exercicios && (
                            <ol className="list-decimal pl-6 my-2">
                              {sugestao.exercicios.map((exercicio, exIdx) => (
                                <li key={exIdx}>{exercicio}</li>
                              ))}
                            </ol>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </div>
  );
}