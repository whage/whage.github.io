---
layout:     post
title:      "Valószínűségekről"
date:       2026-08-29 11:00:00 +0100
categories: learning
---

- "3 hónapja vettem OTP-t, 50%-ot ment azóta!"
- "az AI részvényekkel most sokat lehet keresni"

Gyakran hallani a fentiekhez hasonló kijelentéseket.
Az emberek általában ahhoz mérten értékelik múlt béli döntéseiket, hogy milyen
eredményeket hoztak annak ellenére, hogy a döntés pillanatában nem lehettek
biztosak benne, hogy mi fog történni. Csak az akkor ismert információikra hagyatkozhattak.

Gyakran vesszük alapul a múlt eseményeit, hogy megjósoljuk a jövőt anélkül,
hogy figyelembe vennénk a múlt és a jelen körülményei közti különbségeket.

<!--more-->

"Vonattal indultam kocsi helyett, hogy biztos ne kerüljek dugóba, de a vonat lerobbant" - rossz döntés volt?
"Nem csatolom be a biztonsági övet a 3 perces autóútra, nem is történt baj" - csináljam mindig így?

Büszkék vagyunk a pozitív ("szerencsés") eredményeinkre, holott azok bekövetkezése valószínűtlen
volt, máskor pedig frusztráltak vagyunk ha valami nem sikerül vagy kár ér minket annak ellenére,
hogy jól megalapozott döntés alapján tettük. Mindkettő helytelen hozzáállás, az előbbi a
rossz viselkedési mintákat erősíti bennünk, az utóbbi pedig felesleges aggodalmakkal terhel, mindkettő
negatív hatással van az életünkre.

Legtöbbünk kockázatkerülő: előnyben részesítjük a biztosabbnak tűnő döntéseket feladva ezzel
egy bizonytalanabb lehetőséget még ha várhatóan nagyobb haszonra számítunk tőle.

# Hogyan számolunk a véletlennel?
A véletlen kimenetelű dolgok között is vanjnak olyanok, ahol pontosan ismerjük a valószínűségeket
és olyanok ahol nem. Egy kockadobásban tökéletesen ismerjük a valószínűségeket, egy pókerjátékban
szintén (bár az ellenfelünk viselkedését nem), viszont egy részvény árfolyamváltozásainak minden
körülményét lehetetlen számba venni.

**TODO: revise**
Egészen más az, hogy valaminek ismerjük a valószínűségét és az, hogy meg tudjuk
becsülni a valószínűségét. Jól ismert valószínűségek általában csak zárt, mesterséges
körülmények között számolhatunk.

Frank Knight amerikai közgazdásztól származik a Knight-féle bizonytalanság fogalma,
amely éles különbséget tesz a mérhető kockázat és a nem mérhető bizonytalanság között.
Kockázatnak azt nevezte, amikor a lehetséges kimeneteleket és azok valószínűségeit is
ismerjük: ilyen a kocka, a rulett vagy a biztosítótársaságok halálozási táblázata.
Bizonytalanságnak pedig azt, amikor semmilyen megbízható alapunk nincs arra, hogy
egyáltalán számokat rendeljünk a kimenetelekhez.

Ha jobban megnézzük, nem is két esetről van szó, hanem háromról. Az elsőben zárt és
ismert a világ: tudjuk, mi történhet, és azt is, milyen gyakran. Kocka, kártyapakli.
A másodikban a keretet ismerjük, a számokat nem: tudjuk, mik a lehetséges kimenetelek,
de a gyakoriságukat csak mérésből becsüljük, hibahatárral. Ilyen a legtöbb statisztika
és a legtöbb orvosi kockázat. A harmadikban maga a keret is nyitott: nem tudjuk
felsorolni, mi minden történhet, ráadásul közben a szabályok is változnak. A tőzsde
ilyen. Ott még az is előfordul, hogy amit gondolunk a jelenségről, az visszahat rá:
ha elég sokan kezdenek ugyanarra a mintázatra fogadni, a mintázat megszűnik működni.

Még a kocka sem teljesen ártatlan példa. Amikor azt mondjuk, hogy mindegyik oldal
hatodával esik, valójában egy feltevéssel élünk: hogy a kocka szabályos. Egy valódi
kocka soha nem tökéletesen az. A valódi választóvonal tehát nem egészen ott húzódik,
hogy az egyik esetben "tudjuk" a valószínűséget, a másikban meg nem, hanem ott, hogy
az egyik esetben ismerjük az összes lehetséges kimenetelt, és a mechanizmus nem
változik, amíg nézzük. A tőzsdén egyik sem igaz.

A gyakorlati veszély pedig mindig ugyanaz: a harmadik fajta helyzetet az első
logikájával kezelni. Nassim Taleb ezt ludic fallacynak, játék-tévedésnek nevezi -
amikor a kaszinó tiszta, zárt kis világának a szabályait visszük át olyan
helyzetekre, ahol a szabályokat nem írta le senki.
