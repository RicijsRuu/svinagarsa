const images = [
    { 
        src: "images/matiss.jpg", 
        description: `
        <h3>Matīss Birkens</h3><br>
        <strong>Portrets:</strong><br>
        <em>Nekāds bilžu bāleliņš neesmu — mati brūngani melni, viļņaini, deguns ar kumpi, zēnības gados pret bēniņu siju pārlauzts. Miesa spalvaina kā <em>dienvidniekam</em>, vienīgi <em>acis</em> zilganzaļas — vismaz tās <em>daudzmaz</em> latviskas. (24. Lpp)</em><br><br>
        <ul>
            <li><strong>Dzīvo Torņkalnā</strong>, savrupmājā, kas atrodas <em>starp</em> Irbenes ielu un pansionātu Ģimnastikas ielā.<br>
            <em>Nelielais, bet itin glītais savrupnamiņš atrodas <em>starp</em> Irbenes ielu un pansionātu Ģimnastikas ielā. (20.lpp.)</em></li>
            <li><strong>Dzimis 1915. gada decembrī</strong>, grāmatas sākumā vēl ir 23 gadi, bet lielāko daļu romāna sižeta Matīsam ir 24 gadi.<br>
            <em>Man decembrī būs divdesmit četri.</em> (9.lpp.)</li>
            <li>Palicis bez biologiskā tēva, kuru zaudēja frontē Pirmā Pasaules kara laikā. Māti sauc Marija, un patēvu — Volfgangs jeb Volfs, kurš ir baltvācietis.</li>
            <li>Matīss ir uzticams draugs, jo, kad Koļa palūdza viņam apraudzīt Alvīnes tanti, Matīss neizstāstīja to, ka Nikolajs nogalināja viņas dēlu.<br>
            <em>— Pinkertons, ko neteiksi, — Koļa runā, uz mani neskatīdamies. — Domāju, vieglāk būs, ja nezināsi... Viņai, ceru, tu neko neteici?<br>
            — Protams, nē! Varbūt gudrs neesmu, bet tik stulbs arī ne. Viņa lika tev sirsnīgi dzert tējas. - Pašķielēju uz Koļu un pamanu viņu berzējam aci, it kā tajā kaut kas būtu iekritis. — Neuztraucies, es nevienam neko nestāstīšu, tomēr vai nav labāk, ka es zinu? (63.lpp.)</em></li>
            <li>Matīss uztver dzīvību kā vērtību, turpretim pret nāvi viņam ir riebums. Būdams divpadsmit gadus vecs, viņš spiests palīdzēt tēvoča kaimiņam nokaut teļu, to pieturot un uzguļoties tam virsū ar savu svaru. Tam jābūt spēcīgam iespaidam, turēt dzīvu būtni, kamēr kaimiņš tai pārgriež rīkli. Matīss atceras:<br>
            <em>„Asiņainām drēbēm, trīcošiem ceļiem un īdēdams gluži kā pirmīt teliņš, steberēju uz tēvoča mājām. “Pagaidi, neskrien, es tev par izlīdzēšanu svaigu cāli iedošu. Rīta agrumā nokāvu…” Es pieliku soli un metos prom.” (55.lpp.)</em></li>
        </ul>
        <strong>Citāts par mammu, volfu, grāmata uz geto</strong><br>
        <ul>
            <li>Strādāja par krāsotāju pie Koļa un arī par kapraci.</li>
            <li>Matīss pēc tam, kad lode ir cauršāvusi viņa vaigu, jūt svina garšu mutē ik reizi, kad tuvumā notiek kaut kas vardarbīgs.<br>
                <ul>
                    <li>Garām paiet kāds zaldāts</li>
                    <li>Apkārtnē notiek karadarbība</li>
                    <li>Nelāga priekšnojauta</li>
                    <li>Iegūst fizisku triecienu ievainojuma tuvumā</li>
                </ul>
            </li>
        </ul>
        <em>Svina garša mutē vairs nav tik uzbāzīga kā iepriekš. Esmu jau tā pieradis, ka ilgākus laika prīžus spēju par to aizmirst. Taču, ja sakustinu mēli, žokļus un izgaršoju siekalas, tad secinu, ka metāliskā atēna turpat vien dus. (206.lpp.)</em>
        `
    },
    { src: "images/nikolajs.jpeg", description:
         `
        <h3>Nikolajs Brīskorns jeb Koļa</h3><br>
        
        <ul>
            
            <li><strong>Dzimis 1898. gada aprīlī</strong>, grāmatas sākumā vēl ir 41 gads. Nikolajs ir Matīsa tēvocis un priekšnieks (kad strādāja kā krāsotājs).<br>
                <em>Mammas pusbrālēns, tēvocis un priekšnieks vienā personā. Koļonkulim, kā saucu vinu bērnībā, ir četrdesmit. Nē, kļūdos, aprīlī palika četrdesmit viens. (9.lpp.)</em></li>
            <li>Strādāja par krāsotāju un arī par kapraci.</li>
            <li>Nikolajs savās attiecībās ar Matīsu uzturēja vienlīdzību, tādejādi parādot cieņu. Viņš necentās izrādīt to, ka ir pārāks, prasmīgāks, spēcīgāks vai gudrāks.<br>
                <em>"Tu stradā kopā ar mani, nevis pie manis. Tā ir milzīga atšķirība. Saproti?" (9. Ipp.)</em></li>
            <li>Koļam ar Matīsu ir ļoti draudzīgas attiecības, jo abi viens otram ir izstāstījuši savus lielākos noslēpumus: Matīsa intīmās problēmas, Koļa pieredze karā.</li></ul>
            Koļa piedalījās Brīvības cīņās, partizānu pusē. Vienu nakti viņš gāja izlūkos, bet sarkanie viņu notvēra. Viņi Koļu spīdzināja, lai iegūtu informāciju. Sarkanarmieši saprata, ka Koļa melo un vēlējās viņu nošaut, taču atlika to uz nākamo dienu, cerībā, ka Koļa izpļāpāsies. Viņu iemeta malkas šķūnī un pie durvīm nolika sargu- Nikolaja klasesbiedru Augustu Nādeli. Koļa centās pierunāt, lai viņu palaiž sveikā, pieminot reizi, kad aizstāvēja Augustu no kauslīgā Plīvāna, bet Augusts izlikās ne zinis. Koļa bija aizvainots bez gala viņa cietsirdības dēļ. Nikolajs nostājās pie durvīm un lūdza Gustam, lai iedod padzerties, un, paveroties durvīm, parādījās Gusta roka. Koļa ar visu spēku ievilka viņu iekšā un netīši, cenšoties viņu apklusināt, pagrieza kaklu un nogalināja Augustu. (33.-34.lpp.)
<ul><br>
            <li>Nikolajs ir ļoti cimperlīgs un akurāts. Viņš cenšas turēties pie saviem principiem.</li>
                <em>—Biedri Goldman, kopš Latvija pievienojās Ženēvas konvencijai, svina krāsu iekšdarbos lietot uz visstingrāko aizliegts. Sen jau,—skaidro Nikolajs, kamēr es brīnos par viņa zināšanu. </em>(98.lpp.)</li>
            <li>Koļa aiz žēlsirdības paslēpj 3 sarkanarmiešus, viņš nešķiro pēc tautības, tādēļ uzskatām, ka Koļam piemīt humānisms.<br>
                <em>—Kas viņi ir?<br>
—Sarkanarmieši, izbēgušie...<br>
—Sarkanie, krievi? — Rūdis gandrīz salecas. — Kāpēc tu slēp krievus?<br>
—Rāmak, rāmak. Kāpēc tu slēp žīdus? Es taču tev neprasu, ko?<br>
—Bet krievus!? Pēc visa, ko viņi te ir sadarījuši!<br>
—Es saprotu tevi un piekrītu, bet tie zaldātiņi ir jauni un dumji puikas.<br>
Vai viņi dikti vainīgi, ka Krievijā piedzimuši un apmaldījušies trijās komunisma priedēs? Un vēl ko teikšu. Mēs nezinām, bet nekur nav teikts, ka tava māte un patēvs butu pagalam. Ir tālu prom, bet, iespējams, dzīvi. (237.lpp.)
</em></li><br>
            <li>Nikolajs ir apdomīgs un tālredzīgs. Viņš slēpj pie sevis žīdus, jo viņu pierunā Rūdis.<br>
                <em>— Tā... no vienas puses, saspiežoties būtu siltāk, būtu mazāk jākurina, bet atkal... ja tur nāk precēts pāris vai, kas zina, sievišķi vien, tad labāk, ka ir vēl viena rūme. Mjā... ja tikai āmas, tad pavisam karsti var sanākt... Nu un tad? Lai ir kopā, ies lustigāk, he, he... Bet kā tas var izvērsties? Ka nesāk par daudz... Ne, tā neies krastā. Sāks mest dzirksteles, kamēr mani pašu... nu, nē, nē. Lai ir, kā ir. Nevar gribēt "Romas viesnīcu" ar šveicaru, bidē un teleponu... tad jau... bet, paga... lai paši sev taisa! Ha! Brālīšiem laika daudz, lai tik rukā. Par velti manu maizi ēdīs? Nekā nebija, katrs izraks pa kambarim… Eh, kokus vēl vajag... Matīs, atnāksi man paligā baļķēnus no meža iznest? (235.lpp.)</em>,
                </ul>
        ` },
    { src: "images/rudis.jpg", description:  `
        <h3>Rūdolfs Pele jeb Rūdis.
</h3>
<br>
        <ul>
        <li>Matīsa bijušais skolasbiedrs, pirms 1939. gada, viņi nebija ilgi tikušies, bet tik un tā saglabājās labs kontakts. 
        <li>Rudim ļoti patīk riskēt. <br>
            <em>Tā laikam ir. Rūdim azartiski gājieni tik jau kopš bērna kājas, varbūt viņš tāpēc? Pats reiz izteicās: kad dari to, kas ir aizliegts, tevi pārņem eiforija un patīkami kņudinoša trauksme, it kā veiktu pārgalvigu triku. Ja izdosies — gods un slava, ja ne — ar seju dubļos vai beigts un pagalam. (233.lpp.)</em>
        <li>1941. gada 14. jūnija deportācijās uz Sibīriju izveda arī Rūda ģimeni.
        <li>Rūdis ir labs draugs, jo uzslavē Matīsu Tamāras priekšā, taču arī uzskatām, ka tas, ko Rūdis teica par viņa dzīvības izglābšanu nāca patiešām no sirds.<br>
            <em>Ko neteiksi, izglābis dzīvību. Rūda vārdi liek justies neveikli, kā melēgi paslavētam. Kamdēļ tādas muļķības jāizgudro? Neko taču nedarīju... varbūt Rūdis domā mirkli, kad piespiedu viņu pie zemes? Nepiespiestu, trāpītu viņam? Varbūt, bet ne jau ar nodomu es lodei priekšā gadījos... Viņam gan patīk pārspīlēt... Ak, es! Kā uzreiz neapjēdzu - Rūdis tā sacīja, lai aizkustinātu un pierunātu Tamāru. Jā, visdrizāk tapēc. (177.lpp.)</em>
        <li>Rūdis izrāda vieglprātību un pārgalvību, pārkāpjot komandanta stundu, lai iegūtu alu Līgo vakaram, riskējot ar savu un draugu dzīvībām.
        <li>Pēc tam, kad Matīsam iešauj vaigā, Rūdis izrāda atbildību un kritisko domāšanu, viņam ir uzreiz stratēģija: uz kuru slimnīcu doties un kā tur nokļūt. Rūdis ar Kažu momentā rīkojas. Viņi nolemj iet uz bērnu slimnīcu, ievietojot Matīsu kādas kundzītes ķerrā. 
        <li>Vainas apziņa, vēlas palikt pie matīsa slimnīcā.</li>
         <em>
        — Mīļo Tamāriņ, neviens tev pasakas nestāsta... tiešām nelaidīsi?
        <br>— Nē! Atnāciet pec dienām divām... nē, labāk trim. Un skaidrā, sapratāt!? ledzērušus nelaidīšu.
        <br>— Nu, kad tā...
        <br>— Vismaz pasaki, ka mēs bijām, labi?
        <br>— To pateikšu.
        (177.lpp.)</em>
        <li>Matīss nojauta, ka Rūdis ir pamatīgi dzēris, jo tas viņam ir ļoti neraksturīgi. Rūdis pārdzīvo, jo uzzināja, ka viņa vecākus izsūtīja. 
        <em>
        <br>— Hallooo... — Pēc stieptās intonācijas spriežu, Rūdis ir pamatigā dūšā.
        <br>— Sveiks, Rūdi! Te Matīss.
        <br>— Matīs... oi, Matīs!
        <br>— Trenē jau no paša rīta?
        <br>— Eh, Matīs, ja tu zinātu...
        <br>— Kas noticis?
        <br>— Aizveda... manējos aizveda. Tu saproti!? Tonakt... kā lopiņus...
         (166.lpp.)</em>
        <li>Rūdis slēpj ebrejus.Viņš pats meklē, kur viņus varētu izmitināt, taču tik un tā uzņemās par viņiem atbildību. Rūdis šķiro, ko izglābj, jo 1941. gada 14. jūnija deportāciju dēļ viņam ir naids pret krieviem un sarkanarmiešiem. 
        <em><br>— Nē...
        <br>— Tiešām? Hilda, man jāzina, ja kas tāds noticis. Mūsu pašu drošības dēļ.
        <br>— Oh, nu gan tu mani spaidi! Tikai viens sīkums, tfu, runāt nav vērts.
        Biju piemigusi, Rebeka arī, un viņš izlavījās uz mirkli. Bet es ātri noķēru.
        Tepat uz lieveņa. Nekur viņš nepaspēja, un neviens viņu neredzēja, un viņš arī nevienu neredzēja. Par ziņnesi ir izdomāts, tāpat kā viss pārējais... —
        Hilda atkrīt kreslā un sāk raudāt. — Oi, kā es esmu nomocījusies. Es vairs nevaru...
        (264.lpp.)</em>
        <br>
        <em>
        <br>—Kas viņi ir?
        <br>—Sarkanarmieši, izbēgušie...
        <br>—Sarkanie, krievi? — Rūdis gandrīz salecas. — Kāpēc tu slēp krievus?
        <br>—Rāmak, rāmak. Kāpēc tu slēp žīdus? Es taču tev neprasu, ko?
        <br>—Bet krievus!? Pēc visa, ko viņi te ir sadarījuši!
        <br>—Es saprotu tevi un piekrītu, bet tie zaldātiņi ir jauni un dumji puikas.
        Vai viņi dikti vainīgi, ka Krievijā piedzimuši un apmaldījušies trijās komunisma priedēs? Un vēl ko teikšu. Mēs nezinām, bet nekur nav teikts, ka tava māte un patēvs butu pagalam. Ir tālu prom, bet, iespējams, dzīvi. (237.lpp.)</em>

        ` },
    { src: "images/karsiens.JPG", description: `
        <h3>Pēteris Kārsiens</h3><br>
        <ul>
        <li>Strādā vācu palīgpolicijā.
<li>Nācis no Ilūkstes, kur iznīcināja visus vietējos ebrejus, tagat dzīvo Torņakalnā iepriekšējās īpašnieces Jadvigas tantes mājā.
<li>Matīsa kaimiņš, Jaceka bērnības draugs.
<li>Visatļautīgs, uzbāzīgs un okšķerīgs.
<br><em>
— Ak, piedošan, ar dāmu, kā pieklājas, neiepazinos. — Ciemiņš uzsvērti klanās Tamāras priekšā. — Mani sauc Pēteris.
<br>— Es zinu, Pēter. Rūdi, man glāzi neliec. — Viņa paskatās savā mazajā rokas pulkstenītī un ceļas augšā. — Man pēc pusstundas sāksies dežūra.
<br>Matīs, tu mani pavadīsi?
<br>— Kur ta' tik pēkšņi jādežūrierē? - Pētera smaids ir plats, bet balss neticīga.
<br>— Bērnu slimnīcā.
<br>— Ā....
<br>— Uz redzēšanos.
(201.lpp.)</em>
<li>Pielien augstāka amata personām, lai gūtu sev labumu.<br>
<em>
— Goda vārds, man jau tas purns likās aizdomīgs, bet kā es vareju uzminēt, — Pēteris, pagriezies pret kaprāli, taisnojas.
<br>— Tagad redzu, bet Reiha pārvaldes apstiprinātajos dokumentos par to nekas nav sacīts, — kaprālis neapmulst.
<br>— Reiha pārvalde stradā nevainojami, kļūdas pielauj vietējie ierēdņi. Tā pat nav nolaidība, bet apzināts noziegums no latviešu puses. - Vācietis draudīgi izslejas.
<br>— Piedodiet, obervahtmeistara kungs!
<br>— Ak, tu tomer žīds esi, ja? — Pēteris nāk man virsū. — Pajautā obermeistera kungam, vai drīkstu viņam iedot vienu štosi par melošanu?
<br>Kaprālis pārtulko Pētera lūgumu un izskaidro iemeslus, un obervahtmeisters, pēc īsa pārdomu mirkļa, savelk lūpas šķībā smaidā un vēlīgi pamāj ar roku.
<br>- Nu... ja tas viņam kā kaimiņam dara prieku, lūdzu. Tikai lai neairaujas, man viņš janogādā geto. Beigtu pretī neņems. (274.lpp.)
        `  }
];

let currentSlide = 0;

document.addEventListener("DOMContentLoaded", () => {
    const descriptionText = document.getElementById("description-text");
    descriptionText.innerHTML = images[currentSlide].description; // Set the description for the first image
});

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + images.length) % images.length;
    const sliderImage = document.getElementById("slider-image");
    const descriptionText = document.getElementById("description-text");

    // Update the image source
    sliderImage.src = images[currentSlide].src;

    // Clear and update the description dynamically
    descriptionText.innerHTML = ""; // Clear the previous description
    descriptionText.innerHTML = images[currentSlide].description; // Add the new description
}
