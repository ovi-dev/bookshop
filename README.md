# adrianovi

Mi stack personal de dependencias para proyectos React/Next.js. Instala todo de una sola vez.

## Instalación

```bash
npm install adrianovi
```

Si es un proyecto React/Next.js añade también los peers:

```bash
npm install adrianovi react react-dom
```

## Dependencias incluidas

| Paquete                          | Versión | Uso                      |
| -------------------------------- | ------- | ------------------------ |
| `axios`                          | ^1.x    | HTTP client              |
| `zod`                            | ^3.x    | Validación de esquemas   |
| `react-hook-form`                | ^7.x    | Formularios              |
| `@hookform/resolvers`            | ^3.x    | Integración RHF + Zod    |
| `@tanstack/react-query`          | ^5.x    | Data fetching y caché    |
| `@tanstack/react-query-devtools` | ^5.x    | DevTools de TanStack     |
| `zustand`                        | ^5.x    | Estado global            |
| `react-hot-toast`                | ^2.x    | Notificaciones (clásico) |
| `sonner`                         | ^2.x    | Notificaciones (moderno) |

## Uso

```ts
// HTTP
import { axios } from "adrianovi";

// Validación
import { z } from "adrianovi";

// Formularios
import { useForm, zodResolver, Controller } from "adrianovi";

// Data fetching
import {
  useQuery,
  useMutation,
  QueryClient,
  QueryClientProvider,
} from "adrianovi";

// Estado global
import { createStore } from "adrianovi";

// Notificaciones — react-hot-toast
import { toast, Toaster } from "adrianovi";

// Notificaciones — sonner
import { notify, SonnerToaster } from "adrianovi";
```

---

## Agregar una dependencia nueva

1. Instalar el paquete:

```bash
npm install nombre-paquete
```

> Si aparece un error de peer deps, usa:
>
> ```bash
> npm install nombre-paquete --legacy-peer-deps
> ```
>
> Para evitar tener que escribirlo cada vez, crea un archivo `.npmrc` en la raíz del proyecto:
>
> ```
> legacy-peer-deps=true
> ```

2. Exportarla en `src/index.ts`:

```ts
export { algo } from "nombre-paquete";
export type { AlgunTipo } from "nombre-paquete";
```

3. Compilar y publicar:

```bash
npm version patch
npm publish
```

---

## Actualizar dependencias existentes

Ejecuta el script incluido — detecta versiones nuevas, instala y compila:

```bash
npm run update
```

El script pregunta antes de actualizar y al final te ofrece publicar directo a npm.

---

## Publicar una nueva versión manualmente

```bash
# patch: 0.1.1 → 0.1.2  (correcciones)
# minor: 0.1.1 → 0.2.0  (nueva dependencia)
# major: 0.1.1 → 1.0.0  (cambio que rompe compatibilidad)

npm version patch   # o minor / major
npm publish         # compila automáticamente antes de subir
```

> La primera vez necesitas iniciar sesión:
>
> ```bash
> npm login
> ```

npm publish

```

```
