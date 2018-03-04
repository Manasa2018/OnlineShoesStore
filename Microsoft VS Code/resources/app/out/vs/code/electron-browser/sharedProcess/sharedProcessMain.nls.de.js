/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/code/electron-browser/sharedProcess/sharedProcessMain.nls.de",{"vs/base/common/severity":["Fehler","Warnung","Info"],"vs/base/node/zip":["{0} wurde im ZIP nicht gefunden."],"vs/platform/configuration/common/configurationRegistry":["Standard-Konfiguration überschreibt","Zu überschreibende Einstellungen für Sprache {0} konfigurieren.","Zu überschreibende Editor-Einstellungen für eine Sprache konfigurieren.",'"{0}" kann nicht registriert werden. Die Eigenschaft stimmt mit dem Eigenschaftsmuster \'\\\\[.*\\\\]$\' zum Beschreiben sprachspezifischer Editor-Einstellungen überein. Verwenden Sie den Beitrag "configurationDefaults".','"{0}" kann nicht registriert werden. Diese Eigenschaft ist bereits registriert.'],"vs/platform/extensionManagement/common/extensionManagement":["Extensions","Einstellungen"],
"vs/platform/extensionManagement/node/extensionGalleryService":["Kann nicht heruntergeladen werden, da die Erweiterung, die mit der aktuellen VS Code Version '{0}' kompatibel ist, nicht gefunden werden kann. "],
"vs/platform/extensionManagement/node/extensionManagementService":['Die Erweiterung ist ungültig: "package.json" ist keine JSON-Datei.',"Bitte starten Sie Code vor der Neuinstallation von {0} neu.","Eine neuere Version dieser Erweiterung ist bereits installiert. Möchten Sie diese mit der älteren Version überschreiben?","Überschreiben","Abbrechen","Fehler während Installation der Abhängigkeiten. {0}","'{0}' kann nicht installiert werden: Es gibt keine mit VS Code '{1}' kompatible Version.","Die Erweiterung kann nicht installiert werden, da sie als problematisch gemeldet wurde.","Kann nicht installiert werden, da die abhängige Erweiterung '{0}', die mit der aktuellen VS Code Version '{1}' kompatibel ist, nicht gefunden werden kann. ","Fehler bei der Installation der Erweiterung. Beenden und starten Sie VS Code vor der erneuten Installation neu.","Fehler bei der Installation der Erweiterung. Beenden und starten Sie VS Code vor der erneuten Installation neu.",'Möchten Sie nur "{0}" oder auch die zugehörigen Abhängigkeiten deinstallieren?',"Nur","Alle","Abbrechen",'Möchten Sie "{0}" deinstallieren?',"OK","Abbrechen",'Die Erweiterung "{0}" kann nicht deinstalliert werden. Die Erweiterung "{1}" hängt von dieser Erweiterung ab.','Die Erweiterung "{0}" kann nicht deinstalliert werden. Die Erweiterungen "{1}" und "{2}" hängen von dieser Erweiterung ab.','Die Erweiterung "{0}" kann nicht deinstalliert werden. Die Erweiterungen "{1}" und "{2}" sowie weitere hängen von dieser Erweiterung ab.',"Die Erweiterung wurde nicht gefunden."],
"vs/platform/extensions/common/extensionsRegistry":['Gibt für VS Code-Erweiterungen die VS Code-Version an, mit der die Erweiterung kompatibel ist. Darf nicht "*" sein. Beispiel: ^0.10.5 gibt die Kompatibilität mit mindestens VS Code-Version 0.10.5 an.',"Der Herausgeber der VS Code-Extension.","Der Anzeigename für die Extension, der im VS Code-Katalog verwendet wird.","Die vom VS Code-Katalog zum Kategorisieren der Extension verwendeten Kategorien.","Das in VS Code Marketplace verwendete Banner.","Die Bannerfarbe für die Kopfzeile der VS Code Marketplace-Seite.","Das Farbdesign für die Schriftart, die im Banner verwendet wird.","Alle Beiträge der VS Code-Extension, die durch dieses Paket dargestellt werden.","Legt die Erweiterung fest, die im Marketplace als Vorschau gekennzeichnet werden soll.","Aktivierungsereignisse für die VS Code-Extension.","Ein Aktivierungsereignis wird beim Öffnen einer Datei ausgegeben, die in die angegebene Sprache aufgelöst wird.","Ein Aktivierungsereignis wird beim Aufrufen des angegebenen Befehls ausgegeben.","Ein Aktivierungsereignis wird ausgesandt, wenn ein Benutzer eine Debugging startet, oder eine Debug-Konfiguration erstellt.",'Ein Aktivierungsereignis ausgegeben, wenn ein "launch.json" erstellt werden muss (und alle provideDebugConfigurations Methoden aufgerufen werden müssen).',"Ein Aktivierungsereignis ausgegeben, wenn eine Debug-Sitzung mit dem spezifischen Typ gestartet wird (und eine entsprechende resolveDebugConfiguration-Methode aufgerufen werden muss).","Ein Aktivierungsereignis wird beim Öffnen eines Ordners ausgegeben, der mindestens eine Datei enthält, die mit dem angegebenen Globmuster übereinstimmt.","Ein Aktivierungsereignis wird beim Erweitern der angegebenen Ansicht ausgegeben.","Ein Aktivierungsereignis wird beim Start von VS Code ausgegeben. Damit für die Endbenutzer eine bestmögliche Benutzerfreundlichkeit sichergestellt ist, verwenden Sie dieses Aktivierungsereignis in Ihrer Erweiterung nur dann, wenn in Ihrem Anwendungsfall keine andere Kombination an Aktivierungsereignissen funktioniert.","Array aus Badges, die im Marketplace in der Seitenleiste auf der Seite mit den Erweiterungen angezeigt werden.","Die Bild-URL für den Badge.","Der Link für den Badge.","Eine Beschreibung für den Badge.",'Abhängigkeiten von anderen Erweiterungen. Der Bezeichner einer Erweiterung ist immer ${publisher}.${name}, beispielsweise "vscode.csharp".',"Ein Skript, das ausgeführt wird, bevor das Paket als VS Code-Extension veröffentlicht wird.","Der Pfad zu einem 128x128-Pixel-Symbol."],
"vs/platform/extensions/node/extensionValidator":["Der engines.vscode-Wert {0} konnte nicht analysiert werden. Verwenden Sie z. B. ^0.10.0, ^1.2.3, ^0.11.0, ^0.10.x usw.",'Die in "engines.vscode" ({0}) angegebene Version ist nicht spezifisch genug. Definieren Sie für VS Code-Versionen vor Version 1.0.0 bitte mindestens die gewünschte Haupt- und Nebenversion, z. B. ^0.10.0, 0.10.x, 0.11.0 usw.','Die in "engines.vscode" ({0}) angegebene Version ist nicht spezifisch genug. Definieren Sie für VS Code-Versionen nach Version 1.0.0 bitte mindestens die gewünschte Hauptversion, z. B. ^1.10.0, 1.10.x, 1.x.x, 2.x.x usw.',"Die Extension ist nicht mit dem Code {0} kompatibel. Die Extension erfordert {1}.","Es wurde eine leere Extensionbeschreibung abgerufen.",'Die Eigenschaft "{0}" ist erforderlich. Sie muss vom Typ "string" sein.','Die Eigenschaft "{0}" ist erforderlich. Sie muss vom Typ "string" sein.','Die Eigenschaft "{0}" ist erforderlich. Sie muss vom Typ "string" sein.','Die Eigenschaft "{0}" ist erforderlich und muss vom Typ "object" sein.','Die Eigenschaft "{0}" ist erforderlich. Sie muss vom Typ "string" sein.','Die Eigenschaft "{0}" kann ausgelassen werden oder muss vom Typ "string[]" sein.','Die Eigenschaft "{0}" kann ausgelassen werden oder muss vom Typ "string[]" sein.','Die Eigenschaften "{0}" und "{1}" müssen beide angegeben oder beide ausgelassen werden.','Die Eigenschaft "{0}" kann ausgelassen werden oder muss vom Typ "string" sein.','Es wurde erwartet, dass "main" ({0}) im Ordner ({1}) der Extension enthalten ist. Dies führt ggf. dazu, dass die Extension nicht portierbar ist.','Die Eigenschaften "{0}" und "{1}" müssen beide angegeben oder beide ausgelassen werden.','Die Extensionversion ist nicht mit "semver" kompatibel.'],
"vs/platform/localizations/common/localizations":["Trägt Lokalisierungen zum Editor bei","ID der Sprache, in die Anzeigezeichenfolgen übersetzt werden.","Name der Sprache in Englisch.","Name der Sprache in beigetragener Sprache.","Liste der Übersetzungen, die der Sprache zugeordnet sind.",'ID von VS Code oder der Erweiterung, für die diese Übersetzung beigetragen wird. Die ID von VS Code ist immer "vscode", und die ID einer Erweiterung muss im Format "publisherId.extensionName" vorliegen.','Die ID muss "vscode" sein oder im Format "publisherId.extensionName" vorliegen, um VS Code bzw. eine Erweiterung zu übersetzen.',"Ein relativer Pfad zu einer Datei mit Übersetzungen für die Sprache."],"vs/platform/message/common/message":["Schließen","Später","Abbrechen","...1 weitere Datei wird nicht angezeigt","...{0} weitere Dateien werden nicht angezeigt"],
"vs/platform/request/node/request":["HTTP",'Die zu verwendende Proxyeinstellung. Wenn diese Option nicht festgelegt wird, wird der Wert aus den Umgebungsvariablen "http_proxy" und "https_proxy" übernommen.',"Gibt an, ob das Proxyserverzertifikat anhand der Liste der bereitgestellten Zertifizierungsstellen überprüft werden soll.","Der Wert, der als Proxy-Authorization-Header für jede Netzwerkanforderung gesendet werden soll."],"vs/platform/telemetry/common/telemetryService":["Telemetrie","Aktivieren Sie das Senden von Nutzungsdaten und Fehlern an Microsoft."]});
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/f88bbf9137d24d36d968ea6b2911786bfe103002/core/vs\code\electron-browser\sharedProcess\sharedProcessMain.nls.de.js.map