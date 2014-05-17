var scriptPath = WScript.ScriptFullName;
scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf(WScript.ScriptName));
var fso = new ActiveXObject("Scripting.FileSystemObject");
var folder = fso.GetFolder(scriptPath);

var suffixOfTemp = "_TEMP_";

//確認ダイアログ
var wshShell = new ActiveXObject("WScript.Shell");
var ans = wshShell.Popup(scriptPath + " において、空のフォルダの削除とサブフォルダ一つしかないフォルダを浅くする処理を行います", 0, "実行確認", 1 + 64);

if( ans == 2 ) {
    WScript.Quit(-1);
}
//本番
var subFolderCollection = folder.SubFolders;
var subfolder;

var e = new Enumerator(subFolderCollection);

for (; !e.atEnd(); e.moveNext()) {
    subfolder = e.item();
    if (subfolder.files.count == 0) {
        if (subfolder.SubFolders.count == 0) {
            subfolder.Delete();
        } else if (subfolder.SubFolders.count == 1) {
            var sube = new Enumerator(subfolder.SubFolders);
            var subsubFolder = sube.item();
            var sameName = false;
            var movedFolderPath;
            if (subfolder.Name != subsubFolder.Name) {
                //
            } else {
                subsubFolder.Name = subsubFolder.Name + suffixOfTemp;
                sameName = true;
            }
            movedFolderPath = scriptPath + subsubFolder.Name;
           // WScript.Echo("処理 : " + movedFolderPath);
            subsubFolder.Move(scriptPath);
            if (subfolder.SubFolders.count == 0) {
                var tempPath = subfolder.Path + subfolder.Name;
                subfolder.Delete();
            } else {
                WScript.Echo("Error");
                WScript.Quit(-1);
            }
        } else {
            WScript.Echo("複数のサブフォルダ : " + subfolder.Name);
        }
    }
}
WScript.Echo("処理が終了しました");
