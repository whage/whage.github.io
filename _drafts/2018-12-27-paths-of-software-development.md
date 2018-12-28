---
layout: post
title:  "The different paths of software developers (?)"
date:   2018-12-27 23:30:00 +0100
categories: update
tags: software development
---

Él bennem egy kép az ideális szoftverfejlesztői környezetről. Úgy képzelem, hogy egy ideális környezetben a fejlesztői munka kiterjed a számítógép rendszerek mindenféle területére. A megoldandó problémák technikai jellegűek, az emberek [mérnöki szemlélettel][whither] állnak a munkához, a szoftver hatékonysága, teljesítménye elsődleges szempont. Alacsony absztrakciós szinten folyik a munka.
A csapat tagja képzett szakemberek, akik [szakmailag megalapozott döntéseket hoznak][nasa], a szoftverrendszerek minden rétegét jól ismerik, képesek és van lehetőségük ott optimalizálni, ahol a leginkább érdemes. A szoftver minőségét (helyességét) fejlett eszközök segítségével biztosítják.

<!--more-->

Még mindig nincs egy tiszta elképzelésem arról, hogy pontosan milyen irányba akarok továbbhaladni a szoftverek területén.
2018-ban jelentősen pályát módosítottam és sikerült is olyan területre kerülnöm, amik jóval közelebb állnak az érdeklődésemhez,
de mégsem érzem, hogy valóban azzal telne a mindennapi munkám, ami igazán érdekel.

Bár ritkán, de előfordult, hogy órákra belefeledkeztem a munkámba. Elkapott a flow, ahogy Csíkszentmihályi úr mondaná.
Szerintem két fő tényező van, ami ezt az állapotot elősegíti. Egyrészt olyan tevékenységet kell végezni, ami komoly kihívást jelentet,
másrész nagy fokú szabadsággal kell rendelkezni a megvalósítás tekintetében. Ha valamelyik hiányzik, az ember könnyen elveszti motivációját,
a munka manuálissá, repetitívvé és nyomasztóvá válik.

Megpróbáltam összeszedni a gondolataimat a fentiekkel kapcsolatban, hátha okosabb leszek, miután egyben látom az egészet.

# Mik a legfontosabb szakmai szempontok?
Érdekes, kihívást jelentő legyen, amit csinálok.
Nagy szellemi szabadságom legyen a munkámban, ne legyek keretek közé zárva a lehetséges megoldások tekintetében.
A munkám során szerzett tudás és tapasztalat legyen könnyen továbbvihető más területekre, előremutató technológiákkal dolgozzunk.

# Mik a legfontosabb NEM szakmai szempontok?
Legyen lehetőség kutatómunkára, tudjunk kísérletezni új dolgokkal.
Legyen lehetőség önképzésre.
Ne helyezzenek ránk nyomást túl szűk határidőkkel.
Legyen egy szakmailag képzett és szerethető csapat hasonló érdeklődésű és motivációjú kollégákkal.
Érdemleges, valamirevaló probléma megoldásán dolgozzak. Olyan dolog legyen a végtermék, amire szerintem a világnak szüksége van.

# Mi bajom van a webfejelsztéssel / hagyományos üzleti alkalmazásfejlesztéssel? - What's wrong with web app development?
A munka repetitív jellege: CRUD funkciók egy újabb entitáshoz.
A technikai kihívás hiánya: az üzleti folyamatok modellezésén van a hangsúly, amik legtöbbször egyszerű lépések sorozata.
A hangsúly a fejlesztés gyorsaságán van, nem pedig a szoftver hatékonyságán / teljesítményén.
A gyors fejlesztésért cserébe csak pakoljuk egymásra a rétegeket, félkész, általánosra tervezett megoldások
beépítésével [hatalmasra hízlaljuk a szoftvereinket][handmade], amik így mégtovább lassulnak és válnak egyre bonyolultabbá.
Arról inkább ne is beszéljünk, hogy ha UI / frontend jellegű a fejlesztés, akkor szubjektív igényeket kell kielégíteni,
gyakran rengeteg iterációval, végtelenül egyszerű, manuális munkával.
Nem találtam a munkában semmi mérnöki jellegűt. Semmit, ami megkövetelné a szigorú tervezést, a matematikai/elméleti modellek
alkalmazását.

# Mi bajom van a cloud infra fejlesztéssel?
Túl specifikus tudást szerzek a munka során, nem általánosat.
Ismert, alacsony szintű technologiák magas szintű absztrakcióival dolgozunk, amik uj elnevezéseket kaptak, és limitalva lett a funkcionalitasuk, aszerint, ahogy az adott vendor épp jónak látta. A megszerzett tudás igen erősen hozzáláncol az adott vendorhoz.
A megoldandó problémák ["esszenciális komplexitása"][tar-pit] jellemzően alacsony viszont az IaaS providerek absztrakciós szintjének eszközeivel
egy véget nem érő próbálkozássá válik a helyes konfiguráció felderítése.
Mintha folyamatosan limitált eszközök kis halmazából kéne válogatnom és addig csűrni-csavarni a megoldást, amíg
valami ahhoz hasonlót nem csinál, amit szeretnék elérni.
Ehhez kapcsolódó kiváló írás [Joel Spolsky: Leaky Abstraction][leaky-abstractions] cikkje.

# Miért vonz a security/etchical hacking/pentesting témakör?
Új, addig ismeretlen dolgok feltárásán van a hangsúly.
Megköveteli a szoftverrendszerek minden rétegének alapos ismeretét és a munka ki is terjed a különböző területekre, ez által változatos.
Alapvető elem az állandó önképzés, folyamatos verseny az ellenkező oldallal.
Egyszerűen király az egész.

# Miért vonz a systems programming és a low-level language-ek?
Alacsony absztrakciós szint: hatalmas implementációs szabadság. Cserébe lassú és nehézkes fejlesztés.
Az az érzés, hogy mindennek az alapját tudod felépíteni.
Kiemelten fontos a szoftver teljesítménye: muszáj a harware-t is jól ismerni.
Szolgáltatások [egyéb szoftverek számára][systems] (szemben az alkalmazásokkal, akik a végfelhasználókat célozzák)

# Mi vonz a szimulációkban, scientific computing-ban?
Itt is meg kell próbálni minden utolsó teljesítmény cseppet kifacsarni a gépből.

# Miért érdekelnek annyira az elosztott rendszerek, a párhuzamos programozás?
Egyszerűen vonz a bonyolultsága.

# Miért érdekelnek a programnyelvek / compilerek és hasonló technológiák?
Komoly elméleti alapokra épül. Tele van érdekes algoritmusokkal, adatstruktúrákkal.

# Miért vonz a hardware?
A legalsó szint. Itt a legtöbb a lehetőség a teljesítményoptimalizálásra.

# Miért vonz annyira pl. az önjáró autók szoftvervilága? Mit képzelek bele? Tényleg olyan?
Az eredmény kézzel fogható, óriási hatása lehet a világra.
Nagyon bonyolultnak tűnik maga a domain (egy géppel felismertetni a világot) és ez önmagában nagyon vonzó.

# Miért olyan vonzó a játékfejlesztés?
Rettentő széles szeletét kiteszi a szoftverfejelsztésnek:
    - networking programming
    - graphics
    - physics modelling
    - kiemelten fontos a teljesítmény: hardware közeli és megkívánja a minél fejlettebb algoritmusok/ adatstruktúrák használatát
    - artwork
    - audio


Kíváncsi vagyok, mit fogok gondolni a fent leírtakról néhány év múlva.

[leaky-abstractions]: https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/
[nasa]: https://mystudentvoices.com/a-look-into-nasas-coding-philosophy-b747957c7f8a
[whither]: https://pdfs.semanticscholar.org/3a6b/0506b8b922d7e6cc933a39dc165b5f34797e.pdf
[handmade]: https://handmade.network/manifesto
[tar-pit]: https://blog.acolyer.org/2015/03/20/out-of-the-tar-pit/
[systems]: https://en.wikipedia.org/wiki/System_programming
