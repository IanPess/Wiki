// Funcionalidades JavaScript
function explorarConteudo() {
    document.getElementById('secao-destaque').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Destacar link ativo na navegação
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navegacao a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('ativo');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('ativo');
        }
    });
});

// Efeito blur no header ao fazer scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('cabecalho');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.9)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

function navegarPara(categoria) {
    alert(`Navegando para: ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}`);
    console.log(`Navegação para categoria: ${categoria}`);
}

// Animação de entrada dos cartões
const observador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

// Dados dos chefes
const dadosChefes = [
    {
        id: 1,
        nome: "Dragão das Chamas",
        tipo: "Boss Elemental",
        dificuldade: "dificil",
        hp: 15000,
        nivel: 45,
        area: "Caverna Vulcânica",
        icone: "🐉",
        descricao: "Um dragão ancestral que guarda os tesouros mais valiosos da caverna vulcânica. Seus ataques de fogo podem devastar grupos inteiros.",
        pontosFracos: ["Ataques de gelo", "Ataques na cauda", "Período após respirar fogo"],
        estrategias: [
            "Use equipamentos resistentes ao fogo antes da batalha",
            "Ataque a cauda quando ele estiver respirando fogo",
            "Mantenha distância durante os ataques em área",
            "Use magias de gelo para causar dano extra"
        ],
        recompensas: ["Escama de Dragão", "Gema do Fogo Eterno", "15.000 XP"]
    },
    {
        id: 2,
        nome: "Cavaleiro Sombrio",
        tipo: "Boss Humanóide",
        dificuldade: "medio",
        hp: 8500,
        nivel: 32,
        area: "Castelo Assombrado",
        icone: "⚔️",
        descricao: "Um cavaleiro corrompido pela magia sombria. Possui ataques rápidos e conhece várias técnicas de espada.",
        pontosFracos: ["Magia de luz", "Ataques mágicos", "Velocidade reduzida após combo"],
        estrategias: [
            "Use armas abençoadas ou magias de luz",
            "Bloqueie seus combos e contra-ataque",
            "Evite lutar corpo a corpo por muito tempo",
            "Use o ambiente para criar distância"
        ],
        recompensas: ["Espada Sombria", "Armadura do Cavaleiro", "8.500 XP"]
    },
    {
        id: 3,
        nome: "Kraken das Profundezas",
        tipo: "Boss Aquático",
        dificuldade: "dificil",
        hp: 18000,
        nivel: 50,
        area: "Abismo Marinho",
        icone: "🦑",
        descricao: "Uma criatura lendária dos mares profundos. Seus tentáculos podem atingir múltiplos alvos simultaneamente.",
        pontosFracos: ["Ataques elétricos", "Tentáculos individuais", "Olhos durante fúria"],
        estrategias: [
            "Foque em destruir os tentáculos um por vez",
            "Use ataques elétricos para atordoar",
            "Ataque os olhos quando ele entrar em fúria",
            "Mantenha-se em movimento para evitar agarrões"
        ],
        recompensas: ["Tentáculo do Kraken", "Pérola das Profundezas", "20.000 XP"]
    },
    {
        id: 4,
        nome: "Golem de Pedra",
        tipo: "Boss Construto",
        dificuldade: "facil",
        hp: 6000,
        nivel: 25,
        area: "Templo Antigo",
        icone: "🗿",
        descricao: "Um guardião antigo feito de pedra e magia. Movimentos lentos mas ataques devastadores.",
        pontosFracos: ["Ataques de terra", "Juntas nas pernas", "Magia de desarme"],
        estrategias: [
            "Ataque as juntas das pernas para derrubá-lo",
            "Use sua lentidão para atacar e recuar",
            "Magias de terra causam dano extra",
            "Evite ficar na frente dele por muito tempo"
        ],
        recompensas: ["Núcleo de Golem", "Pedra Rúnica", "6.000 XP"]
    },
    {
        id: 5,
        nome: "Lich Supremo",
        tipo: "Boss Final",
        dificuldade: "dificil",
        hp: 25000,
        nivel: 60,
        area: "Torre da Perdição",
        icone: "💀",
        descricao: "O mago mais poderoso que se tornou imortal através da necromancia. Boss final com múltiplas fases.",
        pontosFracos: ["Magia sagrada", "Phylactery", "Interrupção de conjuração"],
        estrategias: [
            "Primeira fase: Destrua os cristais ao redor da sala",
            "Segunda fase: Interrompa suas conjurações poderosas",
            "Fase final: Encontre e destrua o phylactery",
            "Use proteção contra necromancia constantemente"
        ],
        recompensas: ["Cajado do Lich", "Coroa da Imortalidade", "50.000 XP", "Conquista Final"]
    },
    {
        id: 6,
        nome: "Hidra Venenosa",
        tipo: "Boss Bestial",
        dificuldade: "medio",
        hp: 12000,
        nivel: 38,
        area: "Pântano Tóxico",
        icone: "🐍",
        descricao: "Uma hidra de três cabeças que regenera quando ferida. Seus ataques envenenam e causam dano contínuo.",
        pontosFracos: ["Fogo nas feridas", "Decapitação simultânea", "Antídotos"],
        estrategias: [
            "Use fogo para cauterizar as feridas e impedir regeneração",
            "Tente decapitar múltiplas cabeças simultaneamente",
            "Mantenha antídotos para o veneno",
            "Ataque o corpo principal quando possível"
        ],
        recompensas: ["Presas de Hidra", "Glândula Venenosa", "12.000 XP"]
    }
];

let chefesFiltrados = [...dadosChefes];

// Renderizar chefes
function renderizarChefes(chefes) {
    const grade = document.getElementById('gradeChefes');
    if (!grade) {
        console.error('Elemento gradeChefes não encontrado!');
        return;
    }
    
    grade.innerHTML = '';

    chefes.forEach(chefe => {
        const cartao = document.createElement('div');
        cartao.className = 'cartao-chefe';
        cartao.innerHTML = `
            <div class="imagem-chefe">
                <span>${chefe.icone}</span>
                <div class="nivel-dificuldade nivel-${chefe.dificuldade}">
                    ${chefe.dificuldade.charAt(0).toUpperCase() + chefe.dificuldade.slice(1)}
                </div>
            </div>
            <div class="conteudo-chefe">
                <h3 class="nome-chefe">${chefe.nome}</h3>
                <p class="tipo-chefe">${chefe.tipo} • Nível ${chefe.nivel}</p>
                <p class="descricao-chefe">${chefe.descricao}</p>
                
                <div class="barra-hp">
                    <div class="barra-hp-preenchida" style="width: 100%"></div>
                </div>
                
                <div class="estatisticas-chefe">
                    <div class="estatistica">
                        <span class="estatistica-label">HP:</span>
                        <span class="estatistica-valor">${chefe.hp.toLocaleString()}</span>
                    </div>
                    <div class="estatistica">
                        <span class="estatistica-label">Área:</span>
                        <span class="estatistica-valor">${chefe.area}</span>
                    </div>
                </div>
                
            </div>
        `;
        grade.appendChild(cartao);
    });

    // Adiciona animação aos cartões criados
    document.querySelectorAll('.cartao-chefe').forEach(cartao => {
        cartao.style.opacity = '0';
        cartao.style.transform = 'translateY(30px)';
        cartao.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observador.observe(cartao);
    });
}

// Filtrar chefes
function filtrarChefes() {
    const filtroAtivo = document.querySelector('.filtro-botao.ativo');
    const campoPesquisa = document.getElementById('campoPesquisa');
    
    if (!filtroAtivo || !campoPesquisa) {
        console.error('Elementos de filtro não encontrados!');
        return;
    }
    
    const filtro = filtroAtivo.dataset.filtro;
    const termoPesquisa = campoPesquisa.value.toLowerCase();

    chefesFiltrados = dadosChefes.filter(chefe => {
        const matchFiltro = filtro === 'todos' || 
            (filtro === 'final' && chefe.tipo.includes('Final')) ||
            chefe.dificuldade === filtro;
        
        const matchPesquisa = chefe.nome.toLowerCase().includes(termoPesquisa) ||
            chefe.tipo.toLowerCase().includes(termoPesquisa) ||
            chefe.area.toLowerCase().includes(termoPesquisa);

        return matchFiltro && matchPesquisa;
    });

    renderizarChefes(chefesFiltrados);
}

// Função para abrir modal com detalhes do chefe
function abrirModal(chefeId) {
    const chefe = dadosChefes.find(c => c.id === chefeId);
    if (!chefe) return;

    const modal = document.getElementById('modalDetalhes');
    const modalTitulo = document.getElementById('modalTitulo');
    const modalCorpo = document.getElementById('modalCorpo');

    modalTitulo.textContent = chefe.nome;
    modalCorpo.innerHTML = `
        <div class="modal-chefe-header">
            <div class="modal-chefe-icone">${chefe.icone}</div>
            <div class="modal-chefe-info">
                <h3>${chefe.nome}</h3>
                <p class="modal-chefe-tipo">${chefe.tipo} • Nível ${chefe.nivel}</p>
                <div class="modal-nivel-dificuldade nivel-${chefe.dificuldade}">
                    ${chefe.dificuldade.charAt(0).toUpperCase() + chefe.dificuldade.slice(1)}
                </div>
            </div>
        </div>
        
        <div class="modal-chefe-stats">
            <div class="stat-item">
                <span class="stat-label">HP:</span>
                <span class="stat-value">${chefe.hp.toLocaleString()}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Nível:</span>
                <span class="stat-value">${chefe.nivel}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Área:</span>
                <span class="stat-value">${chefe.area}</span>
            </div>
        </div>
        
        <div class="modal-chefe-descricao">
            <h4>Descrição</h4>
            <p>${chefe.descricao}</p>
        </div>
        
        <div class="modal-chefe-pontos-fracos">
            <h4>Pontos Fracos</h4>
            <ul>
                ${chefe.pontosFracos.map(ponto => `<li>${ponto}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-chefe-estrategias">
            <h4>Estratégias</h4>
            <ol>
                ${chefe.estrategias.map(estrategia => `<li>${estrategia}</li>`).join('')}
            </ol>
        </div>
        
        <div class="modal-chefe-recompensas">
            <h4>Recompensas</h4>
            <ul>
                ${chefe.recompensas.map(recompensa => `<li>${recompensa}</li>`).join('')}
            </ul>
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Função para fechar modal
function fecharModal() {
    const modal = document.getElementById('modalDetalhes');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    console.log('Inicializando sistema de chefes...');
    
    // Renderiza todos os chefes inicialmente
    renderizarChefes(dadosChefes);
    
    // Configura eventos dos filtros
    const botoesFiltro = document.querySelectorAll('.filtro-botao');
    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', function() {
            // Remove classe ativo de todos os botões
            botoesFiltro.forEach(b => b.classList.remove('ativo'));
            // Adiciona classe ativo ao botão clicado
            this.classList.add('ativo');
            // Filtra os chefes
            filtrarChefes();
        });
    });
    
    // Configura evento de pesquisa
    const campoPesquisa = document.getElementById('campoPesquisa');
    if (campoPesquisa) {
        campoPesquisa.addEventListener('input', filtrarChefes);
    }
    
    // Evento para fechar modal clicando fora
    const modal = document.getElementById('modalDetalhes');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                fecharModal();
            }
        });
    }
    
    // Evento para fechar modal com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            fecharModal();
        }
    });
    
    console.log('Sistema de chefes inicializado com sucesso!');
});

// Sistema de Modal para Personagens - Versão Corrigida
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sistema de modal carregado');
    
    // Cria o modal no HTML se não existir
    criarModalHTML();
    
    // Seleciona elementos do modal
    const modal = document.getElementById('personagem-modal');
    const modalContent = document.querySelector('.modal-personagem-content');
    const closeBtn = document.querySelector('.modal-personagem-close');
    
    // Função para verificar se um elemento existe
    function verificarElementos() {
        console.log('Modal existe:', !!modal);
        console.log('Botões "Ver mais" encontrados:', document.querySelectorAll('[onclick*="verMais"], .ver-mais-btn, .botao-ver-mais, [data-action="ver-detalhes"]').length);
    }
    
    verificarElementos();
    
    // Múltiplos seletores para capturar diferentes tipos de botões "Ver mais"
    const seletoresBotoes = [
        '.ver-detalhes-btn',
        '.ver-mais-btn', 
        '.botao-ver-mais',
        '.btn-ver-mais',
        '[data-action="ver-detalhes"]',
        '[onclick*="verMais"]',
        'button[onclick*="verMais"]'
    ];
    
    // Adiciona eventos para todos os seletores possíveis
    seletoresBotoes.forEach(seletor => {
        const botoes = document.querySelectorAll(seletor);
        botoes.forEach(btn => {
            console.log('Adicionando evento ao botão:', btn);
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const personagemCard = this.closest('.personagem-card, .cartao-personagem, .card-personagem');
                if (personagemCard) {
                    console.log('Abrindo modal para:', personagemCard);
                    abrirModal(personagemCard);
                } else {
                    console.error('Card do personagem não encontrado para o botão:', this);
                }
            });
        });
    });
    
    // Função global para ser chamada por onclick
    window.verMaisPersonagem = function(elemento) {
        console.log('verMaisPersonagem chamada com:', elemento);
        const personagemCard = elemento.closest('.personagem-card, .cartao-personagem, .card-personagem');
        if (personagemCard) {
            abrirModal(personagemCard);
        } else {
            console.error('Card do personagem não encontrado');
        }
    };
    
    // Observa mudanças no DOM para botões adicionados dinamicamente
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1) { // Element node
                    // Busca por novos botões "Ver mais"
                    seletoresBotoes.forEach(seletor => {
                        const novosBotoes = node.querySelectorAll ? node.querySelectorAll(seletor) : [];
                        novosBotoes.forEach(btn => {
                            btn.addEventListener('click', function(e) {
                                e.preventDefault();
                                e.stopPropagation();
                                const personagemCard = this.closest('.personagem-card, .cartao-personagem, .card-personagem');
                                if (personagemCard) {
                                    abrirModal(personagemCard);
                                }
                            });
                        });
                    });
                }
            });
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // Função para criar o modal no HTML
    function criarModalHTML() {
        // Verifica se o modal já existe
        if (document.getElementById('personagem-modal')) {
            console.log('Modal já existe');
            return;
        }
        
        const modalHTML = `
            <div id="personagem-modal" class="modal-personagem-overlay">
                <div class="modal-personagem-content">
                    <div class="modal-personagem-header">
                        <h2 id="modal-nome">Nome do Personagem</h2>
                        <button class="modal-personagem-close">&times;</button>
                    </div>
                    <div class="modal-personagem-body">
                        <div class="modal-personagem-avatar">
                            <img id="modal-avatar" src="" alt="" style="display:none;">
                            <div id="modal-avatar-placeholder" class="avatar-placeholder">?</div>
                        </div>
                        <div class="modal-personagem-info">
                            <span id="modal-classe" class="modal-personagem-classe">Classe</span>
                            <p id="modal-descricao" class="modal-personagem-descricao">Descrição do personagem</p>
                            <div id="modal-stats" class="modal-personagem-stats">
                                <!-- Stats serão inseridas dinamicamente -->
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        console.log('Modal criado no DOM');
        
        // Adiciona o CSS
        adicionarCSS();
    }
    
    // Função para extrair informações do card do personagem
    function extrairInformacoesPersonagem(personagemCard) {
        const info = {
            nome: 'Personagem Desconhecido',
            classe: 'Classe Desconhecida',
            descricao: 'Descrição não disponível',
            avatar: null,
            stats: []
        };
        
        // Múltiplos seletores para nome
        const seletoresNome = [
            '.personagem-nome',
            '.nome-personagem', 
            '.card-titulo',
            '.titulo-personagem',
            'h3',
            'h2'
        ];
        
        for (let seletor of seletoresNome) {
            const elemento = personagemCard.querySelector(seletor);
            if (elemento && elemento.textContent.trim()) {
                info.nome = elemento.textContent.trim();
                break;
            }
        }
        
        // Múltiplos seletores para classe
        const seletoresClasse = [
            '.personagem-classe',
            '.classe-personagem',
            '.card-tipo',
            '.tipo-personagem',
            '.badge',
            '.tag'
        ];
        
        for (let seletor of seletoresClasse) {
            const elemento = personagemCard.querySelector(seletor);
            if (elemento && elemento.textContent.trim()) {
                info.classe = elemento.textContent.trim();
                break;
            }
        }
        
        // Múltiplos seletores para descrição
        const seletoresDescricao = [
            '.personagem-descricao',
            '.descricao-personagem',
            '.card-descricao',
            '.card-texto',
            'p'
        ];
        
        for (let seletor of seletoresDescricao) {
            const elemento = personagemCard.querySelector(seletor);
            if (elemento && elemento.textContent.trim() && 
                elemento.textContent.trim() !== info.nome && 
                elemento.textContent.trim() !== info.classe) {
                info.descricao = elemento.textContent.trim();
                break;
            }
        }
        
        // Busca por avatar
        const avatar = personagemCard.querySelector('.personagem-avatar img, .avatar-personagem img, .card-imagem img, img');
        if (avatar && avatar.src) {
            info.avatar = avatar.src;
        }
        
        // Busca por stats
        const stats = personagemCard.querySelectorAll('.stat, .estatistica, .info-item');
        stats.forEach(stat => {
            const label = stat.querySelector('.stat-label, .estatistica-label, .info-label, dt');
            const valor = stat.querySelector('.stat-valor, .estatistica-valor, .info-valor, dd');
            
            if (label && valor) {
                info.stats.push({
                    label: label.textContent.trim(),
                    valor: valor.textContent.trim()
                });
            }
        });
        
        // Se não encontrou stats, cria algumas básicas
        if (info.stats.length === 0) {
            info.stats = [
                { label: 'Tipo', valor: info.classe },
                { label: 'Status', valor: 'Ativo' }
            ];
        }
        
        console.log('Informações extraídas:', info);
        return info;
    }
    
    // Função para abrir modal com detalhes do personagem
    function abrirModal(personagemCard) {
        console.log('Abrindo modal para card:', personagemCard);
        
        if (!modal) {
            console.error('Modal não encontrado!');
            return;
        }
        
        // Extrai informações do card
        const info = extrairInformacoesPersonagem(personagemCard);
        
        // Preenche o modal com as informações
        document.getElementById('modal-nome').textContent = info.nome;
        document.getElementById('modal-classe').textContent = info.classe;
        document.getElementById('modal-descricao').textContent = info.descricao;
        
        // Define a classe CSS baseada no tipo do personagem
        const modalContent = document.querySelector('.modal-personagem-content');
        modalContent.className = 'modal-personagem-content';
        const classeNormalizada = info.classe.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        modalContent.classList.add(`modal-${classeNormalizada}`);
        
        // Configura o avatar
        const modalAvatar = document.getElementById('modal-avatar');
        const modalAvatarPlaceholder = document.getElementById('modal-avatar-placeholder');
        
        if (info.avatar) {
            modalAvatar.src = info.avatar;
            modalAvatar.alt = info.nome;
            modalAvatar.style.display = 'block';
            modalAvatarPlaceholder.style.display = 'none';
        } else {
            modalAvatar.style.display = 'none';
            modalAvatarPlaceholder.style.display = 'flex';
        }
        
        // Preenche as estatísticas
        const modalStats = document.getElementById('modal-stats');
        modalStats.innerHTML = '';
        
        info.stats.forEach(stat => {
            const statElement = document.createElement('div');
            statElement.className = 'modal-stat';
            statElement.innerHTML = `
                <span class="stat-label">${stat.label}</span>
                <span class="stat-valor">${stat.valor}</span>
            `;
            modalStats.appendChild(statElement);
        });
        
        // Mostra o modal
        modal.classList.add('modal-ativo');
        document.body.style.overflow = 'hidden';
        
        console.log('Modal aberto com sucesso');
    }
    
    // Função para fechar o modal
    function fecharModal() {
        if (modal) {
            modal.classList.remove('modal-ativo');
            document.body.style.overflow = '';
            console.log('Modal fechado');
        }
    }
    
    // Eventos para fechar o modal
    if (closeBtn) {
        closeBtn.addEventListener('click', fecharModal);
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                fecharModal();
            }
        });
    }
    
    // Fechar com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('modal-ativo')) {
            fecharModal();
        }
    });
    
    // Eventos dos botões de ação no modal
    
    
    // Função para adicionar CSS
    function adicionarCSS() {
        if (document.querySelector('#modal-personagem-styles')) {
            console.log('CSS do modal já existe');
            return;
        }
        
        const styles = `
            <style id="modal-personagem-styles">
            .modal-personagem-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                backdrop-filter: blur(5px);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }

            .modal-personagem-overlay.modal-ativo {
                opacity: 1;
                visibility: visible;
            }

            .modal-personagem-content {
                background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
                border-radius: 20px;
                max-width: 700px;
                width: 90%;
                max-height: 85vh;
                overflow-y: auto;
                transform: scale(0.7) translateY(50px);
                transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
                border: 1px solid rgba(255, 255, 255, 0.2);
            }

            .modal-ativo .modal-personagem-content {
                transform: scale(1) translateY(0);
            }

            .modal-personagem-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 25px 30px;
                border-bottom: 2px solid #e9ecef;
                background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
                color: white;
                border-radius: 20px 20px 0 0;
            }

            .modal-personagem-header h2 {
                margin: 0;
                font-size: 1.8rem;
                font-weight: 700;
                text-shadow: 0 2px 4px rgba(0,0,0,0.3);
            }

            .modal-personagem-close {
                background: rgba(255, 255, 255, 0.2);
                border: none;
                font-size: 28px;
                cursor: pointer;
                color: white;
                padding: 5px;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
            }

            .modal-personagem-close:hover {
                background: rgba(255, 255, 255, 0.3);
                transform: rotate(90deg);
            }

            .modal-personagem-body {
                padding: 30px;
                display: flex;
                gap: 25px;
            }

            .modal-personagem-avatar {
                flex-shrink: 0;
                text-align: center;
            }

            .modal-personagem-avatar img {
                width: 150px;
                height: 150px;
                object-fit: cover;
                border-radius: 20px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                border: 3px solid #fff;
            }

            .avatar-placeholder {
                width: 150px;
                height: 150px;
                background: linear-gradient(135deg, #f1f3f4 0%, #e8eaf6 100%);
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 60px;
                color: #9e9e9e;
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            }

            .modal-personagem-info {
                flex: 1;
            }

            .modal-personagem-classe {
                display: inline-block;
                background: linear-gradient(45deg, #ff6b6b, #ee5a24);
                color: white;
                padding: 8px 16px;
                border-radius: 25px;
                font-size: 0.85rem;
                font-weight: 700;
                text-transform: uppercase;
                margin-bottom: 15px;
                box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
                letter-spacing: 0.5px;
            }

            .modal-personagem-descricao {
                margin: 0 0 25px 0;
                line-height: 1.7;
                color: #495057;
                font-size: 1rem;
                text-align: justify;
            }

            .modal-personagem-stats {
                background: #f8f9fa;
                border-radius: 15px;
                padding: 20px;
                margin-bottom: 25px;
                border-left: 4px solid #667eea;
            }

            .modal-stat {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px 0;
                border-bottom: 1px solid #e9ecef;
                transition: background-color 0.2s ease;
            }

            .modal-stat:hover {
                background-color: rgba(102, 126, 234, 0.05);
                margin: 0 -10px;
                padding-left: 10px;
                padding-right: 10px;
                border-radius: 8px;
            }

            .modal-stat:last-child {
                border-bottom: none;
            }

            .modal-stat .stat-label {
                font-weight: 600;
                color: #343a40;
                font-size: 0.95rem;
            }

            .modal-stat .stat-valor {
                color: #6c757d;
                font-weight: 500;
            }

            .modal-personagem-actions {
                display: flex;
                gap: 15px;
                justify-content: center;
            }

            .modal-personagem-actions button {
                flex: 1;
                padding: 12px 20px;
                border: none;
                border-radius: 25px;
                font-weight: 600;
                font-size: 0.9rem;
                cursor: pointer;
                transition: all 0.3s ease;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }

            .btn-favoritar {
                background: linear-gradient(45deg, #ffd32a, #ff9500);
                color: white;
                box-shadow: 0 4px 15px rgba(255, 211, 42, 0.4);
            }

            .btn-favoritar:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(255, 211, 42, 0.6);
            }

            .btn-compartilhar {
                background: linear-gradient(45deg, #667eea, #764ba2);
                color: white;
                box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
            }

            .btn-compartilhar:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
            }

            @media (max-width: 768px) {
                .modal-personagem-content {
                    width: 95%;
                    margin: 20px;
                    max-height: 90vh;
                }
                
                .modal-personagem-body {
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    padding: 20px;
                    gap: 20px;
                }
                
                .modal-personagem-header {
                    padding: 20px;
                }

                .modal-personagem-header h2 {
                    font-size: 1.4rem;
                }

                .modal-personagem-actions {
                    flex-direction: column;
                }
            }
            </style>
        `;
        
        document.head.insertAdjacentHTML('beforeend', styles);
        console.log('CSS do modal adicionado');
    }
    
    // Debug: Log quando o script é executado
    console.log('Sistema de modal inicializado');
});

// Função global adicional para compatibilidade
window.abrirModalPersonagem = function(elemento) {
    console.log('abrirModalPersonagem chamada');
    if (typeof window.verMaisPersonagem === 'function') {
        window.verMaisPersonagem(elemento);
    }
};