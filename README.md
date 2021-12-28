# RESAS API + React + Typescript + ApexCharts
デモページ：https://spadr.github.io/react-resas-spa/

開発環境：https://github.com/spadr/react-develop


## Scripts

### `npm start` : "react-scripts start"

### `npm run test` : Jest でテスト

### `npm run format` : "prettier \"\*_/_\" --write --ignore-unknown"

### `npm run lint` : "eslint --fix --ext .jsx,.js,.tsx,.ts ."


## 動作確認のための手順

### `開発環境をGit clone` $ git clone https://github.com/spadr/react-develop.git

### `cdを移動` $ cd react-develop

### `このリポジトリをGit clone` $ git clone https://github.com/spadr/react-resas-spa.git app

### `.env.exampleを.envにリネーム` $ mv .env.example .env

### `.envにRESASで取得した自分のAPI_KEYを記入する` $ nano .env

### `イメージをビルドし、コンテナを起動` $ docker-compose up -d --build

### `ログを確認` $ docker-compose logs -f node

### `ブラウザで確認` $ http://localhost:3000/

### `必要に応じてコンテナのターミナルを叩く` $ docker-compose exec node /bin/ash

### `コンテナを終了` $ docker-compose down


