# Santos Dumont — O tempo no pulso

Projeto Remotion + React + TypeScript em `santos-dumont/`.
Animação em português: **30 segundos, 1920 × 1080, 30 fps**, cinco cenas,
fundo escuro, branco e dourado. Ilustrações vetoriais originais e texto animado
por frames, sem assets remotos. O vídeo é silencioso (sem narração ou trilha).

## Desenvolvimento

```sh
cd santos-dumont
npm ci
npm run dev
```

Node.js 24 e npm 11 foram usados na validação. Se o diretório padrão de cache
não for gravável na nuvem, use `npm_config_cache=/workspace/.npm-cache npm ci`.

```sh
npm run typecheck
npm run build
npm run render
```

O comando de renderização usa Chromium em `/usr/bin/chromium`, H.264 e quatro
workers. Em outra máquina, instale Chromium nesse caminho ou passe o caminho
local via `--browser-executable` diretamente à CLI do Remotion.

## Vídeo

Arquivo entregue: [santos-dumont.mp4](santos-dumont/out/santos-dumont.mp4).
O MP4 está versionado para acompanhar a entrega solicitada. `node_modules` e
`build` são ignorados. As cenas podem ser editadas separadamente no Studio.

| Tempo   | Cena                                       |
| ------- | ------------------------------------------ |
| 0–6 s   | Santos Dumont: o tempo no pulso            |
| 6–12 s  | O aviador brasileiro em Paris              |
| 12–18 s | Consultar as horas sem soltar os controles |
| 18–24 s | A solução de Louis Cartier em 1904         |
| 24–30 s | O legado do Santos de Cartier              |

## Nota histórica

O Santos foi criado por Louis Cartier em 1904 para Alberto Santos Dumont.
O roteiro usa “um dos primeiros relógios de pulso masculinos”, em vez de
“primeiro relógio de pulso do mundo”: relógios de pulso existiam antes de 1904.
As ilustrações são interpretações estilizadas, não reconstruções documentais.
Referências para contextualização: [Santos de Cartier](https://www.cartier.com/en-us/watches/collections/santos-de-cartier/)
e [história da relojoaria Breguet](https://www.breguet.com/en/house-breguet/history).
