# 📋 Gerenciador de Tarefas

<div align="center">

![Language](https://img.shields.io/badge/language-JavaScript-yellow.svg)
![Status](https://img.shields.io/badge/status-Active-brightgreen.svg)

Um aplicativo web moderno e interativo para gerenciar suas tarefas do dia a dia utilizando **Arrays** e **Loops** em JavaScript.

[🚀 Abrir no Navegador](#como-usar) • [📚 Documentação](#recursos) • [💡 Aprender](#tecnologias-utilizadas)

</div>

---

## 🎯 Sobre o Projeto

Este é um **Gerenciador de Tarefas** desenvolvido como projeto educacional para aprender conceitos fundamentais de programação JavaScript, como:
- Arrays (manipulação de dados)
- Loops (iteração)
- Estruturas condicionais
- Métodos de array (`push`, `splice`)

A aplicação apresenta uma interface limpa e intuitiva, permitindo que você gerencie suas tarefas de forma simples e eficiente.

---

## ✨ Recursos

✅ **Adicionar Tarefas** - Crie novas tarefas rapidamente  
✅ **Listar Tarefas** - Visualize todas as tarefas salvas  
✅ **Remover Tarefas** - Delete tarefas por índice  
✅ **Concluir Tarefas** - Marque tarefas como concluídas  
✅ **Interface Responsiva** - Funciona em desktop e mobile  
✅ **Design Moderno** - UI clean e profissional  

---

## 🛠 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos e responsivos
- **JavaScript (ES6)** - Lógica da aplicação
- **Arrays & Loops** - Estruturas de dados e controle de fluxo

---

## 🚀 Como Usar

### Abrir no Navegador

#### Opção 1: Localmente (Recomendado)
1. **Clone ou baixe o repositório**
   ```bash
   git clone https://github.com/seu-usuario/gerenciador-tarefas.git
   cd gerenciador-tarefas
   ```

2. **Abra o arquivo `index.html` no navegador**
   - Clique duplo em `index.html` ou
   - Clique com botão direito → "Abrir com" → Seu navegador favorito

3. **Use o aplicativo**
   - Clique em **"▶ INICIAR SISTEMA"**
   - Escolha a opção desejada no menu
   - Digite os dados solicitados

#### Opção 2: Servidor Local (Com Python)
```bash
# Python 3
python -m http.server 8000

# Depois acesse: http://localhost:8000
```

#### Opção 3: Servidor Local (Com Node.js)
```bash
# Instale http-server globalmente
npm install -g http-server

# Execute
http-server

# Depois acesse: http://127.0.0.1:8080
```

---

## 📖 Menu de Operações

Ao iniciar o sistema, você terá as seguintes opções:

```
1️⃣  ADICIONAR TAREFA
   └─ Adicione uma nova tarefa à lista

2️⃣  LISTAR TAREFAS
   └─ Visualize todas as tarefas com seus índices

3️⃣  REMOVER TAREFA
   └─ Delete uma tarefa pelo seu índice

4️⃣  CONCLUIR TAREFA
   └─ Marque uma tarefa como concluída

5️⃣  SAIR
   └─ Encerre o aplicativo
```

---

## 📁 Estrutura do Projeto

```
📦 gerenciador-tarefas/
 ┣ 📄 index.html      # Arquivo principal HTML
 ┣ 📄 style.css       # Estilos CSS
 ┣ 📄 script.js       # Lógica JavaScript
 ┗ 📄 README.md       # Este arquivo
```

---

## 💻 Exemplo de Uso

```javascript
// Adicionar uma tarefa
// O aplicativo armazena em um array: tarefas = ["Estudar", "Exercitar"]

// Remover uma tarefa pelo índice
// Tira valores do array usando splice()

// A cada ação, o menu volta a aparecer até você escolher "Sair"
```

---

## 🎓 Conceitos de Aprendizagem

Este projeto demonstra:

### Arrays
```javascript
let tarefas = [];
tarefas.push("Nova Tarefa");        // Adiciona elemento
tarefas.splice(index, 1);           // Remove elemento
tarefas.length                      // Verifica tamanho
```

### Loops
```javascript
while (opcao !== "5") {             // Loop while
    // Menu continua aparecendo
}

for (let i = 0; i < tarefas.length; i++) {  // Loop for
    // Itera sobre as tarefas
}
```

### Estruturas Condicionais
```javascript
switch (opcao) {
    case "1": // Adicionar
    case "2": // Listar
    // ...
}
```
---

## 🌐 Requisitos

- Um navegador moderno (Chrome, Firefox, Safari, Edge)
- Acesso a JavaScript habilitado no navegador
- Nenhuma dependência externa

---
## 🤝 Contribuições

Contribuições são bem-vindas! Se encontrar algum bug ou tiver sugestões:

1. Abra uma [Issue](https://github.com/seu-usuario/gerenciador-tarefas/issues)
2. Faça um Fork do projeto
3. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
4. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
5. Push para a branch (`git push origin feature/MinhaFeature`)
6. Abra um Pull Request

---

## 📞 Contato

Para dúvidas ou sugestões, abra uma issue ou entre em contato através das redes sociais.

---

## 🙏 Agradecimentos

Obrigado por usar o Gerenciador de Tarefas! Se este projeto foi útil, considere dar uma ⭐ no repositório.

---

<div align="center">

*Última atualização: Fevereiro de 2026*

</div>
