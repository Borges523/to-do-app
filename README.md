# to-do-app
📘 README.md — To-Do List Acadêmica
# 📋 To-Do List Acadêmica

Uma aplicação web simples de lista de tarefas (To-Do List), desenvolvida com HTML, CSS e JavaScript puro, com foco em organização de atividades acadêmicas.

---

## 🚀 Funcionalidades

- ✅ Adicionar tarefas
- 🎯 Definir prioridade (Alta, Média, Baixa)
- ✔️ Marcar tarefas como concluídas
- ❌ Remover tarefas
- 🕒 Registro automático de data e hora
- 💾 Salvamento automático no navegador (LocalStorage)
- 🎨 Cores diferentes para cada prioridade

---

## 🛠️ Tecnologias Utilizadas

- HTML5 → Estrutura da aplicação
- CSS3 → Estilização e layout
- JavaScript (Vanilla JS) → Lógica do sistema

---

## 📂 Estrutura do Projeto


index.html


Todo o projeto foi desenvolvido em um único arquivo, contendo:
- HTML (estrutura)
- CSS (estilo interno)
- JavaScript (funcionalidade)

---

## 🧠 Como o Sistema Funciona

A aplicação funciona com base em três pilares principais:

### 1. Interface (HTML)

Responsável pela estrutura da página:

- Campo de entrada (`input`) → onde o usuário digita a tarefa
- Seleção (`select`) → define a prioridade
- Botão → adiciona a tarefa
- Lista (`ul`) → exibe as tarefas

---

### 2. Estilização (CSS)

Define o visual da aplicação:

- Layout centralizado
- Cores por prioridade:
  - 🔴 Alta → vermelho claro
  - 🟡 Média → amarelo
  - 🟢 Baixa → verde
- Classe `.concluida`:
  - Aplica risco no texto
  - Diminui opacidade

---

### 3. Lógica (JavaScript)

Controla todo o funcionamento do sistema.

---

## ⚙️ Estrutura de Dados

As tarefas são armazenadas em um **array de objetos**:

```js
{
  texto: "Estudar JavaScript",
  prioridade: "alta",
  data: "14/04/2026, 20:30",
  concluida: false
}
🔄 Fluxo do Sistema
➕ Adicionar tarefa
Usuário digita a tarefa
Escolhe prioridade
Clica em "Adicionar"
Sistema:
Cria um objeto
Adiciona ao array
Salva no localStorage
Atualiza a tela
✔️ Concluir tarefa
Altera o status concluida
Aplica estilo visual (riscado)
Atualiza armazenamento
❌ Remover tarefa
Remove do array usando splice()
Atualiza localStorage
Atualiza interface
💾 Persistência de dados

Utiliza o localStorage do navegador:

localStorage.setItem("tarefas", JSON.stringify(tarefas));
Os dados permanecem mesmo ao recarregar a página
🔑 Principais Funções
adicionarTarefa()

Cria uma nova tarefa e adiciona ao sistema.

renderizarTarefas()

Atualiza a interface exibindo todas as tarefas.

concluir(index)

Marca/desmarca tarefa como concluída.

remover(index)

Remove tarefa da lista.

salvarLocalStorage()

Salva os dados no navegador.

📚 Conceitos Aplicados
Manipulação de DOM
Eventos (addEventListener)
Arrays e objetos
JSON (stringify / parse)
Armazenamento local (localStorage)
Funções reutilizáveis
Separação de responsabilidades
🎯 Objetivo do Projeto

Este projeto foi desenvolvido com fins acadêmicos para praticar:

Lógica de programação
Desenvolvimento web básico
Organização de código
Interação com o usuário
🧪 Possíveis Melhorias Futuras
✏️ Editar tarefas
🔍 Filtro por prioridade
📱 Responsividade melhorada
🌙 Modo escuro
🔔 Notificações
👨‍💻 Autor

Desenvolvido por Jefferson Borges
Projeto acadêmico — Análise e Desenvolvimento de Sistemas

📌 Conclusão

Este sistema demonstra como é possível criar uma aplicação funcional utilizando apenas JavaScript puro, aplicando conceitos fundamentais de programação e desenvolvimento web.
