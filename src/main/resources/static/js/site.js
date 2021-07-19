var cities = Object();

cities['Greece'] = 'Athens|Piraeus|Thessaloníki|Pátra|Lárisa|Irákleio|Peristéri|Kallithéa|Níkaia|Glyfáda|Vólos|Chalándri|Kalamáta|Néa Ionía|Ioánnina|Tríkala|Chalkída|Sérres|Alexandroúpoli|Ródos|Xánthi|Kateríni|Kavála|Chaniá|Lamía|Komotiní|Agrínio|Dráma|Véroia|Kozáni|Kardítsa|Réthymno|Trípoli|Kórinthos|Giannitsá|Mytilíni|Chíos|Néa Filadélfeia|Salamína|Elefsína|Kérkyra|Pýrgos|Mégara|Kilkís|Péfki|Livadeiá|Kos|Préveza|Orestiáda|Édessa|Spárti|Thérmi|Alexándreia|Paianía|Náfplio|Náfpaktos|Kastoriá|Kálymnos|Ermoúpoli|Ágios Nikólaos|Týrnavos|Diavatá|Kiáto|Anatolí|Argostóli|Lykóvrysi|Pórto Ráfti|Néa Artáki|Zefýri|Siteía|Néa Moudaniá|Fársala|Síndos|Didymóteicho|Spáta|Epanomí|Chrysoúpoli|Néa Péramos|Kalampáka|Almyrós|Koufália|Giánnouli|Lagkadás|Mourniés|Árgos Orestikó|Elassóna|Chalástra|Néa Kallikráteia|Karpenísi|Marathónas|Lávrio|Polýkastro|Litóchoro|Ámfissa|Aígina|Néo Karlovási|Káto Achaḯa|Aridaía|Ánoixi|Soúda|Kounoupidianá|Anávyssos|Polýgyros|Messíni|Néoi Epivátes|Filiatrá|Psachná|Megalópoli|Mýrina|Diónysos|Nerokoúros|Xylókastro|Fílyro|Siátista|Féres|Skýdra|Archángelos|Kremastí|Vrontádos|Tympáki|Orchomenós|Agriá|Néa Anchiálos|Kyparissía|Gargaliánoi|Ágios Athanásios|Nigríta|Skiáthos|Chortiátis|Alivéri|Tínos|Magoúla|Ampelákia|Vónitsa|Filippiáda|Alíartos|Zevgolatió|Itéa|Istiaía|Páros|Arkalochóri|Gýtheio|Néa Magnisía|Kíssamos|Vouliagméni|Aigínio|Kítsi|Schimatári|Aitolikó|Kranídi|Spétses|Andravída|Katsikás|Néa Raidestós|Neméa|Souflí|Amfilochía|Mýkonos|Vasiliká|Leonídio|Lixoúri|Leptokaryá|Stavrós|Amýntaio|Kimméria|Gouménissa|Vartholomió|Lagyná|Prosotsáni|Néa Péramos|Korinós|Krinídes|Velventós|Kapandríti|Sápes|Vracháti|Lití|Ierissós|Thásos|Mália|Néos Marmarás|Ágios Athanásios|Zacháro|Kallithéa|Melíki|Kalampáki|Néa Tríglia|Sochós|Skála|Ntráfi|Maniákoi|Néa Mesimvría|Velestíno|Plomári|Ormýlia|Néo Rýsi|Kónitsa|Lefkímmi|Panaitólio|Saronída|Axioúpoli|Erythrés|Asproválta|Katochí|Neochóri|Kolindrós|Néa Výssa|Néa Kíos|Kassándreia|Kaména Voúrla|Choristí|Palaiá Fókaia|Níkiti|Kárpathos|Spercheiáda|Lechainá|Íasmos|Moláoi|Filiátes|Métsovo|Agía Marína|Paramythiá|Pýlos|Ágios Kírykos|Galatás|Káto Nevrokópi|Astakós|Sámos|Kréstena|Káto Tithoréa|Thérmo|Kalávryta|Skýros|Firá|Dístomo|Domokós|Geniséa|Kastélli|Ándros|Chalandrítsa|Néa Smýrni|Ampelókipoi|Dáfni|Ágios Dimítrios|Korydallós|Galátsi|Stavroúpoli|Kalamariá|Palaió Fáliro|Agía Varvára|Aigáleo|Irákleio|Ágioi Anárgyroi|Ílion|Keratsíni|Kaisarianí|Moscháto|Vrilíssia|Zográfos|Petroúpoli|Cholargós|Sykiés|Évosmos|Výronas|Agía Paraskeví|Álimos|Ilioúpoli|Melíssia|Metamórfosi|Maroúsi|Argyroúpoli|Gérakas|Psychikó|Voúla|Peraía|Chaïdári|Zákynthos|Kifisiá|Pérama|Ágios Stéfanos|Aígio|Oraiókastro|Lefkáda|Acharnés|Áno Liósia|Panórama|Árta|Gázi|Rafína|Flórina|Náxos|Ptolemaḯda|Árgos|Zevgolatió|Moíres|Pezá|Pérama|Igoumenítsa|Gastoúni|Goúrnes|Eleoúsa|Asprópyrgos|Amaliáda|Koropí|Irákleia|Kanaláki|Markópoulo|Archaía Olympía|Ierápetra|Grevená|Kalývia Thorikoú|Geráni|Mouzáki|Thebes|Kárystos|Stylída|Meligalás|Oropós|Agiá|Mesolóngi|Palamás|Loutráki|Erétria|Péta|Sofádes|Eleftheroúpoli|Fillýra|Náousa|Évlalo|Pýli|Gáios|Póros|Chrysó|Sérvia|Agkístri|Farkadóna|Pátmos|Níkaia|Mándra|Smínthi|Zagorá|Kardamýli|Atalánti|Ágioi Déka|Néa Zíchni|Elafónisos|Tzermiádo|Kalpáki|Sidirókastro|Itháki|Límni|Leipsoí|Megísti|Oinoússes|Skópelos|Spíli|Áno Sýros|Prámanta|Sými|Rodolívos|Áno Viánnos|Palaióchora|Apollonía|Agía Kyriakí|Foúrnoi|Argalastí|Ýdra|Asklipieío|Deskáti|Makrychóri|Agía Foteiní|Folégandros|Vrýses|Mandráki|Antíparos|Anógeia|Morfovoúni|Kýthira|Lidoríki|Alónnisos|Sérifos|Íos|Vourgaréli|Kímolos|Samothráki|Frý|Kýthnos|Kerasochóri|Ioulída|Chálki|Megálo Chorió|Astypálaia|Asprángeloi|Dimitsána|Anthiró|Amorgós|Áno Kalentíni|Psará|Mílos|Laimós|Megálo Chorió|Anáfi|Ágios Efstrátios|Síkinos|Chóra Sfakíon|Nestório|Paranésti|Kastrí';
cities['Turkey'] = 'Istanbul|Ankara|İzmir|Bursa|Antalya|Konya|Adana|Gaziantep|Şanlıurfa|Mersin|Diyarbakır|Kayseri|Samsun|Tekirdağ|Denizli|Eskişehir|Trabzon|Erzurum|Malatya|Batman|Kahramanmaraş|Elazığ|Hatay|Sivas|Kocaeli|Van|Tarsus|Balıkesir|Alanya|Adıyaman|Afyonkarahisar|İskenderun|Aksaray|Çorum|İnegöl|Kütahya|Osmaniye|Çorlu|Sakarya|Isparta|Kızıltepe|Uşak|Manisa|Düzce|Niğde|Bolu|Tokat|Kırıkkale|Viranşehir|Karaman|Muş|Aydın|Çanakkale|Edirne|Torbalı|Ereğli|Menemen|Siirt|Körfez|Turgutlu|Gölcük|Salihli|Bingöl|Fethiye|Talas|Erzincan|Zonguldak|Nazilli|Ordu|Bartın|Bandırma|Kırşehir|Ağrı|Amasya|Kastamonu|Lüleburgaz|Ereğli|Yalova|Nevşehir|Cizre|Nizip|Rize|Iğdır|Giresun|Ödemiş|Karabük|Kozan|Çayırova|Ünye|Polatlı|Kadirli|Patnos|Doğubayazıt|Samandağ|Kapaklı|Kilis|Kuşadası|Akçakale|Burdur|Kars|Soma|Kemalpaşa|Nusaybin|Yozgat|Bergama|Kırklareli|Reyhanlı|Bafra|Çankırı|Aliağa|Marmaris|Menderes|Şırnak|Ceylanpınar|Mardin|Tire|Bilecik|Hakkari|Söke|Çınar|Tatvan|Bitlis|İslahiye|Bayburt|Urla|Bucak|Sinop|Çaldıran|Mut|Derik|Uzunköprü|Bor|Kaş|Gümüşhane|Muğla|Hassa|Kulu|Kozlu|Beypazarı|Finike|Haymana|Yatağan|Seferhisar|Dikili|Of|Çeşme|Kemer|Ardahan|Yakacık|Erzin|Bayındır|Tunceli|Emirdağ|Selçuk|Gürpınar|Yayladağı|Kilimli|Artvin|Ayvacık|Belen|Sarıkaya|Kınık|Nallıhan|Havran|İpsala|Pınarbaşı|Maçka|Lice|Marmara Ereğlisi|Hasköy|Ayancık|Gökçebey|Yenice|Arhavi|Toprakkale|Fındıklı|Bayat|Divriği|Sultandağı|Çiçekdağı|Pazar|Eynesil|Ulubey|Beydağ|Ardanuç|Erfelek|Çüngüş|Aydıncık|Akyaka|Sultanhanı|Karkamış|Eceabat|Ovacık|Yeniceoba|Süleymanlı|Mahmutbey|Küçükçekmece|Kartal|Buca|Konak|Etimesgut|Samandıra|Keçiören|Pursaklar|Çankaya|Altındağ|Karşıyaka|Melikgazi|Gaziemir|Sarıyer|Pendik|Kemerburgaz|Mamak|Bornova|Çağlayan|Kazanlı|Sincan|Burç|Yenimahalle|Yenice|Seyhan|Adalar|Büyükçekmece|Yumurtalık|Hadımköy|Beykoz|Mahmut Şevket Paşa|Yolboyu|Kayapınar|Bağlar|Yenişehir|Darıca|Değirmendere|Yıldırım|Erenler|Kazımpaşa|Serdivan|Sur|Derince|Tillo|Kabadüz|Uzunisa|Arsuz|Gündoğdu|Akmeşe|Keskin|Serinyol|Harbiye|Hıdırbey|Şenköy|Nilüfer|Çalı|Demirtaş|Görükle|Osmangazi|Gebze|Mollafeneri|Şahinbey|Şehitkamil|Kaypak|Yarpuz|Çolaklı|Kılıç|Derecik|Büyükderbent|Davutlar|Umurlu|Karaçay|Çiftlikköy|Hereke|Çerkezköy|Karaoğlanlı|Üçpınar|Muradiye|Osmancalı|Bahçecik|Alaplı|Beycuma|Çayırkent|Aşağıpınarbaşı|Selçuklu|Sille|Beyazköy|Çatalpınar|Perşembe|Çaycuma|Gemlik|Bolaman|Fatsa|Gözne|Arslanköy|Mezitli|Kuzucubelen|Filyos|Dörtyol|Timar|Erçek|Akçaabat|Pazar|Oğuz|Aksakal|Edincik|Derepazarı|Arifiye|Sapanca|Konakpınar|Ertuğrul|Yeniköy|Şamlı|Ömerli|Silivri|Sinekli|Söğütpınar|Zeytinbağı|Mudanya|Himmetdede|Gesi|Kocasinan|Güneşli|Erkilet|Dağkızılca|Çarşıbaşı|Silopi|Tahtaköprü|Çamlıdere|Payamlı|Yardımcı|Kabahaydar|Karaköprü|Akköy|Didim|Turgutreis|Karaova|Ortyakent Yahşi|Bodrum|Yenifoça|Foça|Orhangazi|Yakakent|İyidere|Tekkiraz|Dikbıyık|Çarşamba|Ormanlı|Mollakendi|Harput|İçme|Hıdırbaba|Hankendi|Poyraz|Hatunsaray|Meram|Hatip|Kızılören|Beşikdüzü|Kuyucak|Güre|Yenicekale|Sırpsındığı|Karakasım|Espiye|Emiralem|Çakırlar|Türkoğlu|Şambayat|Bağpınar|Kuyucak|Akpınar|Koçali|Hekimdağ|Burhaniye|Ortaca|İncirliova|Yeşilyurt|İkizce|Ayvalık|Altınova|Palandöken|Kazımkarabekir|Dadaşköy|Yakutiye|Dumlu|Suruç|Mürşitpınar|Çınarcık|Kirazlı|İntepe|Aksu|Ferizli|Banarlı|İnecik|Konuralp|Çilimli|Edremit|Altınoluk|Termal|Söğütlü|Karamürsel|Altınova|Yalakdere|Demirtaş|Gölbaşı|Şehit Nusretbey|Tekkeköy|Büyükkarıştıran|Görele|Karadere|Hendek|Alaçatı|Köşk|Bedirli|Karayün|Karaçayır|Kayadibi|Kabataş|Dokurcun|Gelembe|Akyazı|Kırkağaç|Şenyurt|Güneysu|Altınözü|Yiğityolu|Babatorun|Arsin|Ovakent|Kaymakçı|Birgi|Bademli|Düziçi|Birecik|Adala|Seydim|Cemilbey|Kabalı|Kırıkhan|Yalangöz|Akıncı|Korgan|Terme|Mermer|Perşembe|Gürsu|Kestel|Düzköy|Sarıgöl|Erdek|Hopa|Kemalpaşa|Vakfıkebir|Reis|Akşehir|Gülağaç|Sarıçam|Yakapınar|Yüreğir|Dağbaşı|Döşemealtı|Dağ|Battalgazi|Akarsu|Yeşilli|Ortaköy|Karasu|Yomra|Kozcağız|Arıt|Saltukova|Murat|Cumaçay|Camili|Kazan|Küplü|Yarhisar|Alaşehir|Yeşilyurt|Gökdere|Çamlıbel|Köprüören|Sabuncu|Obruk|Yarma|Dedeli|Germencik|Ortaklar|Güce|Tirebolu|Gökçen|Boğaziçi|Kâhta|Narince|Damlacık|Akıncılar|Atburgazı|Bağarası|Kösreli|Çamaş|Ceyhan|Sağkaya|Çığlı|Gölcük|Zeytinliova|Akhisar|Sürmene|Küçükdere|Araklı|Gölyaka|Bulancak|Kovanlık|Bahçe|Güvenç|Aktepe|Boğazkaya|Kolay|Bozburun|Ovacuma|Safranbolu|Ondokuzmayıs|Taflan|Kocaköy|Erciş|Akçakoca|Deliçay|Kocapınar|Değirmendere|İmamoğlu|Edremit|Piraziz|Gülyalı|Bağlıca|Kurtalan|Doğantepe|Ezinepazarı|Akdağ|Gürgentepe|Asarcık|Karapürçek|Çayeli|Kaptanpaşa|Büyükköy|Atça|Sultanhisar|Ahmetli|Ergani|Suluova|Güroymak|Karabulduk|Keşap|Çağlayan|Çatalarmut|Kalkandere|Midyat|Saray|Taşağıl|Beşkonak|Manavgat|Kumru|İznik|Suvarlı|Kızılin|Besni|Çakırhüyük|Devrek|Eğerci|Hani|Kozlu|Erbaa|Doğanyurt|Gökçeli|Karayaka|Çaybaşı|Yamaç|Sancak|Ilıcalar|Girmeli|Haberli|Oyalı|Saraykent|Gümüşova|Cumayeri|Kuzyaka|Pamukova|Gebiz|Serik|Honaz|Çandarlı|Bahşılı|Sarayköy|Göllü|Derinkuyu|Babaeski|Karacaoğlan|Bozüyük|Dodurga|Acıpınar|Yeşilova|Taşpınar|Aybastı|Eşen|Kızılyaka|Kemer|Altınyayla|Yeşilüzümlü|Amasra|Gölhisar|Merzifon|Sarıbuğday|Kaynarca|Harran|Uzunkuyu|Güzelyurt|Demre|Demirci|Karacabey|Gölbaşı|Ayvacık|Belören|Tütüncü|Sarıköy|Buğdaylı|Gönen|Bozkurt|Yeditepe|Kışlak|İdil|Güçlükonak|Dicle|Gündoğdu|Bakacak|Biga|Karabiga|Balıklıçeşme|Gümüşçay|Sinekçi|Kocaali|Susurluk|Ömerköy|Göbel|Ürgüp|Yaygın|Kızılağaç|Mercimekkale|Ağabeyli|İnebolu|Çağlayancerit|Devecikonağı|Çaltılıbük|Mustafakemalpaşa|Söğütalan|Yenipazar|Korkut|Doğankent|Buldan|Gölköy|Dökmetepe|Turhal|Yeşilyurt|Alıcık|Beşpınar|Güllük|Selimiye|Vezirköprü|Mezraa|Milas|Ören|Köprübaşı|Mecidiye|Küçük Yerlisu|Keşan|Böğürtlen|Reşadiye|Küçüksu|Abana|Serinhisar|Akyurt|Çubuk|Muratlı|Yeşildere|Kazımkarabekir|Bucakkışla|Kılbasan|Beyağaç|Salat|Bismil|Tepe|Yenişehir|Çırpı|Dalaman|Yerkesik|Menteşe|Çamiçi|Yeşilyurt|Göktepe|Niksar|Çatakköprü|Silvan|Bağdere|Fevzipaşa|Çiftlik|Çatalca|Doğançay|Geyve|Yağlıdere|Saruhanlı|Halitpaşa|Hacılar|Şarköy|Mürefte|Göçbeyli|Yuntdağ|Turanlı|Zeytindağ|Kozak|Bozcaada|Gölmarmara|Ula|Yüksekova|Dağlıca|Esendere|Tavşanlı|Çokak|Çöpköy|Tepecikören|Hamidiye|Kırcasalih|Ortacalar|Kumluca|Yapraklı|Altınyaka|Akçaova|Çine|Pamukören|Horsunlu|Buharkent|Çermik|Kiraz|Yoğun|Elmadağ|Yahşihan|Elvanlı|Güzeloluk|Geyikli|Erdemli|Ezine|Etili|Çan|Başgedikler|Narlı|Pazarcık|Elbistan|Gücük|Afşin|Tanır|Halfeti|Çakıralan|Havza|Samsat|Araban|Saray|Özalp|Dorutay|Sarıkonak|Narlıdere|Bölükyazı|Alacakaya|Dicle|Suluçem|Ardeşen|Baykan|Dilektepe|Evciler|Yanarsu|Tuzlagözü|Kozluk|Bekirhan|Eğil|Sarıbeyler|Savaştepe|İvrindi|Akçaova|Korucu|Kandıra|Kaymas|Kayapa|Gökçeyazı|Karaköprü|Karaçoban|Ulubey|Kumlu|Turgut|Üsküp|İnece|Dereköy|Yoğuntaş|Gömeç|Çakmak|Siverek|Çaylarbaşı|Karacadağ|Karakeçi|Şekerli|Dağbaşı|Bucak|İscehisar|Çağış|Yağcılar|Bigadiç|Söğüt|Babadağ|Kaynaşlı|Kula|Gökçeören|Tonya|Şalpazarı|Ortabağ|Uludere|Alaçam|Marmara|Dargeçit|Hizan|Karpuzlu|Bolayır|Evreşe|Gallipoli|Bulanık|Ovabağ|Karaağıl|Erentepe|Simav|Dağardı|Ahmetli|Yeniçağa|Diyadin|Koçarlı|Çakırbeyli|Karadirek|Sandıklı|Ortaköy|Sivaslı|Eymir|Sorgun|Geçitli|Musabeyli|Osmanpaşa|Kemerhisar|Osmaneli|Doğankent|Bozdoğan|Çivril|İshaklı|Doğanpınar|Gümüşsu|Oğuzeli|Gazipaşa|Tecirli|Karataş|Tuzla|Seydişehir|Muradiye|Türkeli|Güzelkent|Malkara|Ballı|Ortaköy|Yürük|Şahin|Balcı|Çavuş|İbriktepe|Tosya|Sinanpaşa|Beyçayırı|Beşiri|Beşpınar|Kocaaliler|Anamur|Sakçagöz|Nurdağı|Datça|Yavuzeli|Kovancılar|Çaybağı|Hazro|Doğansu|Kocatepe|Yeşilvadi|Karacaköy|Şile|Teke|Çameli|Palu|Kürecik|Akşar|Şeyhli|Ladik|Bahçesaray|Çatak|Doğanhisar|Armutlu|Salıpazarı|Avanos|Topaklı|Özonak|Dernekpazarı|Elbeyli|Sason|Banaz|Yücebağ|Mazıdağı|Nurettin|Nurettin|Karahasan|Malazgirt|Aktuzla|Osmancık|Silifke|Taşucu|Kırobası|Acıpayam|Kelekçi|Hasbek|Köprüköy|Darıca|Manyas|Şevketiye|Bozyazı|Çobanlar|Meriç|Küplü|Gerze|Çay|Yenimehmetli|Temelli|Sumbas|İğdir|Boztepe|Zile|Karakeçili|Gencek|Doğanbey|Beyşehir|Karahallı|Üzümlü|Bakırdağı|Bozova|Yaylak|Develi|Kanlıavşar|İskilip|Çiçekli|Sütlüce|Kocakoç|Musabeyli|Çeltikçi|Sergen|Vize|Kıyıköy|Arıcak|Köprübaşı|Pazaryeri|Salmanlı|Taşlıçay|Yalnızçam|Bozkurt|Hasköy|Selendi|Sulusaray|Bekilli|Havsa|Hasköy|Kızılcabölük|Geyikpınar|Meydan|Kavakbaşı|Mutki|Tavas|Beyçayırı|Kızılsu|Lapseki|Umurbey|Kâmil|Ilgın|Aşağıçiğil|Argıthanı|Derbent|Çavdarhisar|Gördes|Domaniç|Yazıhan|Gönen|Gülpınar|Küçükkuyu|İhsaniye|Çardak|Kale|Hasanbeyli|Kalkan|Bolvadin|Akkuş|Savcılı';

function setCountries()
{
	for (country in cities)
		document.write('<option value="' + country + '">' + country + '</option>');
}

function set_city(oCountrySel)
{
	var cityArr;
	var country = oCountrySel.options[oCountrySel.selectedIndex].text;
	var oCitySel = document.getElementById( "cities" );
	oCountrySel.classList.remove( "mandatory" );
	document.getElementById("search").classList.add( "disabled" )
	if (cities[country])
	{
		oCitySel.disabled = false;
		oCitySel.classList.add( "mandatory" );
		cityArr = cities[country].split('|');
		oCitySel.options[0] = new Option( "Select", "" );
		for (var i = 0; i < cityArr.length; i++)
			oCitySel.options[i+1] = new Option(cityArr[i],cityArr[i]);
		oCitySel.options[0].setAttribute("disabled", "disabled");
	}
	else 
	{
		oCitySel.disabled = true;
		oCountrySel.classList.add( "mandatory" );
		oCitySel.classList.remove( "mandatory" );
	}
}

function changeCity( oCitySel )
{
	oCitySel.classList.remove( "mandatory" );
	document.getElementById("search").classList.remove( "disabled" )
}

function setDefaultCheckInAndCheckOutDate()
{
	var requestDate = getRequestParam('checkin');
	var today = new Date();
	var tomorrow = new Date(today.getTime()+1000*60*60*24);
	var checkinEle = document.getElementById("checkin");
	var checkoutEle = document.getElementById("checkout");
	if( requestDate == null )
	{
		checkinEle.valueAsDate = today;
		checkoutEle.valueAsDate = tomorrow;
	}
	else
	{
		var dateToSet = new Date( requestDate );
		checkinEle.valueAsDate = dateToSet;
		requestDate = getRequestParam('checkout');
		dateToSet = new Date( requestDate );
		checkoutEle.valueAsDate = dateToSet;
	}
	setMinDate( checkinEle, today );
	setMinDate( checkoutEle, tomorrow );
}

function setMinDate( dateEle, date)
{
	var dd = date.getDate();
	var mm = date.getMonth()+1; //January is 0!
	var yyyy = date.getFullYear();
	if(dd<10)
	{
        dd='0'+dd;
    } 
    if(mm<10)
	{
        mm='0'+mm;
    } 
	var dateStr = yyyy+'-'+mm+'-'+dd;
	dateEle.setAttribute("min", dateStr);
}

function setCheckout( checkinEle )
{
	var checkinDate = new Date(checkinEle.value);
	var checkoutDate = new Date( document.getElementById("checkout").value );
	if( checkinDate >= checkoutDate )
	{
		var nextCheckoutDate = new Date(checkinDate.getTime()+1000*60*60*24);
		document.getElementById("checkout").valueAsDate = nextCheckoutDate;
	}
}

function onClickSearch()
{
	var requestParam = '?city=' + document.getElementById("cities").value + '&checkin=' + document.getElementById("checkin").value 
	+ '&checkout=' + document.getElementById("checkout").value + '&rooms=' + document.getElementById("rooms").value 
	+ '&adults=' + document.getElementById("adults").value + '&children=' + document.getElementById("children").value + '&infants=' + document.getElementById("infants").value;
	var redirectLink = window.location.protocol + "//" + window.location.host + '/getAllHotels' + requestParam;
	window.location.href = redirectLink;
}

function getRequestParam(p)
{
    return (window.location.search.match(new RegExp('[?&]' + p + '=([^&]+)')) || [, null])[1];
};

function setDefaultValueForEachElement( param, id )
{
	var requestValue = getRequestParam( param );
	if( requestValue != null )
		document.getElementById( id ).value = requestValue;
}

function setDefaultValues()
{
	setDefaultValueForEachElement('city', "cities");
	setDefaultCheckInAndCheckOutDate();
	setDefaultValueForEachElement('rooms', "rooms");
	setDefaultValueForEachElement('adults', "adults");
	setDefaultValueForEachElement('children', "children");
	setDefaultValueForEachElement('infants', "infants");
}

function clickEachButton( buttonEle )
{
	var rowJavascript = buttonEle.parentNode.parentNode;
	var code = rowJavascript.cells[0].innerHTML;
	var name = rowJavascript.cells[1].innerHTML;
	redirectToEachHotel( code, name );
}

function redirectToEachHotel( hotelCode, hotelName )
{
	var requestParam = '?hotelName=' + hotelName + '&checkin=' + document.getElementById("checkin").value + '&checkout=' + document.getElementById("checkout").value 
	+ '&rooms=' + document.getElementById("rooms").value + '&adults=' + document.getElementById("adults").value 
	+ '&children=' + document.getElementById("children").value + '&infants=' + document.getElementById("infants").value;
	var redirectLink = window.location.protocol + "//" + window.location.host + '/getAvailableRoomDetails/' + hotelCode + requestParam;
	window.location.href = redirectLink;
}

function onClickEachHotelSearch()
{
	var pathName = window.location.pathname;
	pathName = pathName.substring( pathName.indexOf('/')+1 );
	pathName = pathName.substring( pathName.indexOf('/')+1 );
	redirectToEachHotel( pathName, document.getElementById("hotel").value );
}

$(document).ready(function()
{
	setDefaultValues();
});