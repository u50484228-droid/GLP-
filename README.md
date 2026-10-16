# GLPro™ - Official Sales Page

Landing page oficial de alta conversão para o suplemento **GLPro**.

## 🚀 Como Rodar Localmente

1. Clone o repositório:
```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd <PASTA_DO_REPOSITORIO>
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
Acesse em `http://localhost:3000`.

---

## 📦 Como Compilar para Produção

Para gerar a versão otimizada pronta para publicação:
```bash
npm run build
```
Os arquivos finais estarão na pasta `dist/`.

---

## 🌐 Publicação Automática no GitHub Pages

Este repositório já inclui um fluxo de automação configurado em `.github/workflows/deploy.yml`.

Para ativar a publicação automática:
1. Vá nas configurações do seu repositório no GitHub (**Settings**).
2. Na barra lateral esquerda, clique em **Pages**.
3. Em **Build and deployment > Source**, selecione **GitHub Actions**.
4. A cada novo `git push` na branch `main` ou `master`, o GitHub irá compilar o projeto e colocar a página no ar automaticamente!
