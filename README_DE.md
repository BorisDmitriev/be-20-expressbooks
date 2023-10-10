# BE-Mongoose-Express-Books

## Beschreibung

Erstellen Sie ein Buchverwaltungssystem mit Express und MongoDB. Das System ermöglicht das Hinzufügen von Büchern sowie das Löschen aller Buchdaten.

## Was Sie tun werden

Sie werden eine Express-Anwendung erstellen und mit einer MongoDB-Datenbank verbinden. Anschließend implementieren Sie die Routen und Controller für das Hinzufügen von Büchern und das Löschen aller Buchdaten.

## Aufgaben

**Aufgabe 1: Express-Anwendung einrichten**

-   Arbeiten Sie in der Datei `server.js` welcher als Einstiegspunkt für die Anwendung fungiert.
-   Importieren Sie die erforderlichen Module: `express` und `mongoose`.
-   Verbinden Sie die Anwendung mit der MongoDB-Datenbank `booksDB` (URL: `mongodb://127.0.0.1:27017/booksDB`).
-   Konfigurieren Sie die Anwendung, um JSON-Anfragen zu parsen.
-   Definieren Sie eine Basisroute `/books` für Buchoperationen.
-   Starten Sie den Server auf Port 3000.

**Aufgabe 2: Buchmodell definieren**

-   Erstellen Sie eine Datei `models/book.schema.js` und definieren Sie das Schema für ein Buch.
-   Das Buchschema sollte die folgenden Felder enthalten:
    -   `title` (String, erforderlich)
    -   `author` (Subschema, erforderlich)
        -   `firstName` (String, erforderlich)
        -   `lastName` (String, erforderlich)
    -   `genre` (String, erforderlich)
    -   `year` (Number, erforderlich)
-   Exportieren Sie das Buchmodell.

**Aufgabe 3: Datenbanklogik für das Buch implementieren**

-   Erstellen Sie eine Datei `models/book.model.js`.
-   Importieren Sie das Buchmodell.
-   Implementieren Sie die Funktion `addBook`, um ein neues Buch zur Datenbank hinzuzufügen.
    -   Die Funktion sollte die Parameter `title`, `author`, `genre` und `year` akzeptieren.
    -   Erstellen Sie eine neue Instanz des Buchmodells mit den übergebenen Werten.
    -   Speichern Sie das Buch in der Datenbank.
    -   Geben Sie ein Promise zurück, das das gespeicherte Buch enthält.
-   Exportieren Sie die Funktion `addBook`.

**Aufgabe 4: Controller für Buchoperationen implementieren**

-   Erstellen Sie eine Datei `controllers/book.controller.js`.
-   Importieren Sie die Funktion `addBook` aus `models/book.model.js`.
-   Implementieren Sie den Controller `httpAddBook`, um ein neues Buch hinzuzufügen.
    -   Der Controller sollte die Anfrageparameter `title`, `firstName`, `lastName`, `genre` und `year` verwenden.
    -   Rufen Sie die Funktion `addBook` auf und übergeben Sie die Parameterwerte.
    -   Bei erfolgreichem Hinzufügen des Buches senden Sie eine Erfolgsmeldung mit dem Statuscode 201 zurück.
    -   Bei einem Fehler beim Hinzufügen des Buches senden Sie eine Fehlermeldung mit dem Statuscode 500 zurück.
-   Exportieren Sie den Controller `httpAddBook`.

**Aufgabe 5: Routen für Buchoperationen implementieren**

-   Erstellen Sie eine Datei `routes/book.routes.js`.

-   Importieren Sie den Controller `httpAddBook` aus `controllers/book.controller.js`.
-   Definieren Sie die POST-Route `/add` zum Hinzufügen eines neuen Buches.
-   Verwenden Sie den Controller `httpAddBook` als Handler für die POST-Route.
-   Exportieren Sie den Router.

**Aufgabe 6: Route zum Löschen aller Buchdaten implementieren**

-   Bearbeiten Sie die Datei `controllers/book.controller.js`.
-   Implementieren Sie den Controller `httpPurgeBooks`, um alle Buchdaten zu löschen.
    -   Rufen Sie die Funktion `deleteMany` auf dem Buchmodell auf, um alle Bücher zu löschen.
    -   Bei erfolgreichem Löschen der Buchdaten senden Sie eine Erfolgsmeldung mit dem Statuscode 200 zurück.
    -   Bei einem Fehler beim Löschen der Buchdaten senden Sie eine Fehlermeldung mit dem Statuscode 500 zurück.
-   Exportieren Sie den Controller `httpPurgeBooks`.

**Aufgabe 7: Routen für das Löschen aller Buchdaten implementieren**

-   Bearbeiten Sie die Datei `routes/book.routes.js`.
-   Importieren Sie den Controller `httpPurgeBooks` aus `controllers/book.controller.js`.
-   Definieren Sie die DELETE-Route `/purgeBooks` zum Löschen aller Buchdaten.
-   Verwenden Sie den Controller `httpPurgeBooks` als Handler für die DELETE-Route.
-   Exportieren Sie den Router.
