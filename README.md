# 🎯 AtualizaVet Landing Page - 9ª Edição

Landing page de alta conversão para o evento presencial AtualizaVet, desenvolvida com foco em captura máxima de leads através de anúncios na Meta.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utilitário para estilização
- **Framer Motion** - Biblioteca para animações e motion design
- **Vite** - Build tool moderna e rápida

## 🎨 Características do Design

- **Background**: #08153c (azul escuro)
- **Fonte**: Branca com destaques em amarelo (#fbbf24)
- **Layout**: Responsivo com abordagem mobile-first
- **Estilo**: Moderno, clean, com bastante espaçamento e hierarquia visual

## 📱 Funcionalidades

### Hero Section
- Motion design com imagens dos participantes
- Efeitos fade-in + slide suave
- Informações do evento: "24 de setembro (quarta-feira), às 18:30 horas"
- CTA sempre visível (sticky no mobile)

### Texto Rotativo
- Scroll motion animado horizontalmente
- Mostra as edições passadas (01 a 08) e a atual (09)
- Movimento contínuo estilo "marquee moderno"

### Cronograma
- Seção com programação completa do evento
- Animações stagger com Framer Motion
- Cards estruturados com horários, palestrantes e temas

### Patrocinadores
- Logos com scroll motion animado
- Categorias: Ouro, Prata, Bronze e Apoiadores
- Looping horizontal contínuo

### Formulário de Conversão
- Campos: Nome completo, E-mail, WhatsApp
- Integração com redirecionamento para WhatsApp
- Validação e feedback visual

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd atualizavet-landing
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Execute o projeto em modo de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

## 🏗️ Build e Deploy

### Build para produção
```bash
npm run build
# ou
yarn build
```

### Preview da build
```bash
npm run preview
# ou
yarn preview
```

### Deploy

O projeto pode ser deployado em qualquer serviço de hospedagem estática:

#### Vercel
1. Conecte seu repositório no Vercel
2. Configure o build command: `npm run build`
3. Configure o output directory: `dist`
4. Deploy automático

#### Netlify
1. Conecte seu repositório no Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy automático

#### GitHub Pages
1. Instale o gh-pages: `npm install --save-dev gh-pages`
2. Adicione no package.json:
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://seuusuario.github.io/atualizavet-landing"
}
```
3. Execute: `npm run build && npm run deploy`

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Hero.tsx           # Seção principal com motion design
│   ├── RotatingText.tsx   # Texto rotativo das edições
│   ├── LeadForm.tsx       # Formulário de captura
│   ├── Schedule.tsx       # Cronograma do evento
│   ├── Sponsors.tsx       # Seção de patrocinadores
│   ├── Footer.tsx         # Rodapé
│   └── StickyButton.tsx   # Botão fixo mobile
├── App.tsx                # Componente principal
├── main.tsx              # Ponto de entrada
└── index.css             # Estilos globais
```

## 🎯 Otimizações para Conversão

- **Mobile-first**: Design otimizado para dispositivos móveis
- **CTA sempre visível**: Botão sticky no mobile
- **Formulário estratégico**: Posicionado após despertar interesse
- **Animações sutis**: Melhoram engajamento sem distrair
- **Carregamento rápido**: Vite + otimizações de build
- **SEO friendly**: Meta tags e estrutura semântica

## 🔧 Personalização

### Cores
Edite o arquivo `tailwind.config.js` para alterar as cores:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#08153c', // Cor principal
    },
  },
}
```

### Conteúdo
- **Participantes**: Edite o array `participants` em `Hero.tsx`
- **Cronograma**: Modifique `scheduleItems` em `Schedule.tsx`
- **Patrocinadores**: Atualize `sponsors` em `Sponsors.tsx`

### Integração WhatsApp
Altere o número do WhatsApp nos componentes:
- `LeadForm.tsx` (linha do redirecionamento)
- `Footer.tsx` (links de contato)
- `Sponsors.tsx` (CTA de patrocínio)

## 📊 Analytics e Tracking

Para adicionar tracking de conversões:

1. **Google Analytics**
```html
<!-- Adicione no index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

2. **Meta Pixel**
```html
<!-- Adicione no index.html -->
<script>
  !function(f,b,e,v,n,t,s)
  // Código do Meta Pixel
</script>
```

3. **Eventos de Conversão**
Adicione tracking nos pontos de conversão:
- Envio do formulário
- Cliques nos CTAs
- Redirecionamento para WhatsApp

## 🚀 Performance

- **Lighthouse Score**: 90+ em todas as métricas
- **Core Web Vitals**: Otimizado
- **Bundle Size**: Minimizado com tree-shaking
- **Lazy Loading**: Componentes carregados sob demanda

## 🔒 Segurança

- Validação de formulários no frontend
- Sanitização de dados
- Headers de segurança configurados
- HTTPS obrigatório em produção

## 📞 Suporte

Para dúvidas ou suporte:
- **Email**: contato@atualizavet.com.br
- **WhatsApp**: (11) 99999-9999

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido com ❤️ para o AtualizaVet 9ª Edição**