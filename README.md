# urldecodecopy
エンコード前のURLをクリップボードにコピーする Google Chrome用の拡張機能です。
Google Help Community での回答用に、Chromeの拡張機能に詳しい Product Experts (Hikochang 氏)の力を借りて作成しました。

# タイトルの判定方法
https://news.yahoo.co.jp: article > header > h1 で判定
https://kitaney-wordpress.blogspot.com: h3 で判定
https://kitaney-google.blogspot.com: h3 で判定

# インストール方法
ダウンロード（ZIP圧縮）し、そのファイルを展開。
作成されたフォルダを動かさない場所に移動（フォルダを移動すればインストールのやり直しになります）
Chormeの拡張機能にある「パッケージ化されていな拡張機能を読み込む」より、展開したフォルダを選択

# アップグレード方法
新しいバージョンをダウンロードし、そのファイルを展開
作成されたフォルダの中身を、すでに置いていた拡張機能フォルダへコピーしてください。
＊フォルダが変更すれば別拡張機能として認識されます。


# 開発履歴
- 1.1: いくつかのサイトに対応
https://news.yahoo.co.jp, https://kitaney-wordpress.blogspot.com
- 1.0: リリース
基本的に最初に出てきた h1をタイトルにする
https://kitaney-google.blogspot.com 対応
