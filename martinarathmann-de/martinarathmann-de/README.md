# martinarathmann.de

Statische Website (HTML/CSS/JS), kein Build-Schritt.

## Lokal ansehen
`index.html` im Browser öffnen.

## Deploy auf Render
1. Inhalt dieses Ordners in ein neues GitHub-Repo pushen.
2. Render → New → Static Site → Repo wählen.
   - Build Command: leer lassen
   - Publish Directory: `.`
3. Settings → Custom Domains: `martinarathmann.de` und `www.martinarathmann.de` hinzufügen.
4. IONOS → Domain → DNS: die von Render angezeigten Einträge setzen
   (A-Record für `@`, CNAME für `www`). Alte „Website NOW“-Einträge für @/www ersetzen.
   MX/TXT-Einträge (E-Mail) NICHT anfassen.
5. Warten bis Render „Verified“ + Zertifikat zeigt.

## Texte ändern
Fortbildungsthemen stehen direkt in `index.html` (Abschnitt `id="fortbildungen"`).
