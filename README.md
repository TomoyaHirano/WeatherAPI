# WeatherAPI

## 注釈
このリポジトリは Code Chrysalis の生徒であるときに作成しました（This was created during my time as a student at Code Chrysalis）

## Table of Contents
**[What is WeatherAPI](#what-is-weatherapi)**<br>
**[HOW TO Install](#how-to-install)**<br>
**[HOW TO RUN](#how-to-run)**<br>
**[Links](#links)**<br>

## What is WeatherAPI
- 天気予報情報が取得できるAPI　と　天気の実測値をユーザが登録するためのAPIです。<br/>
API仕様は以下を参照してください。<br/>
https://tomoyahirano.github.io/WeatherAPI/dist/index.html#/
<br/>
- 以下のように、天気予報情報と天気実測値情報を取り扱うAPIです（※天気実測値情報は現在実装中）。<br/>
![er-image](https://user-images.githubusercontent.com/71970550/99187648-41115080-279b-11eb-89e0-accb601b97c4.png)

## HOW TO INSTALL
* 利用するデータベースをセットアップする
  - Postgresqlをインストールし、利用するdatabaseオブジェクトを作成してください。
  - 「src/ormconfig.ts」を編集し次の５つの項目を編集してください。
    - host: APサーバからみた、DBサーバのホスト名。例：localhost
    - port: Postgresqlの待受ポート番号。例：5432
    - username: Postgresqlへアクセスするときのユーザ名。例：postgres
    - password: Postgresqlへアクセスするときのパスワード。例：password
    - database : 利用するPostgresqlのdatabaseオブジェクト名。
* yarn migrateを使用してマイグレーションを実行し,psqlでデータベースを確認する。
* yarn seedを利用して、seedファイルを実行し、初期DB状態を構築する。<br/>（参考：https://www.npmjs.com/package/typeorm-seeding）

## HOW TO RUN
* コマンド実行
  - yarn
  - yarn run start:dev
* ブラウザを開き「http://localhost:3000/index.html」へアクセス。<br/>※ホスト名はご自身の環境に合わせて修正してください。

## Links
- サンプルデータセットとして、気象庁の以下のオープンデータを利用しています。https://www.data.go.jp/data/dataset/mlit_20140919_0726

