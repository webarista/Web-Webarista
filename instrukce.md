Text pro soubor instrukce.md 
(zadání pro AI agenta k tvorbě webu)

**Situace**
Jsi zkušený webový vývojář a designér s expertízou v tvorbě moderních, responzivních webových stránek. Tvým úkolem je vytvořit kompletní malý web podle specifikací níže.

**Cíl**
Dodej uživateli kompletní, profesionální mobile-first webovou stránku, která je vizuálně atraktivní, funkční na všech zařízeních a připravená k okamžitému použití.

**Úkol**
Vytvoř funkční web, který bude obsahovat:
Strukturovaný komentovaný HTML5 kód s validní sémantikou
Responzivní design (mobile-first přístup)
CSS styly pro přizpůsobení všem obrazovkám (4K monitory, desktop, tablet, mobil)
Používej moderní CSS vlastnosti (CSS variables, transitions, animations)
CSS jednotky velikosti: pro běžný text použij rem, pro nadpisy použij clamp 
Základní JavaScript pro interaktivitu (na jemné oživení stránek)
Nevytvářej soubor htaccess s přesměrováním

**Znalosti**
Implementuj responzivní design pomocí CSS Flexbox nebo Grid
Zajisti rychlé načítání a optimalizovaný výkon
Dodržuj best practices pro přístupnost (barevný kontrast, velikost písma, ARIA)
Vlož favicon ve formát svg (pokud ho nemáš dodaný, vytvoř ho)
Pokud je potřeba Cookie lišta, vytvoř ji v barvách webu


**Základní SEO**
Strukturuj nadpisy H1-H6
Přidej meta title a description na každé stránce
Vytvoř strukturovaná data – LocalBusiness, FAQ, Article (pokud je to relevantní)
Přidej do adresáře soubory sitemap.xml, robot.txt a llms.txt
Urči kanonickou url
Obrázkům dej alt popisky
Propoj stránky vnitřními odkazy
Vytvoř Open Graph meta tagy (náhled webu pro Facebook a další sociální sítě)


**Optimalizace obrázků**
Přidej lazy loading ke všem obrázkům, které nejsou vidět hned při načtení stránky (below the fold). Tj. u hero sekce lazy loading nedělej.
Obrázky ti dodám zkomprimované ve formátu jpg nebo png, ale kdyby se ti zdály velké, řekni si o formát avif.
**Vizuální hierarchie a čitelnost**
Jasná typografická hierarchie (nadpisy H1-H6, konzistentní velikosti)
Dostatečný kontrast mezi textem a pozadím (minimum 4.5:1 pro běžný text)
Čitelné fonty s českou diakritikou
Správné řádkování (line-height 1.5-1.8 pro odstavce)
Optimální šířka řádku pro text (max 70% obrazovky)

**Layout**
Šířku celého webu dej na 85% obrazovky
Konzistentní spacing a odsazení (používej jednotný systém, např. 8px grid)
Jasné oddělení sekcí a obsahových celků
Vyvážené použití bílého prostoru (white space)
Intuitivní navigace - logo vlevo, hamburger menu na mobilu pravo
Nikdy nezarovnávej text do bloku
Dej si záležet na patičce webu
Jednopísmenové znaky (spojky, předložky) zalamuj na nový řádek
Jednotky (Kč, m, kg, Eur, atd.) spoj s číslem nedělitelnou mezerou
Datum piš ve formátu 1. 1. 2026 a mezery dej nedělitelné

**Obsah**
Stručné a srozumitelné texty
Výrazné nadpisy s klíčovými informacemi a CTA tlačítka
Vizuální prvky podporující obsah (ikony, obrázky, grafika)
Logické uspořádání informací (nejdůležitější nahoře)
Chybová stránka (místo „404“ dej ikonu <i class="bi bi-emoji-frown"></i>)
Kontrola povinných údajů na webu: jméno, sídlo, IČ, zápis v rejstříku

**Konzistence**
Jednotný styl tlačítek, karet a komponent
Stejný padding/margin napříč podobnými elementy
Stejné zaoblení prvků
Konzistentní ikonografie
Stíny karet pouze velmi jemné
Jednotný projev značky (brand voice)
Konzistentní použití barev napříč celým webem

**Barevná paleta**
Omezený počet barev (2-3 hlavní + neutrální)
Primární barva pro CTA (call-to-action) tlačítka
Neutrální jemné barvy pro pozadí 
Pro text #333333
BRAND COLORS
Primary brand color (CTA, links, icons): #00B4A8
Primary text color (headings, main text): #1F2933
Secondary text color (descriptions, meta text): #6B7280
Main background color: #FFFFFF
Light section background (cards, highlighted sections): #F2FAF9
Dividers and subtle borders: #E5E7EB
Footer background: #111827
Footer text color: #D1D5DB

**Fonty**
Zvol vhodný patkový nebo bezpatkový font podle obsahu webu
Pokud není jasné, zvol moderní sans-serif font (př. Outfit)
Primary font:
Inter

Font stack fallback:
Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Font weights:
400 – regular (body text)
500 – medium (navigation, buttons)
600 – semibold (section headings)
700 – bold (hero headline)

**Struktura**
Jednostránkový web
Položky menu: (Domů – ikona domečku) | Nabídka | Tvorba webu | Portfolio | Reference | Ceník

**Další prvky na webu**
…

**Design**
Vytvoř moderní mobile-first web: použít můžeš trendy jako bento grid layout se zaoblenými rohy, velká typografie, barevné gradienty, glass efekt, micro-animace na hover a scroll efekty či 3D prvky. Pouze se inspiruj, pokud se to do webu hodí. Potřebuju se zaměřit na fotografii profilovou v Hero sekci. Aby nebyla nudná, ale navrhni designově efektivní zpestření fotografie. 
**Moderní design**
Layout: Bento grid nebo asymetrické rozvržení s velkým bílým prostorem                               
Typografie: Velké nadpisy na hero sekci
Barvy: Jemné gradienty, plynulé přechody
Prvky: Zaoblené rohy (border-radius 16-24px), jemné stíny, 3D prvky
Glass efekt: Skleněný efekt v pozadí karet (glassmorphism)
Animace: Mikro interakce na hover, jemné scroll animace 
**obrázky**
Na webu použij fotky (př. přílohy), které najdeš ve složce  Obrazky

**texty**
Vyjdi z dodaných textů, ale když budeš potřebovat, můžeš je mírně změnit nebo doplnit, zachovej vždy smysl a podstatu obsahu stránky. 
Menu:
Služby
Tvorba webu
Portfolio
Spolupráce
Ceník
Kontakt
CTA tlačítko:Konzultace

HERO SEKCE
Malý nadpis:JANA ZLÁMALOVÁ – WEBOVÝ BARISTA
Hlavní nadpis:Společně vyladíme web od prvního doušku až do poslední kapky
Text:Tvořím weby, které dávají smysl vám i vašim zákazníkům.Provázím vás celým procesem – od ujasnění záměru až po spuštění funkčního webu.
CTA tlačítko:Chci konzultaci

S ČÍM VÁM POMŮŽU
Nadpis sekce:S čím vám pomůžu
Položky:
Ujasnit cíl webu a komu je určený
Pochopit, co je důležité říct a co potlačit
Navrhnout strukturu stránek a jejich obsah
Pomoci s texty nebo vás k nim navést
Postavit web tak, aby byl přehledný a použitelný
Napojit web na formuláře, rezervace a další nástroje
Pomoci s grafikou a sladěním brandingu
Postarat se o technické nastavení a spuštění webu

Doplňkový text:Nemusíte mít vše hned promyšlené dopředu. Společně si to postupně poskládáme.

JAK PROBÍHÁ TVORBA WEBU
Nadpis sekce:Jak probíhá tvorba webu
1. Analýza a směr
Poznáme vaši značku, cíle a potřeby.Ujasníme si, pro koho web je a co má splnit.
2. Návrh a wireframe
Navrhnu strukturu webu a rozložení obsahu.Vše má jasný záměr a logiku.
3. Design a vývoj
Vytvořím vizuální podobu webu a převedu ji do funkčního řešení.Dávám důraz na čitelnost a přehlednost.
4. Ladění a spuštění
Web společně projdeme, doladíme detaily a spustíme.Nezůstáváte v tom sami.

UKÁZKA MÉ PRÁCE
Nadpis sekce:Ukázka mé práce
Popis:Každý projekt vznikl jinak – podle klienta, cíle a obsahu.

jirinamatinkova.cz
Jednoduchý web jako online vizitka, který pomáhá získávat nové klienty.Přehledné rozložení, jemná grafika a snadná orientace.
Odkaz:Přejít na web →

luciepisecka.cz
Web pro fotografku s důrazem na prezentaci práce a osobní styl.Minimalistický design, přehledné galerie a jasná struktura.
Odkaz:Přejít na web →

divadloprostor.cz
Web divadla pro prezentaci programu a aktuálních představení.Přehledný kalendář akcí a snadná správa obsahu.
Odkaz:Přejít na web →

CO ŘÍKAJÍ KLIENTI
Nadpis sekce:Co říkají klienti
Reference 1
„S Janou se mi spolupracovalo moc dobře. Dokázala se vcítit do toho, co potřebuji, a vše mi srozumitelně vysvětlila.“
Lucie PíseckáFotografka

Reference 2
„Web vznikal postupně a s klidem. Jana měla trpělivost a vždy nabídla řešení, která dávala smysl.“
Hana HorkovcováKlientka

Reference 3
„Oceňuji lidský přístup, přehlednost a to, že jsem nemusela rozumět technickým věcem.“
Pavlína KavalcováKlientka

ORIENTAČNÍ ROZPOČET
Nadpis sekce:Orientační rozpočet
Text:Každý projekt nacením individuálně – podle cíle webu a rozsahu.
Základní web
Jednoduchý web, který jasně představí vás a vaši službu.od 15 000 Kč
Komplexní web
Rozsáhlejší web se strukturou, více stránkami a návaznostmi.od 30 000 Kč
Péče a údržba
Pravidelná péče o web, aktualizace a drobné úpravy.od 1 500 Kč / měsíc

CTA SEKCE
Nadpis:Pojďme to probrat
Text:Konzultace je ideální první krok, pokud si nejste jistí, kudy začít.Ráda se s vámi pobavím o vašem webu a možnostech řešení.
CTA tlačítko:Vyplnit dotazník

KONTAKT
Text:Pokud nechcete vyplňovat dotazník, klidně mi napište nebo zavolejte.
E-mail:jana@webarista.cz
Telefon:+420 721 655 083
WhatsApp

FOOTER
WeBarista
Text:Weby, které dávají smysl.
Kontakt:jana@webarista.cz+420 725 655 408WhatsApp
Copyright:© 2026 Webarista
