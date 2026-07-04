/* =========================================================================
   SIRIO — DIRITTO PENALE · Capitolo 10: Le conseguenze del reato.
   Fonte: Marinucci·Dolcini·Gatta, PG — misure di sicurezza e di prevenzione;
   sanzioni civili da reato (artt. 185 ss. c.p.). Integrazione minima e generale
   sul d.lgs. 7/2016 (sanzioni pecuniarie civili), senza estremi giurisprudenziali
   ulteriori rispetto alla fonte.
   ========================================================================= */

export const PEN_CAP10B = [
  {
    id: "misureSicurezza",
    part: "generale",
    chapter: 10,
    chapterTitle: "Le conseguenze del reato",
    title: "Le misure di sicurezza e le misure di prevenzione",
    subtitle: "Doppio binario, pericolosità sociale, misure personali e patrimoniali, confisca, codice antimafia",
    articoli: ["art. 25, co. 3, Cost.", "artt. 199-240 c.p.", "art. 203 c.p.", "art. 240 e 240-bis c.p.", "d.lgs. 159/2011 (codice antimafia)"],
    pages: [323, 343],
    depth: "std",
    layers: {
      essenziale:
        "Il codice del 1930 ha adottato il <strong>sistema del doppio binario</strong>: accanto alle pene, fondate sulla colpevolezza per il fatto, stanno le <strong>misure di sicurezza</strong>, fondate sulla <strong>pericolosità sociale</strong> e dirette a prevenire la recidiva mediante cura, rieducazione e neutralizzazione del reo pericoloso. Oggi sono considerate vere sanzioni penali, soggette al <strong>principio di legalità</strong> (art. 25, co. 3, Cost.; art. 199 c.p.) ma non all'irretroattività: vale il <em>tempus regit actum</em> (art. 200 c.p.), fermo che il fatto doveva costituire reato quando fu commesso. Presupposti: uno <strong>oggettivo</strong> (un fatto di reato, salvo i <em>quasi reati</em> dell'art. 49 e dell'art. 115 c.p.) e uno <strong>soggettivo</strong>, la pericolosità sociale, cioè la probabilità di nuovi reati (art. 203 c.p.), sempre da <strong>accertare in concreto</strong> dopo l'abrogazione delle presunzioni (l. 663/1986). Le misure personali sono <strong>detentive</strong> (colonia agricola o casa di lavoro, casa di cura e custodia, ricovero in o.p.g. — oggi eseguito nelle <strong>REMS</strong> —, riformatorio giudiziario) e <strong>non detentive</strong> (libertà vigilata, divieto di soggiorno, divieto di frequentare osterie, espulsione dello straniero). Quelle <strong>patrimoniali</strong> sono la cauzione di buona condotta e la <strong>confisca</strong> (art. 240 c.p.), facoltativa od obbligatoria, cui si affiancano la confisca per equivalente e la confisca allargata (art. 240-bis c.p.). La durata è indeterminata nel massimo ma con termini minimi e <strong>riesame periodico</strong> della pericolosità; per le detentive vige il tetto della pena edittale massima (l. 81/2014). Le <strong>misure di prevenzione</strong> (d.lgs. 159/2011, codice antimafia) operano invece <em>ante delictum</em>, senza previo reato accertato.",
      approfondimenti: [
        {
          label: "Pericolosità sociale: giudizio bifasico e fine delle presunzioni",
          body:
            "La pericolosità è un giudizio prognostico in due momenti: analisi della personalità con gli indici dell'art. 133 c.p. e formulazione della prognosi criminale. Gli stessi indici servono anche a commisurare la pena, ma su piani diversi: là valutano la responsabilità, qui fondano la previsione di recidiva. Il sistema originario conosceva ipotesi di pericolosità presunta <em>juris et de jure</em>; l'art. 31 della l. 663/1986, sulla scia della Corte costituzionale (sent. n. 1 del 1971), le ha abrogate: oggi la pericolosità va sempre accertata in concreto, anche per i tipi legali dell'art. 102 c.p., la cui presunzione si ritiene divenuta relativa."
        },
        {
          label: "I tipi legali di delinquenti pericolosi",
          body:
            "Il codice tipizza tre figure di soggetti imputabili e pericolosi, cui la misura si aggiunge alla pena: il <strong>delinquente abituale</strong> (abitualità presunta ex art. 102, ritenuta dal giudice ex art. 103, nelle contravvenzioni ex art. 104), il <strong>delinquente professionale</strong> (art. 105: vive abitualmente, anche in parte, dei proventi del reato) e il <strong>delinquente per tendenza</strong> (art. 108: speciale inclinazione al delitto di sangue per indole particolarmente malvagia). La dichiarazione comporta aumenti di pena, l'applicazione di misure di sicurezza e effetti secondari gravosi: interdizione perpetua dai pubblici uffici, esclusione di amnistia, indulto, sospensione condizionale, 131-bis, raddoppio dei termini per la riabilitazione."
        },
        {
          label: "La confisca e le sue forme",
          body:
            "La confisca (art. 240 c.p.) è l'unica misura di sicurezza <em>reale</em>: espropriazione statale delle cose che servirono o furono destinate a commettere il reato o che ne sono prodotto, profitto o prezzo. Prescinde dalla pericolosità dell'autore, fondandosi sulla pericolosità oggettiva della cosa, ed è irrevocabile. È <strong>facoltativa</strong> (co. 1, previa condanna e accertamento in concreto) od <strong>obbligatoria</strong> (co. 2: prezzo del reato; cose intrinsecamente pericolose, confiscabili anche senza condanna; beni informatici ex n. 1-bis). La confisca <strong>per equivalente</strong> colpisce valori corrispondenti al profitto quando la confisca diretta è impossibile e ha prevalente carattere sanzionatorio; la confisca <strong>allargata</strong> (art. 240-bis) colpisce i patrimoni sproporzionati e ingiustificati del condannato per determinati reati."
        },
        {
          label: "Misure di prevenzione: sistema del codice antimafia",
          body:
            "Le misure di prevenzione (d.lgs. 159/2011) sono specialpreventive e <em>ante o praeter delictum</em>: presuppongono la pericolosità per la sicurezza pubblica, attuale, con standard probatorio inferiore all'oltre ogni ragionevole dubbio. Le personali sono del <strong>questore</strong> (foglio di via obbligatorio, avviso orale) o del <strong>Tribunale</strong> (sorveglianza speciale di p.s., obbligo di soggiorno, da uno a cinque anni). Le <strong>patrimoniali</strong> sono il sequestro e la confisca di prevenzione dei beni sproporzionati o frutto/reimpiego di attività illecite: applicabili disgiuntamente dalle personali, senza attualità della pericolosità e persino dopo la morte del proposto (entro tre anni), art. 18 d.lgs. 159/2011."
        }
      ],
      giurisprudenza: [
        {
          label: "Corte EDU De Tommaso (2017) e Corte cost. nn. 24 e 25 del 2019",
          body:
            "La Grande Camera (23 febbraio 2017, De Tommaso c. Italia) ha censurato il sistema di prevenzione italiano per deficit di <strong>prevedibilità</strong> quanto a prescrizioni e categorie di destinatari. Ne è seguita Corte cost. n. 24/2019, che ha dichiarato illegittima l'applicazione di sorveglianza speciale, sequestro e confisca ai soggetti «abitualmente dediti a traffici delittuosi» (art. 1, lett. a), fattispecie di «radicale imprecisione», salvando invece la lett. b) (chi vive abitualmente di proventi delittuosi). Corte cost. n. 25/2019 ha espunto il delitto di violazione delle prescrizioni di «vivere onestamente» e «rispettare le leggi»."
        },
        {
          label: "Sezioni Unite sulla confisca: Lucci 2015 e SU 13783/2025",
          body:
            "Le SU Lucci (n. 31617/2015) hanno ammesso la confisca diretta del prezzo o profitto anche dopo la prescrizione del reato, se preceduta da condanna; Cass. Sez. V, n. 52/2021 lo ha escluso per la confisca facoltativa, che esige un giudicato formale di condanna. Sul denaro, le SU n. 42415/2021 qualificavano sempre diretta la confisca del denaro-profitto per la fungibilità del bene; le SU 8 aprile 2025, n. 13783 hanno mutato rotta: la confisca del denaro è diretta solo se provata la derivazione causale dal reato, altrimenti è per equivalente. La stessa pronuncia impone, nel concorso di persone, la ripartizione tra i correi secondo l'arricchimento di ciascuno, con riparto in parti uguali solo in via residuale."
        },
        {
          label: "Confisca allargata e di prevenzione: SU 27421/2021, Corte cost. 166/2025, SU 4880/2015",
          body:
            "Per la confisca allargata, le SU n. 27421/2021 richiedono la «ragionevolezza temporale» tra acquisto dei beni sproporzionati e attività criminosa; Corte cost. n. 166/2025 ha salvato l'estensione al piccolo spaccio (decreto Caivano) a condizione di squilibrio significativo, possibilità di prova contraria e vicinanza temporale degli acquisti. Sulla confisca di prevenzione, le SU n. 4880/2015 ne hanno ribadito la natura preventiva, non sanzionatoria: la pericolosità è «immanente alla res» per la sua illegittima acquisizione, sicché si applica l'art. 200 c.p. e l'attualità della pericolosità rileva solo per le misure personali."
        }
      ],
      eccezioni: [
        {
          label: "Quasi reato: misura di sicurezza senza reato",
          body:
            "Il presupposto oggettivo conosce eccezioni tassative (art. 202, co. 2, c.p.): il reato impossibile (art. 49 c.p.), l'accordo per commettere un delitto non seguito dalla commissione, l'istigazione non accolta a commettere un delitto, l'istigazione accolta a commettere un reato non commesso (art. 115 c.p.). In questi <em>quasi reati</em> non c'è reato punibile, ma l'autore, se socialmente pericoloso, può essere sottoposto a misura di sicurezza. Errore da evitare: pensare che la misura richieda sempre una condanna — si applica anche col proscioglimento del non imputabile pericoloso."
        },
        {
          label: "Durata indeterminata sì, ma con un tetto (e un'eccezione al tetto)",
          body:
            "La durata della misura è indeterminata nel massimo perché legata alla pericolosità, con termini minimi e riesame del magistrato di sorveglianza (prognosi di rilascio). Ma il d.l. 52/2014, conv. in l. 81/2014, ha fissato per le <strong>detentive</strong> il limite della pena edittale massima prevista per il reato commesso — limite che però <strong>non vale per i delitti puniti con l'ergastolo</strong>. Altra eccezione: l'estinzione del reato impedisce l'applicazione delle misure di sicurezza e ne fa cessare l'esecuzione, <strong>tranne la confisca</strong> (artt. 210 e 236 c.p.)."
        }
      ]
    },
    sintesi: [
      "Doppio binario: pene sulla colpevolezza, misure di sicurezza sulla pericolosità sociale.",
      "Presupposti: fatto di reato (salvo quasi reato) + pericolosità accertata in concreto (art. 203).",
      "Personali detentive (REMS, casa di lavoro, riformatorio) e non detentive (libertà vigilata, espulsione).",
      "Patrimoniali: cauzione di buona condotta e confisca (facoltativa, obbligatoria, per equivalente, allargata).",
      "Durata: minimo legale, riesame periodico, tetto della pena edittale massima per le detentive.",
      "Misure di prevenzione: ante delictum, codice antimafia, questore o Tribunale; De Tommaso e Corte cost. 24/2019."
    ],
    esempi: [
      {
        titolo: "Luca, prosciolto ma pericoloso",
        testo:
          "Luca, affetto da grave infermità psichica, aggredisce un passante causandogli lesioni gravi. Il giudice lo assolve perché <strong>non imputabile</strong> (vizio totale di mente): nessuna pena può essergli inflitta, perché la pena presuppone la colpevolezza. Ma la perizia e gli indici dell'art. 133 c.p. rivelano un'elevata probabilità di nuove aggressioni: accertata in concreto la pericolosità sociale — senza contare, per legge, le sue condizioni di marginalità familiare e sociale — il giudice dispone la misura di sicurezza del ricovero, eseguita in una <strong>REMS</strong>, solo perché ogni misura meno afflittiva risulta inadeguata alle esigenze di cura e controllo. Alla scadenza del termine minimo il magistrato di sorveglianza riesamina la pericolosità: se cessata, revoca la misura; altrimenti fissa un nuovo termine. Ecco il doppio binario al lavoro: dove la pena non può arrivare, arriva la misura di sicurezza."
      },
      {
        titolo: "Il patrimonio ingiustificato del signor Esposito",
        testo:
          "Il signor Esposito è indiziato di appartenere a un'associazione mafiosa ex art. 416-bis c.p. Le indagini patrimoniali ex art. 19 del codice antimafia, estese a coniuge, figli e conviventi, rivelano ville e società per un valore enormemente <strong>sproporzionato</strong> ai redditi dichiarati. Pur senza una condanna penale — le misure di prevenzione operano <em>ante delictum</em> — il Tribunale dispone il <strong>sequestro</strong> dei beni che appaiono frutto o reimpiego di attività illecite e, all'esito del procedimento, la <strong>confisca di prevenzione</strong> (art. 24 d.lgs. 159/2011), non avendo Esposito giustificato la provenienza lecita: né potrebbe invocare, dopo la l. 161/2017, la provenienza da evasione fiscale. La misura patrimoniale sarebbe applicabile anche se la pericolosità non fosse più attuale e perfino, entro tre anni, dopo la sua morte."
      }
    ],
    flashcards: [
      ["Cosa si intende per sistema del doppio binario?", "La coesistenza di pene, fondate sulla colpevolezza per il fatto, e misure di sicurezza, fondate sulla pericolosità sociale e dirette a prevenire la recidiva."],
      ["Quali sono i presupposti delle misure di sicurezza?", "Oggettivo: commissione di un fatto di reato (salvo i quasi reati ex artt. 49 e 115 c.p.); soggettivo: pericolosità sociale ex art. 203 c.p., sempre accertata in concreto."],
      ["Vale l'irretroattività per le misure di sicurezza?", "No: l'art. 200 c.p. adotta il tempus regit actum. Serve però che il fatto costituisse reato al momento della commissione."],
      ["Quando la confisca ex art. 240 c.p. è obbligatoria?", "Per il prezzo del reato e per le cose intrinsecamente pericolose (queste anche senza condanna), oltre che per i beni informatici ex n. 1-bis."],
      ["Cosa distingue le misure di prevenzione dalle misure di sicurezza?", "Le misure di prevenzione si applicano ante o praeter delictum, senza previa commissione accertata di un reato, sulla base della pericolosità per la sicurezza pubblica."],
      ["Qual è il limite di durata delle misure di sicurezza detentive?", "Dalla l. 81/2014 non possono superare il massimo edittale della pena detentiva prevista per il reato commesso, salvo i delitti puniti con l'ergastolo."]
    ],
    comparativa: {
      titolo: "Pena vs misura di sicurezza",
      a: "Pena",
      b: "Misura di sicurezza",
      righe: [
        { profilo: "Fondamento", a: "Giudizio di riprovazione per la violazione colpevole di un comando", b: "Giudizio di pericolosità sociale e probabilità di recidiva (art. 203 c.p.)" },
        { profilo: "Funzione", a: "Retribuzione, prevenzione generale e speciale", b: "Marcata prevenzione speciale: cura, rieducazione, neutralizzazione del reo pericoloso" },
        { profilo: "Destinatari", a: "Solo soggetti imputabili e semimputabili", b: "Anche i non imputabili, se socialmente pericolosi" },
        { profilo: "Durata e successione di leggi", a: "Proporzionata alla gravità del fatto; irretroattività ex art. 2 c.p.", b: "Indeterminata nel massimo con riesame (tetto edittale per le detentive); tempus regit actum ex art. 200 c.p." }
      ]
    },
    quiz: [
      {
        q: "Qual è il presupposto soggettivo per l'applicazione di una misura di sicurezza?",
        opts: [
          "La recidiva reiterata specifica dichiarata con sentenza",
          "La pericolosità sociale accertata in concreto ex art. 203 c.p.",
          "La capacità di intendere e di volere al momento del fatto",
          "La condanna definitiva a pena detentiva superiore a due anni"
        ],
        correct: 1,
        difficulty: 1,
        commonError: "Confondere la pericolosità sociale con l'imputabilità: la misura si applica anche (e soprattutto) ai non imputabili pericolosi.",
        why: "L'art. 203 c.p. definisce socialmente pericolosa la persona per cui è probabile la commissione di nuovi fatti di reato. Dopo la l. 663/1986 la pericolosità non può mai essere presunta ma va sempre accertata in concreto dal giudice.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Le misure di sicurezza"
      },
      {
        q: "In materia di misure di sicurezza, la successione di leggi nel tempo è regolata:",
        opts: [
          "Dal principio di irretroattività assoluta ex art. 2 c.p.",
          "Dal principio di retroattività della lex mitior con rango costituzionale",
          "Dal principio del tempus regit actum ex art. 200 c.p.",
          "Dalla regola dell'ultrattività delle leggi eccezionali e temporanee"
        ],
        correct: 2,
        difficulty: 2,
        commonError: "Estendere automaticamente l'art. 2 c.p.: per le misure di sicurezza vale invece la legge del tempo dell'applicazione.",
        why: "L'art. 200 c.p. consente di applicare misure di sicurezza anche a reati commessi quando non erano previste o erano diversamente disciplinate. Resta fermo che il fatto doveva costituire reato al momento della commissione.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Le misure di sicurezza"
      },
      {
        q: "Quale di queste affermazioni sulla confisca ex art. 240 c.p. è corretta?",
        opts: [
          "La confisca del prezzo del reato è facoltativa e richiede l'accertamento della pericolosità dell'autore",
          "La confisca facoltativa può essere disposta anche in assenza di condanna definitiva",
          "Le cose appartenenti a estranei al reato sono sempre confiscabili se pericolose",
          "La confisca delle cose intrinsecamente pericolose può essere disposta anche senza condanna"
        ],
        correct: 3,
        difficulty: 3,
        commonError: "Assimilare le due ipotesi di confisca obbligatoria: solo per le cose intrinsecamente pericolose (fabbricazione, uso, porto, detenzione vietati) si prescinde dalla condanna.",
        why: "L'art. 240, co. 2, c.p. rende obbligatoria la confisca del prezzo (che però presuppone condanna) e delle cose la cui fabbricazione, uso, porto, detenzione o alienazione costituisce reato, confiscabili anche senza condanna, essendo la pericolosità presunta ex lege.",
        fonte: "Marinucci·Dolcini·Gatta, PG — La confisca"
      },
      {
        q: "Secondo le Sezioni Unite n. 13783 del 2025, la confisca di somme di denaro ha natura diretta:",
        opts: [
          "Solo se è provata la derivazione causale del denaro dal reato",
          "Sempre, in ragione della natura fungibile del denaro",
          "Mai, trattandosi sempre di confisca per equivalente",
          "Solo se il denaro è rinvenuto sul conto corrente dell'autore"
        ],
        correct: 0,
        difficulty: 5,
        commonError: "Rispondere con la regola delle SU 42415/2021 (sempre diretta per la fungibilità del denaro), superata dal revirement del 2025.",
        why: "Le SU 8 aprile 2025, n. 13783 hanno abbandonato l'orientamento fondato sulla fungibilità: la confisca del denaro è diretta solo in presenza della prova del nesso di derivazione causale dal reato; in difetto, è per equivalente.",
        fonte: "Marinucci·Dolcini·Gatta, PG — La confisca per equivalente"
      },
      {
        q: "Le misure di prevenzione si distinguono dalle misure di sicurezza perché:",
        opts: [
          "Hanno funzione retributiva e non specialpreventiva",
          "Si applicano indipendentemente dalla commissione di un precedente reato",
          "Possono essere disposte solo dall'autorità di pubblica sicurezza",
          "Richiedono l'accertamento della pericolosità oltre ogni ragionevole dubbio"
        ],
        correct: 1,
        difficulty: 2,
        commonError: "Ritenere che anche le misure di prevenzione presuppongano un reato accertato: sono invece misure ante o praeter delictum.",
        why: "Le misure di prevenzione sono specialpreventive e prescindono dalla previa commissione di un reato; basta il ragionevole convincimento della pericolosità attuale per la sicurezza pubblica, con standard probatorio inferiore a quello del processo penale. Il sistema è misto: questore e autorità giudiziaria.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Le misure di prevenzione"
      },
      {
        q: "Cosa ha stabilito Corte cost. n. 24 del 2019 dopo la sentenza De Tommaso?",
        opts: [
          "L'illegittimità dell'intero sistema delle misure di prevenzione personali",
          "La legittimità della categoria dei soggetti abitualmente dediti a traffici delittuosi",
          "L'illegittimità dell'applicazione delle misure ai soggetti di cui all'art. 1, lett. a), d.lgs. 159/2011",
          "L'abolizione della confisca di prevenzione per difetto di base legale"
        ],
        correct: 2,
        difficulty: 4,
        commonError: "Confondere le due lettere dell'art. 1: la lett. b) (chi vive di proventi delittuosi) è stata salvata, la lett. a) (dediti a traffici delittuosi) è caduta.",
        why: "La Corte ha giudicato la lett. a) affetta da radicale imprecisione, dichiarando illegittima l'applicazione di sorveglianza speciale, sequestro e confisca a quella categoria; la lett. b) è stata invece ritenuta precisabile in via interpretativa e quindi conforme a Costituzione.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Le misure di prevenzione"
      },
      {
        q: "La dichiarazione di delinquenza abituale comporta, tra l'altro:",
        opts: [
          "L'applicabilità della causa di non punibilità ex art. 131-bis c.p.",
          "Il divieto di sospensione condizionale della pena",
          "La riduzione del termine per ottenere la riabilitazione",
          "L'automatica applicabilità di amnistia e indulto"
        ],
        correct: 1,
        difficulty: 3,
        commonError: "Invertire gli effetti: la dichiarazione preclude il 131-bis, raddoppia il termine per la riabilitazione ed esclude amnistia e indulto salvo diversa previsione del decreto.",
        why: "Tra gli effetti secondari della dichiarazione di abitualità figurano il divieto di sospensione condizionale (art. 164 c.p.) e del perdono giudiziale, l'interdizione perpetua dai pubblici uffici, l'inapplicabilità di amnistia, indulto e 131-bis, il raddoppio del termine per la riabilitazione.",
        fonte: "Marinucci·Dolcini·Gatta, PG — I delinquenti pericolosi"
      }
    ],
    veroFalso: [
      {
        aff: "Una misura di sicurezza può essere applicata anche a chi non ha commesso alcun reato, nei casi di quasi reato.",
        vero: true,
        traccia: "Vero. L'art. 202, co. 2, c.p. ammette eccezioni tassative al presupposto oggettivo: reato impossibile (art. 49) e ipotesi di accordo o istigazione non seguiti dalla commissione del reato (art. 115). In tali casi, se l'autore è socialmente pericoloso, può essere disposta una misura di sicurezza pur mancando un reato punibile."
      },
      {
        aff: "L'estinzione del reato fa cessare l'esecuzione di tutte le misure di sicurezza, compresa la confisca.",
        vero: false,
        traccia: "Falso. L'estinzione del reato impedisce l'applicazione delle misure di sicurezza e ne fa cessare l'esecuzione, ma con l'eccezione della confisca (artt. 210 e 236 c.p.), che è provvedimento irrevocabile a carattere istantaneo e permanente."
      },
      {
        aff: "Le misure di prevenzione patrimoniali possono essere applicate disgiuntamente da quelle personali e anche dopo la morte del proposto.",
        vero: true,
        traccia: "Vero. L'art. 18 d.lgs. 159/2011 consente l'applicazione disgiunta delle misure patrimoniali, prescinde dall'attualità della pericolosità e ne ammette l'applicazione anche in caso di morte del proposto, purché il procedimento sia instaurato entro tre anni dal decesso."
      }
    ],
    aperta: {
      q: "Il candidato illustri il sistema del doppio binario, soffermandosi sui presupposti di applicazione delle misure di sicurezza e sulle differenze rispetto alle misure di prevenzione.",
      traccia:
        "Il codice del 1930 affianca alle pene le misure di sicurezza (doppio binario): le prime retribuiscono la colpevolezza per il fatto, le seconde neutralizzano la pericolosità sociale prevenendo la recidiva, e si applicano anche ai non imputabili. Oggi sono vere sanzioni penali, soggette a legalità (art. 25, co. 3, Cost.; art. 199 c.p.) ma non a irretroattività (art. 200 c.p., tempus regit actum). Presupposti: oggettivo, un fatto di reato salvo i quasi reati tassativi (artt. 49 e 115 c.p.); soggettivo, la pericolosità sociale ex art. 203 c.p., probabilità di nuovi reati desunta dagli indici dell'art. 133 c.p. e sempre accertata in concreto dopo la l. 663/1986. La durata è indeterminata nel massimo, con termini minimi e riesame periodico, ma le detentive incontrano il tetto edittale ex l. 81/2014. Le misure di prevenzione (d.lgs. 159/2011) se ne distinguono perché ante o praeter delictum: prescindono da un reato accertato, fondandosi sulla pericolosità attuale per la sicurezza pubblica, con le garanzie rafforzate imposte da Corte EDU De Tommaso e Corte cost. nn. 24 e 25 del 2019.",
      fonte: "Marinucci·Dolcini·Gatta, PG — Le misure di sicurezza e di prevenzione"
    },
    consigliate: ["mappa", "comparativa", "flashcards", "mcq", "aperta"],
    media: {
      podcast: {
        title: "Doppio binario: misure di sicurezza e di prevenzione",
        chapters: [
          ["Funzione, natura e presupposti", 0],
          ["Misure personali e patrimoniali: la confisca", 320],
          ["Durata, riesame ed esecuzione", 650],
          ["Le misure di prevenzione e il codice antimafia", 900]
        ]
      },
      mappa: true
    }
  },
  {
    id: "sanzioniCivili",
    part: "generale",
    chapter: 10,
    chapterTitle: "Le conseguenze del reato",
    title: "Le sanzioni civili da reato",
    subtitle: "Restituzioni e risarcimento (art. 185), obbligazioni civili per multe e ammende, garanzie, rapporti col giudizio civile",
    articoli: ["artt. 185-198 c.p.", "art. 196 e 197 c.p.", "art. 74 c.p.p.", "artt. 316 e 319 c.p.p."],
    pages: [344, 346],
    depth: "std",
    layers: {
      essenziale:
        "Il reato non produce solo conseguenze penali: il codice vi ricollega anche <strong>sanzioni civili</strong>. L'art. 185 c.p. stabilisce che <strong>ogni reato obbliga alle restituzioni</strong> a norma delle leggi civili (co. 1): reintegrazione dello stato di fatto anteriore al reato, su beni mobili o immobili, obbligo <strong>indivisibile</strong> ex art. 187, co. 1, c.p. Inoltre, ogni reato che abbia cagionato un <strong>danno patrimoniale o non patrimoniale</strong> obbliga al <strong>risarcimento</strong> il colpevole e le persone che, secondo le leggi civili, devono rispondere per il fatto di lui (co. 2): l'obbligazione è <strong>solidale</strong> tra i più condannati per lo stesso reato (art. 187, co. 2) e con il responsabile civile. Creditore è il <strong>danneggiato</strong>, che non coincide necessariamente con il soggetto passivo titolare del bene giuridico leso: distinzione che rileva perché anche il mero danneggiato può <strong>costituirsi parte civile</strong> (art. 74 c.p.p.), mentre solo la persona offesa può, ad esempio, proporre querela. Completano il quadro: la pubblicazione della sentenza come riparazione del danno non patrimoniale (art. 186), il rimborso delle spese di mantenimento negli stabilimenti di pena (art. 188), le <strong>obbligazioni civili di garanzia</strong> per multe e ammende inflitte al dipendente o al rappresentante insolvibile (artt. 196 e 197). Regola di chiusura: <strong>l'estinzione del reato o della pena non estingue le obbligazioni civili</strong> derivanti dal reato (art. 198), salvo quelle ex artt. 196 e 197. A tutela dei crediti civili: sequestro conservativo (art. 316 c.p.p.), cauzione (art. 319 c.p.p.) e azione revocatoria penale (artt. 192-194 c.p.).",
      approfondimenti: [
        {
          label: "Restituzioni e risarcimento: struttura dell'art. 185 c.p.",
          body:
            "Le restituzioni (co. 1) mirano a ripristinare lo stato di fatto preesistente, quando ciò sia possibile naturalisticamente e giuridicamente, e gravano su ogni reato; l'obbligo è indivisibile (art. 187, co. 1). Il risarcimento (co. 2) presuppone invece un danno, patrimoniale o non patrimoniale, cagionato dal reato: vi sono tenuti il colpevole e i civilmente responsabili per il fatto di lui, in solido, così come sono solidalmente obbligati i coautori dello stesso reato (art. 187, co. 2). L'art. 185, co. 2, è la norma cardine che consente il risarcimento del danno non patrimoniale da reato nell'ambito dell'art. 2059 c.c."
        },
        {
          label: "Le obbligazioni civili di garanzia per multe e ammende (artt. 196-197 c.p.)",
          body:
            "L'art. 196 c.p. obbliga chi riveste autorità, direzione o vigilanza a pagare, in caso di <strong>insolvibilità del condannato</strong> sottoposto, una somma pari alla multa o all'ammenda inflitta, se il reato viola disposizioni che egli era tenuto a far osservare senza risponderne penalmente. L'art. 197 c.p. pone analogo obbligo sugli enti con personalità giuridica (esclusi Stato, regioni, province e comuni) per i reati di rappresentanti, amministratori o dipendenti, commessi in violazione degli obblighi della qualità rivestita o nell'interesse dell'ente. Sono responsabilità civili di garanzia di un obbligo penale: se l'obbligazione resta inadempiuta, la pena pecuniaria si converte a norma dell'art. 136 c.p."
        },
        {
          label: "Le sanzioni pecuniarie civili del d.lgs. 7/2016",
          body:
            "Con la depenalizzazione operata dal d.lgs. n. 7 del 2016 alcuni delitti minori (tra cui l'ingiuria) sono stati abrogati e trasformati in <strong>illeciti civili sottoposti a sanzioni pecuniarie civili</strong>: il giudice civile, se accoglie la domanda di risarcimento del danneggiato, applica in aggiunta una sanzione pecuniaria, devoluta alla Cassa delle ammende e non al privato. È un tertium genus punitivo-civilistico che affianca, senza confondersi con esse, le sanzioni civili da reato in senso proprio: qui l'illecito non è più reato, e la componente afflittiva è affidata interamente al processo civile."
        },
        {
          label: "Garanzie patrimoniali e revocatoria penale",
          body:
            "Il codice di rito presidia i crediti civili da reato con misure cautelari reali: la parte civile può chiedere il <strong>sequestro conservativo</strong> dei beni dell'imputato o del responsabile civile quando vi è fondata ragione di ritenere che manchino o si disperdano le garanzie delle obbligazioni civili (art. 316 c.p.p.); il sequestro è evitato se l'imputato o il responsabile civile offre <strong>cauzione idonea</strong> (art. 319 c.p.p.). Gli artt. 192-194 c.p. delineano inoltre un'ipotesi di <strong>azione revocatoria penale</strong> contro gli atti dispositivi che pregiudicano le ragioni creditorie nascenti dal reato."
        }
      ],
      giurisprudenza: [
        {
          label: "Danneggiato e persona offesa: rilievo applicativo della distinzione",
          body:
            "La prassi applicativa distingue nettamente il <strong>soggetto passivo</strong> (titolare del bene o interesse tutelato dalla norma penale: persona fisica, giuridica o collettività) dal <strong>danneggiato</strong> (chiunque subisca dal reato un danno patrimoniale o non patrimoniale risarcibile). La distinzione decide chi può fare cosa nel processo: anche il mero danneggiato può costituirsi parte civile ex art. 74 c.p.p. per far valere restituzioni e risarcimento, mentre solo alla persona offesa spettano facoltà come la querela (art. 120 c.p.). Il risarcimento ex art. 185 c.p. va disposto a favore del danneggiato, che può non coincidere con l'offeso."
        },
        {
          label: "Sopravvivenza delle obbligazioni civili all'estinzione del reato",
          body:
            "Orientamento consolidato, fondato sull'art. 198 c.p.: l'estinzione del reato o della pena (per prescrizione, amnistia, morte del reo dopo la condanna, ecc.) <strong>non travolge le obbligazioni civili</strong> derivanti dal reato, perché il venir meno dell'illiceità penale non elimina le conseguenze civilistiche del fatto. Il danneggiato conserva quindi le sue pretese restitutorie e risarcitorie in sede civile. Fanno eccezione, per espressa previsione dell'art. 198, le sole obbligazioni di garanzia ex artt. 196 e 197 c.p., accessorie alla pena pecuniaria e destinate a cadere con essa."
        }
      ],
      eccezioni: [
        {
          label: "L'art. 198 c.p. e la sua eccezione interna",
          body:
            "La regola è la <strong>autonomia</strong> delle obbligazioni civili rispetto alla vicenda estintiva penale: estinto il reato o la pena, restituzioni e risarcimento sopravvivono. Ma la stessa norma eccettua le obbligazioni degli artt. 196 e 197 c.p.: essendo garanzie del pagamento della multa o dell'ammenda, seguono la sorte della pena pecuniaria cui accedono. Errore ricorrente: ritenere che la prescrizione del reato liberi il colpevole anche dal risarcimento — è vero il contrario."
        },
        {
          label: "Artt. 196-197: non è responsabilità penale per fatto altrui",
          body:
            "Le obbligazioni per multe e ammende inflitte al sottoposto o al rappresentante non trasferiscono la pena su un terzo: il garante paga una <strong>somma pari</strong> alla pena pecuniaria solo in caso di insolvibilità del condannato, quale responsabilità civile di garanzia, e resta escluso quando egli stesso risponda penalmente della violazione. L'art. 197, inoltre, non si applica a Stato, regioni, province e comuni. Confondere questi istituti con la responsabilità da reato degli enti ex d.lgs. 231/2001 è un errore: quella è responsabilità diretta e autonoma dell'ente, questa mera garanzia dell'adempimento."
        }
      ]
    },
    sintesi: [
      "Ogni reato obbliga alle restituzioni; se c'è danno, al risarcimento (art. 185 c.p.).",
      "Obbligazione risarcitoria solidale tra coautori e con il responsabile civile (art. 187).",
      "Creditore è il danneggiato, non necessariamente il soggetto passivo del reato.",
      "Artt. 196-197: garanzia civile per multe e ammende del condannato insolvibile.",
      "Estinzione del reato o della pena non estingue le obbligazioni civili (art. 198).",
      "Garanzie: sequestro conservativo, cauzione, revocatoria penale (artt. 192-194 c.p.)."
    ],
    esempi: [
      {
        titolo: "La truffa ai danni di Marta",
        testo:
          "Giorgio, con artifici e raggiri, si fa consegnare da Marta un quadro di famiglia e 5.000 euro. Condannato per truffa, Giorgio è tenuto anzitutto alle <strong>restituzioni</strong>: il quadro, ancora nella sua disponibilità, torna a Marta, perché la reintegrazione dello stato di fatto anteriore è possibile. Per il denaro speso e per l'ansia patita, Marta — <strong>danneggiata</strong> dal reato — ottiene il <strong>risarcimento del danno patrimoniale e non patrimoniale</strong> ex art. 185, co. 2, c.p., essendosi costituita parte civile nel processo penale (art. 74 c.p.p.). Se anche il reato si estinguesse per prescrizione, l'art. 198 c.p. le conserverebbe intatte le pretese civilistiche. Temendo che Giorgio venda i suoi beni, il difensore di Marta aveva peraltro chiesto per tempo il <strong>sequestro conservativo</strong> ex art. 316 c.p.p., evitato da Giorgio solo offrendo cauzione idonea ex art. 319 c.p.p."
      },
      {
        titolo: "L'ammenda del dipendente insolvibile",
        testo:
          "Un operaio della Beta s.r.l., addetto a un macchinario, viola una disposizione contravvenzionale che il datore di lavoro, l'ing. Ferri, era tenuto a far osservare, e viene condannato a un'ammenda. L'operaio risulta <strong>insolvibile</strong>. Scatta allora l'art. 196 c.p.: l'ing. Ferri, quale soggetto rivestito di autorità e vigilanza che non risponde penalmente della violazione, è obbligato civilmente al pagamento di una <strong>somma pari all'ammenda</strong> inflitta al dipendente. Se il reato fosse stato commesso dal legale rappresentante nell'interesse della società, sarebbe stata la Beta s.r.l., ente con personalità giuridica, a garantire il pagamento ex art. 197 c.p. Se neppure il garante adempie, la pena pecuniaria non eseguita per insolvibilità si converte a norma dell'art. 136 c.p. Attenzione: nulla a che vedere con la responsabilità diretta dell'ente ex d.lgs. 231/2001."
      }
    ],
    flashcards: [
      ["Cosa prevede l'art. 185 c.p.?", "Ogni reato obbliga alle restituzioni a norma delle leggi civili; se ha cagionato danno patrimoniale o non patrimoniale, obbliga al risarcimento il colpevole e i civilmente responsabili per il fatto di lui."],
      ["Chi è il danneggiato dal reato e in cosa differisce dal soggetto passivo?", "È chi subisce dal reato un danno risarcibile; può non coincidere con il titolare del bene giuridico leso. Il danneggiato può costituirsi parte civile, ma solo la persona offesa può querelare."],
      ["Cosa accade alle obbligazioni civili se il reato si estingue?", "Sopravvivono: ex art. 198 c.p. l'estinzione del reato o della pena non estingue le obbligazioni civili, salvo quelle di garanzia ex artt. 196 e 197 c.p."],
      ["Cosa prevede l'art. 197 c.p.?", "Gli enti con personalità giuridica (esclusi Stato ed enti territoriali) pagano, in caso di insolvibilità del condannato loro rappresentante, amministratore o dipendente, una somma pari alla multa o ammenda inflitta."],
      ["Quali garanzie processuali tutelano i crediti civili da reato?", "Il sequestro conservativo chiesto dalla parte civile (art. 316 c.p.p.), evitabile con cauzione idonea (art. 319 c.p.p.), e l'azione revocatoria penale ex artt. 192-194 c.p."],
      ["Cosa sono le sanzioni pecuniarie civili del d.lgs. 7/2016?", "Sanzioni applicate dal giudice civile, in aggiunta al risarcimento, per illeciti già penali e depenalizzati (come l'ingiuria); sono devolute alla Cassa delle ammende, non al danneggiato."]
    ],
    comparativa: {
      titolo: "Risarcimento del danno da reato vs sanzione pecuniaria civile (d.lgs. 7/2016)",
      a: "Risarcimento ex art. 185 c.p.",
      b: "Sanzione pecuniaria civile",
      righe: [
        { profilo: "Presupposto", a: "Un reato che ha cagionato danno patrimoniale o non patrimoniale", b: "Un illecito civile depenalizzato (ex delitto, come l'ingiuria)" },
        { profilo: "Funzione", a: "Compensativa: reintegra il patrimonio e ristora il danno del danneggiato", b: "Punitiva: aggiunge una componente afflittiva al risarcimento" },
        { profilo: "Beneficiario", a: "Il danneggiato dal reato", b: "La Cassa delle ammende (lo Stato), non il privato" },
        { profilo: "Sede applicativa", a: "Giudice penale (con parte civile ex art. 74 c.p.p.) o giudice civile", b: "Solo il giudice civile, se accoglie la domanda risarcitoria" }
      ]
    },
    quiz: [
      {
        q: "Ai sensi dell'art. 185 c.p., il risarcimento del danno da reato grava:",
        opts: [
          "Esclusivamente sul colpevole, per il carattere personale della responsabilità penale",
          "Sul colpevole e sulle persone che per legge civile rispondono del fatto di lui",
          "Solo sul responsabile civile, se il colpevole è insolvibile",
          "Sullo Stato, che poi si rivale sul condannato"
        ],
        correct: 1,
        difficulty: 1,
        commonError: "Trasporre alle obbligazioni civili il principio di personalità della responsabilità penale: il risarcimento segue le regole civilistiche, incluse solidarietà e responsabilità per fatto altrui.",
        why: "L'art. 185, co. 2, c.p. obbliga al risarcimento il colpevole e i civilmente responsabili per il fatto di lui, in solido; l'obbligazione solidale vale anche tra i più condannati per lo stesso reato (art. 187, co. 2, c.p.).",
        fonte: "Marinucci·Dolcini·Gatta, PG — Le sanzioni civili da reato"
      },
      {
        q: "L'estinzione del reato per prescrizione comporta, quanto alle obbligazioni civili derivanti dal reato:",
        opts: [
          "La loro automatica estinzione, venendo meno l'illecito",
          "La loro riduzione alla metà, in via equitativa",
          "La loro sopravvivenza, salvo le obbligazioni ex artt. 196 e 197 c.p.",
          "La loro conversione in sanzione pecuniaria civile"
        ],
        correct: 2,
        difficulty: 2,
        commonError: "Credere che l'estinzione del reato cancelli anche il debito risarcitorio: l'art. 198 c.p. dispone il contrario.",
        why: "Per l'art. 198 c.p. l'estinzione del reato o della pena non importa l'estinzione delle obbligazioni civili da reato: l'illiceità penale viene meno, ma le conseguenze civilistiche restano. Uniche eccezioni: le obbligazioni di garanzia per multe e ammende (artt. 196-197).",
        fonte: "Marinucci·Dolcini·Gatta, PG — Le sanzioni civili da reato"
      },
      {
        q: "L'obbligazione ex art. 196 c.p. a carico di chi riveste autorità, direzione o vigilanza sorge:",
        opts: [
          "Sempre, in solido con il condannato, per qualunque reato del sottoposto",
          "Solo in caso di insolvibilità del condannato e per violazioni che il garante doveva far osservare",
          "Solo se il garante risponde penalmente della medesima violazione",
          "Solo per le pene detentive brevi convertite in pena pecuniaria"
        ],
        correct: 1,
        difficulty: 3,
        commonError: "Trascurare i due limiti: l'insolvibilità del condannato e l'estraneità penale del garante rispetto alla violazione che doveva far osservare.",
        why: "L'art. 196 c.p. richiede che il condannato sia insolvibile, che il reato violi disposizioni che il soggetto rivestito di autorità, direzione o vigilanza era tenuto a far osservare e che di esse egli non debba rispondere penalmente: è responsabilità civile di garanzia dell'obbligo penale pecuniario.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Le sanzioni civili da reato"
      },
      {
        q: "Quale ente NON è tenuto all'obbligazione civile ex art. 197 c.p. per multe e ammende inflitte ai propri rappresentanti?",
        opts: [
          "Una società per azioni",
          "Una fondazione con personalità giuridica",
          "Il comune",
          "Una società a responsabilità limitata"
        ],
        correct: 2,
        difficulty: 4,
        commonError: "Dimenticare l'esclusione espressa degli enti pubblici territoriali: l'art. 197 eccettua Stato, regioni, province e comuni.",
        why: "L'art. 197 c.p. obbliga gli enti forniti di personalità giuridica, ma eccettua espressamente lo Stato, le regioni, le province e i comuni: per questi enti pubblici territoriali l'obbligazione di garanzia non opera.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Le sanzioni civili da reato"
      },
      {
        q: "Il sequestro conservativo a garanzia delle obbligazioni civili da reato può essere chiesto:",
        opts: [
          "Dalla parte civile, sui beni dell'imputato o del responsabile civile",
          "Dal pubblico ministero, sui beni di qualunque terzo",
          "Dal giudice d'ufficio, in ogni stato e grado del processo",
          "Dalla persona offesa non costituita parte civile, con semplice istanza"
        ],
        correct: 0,
        difficulty: 2,
        commonError: "Attribuire la legittimazione al PM o al giudice d'ufficio: per i crediti civili l'iniziativa spetta alla parte civile.",
        why: "L'art. 316 c.p.p. consente alla parte civile di chiedere il sequestro conservativo dei beni dell'imputato o del responsabile civile quando vi è fondata ragione di ritenere che manchino o si disperdano le garanzie delle obbligazioni civili; l'art. 319 c.p.p. permette di evitarlo offrendo cauzione idonea.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Le sanzioni civili da reato"
      },
      {
        q: "Le sanzioni pecuniarie civili introdotte dal d.lgs. 7/2016 sono devolute:",
        opts: [
          "Al danneggiato, in aggiunta al risarcimento",
          "Alla Cassa delle ammende, non al privato",
          "All'erario a titolo di rimborso spese processuali",
          "Al fondo di solidarietà per le vittime dei reati"
        ],
        correct: 1,
        difficulty: 4,
        commonError: "Confonderle con danni punitivi a favore della vittima: la sanzione ha natura afflittiva pubblica e non arricchisce il danneggiato.",
        why: "Con la depenalizzazione del 2016 taluni ex delitti (come l'ingiuria) sono divenuti illeciti civili: il giudice civile, se accoglie la domanda risarcitoria, applica in aggiunta una sanzione pecuniaria devoluta alla Cassa delle ammende. Il danneggiato riceve solo il risarcimento.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Le sanzioni civili da reato"
      }
    ],
    veroFalso: [
      {
        aff: "Il danneggiato dal reato coincide sempre con la persona offesa titolare del bene giuridico tutelato.",
        vero: false,
        traccia: "Falso. Il danneggiato è chiunque subisca dal reato un danno patrimoniale o non patrimoniale risarcibile e può non coincidere con il soggetto passivo. La distinzione rileva: anche il mero danneggiato può costituirsi parte civile (art. 74 c.p.p.), ma solo la persona offesa può sporgere querela (art. 120 c.p.)."
      },
      {
        aff: "L'obbligo alle restituzioni previsto dall'art. 185, co. 1, c.p. è indivisibile.",
        vero: true,
        traccia: "Vero. Ai sensi dell'art. 187, co. 1, c.p. l'obbligo alle restituzioni è indivisibile: la reintegrazione dello stato di fatto preesistente al reato, possibile naturalisticamente e giuridicamente, non si presta a frazionamento tra i coobbligati."
      },
      {
        aff: "Il condannato è tenuto a rimborsare allo Stato le spese del proprio mantenimento in carcere con tutti i suoi beni presenti e futuri.",
        vero: true,
        traccia: "Vero. L'art. 188 c.p. obbliga il condannato a rimborsare all'erario le spese di mantenimento negli stabilimenti di pena, rispondendo con tutti i beni mobili e immobili, presenti e futuri, a norma delle leggi civili, con implicito richiamo all'art. 2740 c.c."
      }
    ],
    aperta: {
      q: "Il candidato illustri le conseguenze civili del reato, con particolare riguardo agli artt. 185 e 198 c.p. e ai rapporti tra vicenda penale e obbligazioni civili.",
      traccia:
        "Il reato genera, accanto alle sanzioni penali, obbligazioni civili. L'art. 185 c.p. prevede che ogni reato obblighi alle restituzioni secondo le leggi civili — reintegrazione dello stato anteriore, obbligo indivisibile ex art. 187, co. 1 — e che il reato produttivo di danno patrimoniale o non patrimoniale obblighi al risarcimento il colpevole e i civilmente responsabili per il fatto di lui, in solido anche tra coautori (art. 187, co. 2). Creditore è il danneggiato, non necessariamente coincidente con il soggetto passivo: al danneggiato spetta la costituzione di parte civile (art. 74 c.p.p.). Si aggiungono la pubblicazione riparatoria della sentenza (art. 186), il rimborso delle spese di mantenimento (art. 188) e le obbligazioni di garanzia per multe e ammende del condannato insolvibile (artt. 196-197). Quanto ai rapporti con la vicenda penale, l'art. 198 c.p. sancisce l'autonomia delle obbligazioni civili: l'estinzione del reato o della pena non le estingue, salvo quelle ex artt. 196-197. I crediti civili sono presidiati da sequestro conservativo (art. 316 c.p.p.), cauzione (art. 319 c.p.p.) e revocatoria penale (artt. 192-194 c.p.).",
      fonte: "Marinucci·Dolcini·Gatta, PG — Le sanzioni civili da reato"
    },
    consigliate: ["flashcards", "esempi", "mcq", "verofalso"],
    media: {
      podcast: {
        title: "Le sanzioni civili da reato",
        chapters: [
          ["Restituzioni e risarcimento: l'art. 185 c.p.", 0],
          ["Le obbligazioni di garanzia: artt. 196 e 197", 280],
          ["Art. 198 e sanzioni pecuniarie civili", 520],
          ["Le garanzie processuali dei crediti civili", 740]
        ]
      },
      mappa: true
    }
  }
];
