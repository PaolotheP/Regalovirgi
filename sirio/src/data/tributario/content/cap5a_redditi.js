/* =========================================================================
   SIRIO — DIRITTO TRIBUTARIO · Capitolo 5: Le imposte sui redditi.
   Fonte: Loconte, Manuale di diritto tributario — capp. 15 (IRPEF e residenza
   fiscale) e 16 (le categorie reddituali: fondiari, capitale, lavoro).
   ========================================================================= */

export const TRIB_CAP5A = [
  {
    id: "irpef",
    part: "generale",
    chapter: 5,
    chapterTitle: "Le imposte sui redditi",
    title: "L'IRPEF e la residenza fiscale",
    subtitle: "Imposta personale e progressiva · possesso di redditi · residenza (183 giorni) · le 6 categorie · dal reddito complessivo all'imposta dovuta",
    articoli: ["art. 1 TUIR", "art. 2 TUIR", "art. 6 TUIR", "artt. 8-13 TUIR", "DPR 917/1986"],
    pages: [42, 48],
    depth: "deep",
    layers: {
      essenziale: "L'<strong>IRPEF</strong> è l'imposta che le persone fisiche pagano sui redditi, cioè sulla ricchezza nuova guadagnata in un anno: lo stipendio, l'affitto incassato, gli interessi. È disciplinata dal <strong>TUIR</strong> (DPR 917/1986) ed è <strong>erariale</strong> (il gettito va allo Stato), <strong>personale</strong> (tiene conto della situazione della persona: famiglia, spese mediche), <strong>periodica</strong> (si calcola anno per anno, sull'anno solare) e <strong>progressiva per scaglioni</strong>: il reddito è diviso a fasce e ogni fascia paga un'aliquota (percentuale) crescente, così chi guadagna di più paga in proporzione di più. Il <strong>presupposto</strong> (il fatto che fa nascere l'obbligo di pagare) è il <em>possesso di redditi</em>, in denaro o in natura, rientranti nelle sei categorie dell'art. 6 TUIR: redditi fondiari, di capitale, di lavoro dipendente, di lavoro autonomo, d'impresa e diversi. <strong>Soggetti passivi</strong> sono le persone fisiche: i <strong>residenti</strong> pagano sui redditi ovunque prodotti nel mondo (worldwide principle), i <strong>non residenti</strong> solo sui redditi prodotti in Italia. Si è residenti se, per la <strong>maggior parte del periodo d'imposta</strong> (almeno 183 giorni, 184 se bisestile), si verifica uno solo di tre criteri alternativi: iscrizione all'anagrafe della popolazione residente, domicilio in Italia (centro di affari, interessi e famiglia) o residenza civilistica (dimora abituale). Il <strong>calcolo</strong>: si sommano i redditi delle varie categorie (reddito complessivo), si sottraggono gli <strong>oneri deducibili</strong>, si applicano le aliquote per scaglioni (imposta lorda), si sottraggono le <strong>detrazioni</strong> (imposta netta) e infine ritenute, crediti d'imposta e acconti già versati.",
      approfondimenti: [
        {
          label: "Il possesso non è quello del codice civile",
          body: "Nel TUIR «possesso» non coincide con l'art. 1140 c.c.: significa <strong>disponibilità della ricchezza</strong>, e cambia sembianze a seconda della categoria. Per lavoro, capitale e redditi diversi conta la <em>percezione materiale</em> (principio di cassa: pago quando incasso); per i redditi fondiari il possesso è riferito all'<em>immobile</em> come fonte produttiva; per il reddito d'impresa vale la <em>competenza</em>: si paga sul reddito maturato anche se non ancora incassato (vendo oggi, incasso a 60 giorni, ma il ricavo è già tassabile). È un escamotage lessicale del legislatore per designare le diverse relazioni tra soggetto e fonte del reddito."
        },
        {
          label: "Anche i proventi illeciti si tassano",
          body: "Chi guadagna da attività illecite paga le imposte? Sì. L'art. 14 della L. 537/1993 (c.d. <strong>Legge Gallo</strong>) rende imponibili i proventi da illecito civile, penale e amministrativo a due condizioni: che rientrino in una categoria dell'art. 6 TUIR e che non siano già stati sottoposti a sequestro o confisca penale (se lo Stato li ha già presi, non c'è più nulla da tassare). Il decreto Bersani-Visco (2006) ha chiuso il cerchio: se non rientrano in nessuna categoria, sono comunque «redditi diversi». Inoltre i costi da reato sono indeducibili (L. 289/2002): chi riceve una fattura falsa non può scaricarla."
        },
        {
          label: "Deduzioni e detrazioni: due sconti diversi",
          body: "La <strong>deduzione</strong> si sottrae dal reddito, prima di calcolare l'imposta; la <strong>detrazione</strong> si sottrae dall'imposta già calcolata. La differenza pratica: l'onere deducibile vale di più per chi ha redditi alti. Esempio del manuale: spesa di 1.000 €. Se è deducibile, il contribuente con aliquota marginale al 41% risparmia 410 €, quello al 27% risparmia 270 €. Se invece è detraibile al 19% (art. 15 TUIR), entrambi risparmiano 190 €. Per questo il legislatore ha trasformato molti oneri deducibili in detraibili: il beneficio diventa uguale per tutti."
        },
        {
          label: "Redditi in forma associata e impresa familiare",
          body: "I redditi delle società di persone (s.s., s.n.c., s.a.s.) sono imputati <strong>direttamente ai soci</strong>, in proporzione alla quota di utili e <em>indipendentemente dalla percezione</em> (art. 5 TUIR): è il principio di trasparenza. Nell'<strong>impresa familiare</strong> (art. 230-bis c.c.) i familiari che lavorano in modo continuativo e prevalente possono vedersi imputare fino al 49% del reddito dell'imprenditore, se risultano da atto pubblico o scrittura autenticata e le quote sono indicate in dichiarazione. Familiari: coniuge, parenti entro il 3° grado, affini entro il 2°."
        }
      ],
      giurisprudenza: [
        {
          label: "Residenza: contano più gli affetti degli affari",
          body: "La Cassazione (sent. 20285/2013) e la Corte di Giustizia europea (causa C-262/99) hanno chiarito come valutare il domicilio ai fini della residenza fiscale: rileva l'esistenza di interessi professionali e personali nel territorio dello Stato, <strong>con prevalenza dei secondi sui primi</strong>. Tradotto: se un calciatore gioca all'estero ma famiglia e relazioni sociali restano in Italia, il centro dei suoi interessi — e quindi la residenza fiscale — può essere considerato in Italia, anche senza iscrizione anagrafica."
        }
      ],
      eccezioni: [
        {
          label: "Trasferimento nei paradisi fiscali: presunzione relativa",
          body: "Il cittadino italiano che si cancella dall'anagrafe e si trasferisce in uno Stato a fiscalità privilegiata (fuori dalla white list) <strong>si presume ancora residente in Italia</strong>, salvo prova contraria (art. 2, comma 2-bis TUIR). È una norma antiabuso: spetta a lui dimostrare che il trasferimento è reale (vive stabilmente lì con la famiglia) e non un espediente per sfuggire al Fisco. Se ci riesce, pagherà in Italia solo sui redditi qui prodotti (art. 23 TUIR)."
        },
        {
          label: "La detrazione ha un tetto: la capienza",
          body: "La detrazione si può usare solo <strong>fino a capienza dell'imposta lorda</strong>: se le detrazioni superano l'imposta, l'eccedenza si perde, senza diritto al rimborso. Diverso il destino di ritenute, crediti d'imposta e acconti: se superano l'imposta netta, il contribuente può chiedere il rimborso o riportare il credito a nuovo, usandolo contro i debiti d'imposta futuri."
        }
      ]
    },
    sintesi: [
      "IRPEF: imposta erariale, personale, periodica, progressiva per scaglioni (TUIR, DPR 917/1986).",
      "Presupposto: possesso di redditi rientranti nelle sei categorie dell'art. 6 TUIR.",
      "Residenti tassati sui redditi mondiali; non residenti solo su quelli italiani.",
      "Residenza: 183 giorni con anagrafe, domicilio o dimora abituale (criteri alternativi).",
      "Calcolo: reddito complessivo → deduzioni → imposta lorda → detrazioni → imposta netta.",
      "Deduzione abbatte il reddito; detrazione abbatte l'imposta, fino a capienza."
    ],
    esempi: [
      {
        titolo: "Marco si trasferisce, ma la famiglia resta a Milano",
        testo: "Marco, manager, a febbraio si trasferisce per lavoro all'estero e si cancella dall'anagrafe italiana. Però la moglie e i figli restano a Milano, dove Marco torna quasi ogni fine settimana, e lì mantiene conti, casa e amicizie. Per il Fisco italiano Marco può essere ancora <strong>fiscalmente residente</strong>: anche senza iscrizione anagrafica, ha in Italia il <em>domicilio</em>, cioè il centro dei suoi interessi familiari e sociali, per più di 183 giorni. Conseguenza: paga l'IRPEF in Italia su tutti i redditi, anche quelli prodotti all'estero (worldwide principle). Se poi si fosse trasferito in un paradiso fiscale, scatterebbe in più la presunzione dell'art. 2, comma 2-bis: toccherebbe a lui provare che il trasferimento è genuino."
      },
      {
        titolo: "Giulia calcola la sua IRPEF passo per passo",
        testo: "Giulia ha un reddito complessivo di 47.000 €. Durante l'anno ha sostenuto oneri deducibili per 1.950 €: l'acquisto di una carrozzina per il padre invalido (450 €), una donazione (500 €) e contributi previdenziali (1.000 €). Il suo <strong>imponibile netto</strong> scende così a 45.050 €. Su questo importo applica le aliquote per scaglioni e ottiene l'<strong>imposta lorda</strong>. Poi sottrae le <strong>detrazioni</strong>: ad esempio il 19% delle tasse universitarie della figlia. Ottiene l'imposta netta, da cui scomputa infine le ritenute già subite e gli acconti versati a maggio e novembre. Se il saldo è negativo, può chiedere il rimborso o riportare il credito all'anno dopo."
      }
    ],
    flashcards: [
      ["Qual è il presupposto dell'IRPEF?", "Il possesso di redditi, in denaro o in natura, rientranti nelle categorie dell'art. 6 TUIR."],
      ["Quando una persona è fiscalmente residente in Italia?", "Se per la maggior parte del periodo d'imposta (183 giorni) è iscritta all'anagrafe, o ha in Italia il domicilio o la residenza civilistica: criteri alternativi."],
      ["Quali sono le sei categorie reddituali dell'art. 6 TUIR?", "Redditi fondiari, di capitale, di lavoro dipendente, di lavoro autonomo, d'impresa e diversi."],
      ["Che differenza c'è tra deduzione e detrazione?", "La deduzione si sottrae dal reddito (prima del calcolo); la detrazione si sottrae dall'imposta lorda, fino a capienza."],
      ["Un minorenne può essere soggetto passivo IRPEF?", "Sì: può essere titolare di redditi (es. canoni di locazione); dichiarano per lui i genitori o il tutore, che hanno il possesso del bene."],
      ["Cosa prevede la Legge Gallo sui proventi illeciti?", "Sono tassabili se riconducibili a una categoria dell'art. 6 e non già sottoposti a sequestro o confisca penale."]
    ],
    comparativa: {
      titolo: "Deduzione vs Detrazione",
      a: "Deduzione",
      b: "Detrazione",
      righe: [
        { profilo: "Dove opera", a: "Si sottrae dal reddito complessivo, riducendo la base imponibile", b: "Si sottrae dall'imposta lorda, riducendo direttamente il tributo" },
        { profilo: "Momento del calcolo", a: "Fase iniziale, prima di applicare le aliquote", b: "Fase finale, dopo aver calcolato l'imposta lorda" },
        { profilo: "Beneficio", a: "Cresce con l'aliquota marginale: 1.000 € valgono 410 € al 41%, 270 € al 27%", b: "Uguale per tutti: 1.000 € al 19% valgono 190 € per chiunque" },
        { profilo: "Limiti", a: "Ipotesi tassative dell'art. 10 TUIR, principio di cassa", b: "Solo fino a capienza dell'imposta lorda, senza rimborso dell'eccedenza" }
      ]
    },
    quiz: [
      {
        q: "Qual è il presupposto dell'IRPEF?",
        opts: ["Il possesso di redditi rientranti nelle categorie dell'art. 6 TUIR", "La titolarità di un patrimonio immobiliare o mobiliare", "La cittadinanza italiana del contribuente", "Lo svolgimento di un'attività lavorativa retribuita"],
        correct: 0,
        difficulty: 1,
        commonError: "Confondere reddito e patrimonio: l'IRPEF colpisce la ricchezza nuova prodotta nell'anno, non ciò che già si possiede.",
        why: "L'IRPEF si applica al possesso di redditi, in denaro o in natura, rientranti nelle sei categorie dell'art. 6 TUIR. Il patrimonio (fotografia statica della ricchezza) è colpito da altre imposte; la cittadinanza è irrilevante, conta la residenza.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 15"
      },
      {
        q: "Una persona fisica residente in Italia che produce redditi a New York:",
        opts: ["È tassata in Italia solo sui redditi italiani", "È tassata in Italia sui redditi ovunque prodotti", "È tassata solo negli Stati Uniti, dove produce il reddito", "Sceglie liberamente in quale Stato dichiarare"],
        correct: 1,
        difficulty: 2,
        commonError: "Pensare che conti il luogo di produzione del reddito: per i residenti vale invece il worldwide principle.",
        why: "I residenti sono tassati sui redditi ovunque prodotti (worldwide principle); i non residenti solo sui redditi prodotti in Italia ex art. 23 TUIR. L'eventuale doppia imposizione si risolve con le norme di diritto tributario internazionale.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 15"
      },
      {
        q: "I tre criteri di residenza fiscale (anagrafe, domicilio, residenza civilistica) sono:",
        opts: ["Cumulativi: devono ricorrere tutti e tre", "Gerarchici: il domicilio prevale sempre sugli altri", "Alternativi: ne basta uno per la maggior parte del periodo d'imposta", "Facoltativi: il contribuente sceglie quale far valere"],
        correct: 2,
        difficulty: 2,
        commonError: "Ritenere necessaria l'iscrizione anagrafica: anche il solo domicilio (centro degli interessi) in Italia basta a radicare la residenza.",
        why: "L'art. 2 TUIR richiede che uno solo dei tre criteri sussista per la maggior parte del periodo d'imposta (183 giorni, 184 se bisestile). Per questo chi si cancella dall'anagrafe ma mantiene famiglia e interessi in Italia resta residente.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 15"
      },
      {
        q: "Un onere deducibile di 1.000 € per un contribuente con aliquota marginale al 41% produce un risparmio di:",
        opts: ["190 €, come per qualsiasi altro contribuente", "270 €, pari all'aliquota media applicabile", "1.000 €, perché si sottrae direttamente dall'imposta", "410 €, pari all'aliquota marginale applicata alla spesa"],
        correct: 3,
        difficulty: 3,
        commonError: "Applicare il 19% delle detrazioni: quella è la misura degli oneri detraibili, non dei deducibili.",
        why: "La deduzione abbatte la base imponibile, quindi il risparmio è pari alla spesa per l'aliquota marginale: 41% di 1.000 = 410 €. Un contribuente al 27% risparmierebbe 270 €. La detrazione al 19%, invece, vale 190 € per entrambi.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 15"
      },
      {
        q: "I proventi di attività illecite, secondo la Legge Gallo (L. 537/1993):",
        opts: ["Non sono mai tassabili perché la fonte è illecita", "Sono tassabili se rientrano in una categoria dell'art. 6 e non sono stati confiscati", "Sono sempre tassabili, anche se sequestrati o confiscati", "Sono tassabili solo se derivano da illeciti civili, non penali"],
        correct: 1,
        difficulty: 3,
        commonError: "Dimenticare la condizione della confisca: se lo Stato ha già acquisito i proventi, non c'è più ricchezza da tassare.",
        why: "L'art. 14 L. 537/1993 pone due condizioni: riconducibilità a una categoria dell'art. 6 TUIR e assenza di sequestro o confisca penale. Il decreto Bersani-Visco (2006) ha aggiunto che i proventi non inquadrabili sono comunque redditi diversi.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 15"
      },
      {
        q: "Se le detrazioni spettanti superano l'imposta lorda, l'eccedenza:",
        opts: ["Viene rimborsata al contribuente entro l'anno", "Si trasforma automaticamente in credito d'imposta", "Si perde: la detrazione opera solo fino a capienza", "Si riporta in diminuzione dei redditi dell'anno successivo"],
        correct: 2,
        difficulty: 4,
        commonError: "Assimilare le detrazioni a ritenute e crediti d'imposta, che invece danno diritto a rimborso o riporto a nuovo.",
        why: "La detrazione è consentita solo fino a capienza dell'imposta lorda, senza diritto al rimborso dell'eccedenza. Diversamente, ritenute, crediti d'imposta e acconti eccedenti generano un credito rimborsabile o riportabile.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 15"
      },
      {
        q: "Nell'impresa familiare, il reddito imputabile ai familiari collaboratori non può superare:",
        opts: ["Il 50% del reddito risultante dalla dichiarazione", "Il 49% del reddito dichiarato dall'imprenditore", "Il 30% del reddito, in proporzione al lavoro prestato", "Il 25% del reddito, salvo diversa pattuizione scritta"],
        correct: 1,
        difficulty: 4,
        commonError: "Arrotondare al 50%: il limite legale è il 49%, così la maggioranza del reddito resta sempre in capo all'imprenditore.",
        why: "L'art. 5, comma 4, TUIR imputa ai familiari che lavorano in modo continuativo e prevalente fino al 49% del reddito dell'imprenditore, in proporzione alle quote di partecipazione agli utili, a condizioni formali precise (atto pubblico o scrittura autenticata anteriore al periodo d'imposta).",
        fonte: "Loconte, Manuale di diritto tributario — cap. 15"
      }
    ],
    veroFalso: [
      { aff: "Un minorenne non può mai essere soggetto passivo IRPEF.", vero: false, traccia: "Falso. La norma colpisce le persone fisiche senza richiedere la capacità di agire: il minore può essere titolare di redditi (es. canoni di locazione di un suo immobile); la dichiarazione è presentata dai genitori esercenti la potestà o dal tutore, che hanno il possesso del bene." },
      { aff: "Il cittadino italiano trasferito in un paradiso fiscale si presume residente in Italia, salvo prova contraria.", vero: true, traccia: "Vero. L'art. 2, comma 2-bis TUIR introduce una presunzione relativa antiabuso: il contribuente può vincerla dimostrando l'effettività del trasferimento; in tal caso sarà tassato in Italia solo sui redditi qui prodotti ex art. 23 TUIR." },
      { aff: "Nel diritto tributario il possesso di redditi coincide con il possesso dell'art. 1140 del codice civile.", vero: false, traccia: "Falso. Non esiste una nozione unitaria di possesso fiscale: per lavoro e capitale conta la percezione materiale (cassa), per i fondiari il possesso dell'immobile-fonte, per l'impresa la competenza. È la titolarità giuridica della fonte da cui il reddito scaturisce." }
    ],
    aperta: {
      q: "Il candidato illustri il presupposto dell'IRPEF e i criteri di individuazione della residenza fiscale delle persone fisiche.",
      traccia: "Il presupposto dell'IRPEF è il possesso di redditi, in denaro o in natura, rientranti nelle categorie dell'art. 6 TUIR. Il possesso non coincide con la nozione civilistica: indica la disponibilità della ricchezza e assume sembianze diverse per categoria (percezione per lavoro e capitale, possesso dell'immobile per i fondiari, competenza per l'impresa). Soggetti passivi sono le persone fisiche, anche prive di capacità di agire: i residenti sono tassati sui redditi ovunque prodotti (worldwide principle), i non residenti solo su quelli prodotti in Italia (art. 23 TUIR). La residenza si radica quando, per la maggior parte del periodo d'imposta (183 giorni), ricorre alternativamente uno di tre criteri: iscrizione anagrafica, domicilio (centro degli affari e interessi, anche familiari e sociali) o residenza civilistica (dimora abituale). Completa il quadro la presunzione relativa dell'art. 2, comma 2-bis, per i trasferimenti in Stati a fiscalità privilegiata, superabile con la prova dell'effettività del trasferimento; la giurisprudenza valorizza la prevalenza degli interessi personali su quelli professionali.",
      fonte: "Loconte, Manuale di diritto tributario — cap. 15"
    },
    consigliate: ["mappa", "flashcards", "comparativa", "mcq", "aperta"],
    media: {
      podcast: {
        title: "IRPEF: chi paga, su cosa e quanto",
        chapters: [["Un'imposta personale e progressiva", 0], ["Presupposto e soggetti passivi", 240], ["La residenza fiscale e i 183 giorni", 520], ["Dal reddito complessivo all'imposta dovuta", 820]]
      },
      mappa: true
    }
  },

  {
    id: "redditiFondiariCapitale",
    part: "generale",
    chapter: 5,
    chapterTitle: "Le imposte sui redditi",
    title: "Redditi fondiari e redditi di capitale",
    subtitle: "Terreni e fabbricati tassati su base catastale · cedolare secca · interessi e dividendi con ritenute e imposte sostitutive",
    articoli: ["art. 25 TUIR", "artt. 27 e 32 TUIR", "art. 37 TUIR", "art. 44 TUIR"],
    pages: [49, 53],
    depth: "deep",
    layers: {
      essenziale: "I <strong>redditi fondiari</strong> sono quelli dei terreni e dei fabbricati situati in Italia e iscritti (o da iscrivere) in <strong>catasto</strong> con attribuzione di rendita (art. 25 TUIR). Il catasto è l'inventario di tutti gli immobili: a ciascuno attribuisce una <strong>rendita</strong>, cioè il reddito medio ordinario che quel bene è in grado di produrre. Particolarità: questi redditi si tassano <em>a prescindere dalla percezione</em> — anche se la casa è vuota o il terreno incolto — perché si colpisce la capacità potenziale del bene di produrre reddito. Tre sottocategorie: il <strong>reddito dominicale</strong> dei terreni (spetta al proprietario per il solo possesso del fondo), il <strong>reddito agrario</strong> (remunera chi organizza l'attività agricola sul fondo: coltivazione, allevamento, silvicoltura) e il <strong>reddito dei fabbricati</strong> (basato sulla rendita catastale). Se la casa è <strong>affittata</strong> e il canone supera la rendita, si tassa il canone ridotto del 15% (deduzione forfettaria); in alternativa, per le locazioni abitative, c'è la <strong>cedolare secca</strong>: un'imposta sostitutiva del 21% (19% per i canoni concordati) che sostituisce IRPEF e imposta di registro. I <strong>redditi di capitale</strong> (art. 44 TUIR) sono i frutti dell'impiego di denaro: soprattutto <strong>interessi</strong> (da mutui, depositi, conti correnti, obbligazioni) e <strong>dividendi</strong> (utili distribuiti da società). Due regole: tassazione <em>al lordo</em> (niente deduzione di spese) e <em>per cassa</em> (si tassano quando incassati). In gran parte non entrano nella dichiarazione: subiscono <strong>ritenute alla fonte</strong> o imposte sostitutive, tipicamente al 26% — sfuggendo così alla progressività.",
      approfondimenti: [
        {
          label: "Dominicale e agrario: due redditi da un solo terreno",
          body: "Lo stesso terreno può produrre due redditi distinti. Il <strong>dominicale</strong> (art. 27 TUIR) spetta al proprietario o titolare di diritto reale per il semplice possesso del fondo, ed è determinato con le tariffe d'estimo catastali; varia se cambia la coltura o se il terreno perde capacità produttiva. L'<strong>agrario</strong> (art. 32 TUIR) remunera invece il lavoro di organizzazione e il capitale d'esercizio di chi coltiva. Sono attività agricole la coltivazione, la silvicoltura, l'acquacoltura e l'allevamento con mangimi ottenibili dal terreno per almeno un quarto: oltre quel limite, l'eccedenza diventa reddito d'impresa, determinato con costi e ricavi anziché su base catastale."
        },
        {
          label: "La cedolare secca sugli affitti",
          body: "È un regime <strong>opzionale</strong> per le persone fisiche che affittano immobili abitativi: al posto dell'IRPEF progressiva si paga un'imposta sostitutiva con aliquota al <strong>21%</strong> sul canone (19% per i contratti a canone concordato). L'opzione esclude l'IRPEF ordinaria e l'imposta di registro (2% del canone), ma <em>non</em> l'IMU. Conviene tipicamente a chi ha aliquote marginali alte: paga una percentuale fissa invece di sommare il canone agli altri redditi."
        },
        {
          label: "Dividendi: dal 2018 ritenuta secca al 26%",
          body: "I <strong>dividendi</strong> sono i proventi della partecipazione al capitale di società soggette a IRES (non delle società di persone, i cui utili vanno ai soci per trasparenza). La Legge di Bilancio 2018 ha semplificato: per le persone fisiche non imprenditori, ritenuta a titolo d'imposta del <strong>26%</strong>, qualunque sia l'entità della partecipazione (prima le partecipazioni qualificate concorrevano parzialmente al reddito complessivo). Per imprenditori individuali e società di persone la base imponibile è il 58,14%; per i soggetti IRES solo il 5% (participation exemption al 95%)."
        },
        {
          label: "Risparmio amministrato e risparmio gestito",
          body: "Chi investe tramite una banca o una SIM può scegliere regimi che lo liberano da ogni adempimento. Nel <strong>risparmio amministrato</strong> l'intermediario, come sostituto d'imposta, applica l'imposta sostitutiva del 26% sulle plusvalenze da cessione di partecipazioni non qualificate. Nel <strong>risparmio gestito</strong> l'intermediario calcola al 31 dicembre il risultato complessivo della gestione (redditi di capitale più redditi diversi) e su di esso applica il 26%. In entrambi i casi il risparmiatore non deve dichiarare nulla."
        }
      ],
      giurisprudenza: [
        {
          label: "Abitazione principale: dall'IRPEF all'IMU",
          body: "L'evoluzione normativa descritta dal manuale: fino al 2011 anche la casa abitata dal proprietario produceva reddito fondiario IRPEF. Dal 1° gennaio 2012, con l'IMU, il sistema cambia: l'abitazione principale è dapprima soggetta a IMU con aliquote modeste, poi dal 2014 ne è esclusa. Per le <strong>seconde case</strong>, dal 1° gennaio 2013 è stata reintrodotta la tassazione IRPEF quando sono ubicate nello stesso Comune della residenza principale del proprietario; per quelle non locate la rendita rivalutata è maggiorata di un terzo."
        },
        {
          label: "Regime transitorio dei dividendi qualificati",
          body: "Per non penalizzare i soci con riserve di utili formate fino al 31 dicembre 2017, la riforma del 2018 ha previsto un regime transitorio: per gli utili maturati prima del 1° gennaio 2018 e distribuiti entro il 31 dicembre 2022 resta applicabile il vecchio regime, con tassazione parziale dell'utile in capo al socio qualificato secondo la percentuale legata al periodo di formazione dell'utile."
        }
      ],
      eccezioni: [
        {
          label: "Immobili che NON producono reddito fondiario",
          body: "Non tutto ciò che è in catasto genera reddito fondiario: ne sono esclusi gli <strong>immobili strumentali</strong> (usati per lavoro autonomo o impresa: i loro frutti confluiscono in quelle categorie), gli immobili destinati al culto, le costruzioni rurali al servizio del fondo, i fabbricati in ristrutturazione autorizzata (finché inutilizzati), le pertinenze come giardini e cortili, e gli immobili situati all'estero (che generano redditi diversi). Gli immobili di interesse storico-artistico godono di rendita ridotta del 50%."
        },
        {
          label: "Non tutti gli interessi sono redditi di capitale",
          body: "Gli interessi <strong>corrispettivi</strong> (frutto naturale del denaro prestato) sono sempre redditi di capitale. Gli interessi <strong>moratori</strong> e da dilazione seguono invece la categoria del credito su cui maturano: se il credito è di lavoro, sono reddito di lavoro. Gli interessi <strong>compensativi</strong> (es. sui crediti d'imposta) non sono tassati affatto: reintegrano il patrimonio, non lo incrementano."
        }
      ]
    },
    sintesi: [
      "Redditi fondiari: terreni e fabbricati in Italia iscritti in catasto con rendita.",
      "Tassati anche senza percezione: conta la capacità potenziale del bene.",
      "Terreni: reddito dominicale (possesso) + agrario (attività agricola).",
      "Fabbricati locati: canone ridotto del 15%, oppure cedolare secca al 21%.",
      "Redditi di capitale: interessi e dividendi, tassati al lordo e per cassa.",
      "Ritenute e imposte sostitutive al 26% escludono la progressività IRPEF."
    ],
    esempi: [
      {
        titolo: "Maria affitta il suo appartamento",
        testo: "Maria possiede un appartamento a Bari con rendita catastale di 900 € e lo affitta a 10.000 € l'anno. Con il regime ordinario, poiché il canone supera la rendita, dichiara il canone ridotto del 15%: 8.500 € che si sommano al suo stipendio e pagano l'IRPEF progressiva, più l'imposta di registro del 2% sul canone. In alternativa può optare per la <strong>cedolare secca</strong>: paga il 21% di 10.000 €, cioè 2.100 €, e basta — niente IRPEF ordinaria né registro (l'IMU però resta dovuta). Se invece l'appartamento restasse sfitto come seconda casa nello stesso Comune dove Maria risiede, pagherebbe comunque l'IRPEF sulla rendita rivalutata maggiorata di un terzo: il reddito fondiario colpisce la potenzialità del bene, non l'incasso."
      },
      {
        titolo: "Luca tra conto corrente e azioni",
        testo: "Luca, impiegato, ha un conto corrente che a fine anno gli accredita 200 € di interessi, e possiede azioni di una S.p.A. che gli distribuisce 1.000 € di dividendi. Non deve dichiarare nulla di tutto ciò. Sugli interessi la banca applica una <strong>ritenuta a titolo d'imposta</strong> del 26% (52 €): trattiene e versa lei al Fisco, e la tassazione è definitiva. Sui dividendi la società applica la ritenuta del 26% (260 €): anche qui tutto chiuso alla fonte. È il meccanismo delle imposte sostitutive: questi redditi sfuggono alla progressività IRPEF — Luca paga il 26% sia che guadagni 20.000 € sia che ne guadagni 200.000 — e vengono tassati al lordo, senza poter dedurre spese, secondo il principio di cassa."
      }
    ],
    flashcards: [
      ["Cosa sono i redditi fondiari?", "I redditi di terreni e fabbricati situati in Italia, iscritti o da iscrivere in catasto con attribuzione di rendita (art. 25 TUIR)."],
      ["Perché si paga anche se la casa è sfitta?", "Perché si tassa la capacità potenziale del bene di produrre reddito (reddito medio ordinario catastale), a prescindere dalla percezione."],
      ["Differenza tra reddito dominicale e agrario?", "Il dominicale remunera il possesso del fondo (proprietario); l'agrario remunera l'organizzazione dell'attività agricola e il capitale d'esercizio."],
      ["Come si tassa un immobile abitativo locato?", "Canone ridotto del 15% in IRPEF ordinaria, se superiore alla rendita; oppure, su opzione, cedolare secca al 21% (19% canone concordato)."],
      ["Quali sono le due regole generali dei redditi di capitale?", "Tassazione al lordo (nessuna deduzione di spese) e principio di cassa (tassati quando percepiti)."],
      ["Come sono tassati i dividendi delle persone fisiche private dal 2018?", "Ritenuta a titolo d'imposta del 26%, per qualsiasi partecipazione: non confluiscono in dichiarazione."]
    ],
    comparativa: {
      titolo: "IRPEF ordinaria vs Cedolare secca",
      a: "IRPEF ordinaria",
      b: "Cedolare secca",
      righe: [
        { profilo: "Base e aliquota", a: "Canone ridotto del 15% sommato agli altri redditi, aliquote progressive", b: "Intero canone con imposta sostitutiva fissa: 21% (19% concordato)" },
        { profilo: "Imposta di registro", a: "Dovuta, pari al 2% del canone di locazione", b: "Esclusa: l'opzione la sostituisce insieme all'IRPEF" },
        { profilo: "IMU", a: "Dovuta secondo le regole ordinarie", b: "Dovuta comunque: la cedolare non la esclude" },
        { profilo: "A chi conviene", a: "A chi ha redditi bassi e aliquote marginali contenute", b: "A chi ha aliquote marginali alte: percentuale fissa sul canone" }
      ]
    },
    quiz: [
      {
        q: "I redditi fondiari sono tassati:",
        opts: ["Solo se l'immobile è locato e il canone è incassato", "A prescindere dalla percezione, sulla base della rendita catastale", "Solo se il proprietario vi risiede stabilmente", "Solo quando l'immobile viene venduto realizzando una plusvalenza"],
        correct: 1,
        difficulty: 1,
        commonError: "Applicare il principio di cassa: per i fondiari conta invece il possesso dell'immobile come fonte potenziale di reddito.",
        why: "Oggetto dell'imposizione è la potenziale capacità del bene di produrre reddito, misurata dalla rendita catastale: si paga anche se la casa è vuota o il terreno incolto. La percezione effettiva è irrilevante.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 16"
      },
      {
        q: "Il reddito agrario si distingue dal dominicale perché:",
        opts: ["Spetta solo al proprietario del terreno", "È determinato con il metodo dei costi e ricavi", "Remunera l'organizzazione dell'attività agricola sul fondo", "Riguarda esclusivamente i fabbricati rurali"],
        correct: 2,
        difficulty: 2,
        commonError: "Attribuire entrambi i redditi al mero possesso: il dominicale remunera il possesso, l'agrario lo sfruttamento del fondo.",
        why: "L'art. 32 TUIR riferisce il reddito agrario al lavoro di organizzazione della produzione e al capitale di esercizio impiegati nelle attività agricole, nei limiti delle potenzialità del terreno. Il dominicale deriva invece dal semplice possesso a titolo di proprietà o altro diritto reale. Entrambi restano determinati su base catastale.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 16"
      },
      {
        q: "Se un immobile abitativo è locato con canone superiore alla rendita catastale, il regime ordinario tassa:",
        opts: ["La rendita catastale rivalutata di un terzo", "Il canone di locazione ridotto del 15%", "Il canone di locazione al lordo, senza riduzioni", "La media tra canone percepito e rendita catastale"],
        correct: 1,
        difficulty: 2,
        commonError: "Dimenticare la deduzione forfettaria del 15%, che compensa in via forfettaria le spese del locatore.",
        why: "Quando il canone pattuito supera la rendita, il reddito imponibile è pari al canone ridotto del 15% a titolo di deduzione forfettaria. In alternativa il locatore persona fisica può optare per la cedolare secca al 21%.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 16"
      },
      {
        q: "La cedolare secca sugli affitti abitativi esclude il pagamento di:",
        opts: ["IRPEF ordinaria e imposta di registro, ma non dell'IMU", "IRPEF, registro e IMU sull'immobile locato", "Sola imposta di registro, restando dovuta l'IRPEF", "Sola IMU, restando dovute IRPEF e registro"],
        correct: 0,
        difficulty: 3,
        commonError: "Includere l'IMU tra i tributi sostituiti: l'imposta municipale resta sempre dovuta.",
        why: "L'opzione per l'imposta sostitutiva del 21% (19% per i canoni concordati) esclude l'IRPEF ordinaria e l'imposta di registro del 2% sul canone, ma non esonera dal versamento dell'IMU.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 16"
      },
      {
        q: "Quale regola NON appartiene al sistema di tassazione dei redditi di capitale?",
        opts: ["La tassazione al lordo, senza deduzione delle spese", "Il principio di cassa: rileva solo quanto incassato", "La deduzione analitica dei costi di produzione del reddito", "L'ampio ricorso a ritenute e imposte sostitutive"],
        correct: 2,
        difficulty: 3,
        commonError: "Trasporre le regole del reddito d'impresa: nei redditi di capitale nessuna spesa è deducibile.",
        why: "I redditi di capitale sono tassati al lordo (nessuna deduzione per le spese di produzione) e per cassa (nel periodo in cui sono percepiti); gran parte di essi è assoggettata a ritenute alla fonte o imposte sostitutive e non concorre al reddito complessivo.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 16"
      },
      {
        q: "Dal 2018, i dividendi percepiti da una persona fisica non imprenditore scontano:",
        opts: ["La tassazione progressiva IRPEF sul 58,14% dell'importo", "L'esenzione al 95% con imponibilità del solo 5%", "L'IRPEF piena solo se la partecipazione è qualificata", "Una ritenuta a titolo d'imposta del 26%, a prescindere dalla partecipazione"],
        correct: 3,
        difficulty: 4,
        commonError: "Applicare il vecchio regime delle partecipazioni qualificate, superato dalla Legge di Bilancio 2018 (salvo il regime transitorio fino al 2022).",
        why: "La Legge di Bilancio 2018 ha uniformato il trattamento: ritenuta secca del 26% per le persone fisiche non in regime d'impresa, qualificate o meno. La base del 58,14% riguarda imprenditori individuali e società di persone; il 5% i soggetti IRES.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 16"
      },
      {
        q: "Gli interessi compensativi (ad esempio sui crediti d'imposta):",
        opts: ["Sono redditi di capitale tassati al 26%", "Non sono tassati: reintegrano il patrimonio, non lo incrementano", "Seguono la categoria reddituale del credito originario", "Sono redditi diversi soggetti a dichiarazione"],
        correct: 1,
        difficulty: 5,
        commonError: "Confonderli con gli interessi moratori, che seguono la categoria del credito su cui maturano.",
        why: "Gli interessi compensativi non rappresentano un incremento ma una reintegrazione del patrimonio, quindi non costituiscono redditi di capitale né sono tassabili. I corrispettivi sono sempre redditi di capitale; i moratori seguono la categoria del credito cui accedono.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 16"
      }
    ],
    veroFalso: [
      { aff: "Un appartamento usato come sede di una società produce reddito fondiario in capo al possessore.", vero: false, traccia: "Falso. Gli immobili strumentali, destinati allo svolgimento di attività di lavoro autonomo o d'impresa, non producono redditi fondiari: i loro frutti concorrono alla formazione del reddito di lavoro autonomo o d'impresa." },
      { aff: "Gli utili delle società di persone costituiscono dividendi tassati come redditi di capitale.", vero: false, traccia: "Falso. I proventi da partecipazione in società di persone non sono dividendi: sono imputati automaticamente ai soci per trasparenza, indipendentemente dalla distribuzione. I dividendi derivano dalla partecipazione a società ed enti soggetti a IRES." },
      { aff: "L'allevamento resta produttivo di reddito agrario solo se i mangimi sono ottenibili dal terreno per almeno un quarto.", vero: true, traccia: "Vero. Entro quel limite l'attività resta agricola e tassata su base catastale; l'eccedenza costituisce reddito d'impresa, determinato analiticamente con costi e ricavi." }
    ],
    aperta: {
      q: "Il candidato illustri le modalità di determinazione dei redditi fondiari e le regole generali di tassazione dei redditi di capitale.",
      traccia: "I redditi fondiari (art. 25 TUIR) riguardano terreni e fabbricati situati in Italia iscritti in catasto con attribuzione di rendita e si articolano in dominicale, agrario e dei fabbricati. La determinazione è catastale: si tassa il reddito medio ordinario che il bene può produrre, a prescindere dall'effettiva percezione. Il dominicale remunera il possesso del fondo, l'agrario l'organizzazione dell'attività agricola nei limiti delle potenzialità del terreno; il reddito dei fabbricati si fonda sulle tariffe d'estimo. Per gli immobili abitativi locati si tassa il canone ridotto del 15% se superiore alla rendita, salvo opzione per la cedolare secca (21%, 19% per i canoni concordati), che sostituisce IRPEF e registro ma non l'IMU. I redditi di capitale (art. 44 TUIR) — interessi e dividendi — derivano dall'impiego di capitale e sono tassati al lordo e per cassa; in larga parte non concorrono al reddito complessivo perché assoggettati a ritenute alla fonte o imposte sostitutive (tipicamente al 26%), anche nei regimi del risparmio amministrato e gestito.",
      fonte: "Loconte, Manuale di diritto tributario — cap. 16"
    },
    consigliate: ["esempi", "comparativa", "flashcards", "mcq", "mappa"],
    media: {
      podcast: {
        title: "Case, terreni e risparmi: come li tassa il Fisco",
        chapters: [["Il catasto e la rendita", 0], ["Dominicale, agrario, fabbricati", 260], ["La casa affittata e la cedolare secca", 540], ["Interessi, dividendi e ritenute al 26%", 800]]
      },
      mappa: true
    }
  },

  {
    id: "redditiLavoro",
    part: "generale",
    chapter: 5,
    chapterTitle: "Le imposte sui redditi",
    title: "Redditi di lavoro dipendente e autonomo",
    subtitle: "Onnicomprensività e principio di cassa · fringe benefit · sostituto d'imposta · compensi meno spese e ritenuta d'acconto",
    articoli: ["artt. 49-52 TUIR", "art. 50 TUIR", "art. 53 TUIR", "art. 54 TUIR"],
    pages: [54, 58],
    depth: "deep",
    layers: {
      essenziale: "Il <strong>reddito di lavoro dipendente</strong> (artt. 49-52 TUIR) deriva dai rapporti di lavoro prestato <em>alle dipendenze e sotto la direzione di altri</em>: il tratto tipico è il vincolo di <strong>subordinazione</strong>. Vi rientrano anche le pensioni di ogni genere. Vige il principio di <strong>onnicomprensività</strong> (art. 51): è tassato <em>tutto ciò che deriva dal rapporto di lavoro</em> — stipendi, premi, mensilità aggiuntive, indennità, mance, perfino le erogazioni liberali — comprese le utilità in natura come l'auto aziendale o il telefono (i <strong>fringe benefit</strong>, valutati al valore normale ed esenti se complessivamente non superano 258,23 €). Vale il <strong>principio di cassa</strong>: si tassa quando si incassa (con il correttivo del «cassa allargato»: le somme pagate entro il 12 gennaio appartengono all'anno precedente). Il prelievo avviene in busta paga: il datore di lavoro, come <strong>sostituto d'imposta</strong>, trattiene le ritenute e le versa all'Erario, rilasciando la Certificazione Unica entro il 28 febbraio. Le spese di produzione non si deducono analiticamente: sono compensate da una <strong>detrazione forfettaria</strong> decrescente al crescere del reddito (art. 13). Il <strong>reddito di lavoro autonomo</strong> (art. 53) deriva invece dall'esercizio abituale di <em>arti e professioni</em>: attività intellettuale, svolta in autonomia, non commerciale. Si determina in modo analitico: <strong>compensi percepiti meno spese sostenute</strong> nel periodo d'imposta, sempre per cassa (art. 54). Il professionista emette fattura; quando il cliente è un sostituto d'imposta, sul compenso viene operata una <strong>ritenuta d'acconto</strong>, un anticipo di IRPEF che il professionista scomputerà poi in dichiarazione.",
      approfondimenti: [
        {
          label: "Fringe benefit e somme esenti",
          body: "I compensi in natura (auto aziendale, alloggio, telefono, sconti mensa) sono tassati al <strong>valore normale</strong>; per gli autoveicoli si usano i costi chilometrici ACI. Sono però esenti se di valore complessivo non superiore a <strong>258,23 €</strong> nel periodo d'imposta: superata la soglia, l'intero valore diventa imponibile. Non concorrono al reddito, tra l'altro: le mense aziendali e i buoni pasto fino a 5,29 € al giorno (7 € se elettronici), il trasporto collettivo, le somme per l'istruzione dei familiari, i contributi previdenziali versati dal datore e le azioni offerte alla generalità dei dipendenti fino a 2.065,83 €."
        },
        {
          label: "Trasferte: tre sistemi alternativi",
          body: "Le indennità per trasferte <em>dentro</em> il comune di lavoro sono imponibili. Per le trasferte <em>fuori</em> comune, l'art. 51, comma 5, TUIR prevede tre sistemi alternativi: <strong>forfetario</strong> (indennità esente fino a 46,48 € al giorno in Italia, 77,47 € all'estero), <strong>analitico</strong> (rimborso a piè di lista di vitto, alloggio, viaggio documentati, più spese non documentabili fino a 15,49 €/25,82 €) e <strong>misto</strong> (franchigie forfetarie ridotte di un terzo o due terzi se vitto e/o alloggio sono rimborsati a parte)."
        },
        {
          label: "I redditi assimilati (art. 50 TUIR)",
          body: "Un elenco <strong>tassativo</strong> di fattispecie è assimilato al lavoro dipendente pur mancando la subordinazione: compensi dei soci lavoratori di cooperative, indennità per cariche elettive e pubbliche funzioni, compensi per l'attività intramuraria dei medici del SSN, remunerazioni dei sacerdoti. Altre ipotesi prescindono perfino dal lavoro: borse di studio, prestazioni pensionistiche complementari, rendite vitalizie onerose e gli assegni periodici al coniuge separato o divorziato (esclusi quelli di mantenimento dei figli)."
        },
        {
          label: "Come si determina il reddito del professionista",
          body: "Base imponibile = <strong>compensi percepiti − spese inerenti sostenute</strong> nell'anno, tutto per cassa e con documentazione (vale anche l'estratto della carta di credito). Concorrono anche compensi in natura, acconti sugli onorari e plusvalenze sui beni strumentali; non i rimborsi delle anticipazioni fatte in nome e per conto del cliente. Alcune spese sono deducibili solo in parte: auto al 20% (tetto di 18.075,99 €), telefonia all'80%, alberghi e ristoranti al 75% entro il 2% dei compensi, spese di rappresentanza entro l'1%, corsi e convegni fino a 10.000 € l'anno. Indeducibili i compensi pagati a coniuge e figli."
        }
      ],
      giurisprudenza: [
        {
          label: "Subordinazione: cosa conta davvero",
          body: "Il vincolo di subordinazione — assoggettamento gerarchico del lavoratore e potere direttivo del datore, con inserimento nell'organizzazione aziendale — va apprezzato in concreto, rispetto allo specifico incarico. Secondo l'orientamento richiamato dal manuale, <strong>continuità della prestazione, modalità di erogazione della retribuzione e durata non sono decisive</strong>: sono caratteristiche compatibili tanto con il lavoro subordinato quanto con quello autonomo."
        },
        {
          label: "Indennità risarcitorie: lucro cessante sì, danno emergente no",
          body: "In forza dell'art. 6 TUIR, le somme che <strong>sostituiscono redditi</strong> (lucro cessante: risarcisco un guadagno mancato) sono tassate nella stessa categoria del reddito sostituito o perduto. Le indennità che invece <strong>reintegrano il patrimonio</strong> (danno emergente: risarcisco una perdita subita) non hanno rilevanza reddituale, perché non portano ricchezza nuova. Per ogni indennizzo al dipendente occorre quindi chiedersi: sostituisce uno stipendio o ripara un danno?"
        }
      ],
      eccezioni: [
        {
          label: "Il principio di cassa «allargato»",
          body: "Deroga parziale al principio di cassa: le somme corrisposte al dipendente <strong>entro il 12 gennaio</strong> si considerano di competenza dell'anno precedente; quelle versate dopo appartengono all'anno in corso (art. 51, comma 1, TUIR). Serve a gestire gli stipendi di dicembre pagati nei primi giorni di gennaio: fiscalmente restano nell'anno «vecchio»."
        },
        {
          label: "Professionista o impresa? Il confine dell'organizzazione",
          body: "Il lavoro autonomo si distingue dall'impresa per il carattere <strong>personale e intellettuale</strong> dell'attività. Se i beni e la struttura organizzata prevalgono sull'apporto personale del professionista, il reddito diventa <strong>reddito d'impresa</strong>. Stesso esito se l'attività rientra nell'art. 2195 c.c. E se l'attività autonoma è solo <em>occasionale</em>, non abituale, produce redditi diversi, non di lavoro autonomo."
        }
      ]
    },
    sintesi: [
      "Lavoro dipendente: subordinazione; tassato tutto ciò che deriva dal rapporto (onnicomprensività).",
      "Principio di cassa; allargato: somme entro il 12 gennaio all'anno precedente.",
      "Il datore-sostituto d'imposta opera le ritenute e rilascia la CU entro il 28 febbraio.",
      "Fringe benefit al valore normale, esenti fino a 258,23 €.",
      "Lavoro autonomo: arti e professioni abituali; compensi percepiti meno spese sostenute.",
      "Ritenuta d'acconto sul compenso del professionista, scomputata in dichiarazione."
    ],
    esempi: [
      {
        titolo: "La busta paga di Paolo",
        testo: "Paolo è impiegato con uno stipendio di 30.000 € lordi l'anno. Ogni mese il suo datore di lavoro, come <strong>sostituto d'imposta</strong>, trattiene dalla busta paga le ritenute IRPEF e le versa direttamente all'Erario: Paolo riceve il netto e non deve preoccuparsi di versare nulla. L'azienda gli concede anche i buoni pasto elettronici da 7 € (esenti) e a dicembre un cesto natalizio da 100 €: essendo il valore dei benefit sotto i 258,23 € annui, non è tassato. Lo stipendio di dicembre gli viene accreditato il 10 gennaio: grazie al principio di <em>cassa allargato</em>, resta reddito dell'anno precedente. Entro il 28 febbraio Paolo riceve la Certificazione Unica con redditi, ritenute subite e contributi versati. In dichiarazione, le ritenute già subite si scomputano dall'IRPEF dovuta."
      },
      {
        titolo: "La partita IVA dell'avvocato Bianchi",
        testo: "L'avvocato Bianchi, libera professionista con partita IVA, nell'anno incassa <strong>compensi</strong> per 60.000 € e sostiene <strong>spese</strong> documentate per 20.000 € (affitto dello studio, segretaria, banche dati, cancelleria): il suo reddito di lavoro autonomo è 40.000 €, determinato per cassa — conta solo ciò che ha effettivamente incassato e pagato entro il 31 dicembre. Attenzione ai limiti: l'auto usata per lavoro è deducibile solo al 20%, il telefono all'80%, i corsi di aggiornamento fino a 10.000 €. Quando fattura 1.000 € a un'azienda cliente, questa — in qualità di sostituto d'imposta — le versa il compenso al netto della <strong>ritenuta d'acconto</strong>, che gira al Fisco: è un anticipo di IRPEF che l'avvocato Bianchi scomputerà dall'imposta dovuta in dichiarazione."
      }
    ],
    flashcards: [
      ["Cosa significa principio di onnicomprensività?", "Costituiscono reddito di lavoro dipendente tutte le somme e i valori, a qualunque titolo percepiti in relazione al rapporto di lavoro, anche da terzi (art. 51 TUIR)."],
      ["Cos'è il principio di cassa allargato?", "Le somme corrisposte al dipendente entro il 12 gennaio si considerano di competenza dell'anno precedente."],
      ["Quando i fringe benefit sono esenti?", "Se il valore complessivo dei compensi in natura non supera 258,23 € nel periodo d'imposta; oltre, l'intero valore è imponibile."],
      ["Quali elementi connotano il reddito di lavoro autonomo?", "Natura intellettuale dell'attività, autonomia, non commercialità e abitualità (arti e professioni, art. 53 TUIR)."],
      ["Come si determina il reddito di lavoro autonomo?", "Compensi effettivamente percepiti meno spese inerenti effettivamente sostenute nel periodo d'imposta, secondo il principio di cassa (art. 54 TUIR)."],
      ["Che funzione ha la ritenuta d'acconto sul compenso del professionista?", "È un anticipo di IRPEF trattenuto e versato dal cliente-sostituto d'imposta, che il professionista scomputa dall'imposta dovuta in dichiarazione."]
    ],
    comparativa: {
      titolo: "Lavoro dipendente vs Lavoro autonomo",
      a: "Lavoro dipendente",
      b: "Lavoro autonomo",
      righe: [
        { profilo: "Tratto qualificante", a: "Subordinazione: prestazione alle dipendenze e sotto la direzione altrui", b: "Autonomia: esercizio abituale di arti e professioni, apporto personale e intellettuale" },
        { profilo: "Base imponibile", a: "Onnicomprensiva: tutto ciò che deriva dal rapporto, incluse le utilità in natura", b: "Analitica: compensi percepiti meno spese inerenti sostenute" },
        { profilo: "Spese di produzione", a: "Non deducibili: compensate da una detrazione forfettaria (art. 13 TUIR)", b: "Deducibili se inerenti e documentate, talora con limiti percentuali" },
        { profilo: "Prelievo", a: "Ritenute operate dal datore-sostituto d'imposta direttamente in busta paga", b: "Ritenuta d'acconto operata dal cliente-sostituto; saldo in dichiarazione" }
      ]
    },
    quiz: [
      {
        q: "Il tratto che qualifica il reddito di lavoro dipendente è:",
        opts: ["La continuità della prestazione lavorativa", "Il vincolo di subordinazione al datore di lavoro", "La periodicità mensile della retribuzione", "La durata a tempo indeterminato del rapporto"],
        correct: 1,
        difficulty: 1,
        commonError: "Puntare su continuità, retribuzione o durata: elementi compatibili anche con il lavoro autonomo e quindi non decisivi.",
        why: "L'art. 49 TUIR richiede la prestazione di lavoro alle dipendenze e sotto la direzione di altri: assoggettamento gerarchico del lavoratore e potere direttivo del datore. Continuità, modalità retributive e durata non assumono valore decisivo.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 16"
      },
      {
        q: "In base al principio di onnicomprensività, le mance percepite dal dipendente:",
        opts: ["Costituiscono reddito di lavoro dipendente", "Sono redditi diversi perché erogate da terzi", "Sono esenti in quanto liberalità spontanee", "Sono redditi di capitale se abituali"],
        correct: 0,
        difficulty: 2,
        commonError: "Escludere le somme erogate da soggetti diversi dal datore: la provenienza da terzi non rileva, conta il collegamento con il rapporto di lavoro.",
        why: "L'art. 51 TUIR include tutte le somme e i valori, a qualunque titolo percepiti in relazione al rapporto di lavoro, anche sotto forma di erogazioni liberali e anche se corrisposti da terzi. Le mance vi rientrano espressamente.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 16"
      },
      {
        q: "Lo stipendio di dicembre pagato al dipendente il 10 gennaio è fiscalmente imputato:",
        opts: ["All'anno in corso, per il principio di cassa puro", "Per metà a ciascuno dei due periodi d'imposta", "All'anno precedente, per il principio di cassa allargato", "All'anno scelto dal lavoratore in dichiarazione"],
        correct: 2,
        difficulty: 3,
        commonError: "Applicare rigidamente il principio di cassa: la deroga del 12 gennaio riporta le somme all'anno precedente.",
        why: "L'art. 51, comma 1, TUIR prevede che le somme corrisposte entro il 12 gennaio si considerano di competenza dell'anno precedente (principio di cassa allargato); quelle versate dopo appartengono all'anno in corso.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 16"
      },
      {
        q: "Se i fringe benefit concessi al dipendente valgono complessivamente 300 € nell'anno:",
        opts: ["È tassata solo l'eccedenza di 41,77 € oltre la soglia", "L'intero valore di 300 € diventa imponibile", "Restano esenti perché sotto i 516 € annui", "Sono tassati al 50% del valore normale"],
        correct: 1,
        difficulty: 4,
        commonError: "Tassare solo l'eccedenza: la soglia di 258,23 € è una franchigia che, se superata, fa venir meno l'esenzione per intero.",
        why: "L'esenzione vale per i compensi in natura di valore complessivo non superiore a 258,23 €; in caso di superamento, lo stesso è interamente imponibile, con conguaglio in busta paga.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 16"
      },
      {
        q: "Il reddito di lavoro autonomo si determina:",
        opts: ["Applicando una detrazione forfettaria ai compensi maturati", "Sottraendo ai compensi percepiti le spese sostenute nell'anno, per cassa", "Sommando compensi e rimborsi delle anticipazioni per conto del cliente", "Con il criterio di competenza, come per il reddito d'impresa"],
        correct: 1,
        difficulty: 2,
        commonError: "Applicare il criterio di competenza: per il professionista contano solo incassi e pagamenti effettivi del periodo.",
        why: "L'art. 54 TUIR adotta il principio di cassa: compensi effettivamente percepiti meno spese inerenti effettivamente sostenute nel periodo d'imposta. Le anticipazioni in nome e per conto del cliente non costituiscono compensi.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 16"
      },
      {
        q: "Un consulente presta servizi con una struttura organizzata che prevale sul suo apporto personale. Il suo reddito è:",
        opts: ["Di lavoro autonomo, per la natura intellettuale dell'attività", "Diverso, per l'assenza del vincolo di subordinazione", "Di lavoro dipendente, per l'inserimento nell'organizzazione", "D'impresa, perché l'organizzazione prevale sull'apporto personale"],
        correct: 3,
        difficulty: 5,
        commonError: "Fermarsi alla natura intellettuale della prestazione: quando la struttura organizzata prevale, l'attività genera reddito d'impresa.",
        why: "Il lavoro autonomo si caratterizza per il carattere personale e intellettuale dell'attività. Se il complesso di beni organizzati assume funzione preminente rispetto all'apporto del professionista, il reddito è inquadrabile tra i redditi d'impresa.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 16"
      },
      {
        q: "Le somme corrisposte al dipendente a titolo di risarcimento del danno emergente:",
        opts: ["Sono tassate come reddito di lavoro dipendente", "Non sono tassate: reintegrano il patrimonio senza produrre ricchezza nuova", "Sono tassate come redditi diversi con ritenuta secca", "Sono tassate al 50% con il regime della tassazione separata"],
        correct: 1,
        difficulty: 4,
        commonError: "Trattare ogni indennizzo come reddito: solo le somme sostitutive di redditi (lucro cessante) hanno natura reddituale.",
        why: "Per l'art. 6 TUIR i proventi conseguiti in sostituzione di redditi (lucro cessante) sono redditi della stessa categoria di quelli sostituiti; le indennità che risarciscono la perdita patrimoniale subita (danno emergente) non rappresentano nuova ricchezza e sono irrilevanti ai fini reddituali.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 16"
      }
    ],
    veroFalso: [
      { aff: "Le pensioni di ogni genere costituiscono redditi di lavoro dipendente.", vero: true, traccia: "Vero. L'art. 49, comma 2, TUIR include espressamente tra i redditi di lavoro dipendente le pensioni di ogni genere e gli assegni ad esse equiparati, pur in assenza di una prestazione lavorativa attuale." },
      { aff: "Il professionista può dedurre integralmente tutte le spese relative all'auto usata per l'attività.", vero: false, traccia: "Falso. Gli ammortamenti e le spese dell'auto utilizzata nella professione sono deducibili solo al 20%, su un costo massimo di 18.075,99 € (art. 164 TUIR). Anche telefonia (80%) e spese alberghiere (75%, entro il 2% dei compensi) sono a deducibilità limitata." },
      { aff: "Gli assegni periodici corrisposti al coniuge separato sono assimilati ai redditi di lavoro dipendente, esclusi quelli per il mantenimento dei figli.", vero: true, traccia: "Vero. L'art. 50 TUIR li include tra i redditi assimilati pur in assenza di attività lavorativa; restano invece esclusi gli assegni destinati al mantenimento dei figli." }
    ],
    aperta: {
      q: "Il candidato illustri i caratteri distintivi dei redditi di lavoro dipendente e di lavoro autonomo, con particolare riguardo ai criteri di determinazione e alle modalità di prelievo.",
      traccia: "Il reddito di lavoro dipendente (artt. 49-52 TUIR) deriva da rapporti aventi ad oggetto la prestazione di lavoro alle dipendenze e sotto la direzione altrui: il tratto qualificante è la subordinazione, mentre continuità e modalità retributive non sono decisive. Vige l'onnicomprensività: sono tassati tutte le somme e i valori percepiti in relazione al rapporto, inclusi i fringe benefit valutati al valore normale (esenti fino a 258,23 €). L'imputazione segue il principio di cassa, con la deroga del cassa allargato (somme entro il 12 gennaio all'anno precedente); il prelievo avviene tramite ritenute alla fonte operate dal datore quale sostituto d'imposta, e le spese di produzione sono compensate da detrazioni forfettarie. Il reddito di lavoro autonomo (art. 53 TUIR) deriva dall'esercizio abituale di arti e professioni, connotato da intellettualità, autonomia e non commercialità: si determina analiticamente come differenza tra compensi percepiti e spese inerenti sostenute (art. 54), sempre per cassa, con talune deducibilità limitate; sul compenso il cliente-sostituto opera la ritenuta d'acconto, scomputata poi in dichiarazione. Se prevale la struttura organizzata, il reddito diventa d'impresa; se manca l'abitualità, si hanno redditi diversi.",
      fonte: "Loconte, Manuale di diritto tributario — cap. 16"
    },
    consigliate: ["comparativa", "esempi", "flashcards", "mcq", "verofalso"],
    media: {
      podcast: {
        title: "Stipendi e partite IVA: due mondi fiscali",
        chapters: [["La busta paga e il sostituto d'imposta", 0], ["Onnicomprensività e fringe benefit", 280], ["Il professionista: compensi meno spese", 560], ["Ritenuta d'acconto e confini con l'impresa", 840]]
      },
      mappa: true
    }
  }
];
