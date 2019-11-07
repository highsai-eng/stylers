# stylers
Stylers repository.

## ローカル環境構築
下記はMacOSでのローカル環境構築手順です。

### Node.jsとnpmのインストール

Node.jsのバージョン管理ツールからNode.jsとnpmをインストールします。
```shell script
brew install nodebrew
nodebrew install-binary v8.16.1
nodebrew use v8.16.1
```

下記コマンドでNode.jsを環境変数に設定します。
`.bash_profile`がホームディレクトリにない場合は作成してください。
```shell script
echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.bash_profile
source ~/.bash_profile
```

ターミナルを再起動してNode.jsのバージョンが`v8.16.1`であることを確認してください。
```shell script
node -v
npm -v
```

### yarnのインストール

パッケージマネージャーのyarnをインストールします。
```shell script
brew install yarn
```

下記コマンドでyarnを環境変数に設定します。
```shell script
echo 'exprot PATH=$HOME/.yarn/bin:$PATH' >> ~/.bash_profile
source ~/.bash_profile
```

### expo-cliのインストール

デバッグするためのexpo-cliをインストールします。
```shell script
yarn global add expo-cli
```

### リポジトリのクローンと設定

任意のディレクトリでリポジトリをクローンします。
SSHの設定がめんどくさい場合は、HTTPでクローンしてください。

SSHの場合
```shell script
git clone git@github.com:highsai-eng/stylers.git
```

HTTPの場合
```shell script
git clone https://github.com/highsai-eng/stylers.git
```

開発用ブランチに切り替えます。
```shell script
cd stylers
git branch
git checkout develop/0.1
```

### 動作確認

依存関係を解決してビルドを実行します。
ターミナルにQRコードが表示されるのでiPhoneなどで読み取り、 Expo Client で実行してください。
```shell script
yarn install
yarn start
```

## 開発環境構築

### amplify cli のインストール
```shell script
yarn global add @aws-amplify/cli
```
