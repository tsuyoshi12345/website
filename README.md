ようこそ、大阪工業大学ドローンプロジェクトのウェブサイト制作ページへ！

このページではWebページの仕様を記す。

目的

必要なページは？

どんな画面にする？

環境構築コマンド
#コンテナ作成
docker-compose build
#reactに必要なパッケージをインストール
docker-compose run --rm frontend sh -c "cd react-project && npm install"
#reactのアプリをビルド
docker compose run --rm frontend sh -c "cd /src/react-project && npm run build"
#コンテナ立ち上げ
docker-compose up -d 

担当


