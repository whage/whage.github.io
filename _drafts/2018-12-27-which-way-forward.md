---
layout: post
title:  "Which way forward?"
date:   2018-12-28 23:30:00 +0100
categories: update
tags: software development
---

Él bennem egy kép az ideális szoftverfejlesztői környezetről. Úgy képzelem, hogy egy ideális környezetben
a fejlesztői munka kiterjed a számítógép rendszerek mindenféle területére.
A megoldandó problémák technikai jellegűek, az emberek [mérnöki szemlélettel][whither] állnak a munkához,
a szoftver hatékonysága, teljesítménye elsődleges szempont. A fejlesztők nincsenek magas absztrakciós szintekhez láncolva.
A csapat tagja képzett szakemberek, akik [szakmailag megalapozott döntéseket hoznak][nasa],
a szoftverrendszerek minden rétegét jól ismerik, képesek és van lehetőségük ott optimalizálni, ahol a leginkább érdemes.
A szoftver minőségét (helyességét) fejlett eszközök segítségével biztosítják.

<!--more-->

Még mindig nincs egy tiszta elképzelésem arról, hogy pontosan milyen irányba akarok továbbhaladni a szoftverek területén.
A webes alkalmazásfejlesztésből kiábrándulva 2018-ban jelentősen pályát módosítottam és - több lépésben - sikerült is olyan területre kerülnöm,
ami jóval közelebb áll az érdeklődésemhez.
Érdekes és előremutató technológiákkal dolgozom a mostani helyemen, de mégsem érzem, hogy valóban azzal telne a mindennapi munkám, ami igazán érdekel.
Ami zavar, hogy eddig még tudtam pontosan megfogalmazni, hogy min kéne változtatni, milyen irányba kéne mozdulni.
Ebben a postban megpróbáltam összeszedni a gondolataimat, hátha okosabb leszek, miután egyben látom az egészet.

# Mik a legfontosabb szakmai szempontok?
Érdekes, kihívást jelentő legyen, amit csinálok.
Nagy szellemi szabadságom legyen a munkámban, ne legyek keretek közé zárva a lehetséges megoldások tekintetében.
A munkám során szerzett tudás és tapasztalat legyen könnyen továbbvihető más területekre, előremutató technológiákkal dolgozzunk.

# Mik a legfontosabb NEM szakmai szempontok?
Legyen lehetőség kutatómunkára, tudjunk kísérletezni új dolgokkal.
Legyen lehetőség önképzésre.
Ne helyezzenek ránk nyomást túl szűk határidőkkel.
Legyen egy szakmailag képzett és szerethető csapat hasonló érdeklődésű és motivációjú kollégákkal.
Érdemleges, valamirevaló probléma megoldásán dolgozzak. Olyan dolog legyen a végtermék, amire úgy érzem, a világnak szüksége van.

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

# Mi bajom van a cloud-based infrastructure fejlesztéssel?
Nagyon magas absztrakciós szinten dolgozunk, így túl specifikus tudást szerzek a munka során, nem általánosat.
Ismert, alacsony szintű technologiák magas szintű absztrakcióival dolgozunk, amik uj elnevezéseket kaptak,
és limitalva lett a funkcionalitasuk, aszerint, ahogy az adott vendor épp jónak látta.
A megszerzett tudás igen erősen hozzáláncol az adott vendorhoz.
A megoldandó problémák ["esszenciális komplexitása"][tar-pit] jellemzően alacsony viszont az IaaS providerek absztrakciós szintjének eszközeivel
egy véget nem érő konfiguráció-próbálgatássá válik a munka.
Mintha folyamatosan limitált eszközök kis halmazából kéne válogatnom és addig csűrni-csavarni a megoldást, amíg
valami ahhoz hasonlót nem csinál, amit szeretnék elérni.
Ehhez kapcsolódó kiváló írás [Joel Spolsky: Leaky Abstraction][leaky-abstractions] cikkje.

# Miért vonz a security/pentesting témakör?
Új, addig ismeretlen dolgok feltárásán van a hangsúly. Rendszereket kell feltörni!
Megköveteli a szoftverrendszerek minden rétegének alapos ismeretét és a munka ki is terjed a különböző területekre, így nagyon változatos lehet.
Requires deep knowledge of the OS which is an interesting and broad topic.
Alapvető elem az állandó önképzés, folyamatos verseny az ellenkező oldallal.
Egyszerűen király az egész.

# Miért vonz a systems programming és a low-level language-ek?
Alacsony absztrakciós szint: hatalmas implementációs szabadság (bár cserébe lassú és nehézkes a fejlesztés).
Az érzés, hogy mindennek az alapját tudod felépíteni és a gép minden erőforrása közvetlenül az irányításod alatt áll.
Kiemelten fontos a szoftver teljesítménye: muszáj a harware-t is jól ismerni.
OS knowledge is central.

# Mi vonz a szimulációkban, scientific computing, HPC témákban?
The problem space stems from natural science research: a chance to help advance natural sciences.
You get to work with huge, powerful machines. (Do you?)

# Miért érdekelnek annyira az elosztott rendszerek, a párhuzamos programozás?
Egyszerűen vonz a bonyolultsága és a bennük rejlő potenciál.
Ahogy lassul a CPU magok teljesítményének növekedése, úgy halad a világ a multiprocessing felé.
The software of the future will probably have to make heavy use of parallelism.

# Miért érdekelnek a programnyelvek / compilerek?
Creating a programming language is like creating a little world.
Compilers are one of the fundamental enabling technologies of all software development.
This space is full of interesting algorithms and data structures.
There are interesting new ideas and paradigms all the time.

# Miért vonz a hardware?
A legalsó szint. Itt a legtöbb a lehetőség a teljesítményoptimalizálásra.
Kevés nagy szereplő uralja a piacot, kevés a nyílt forrású szoftver eszköz hardwarefejlesztésre: piaci rés?

# Miért vonz annyira pl. az önjáró autók szoftvervilága?
Érdekes kobinációja néhány izgalmas fentebb tárgyalt területnek:
- hardware
- low level software
- elosztott rendszerek
- gépi tanulás
- image processing: full of interesting math

Az eredmény kézzel fogható - önjáró autók! -, óriási hatása lehet a világra.
Maga a domain (egy géppel felismertetni a világunkat és megtanítani közlekedni benne) tele lehe komplex, érdekes problémákkal.

# Miért olyan vonzó a játékfejlesztés?
A szoftverfejelsztés rengeteg különböző ágára kiterjed:
- networking programming
- graphics, rendering, GPU programming
- physics modelling
- custom developer tools
- low-level, close to the hardware: kiemelten fontos a teljesítmény, megkívánja a minél fejlettebb algoritmusok/adatstruktúrák használatát

# Conclusion
It seems there are some common traits of the areas I'm most interested in:
- usage of low-level languages that provide a lot of control over the hardware: C, C++, assembly
- emphasis on concurrency and parallelism
- a deep understanding of the OS is required

I'll try to focus more on these areas.
I'm curious where I'll be in a few years and what I'll be thinking of this essay then.

[leaky-abstractions]: https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/
[nasa]: https://mystudentvoices.com/a-look-into-nasas-coding-philosophy-b747957c7f8a
[whither]: https://pdfs.semanticscholar.org/3a6b/0506b8b922d7e6cc933a39dc165b5f34797e.pdf
[handmade]: https://handmade.network/manifesto
[tar-pit]: https://blog.acolyer.org/2015/03/20/out-of-the-tar-pit/
