WSHのJSでFF FlattenFolders_JScript_WSH
==========================

空のフォルダの削除とサブフォルダが一つしかないフォルダを浅くするWSH(Windows Script Host)のJScript

### このプロジェクトについて
見ての通り、サンプルプログラムレベルの内容しかありません。
かといって別の場所で作り直したりするのも面倒なので、せっかくだからリポジトリを作りました。

### 機能・使い方
このスクリプトとwsfファイルが置かれたフォルダの空のフォルダの削除とサブフォルダが一つしかないフォルダを浅くします。
使用するときにはこの二ファイルをコピーしてください。
Windowsならwsfファイルをダブルクリックか何かすれば動くんじゃないでしょうか。
このFlattenは、一段階しか浅くしません。たとえばフォルダ構成が
*hoge
    * piyo
        * foo
            * bar1
            * bar2
だった場合、
* piyo
    * foo
        * bar1
        * bar2
になります。
消えたフォルダは戻ってこないので、気を付けてください。

### 動作環境
* Windows Script Hostの動作する環境

ただし、作った人([@monotea_error](https://twitter.com/monotea_error))は Windows8.1Proでのみ動作確認を行っています。

### 開発環境など
Windows Script Hostで動作するJScriptをサクラエディタやTerapad、あるいはnotepadで編集しています。
当初はTypeScriptを試しましたが、TypeScriptの恩恵を全くと言っていいほど得られなかったのでやめにしました。
今後もしかしたらTypeScriptで作るように変わるかもしれません。

#### ライセンス
* MIT License

MIT ライセンスの下で公開する、オープンソース / フリーソフトウェアです。一応。
