# Agentes de Voz — Demo

Landing page para que leads prueben agentes de voz con ElevenLabs Conversational AI.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).

## Despliegue en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo `demo`).
2. Sube este código a la rama `main`:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: voice agents demo"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/demo.git
   git push -u origin main
   ```

3. En el repositorio de GitHub ve a **Settings → Pages**.
4. En **Build and deployment**, selecciona **Source: GitHub Actions**.
5. El workflow `.github/workflows/deploy.yml` publicará automáticamente en cada push a `main`.

La URL será:

```text
https://TU_USUARIO.github.io/NOMBRE_DEL_REPO/
```

> Si renombras el repositorio, no hace falta cambiar código: el workflow usa el nombre del repo para la ruta base.

## Dominios en ElevenLabs

En el panel de ElevenLabs (**Conversational AI → tu agente → Security / Allowed domains**), añade:

| Entorno | Dominio |
|---------|---------|
| Desarrollo local | `localhost` |
| GitHub Pages | `TU_USUARIO.github.io` |
| Dominio propio (opcional) | `tudominio.com` |

No incluyas `https://`, rutas (`/demo`) ni puertos. Solo el hostname.

## Configurar agentes

Edita `src/config/agents.ts`:

- **Dental**: ya configurado con `agent_1701kvxsr07yehw9vfvqa3mmda17`
- **Restaurante**: sustituye `agent_PLACEHOLDER_RESTAURANT` por el ID real cuando lo tengas

## Estructura

```text
src/
├── components/       # UI por responsabilidad
│   ├── layout/       # Header, Footer
│   └── ui/           # Primitivos reutilizables
├── config/           # Datos de agentes
└── types/            # Tipos TypeScript
```
