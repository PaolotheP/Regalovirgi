/* =========================================================================
   SIRIO — CONTENUTI · PARTE GENERALE del Diritto penale (blocco A).
   Rielaborati dal SuperCompendio di Diritto penale (Neldiritto Editore).
   Efficacia della legge penale (tempo/spazio), reato e partizioni, soggetti
   e responsabilità degli enti, condotta e reati omissivi, offensività, reato
   putativo/impossibile, cause di giustificazione. Taglio da esame di parte
   generale (Bari, Sapienza, LUISS): art. 2 c.p., art. 40 cpv., artt. 50-54.
   ========================================================================= */

export const GEN_A = [
  /* ===================== 1 · SUCCESSIONE DI LEGGI PENALI ==================== */
  {
    id: "successione", part: "generale", chapter: 2, chapterTitle: "L'efficacia della legge penale",
    title: "L'efficacia della legge penale nel tempo", subtitle: "Irretroattività sfavorevole, retroattività favorevole, abolitio criminis (art. 2 c.p.)",
    articoli: ["art. 25 co. 2 Cost.", "art. 2 c.p.", "art. 11 preleggi"], pages: [7, 10], depth: "deep", inPlan: true,
    layers: {
      essenziale:
        "L'art. 2 c.p. disciplina la successione di leggi penali nel tempo, cioè il conflitto fra norme che si avvicendano tra il momento del fatto e quello del giudizio o dell'esecuzione. Vige anzitutto l'<strong>irretroattività della norma sfavorevole</strong> (art. 25 co. 2 Cost., art. 2 co. 1): è un principio a copertura costituzionale, assoluto e non bilanciabile con altri valori, posto a garanzia della libertà e della prevedibilità delle conseguenze penali. Vige, all'opposto, la <strong>retroattività della norma favorevole</strong> (art. 2 co. 2, 3 e 4), il cui fondamento la Corte costituzionale individua non nell'art. 25 ma nell'art. 3 Cost. (uguaglianza e ragionevolezza): per questo essa è <em>derogabile</em> dal legislatore quando la deroga sia giustificata da interessi di pari rango costituzionale. All'interno della retroattività favorevole occorre poi distinguere l'<strong>abolitio criminis</strong> (co. 2), che elimina il reato e travolge anche il giudicato con revoca della condanna, dalla mera <strong>modifica in mitius</strong> (co. 4), che lascia in vita il reato e si applica soltanto se non è ancora intervenuto il giudicato.",
      approfondimenti: [
        { label: "Abolitio criminis (art. 2 co. 2)", body: "«Nessuno può essere punito per un fatto che, secondo una legge posteriore, non costituisce reato». Può derivare da abrogazione, depenalizzazione, dichiarazione di incostituzionalità; può anche essere <strong>parziale</strong>. Se interviene prima del giudicato il soggetto è assolto; se dopo, il giudice dell'esecuzione <strong>revoca la condanna</strong> e ne fa cessare l'esecuzione." },
        { label: "Modifiche in mitius (art. 2 co. 3-4)", body: "Se la norma sopravvenuta non abolisce il reato ma lo disciplina più favorevolmente, si applica la legge più favorevole <strong>salvo il giudicato</strong> (co. 4). Fa eccezione il co. 3: se la legge successiva prevede la sola pena pecuniaria in luogo di quella detentiva, la sostituzione opera <em>anche dopo</em> la condanna definitiva. Per distinguere abolitio e modifica si usa il criterio strutturale del <strong>rapporto di specialità</strong> tra le fattispecie." },
        { label: "Leggi eccezionali/temporanee e decreti-legge (art. 2 co. 5-6)", body: "Le leggi eccezionali e temporanee (co. 5) sono sottratte alla disciplina successoria: si applica la norma del tempo del fatto anche se sfavorevole. Il co. 6 estende la disciplina ai decreti-legge non convertiti o convertiti con modifiche (dichiarato in parte illegittimo da Corte cost. 51/1985 quanto all'applicazione dei co. 2 e 4)." },
      ],
      giurisprudenza: [
        { label: "Tempus commissi delicti (SU 40986/2018)", body: "Per i reati a evento differito (scarto tra condotta ed evento) prevale la <strong>teoria della condotta</strong> sulla teoria dell'evento: si applica la legge vigente al momento del compimento della condotta, anche se l'evento matura sotto una legge più sfavorevole. È la sola coerente con la prevedibilità delle conseguenze sanzionatorie." },
        { label: "Natura della pena e tempus regit actum (Corte cost. 32/2020)", body: "Le norme che incidono sulla mera modalità esecutiva della pena seguono il tempus regit actum; quelle che trasformano la natura della pena e la sua incidenza sulla libertà personale (es. Spazzacorrotti sull'accesso alle misure alternative) soggiacciono all'irretroattività ex art. 25 co. 2 Cost." },
      ],
      eccezioni: [
        { label: "Retroattività favorevole derogabile", body: "A differenza dell'irretroattività sfavorevole (assoluta), la retroattività favorevole non ha copertura nell'art. 25 ma nell'art. 3 Cost.: il legislatore può derogarvi purché la deroga superi un vaglio di ragionevolezza a tutela di interessi di pari rango costituzionale." },
      ],
    },
    sintesi: [
      "Art. 2 co. 1: irretroattività sfavorevole (art. 25 co. 2 Cost.), principio assoluto e non bilanciabile.",
      "Art. 2 co. 2-4: retroattività favorevole; fondamento art. 3 Cost., quindi derogabile con ragionevolezza.",
      "Abolitio criminis (co. 2): travolge il giudicato, revoca della condanna.",
      "Modifica in mitius (co. 4): si applica salvo il giudicato; eccezione co. 3 (pena solo pecuniaria).",
      "Leggi eccezionali/temporanee (co. 5): sottratte alla successione, si applica la legge del tempo del fatto.",
      "Tempus commissi delicti: teoria della condotta (SU 40986/2018) per i reati a evento differito.",
    ],
    esempi: [
      { titolo: "Abolitio vs modifica", testo: "Marco è stato condannato in via definitiva per un fatto che una legge sopravvenuta <strong>abroga</strong> del tutto (abolitio criminis, art. 2 co. 2): pur essendo il giudicato ormai formato, il giudice dell'esecuzione deve revocare la condanna e farne cessare l'esecuzione, così che Marco esca dal carcere. Diverso è il caso di Anna, condannata in primo grado per un reato che una legge successiva <strong>non abroga ma punisce più mitemente</strong> (modifica in mitius, art. 2 co. 4): la nuova pena più favorevole le si applica soltanto perché il processo è ancora in corso e il giudicato non si è formato; se la condanna fosse già divenuta definitiva, la riduzione non opererebbe (salvo il caso del co. 3, sostituzione della sola pena pecuniaria)." },
    ],
    flashcards: [
      ["Dove è sancita l'irretroattività della norma penale sfavorevole?", "Art. 25 co. 2 Cost. e art. 2 co. 1 c.p.: è principio assoluto, non bilanciabile con altri valori costituzionali."],
      ["Qual è il fondamento costituzionale della retroattività favorevole?", "L'art. 3 Cost. (uguaglianza/ragionevolezza), non l'art. 25: per questo è derogabile dal legislatore con vaglio di ragionevolezza."],
      ["Cosa distingue l'abolitio criminis (co. 2) dalla modifica in mitius (co. 4)?", "L'abolitio elimina il reato e travolge il giudicato (revoca della condanna); la modifica lascia in vita il reato e la legge più favorevole si applica solo salvo il giudicato."],
      ["Come si individua il tempus commissi delicti nei reati a evento differito?", "Con la teoria della condotta (SU 40986/2018): rileva il momento della condotta, non dell'evento."],
      ["Le leggi eccezionali e temporanee seguono la retroattività favorevole?", "No (art. 2 co. 5): si applica la legge del tempo del fatto anche se più sfavorevole."],
    ],
    comparativa: {
      titolo: "Abolitio criminis vs modifica in mitius",
      a: "Abolitio criminis (art. 2 co. 2)", b: "Modifica favorevole (art. 2 co. 3-4)",
      righe: [
        { profilo: "Effetto sul reato", a: "Il fatto non è più reato", b: "Il reato resta, cambia il trattamento" },
        { profilo: "Rapporto col giudicato", a: "Lo travolge: revoca della condanna", b: "Si applica salvo il giudicato (co. 4)" },
        { profilo: "Criterio di verifica", a: "Assenza di rapporto di specialità tra le norme", b: "Continuità del tipo di illecito (specialità)" },
      ],
    },
    quiz: [
      { q: "L'irretroattività della norma penale sfavorevole ha fondamento in:", opts: ["Art. 3 Cost., sul principio di uguaglianza", "Art. 25 co. 2 Cost., ed è assoluta", "Art. 11 delle preleggi soltanto", "Art. 27 Cost., sulla colpevolezza"], correct: 1, difficulty: 2, commonError: "Confondere il fondamento dell'irretroattività sfavorevole (art. 25) con quello della retroattività favorevole (art. 3).", why: "L'irretroattività sfavorevole ha copertura nell'art. 25 co. 2 Cost. (e art. 2 co. 1 c.p.): è assoluta e non bilanciabile. La retroattività favorevole si fonda invece sull'art. 3; l'art. 11 preleggi è la regola generale non penale; l'art. 27 riguarda la colpevolezza.", fonte: "Cap. 2 — §1.1" },
      { q: "In caso di abolitio criminis intervenuta dopo il giudicato:", opts: ["Nulla cambia per il condannato ormai definitivo", "Il giudice dell'esecuzione revoca la condanna", "Occorre celebrare un nuovo processo di merito", "Si riduce soltanto la parte di pena residua"], correct: 1, difficulty: 3, commonError: "Ritenere che il giudicato impedisca sempre l'applicazione della legge sopravvenuta.", why: "L'abolitio (art. 2 co. 2) travolge il giudicato: il giudice dell'esecuzione revoca la condanna. La semplice modifica in mitius (co. 4), invece, si applica solo salvo il giudicato; non serve un nuovo processo né una mera riduzione.", fonte: "Cap. 2 — §1.2.1" },
      { q: "La retroattività della norma penale favorevole:", opts: ["È assoluta e inderogabile come l'irretroattività sfavorevole", "Si fonda sull'art. 3 Cost. ed è derogabile", "Non è prevista dal nostro ordinamento penale", "Vale unicamente per i reati contravvenzionali"], correct: 1, difficulty: 3, commonError: "Equiparare la forza della retroattività favorevole a quella, assoluta, dell'irretroattività sfavorevole.", why: "La Corte cost. àncora la retroattività favorevole all'art. 3 Cost.: è derogabile dal legislatore se la deroga è ragionevole e presidia interessi di pari rango. L'irretroattività sfavorevole (art. 25) è invece inderogabile.", fonte: "Cap. 2 — §1.2" },
      { q: "Per i reati a evento differito, il tempus commissi delicti si individua secondo:", opts: ["La teoria dell'evento naturalistico", "La teoria della condotta (SU 40986/2018)", "Sempre la legge più favorevole al reo", "Il momento della sentenza di condanna"], correct: 1, difficulty: 4, commonError: "Applicare la legge del momento dell'evento, che può essere più sfavorevole.", why: "Le SU 40986/2018 hanno accolto la teoria della condotta: rileva il momento in cui è compiuta la condotta, coerente con la prevedibilità delle conseguenze. La teoria dell'evento è recessiva; non si sceglie sempre la legge più favorevole né il momento della sentenza.", fonte: "Cap. 2 — §1.2.2" },
      { q: "Le leggi eccezionali e temporanee (art. 2 co. 5):", opts: ["Seguono comunque la retroattività della legge favorevole", "Sono sottratte alla disciplina successoria dell'art. 2", "Sono in radice illegittime sul piano costituzionale", "Riguardano soltanto i decreti-legge non convertiti"], correct: 1, difficulty: 3, commonError: "Applicare loro la regola generale della retroattività della legge più favorevole.", why: "L'art. 2 co. 5 deroga alla disciplina successoria: alle leggi eccezionali/temporanee si applica la norma vigente al tempo del fatto, anche se sfavorevole, per non vanificare la ratio contingente della disciplina.", fonte: "Cap. 2 — §1.3" },
    ],
    veroFalso: [
      { aff: "L'abolitio criminis può travolgere anche una sentenza di condanna già passata in giudicato.", vero: true, traccia: "Vero. L'art. 2 co. 2 impone che nessuno possa essere punito per un fatto che una legge posteriore non considera più reato: il giudice dell'esecuzione revoca la condanna e ne cessa l'esecuzione, superando il giudicato." },
      { aff: "La retroattività della norma penale favorevole è assoluta e inderogabile come l'irretroattività sfavorevole.", vero: false, traccia: "Falso. Solo l'irretroattività sfavorevole (art. 25 co. 2 Cost.) è assoluta. La retroattività favorevole si fonda sull'art. 3 Cost. ed è derogabile dal legislatore con un vaglio di ragionevolezza (Corte cost. 230/2012, 394/2006)." },
    ],
    aperta: { q: "Il candidato illustri la disciplina della successione di leggi penali nel tempo (art. 2 c.p.).", traccia: "L'art. 2 c.p. combina irretroattività della norma sfavorevole (co. 1, fondata sull'art. 25 co. 2 Cost.: principio assoluto e non bilanciabile) e retroattività della norma favorevole (co. 2-4, fondata sull'art. 3 Cost.: derogabile con ragionevolezza). L'abolitio criminis (co. 2) elimina il reato e travolge il giudicato con revoca della condanna; la modifica in mitius (co. 4) lascia in vita il reato e opera salvo il giudicato, con l'eccezione del co. 3 (sostituzione della sola pena pecuniaria anche dopo la condanna). Per distinguere abolitio e modifica si verifica il rapporto di specialità/continuità tra le fattispecie. Il co. 5 sottrae le leggi eccezionali e temporanee alla successione; il co. 6 disciplina i decreti-legge. Il tempus commissi delicti si individua con la teoria della condotta (SU 40986/2018).", fonte: "Cap. 2 — §1" },
    consigliate: ["mappa", "comparativa", "flashcards", "mcq", "aperta"],
    media: { podcast: { title: "La legge penale nel tempo", chapters: [["Irretroattività sfavorevole", 0], ["Retroattività favorevole", 240], ["Abolitio criminis", 500], ["Tempus commissi delicti", 780]] }, mappa: true },
  },

  /* ===================== 2 · EFFICACIA NELLO SPAZIO ==================== */
  {
    id: "spazio", part: "generale", chapter: 2, chapterTitle: "L'efficacia della legge penale",
    title: "L'efficacia della legge penale nello spazio", subtitle: "Territorialità (artt. 3, 6), ubiquità (art. 6 co. 2), reati all'estero (artt. 7-10), estradizione",
    articoli: ["art. 3 c.p.", "art. 6 c.p.", "artt. 7-10 c.p.", "art. 13 c.p."], pages: [10, 13], depth: "deep", inPlan: true,
    layers: {
      essenziale:
        "L'efficacia della legge penale italiana nello spazio è governata dal principio di <strong>territorialità</strong>: l'art. 3 stabilisce che la legge penale obbliga tutti coloro (cittadini e stranieri) che si trovano nel territorio dello Stato, e l'art. 6 aggiunge che chiunque commetta un reato nel territorio è punito secondo la legge italiana. Questo principio è fortemente dilatato dal criterio di <strong>ubiquità</strong> (art. 6 co. 2): il reato si considera commesso in Italia tanto se ivi è avvenuta <em>anche solo in parte</em> la condotta, quanto se vi si è verificato l'evento, con la conseguenza che i reati transnazionali ricadono agevolmente sotto la giurisdizione italiana. Gli artt. 7-10 prevedono poi una serie di deroghe che consentono di punire in Italia anche taluni reati commessi all'estero, graduando le condizioni a seconda della gravità del reato e della qualità dell'autore (cittadino o straniero). L'<strong>estradizione</strong> (art. 13) è invece l'istituto di cooperazione con cui uno Stato consegna a un altro un individuo affinché sia processato o vi sconti una pena, entro precisi limiti costituzionali.",
      approfondimenti: [
        { label: "Reati all'estero (artt. 7-10)", body: "Art. 7: reati puniti <strong>incondizionatamente</strong> (contro la personalità dello Stato, falsità in monete/sigilli italiani, reati dei P.U. abusivi, o previsti da leggi/convenzioni). Art. 8: <strong>delitti politici</strong> (richiesta del Ministro della giustizia). Art. 9: delitto comune del <strong>cittadino</strong> all'estero (pena ≥ 3 anni nel minimo, presenza in Italia). Art. 10: delitto comune dello <strong>straniero</strong> (condizioni più stringenti: richiesta/istanza/querela)." },
        { label: "Principio di ubiquità (art. 6 co. 2)", body: "Basta che in Italia sia avvenuta <em>in tutto o in parte</em> la condotta, oppure si sia verificato l'evento. Il reato iniziato in Italia e perfezionato all'estero (o viceversa) si considera commesso nel territorio dello Stato. È il criterio che dà massima estensione alla territorialità." },
        { label: "Estradizione (art. 13)", body: "Attiva (Stato richiedente) o passiva (Stato richiesto), processuale o esecutiva. Presuppone <strong>doppia incriminazione</strong>, principio di <strong>specialità</strong> (art. 699 c.p.p.) e ne bis in idem. È vietata per il cittadino salvo convenzioni (art. 26 Cost.), per i reati politici (art. 10 co. 4, 26 co. 2 Cost., salvo genocidio), a rischio di trattamenti inumani, o se lo Stato commina la pena di morte." },
      ],
      giurisprudenza: [
        { label: "Divieto di estradizione e pena di morte (Corte cost. 223/1996)", body: "È vietata l'estradizione verso Stati che comminino la pena di morte per i fatti oggetto della domanda: sono incostituzionali le norme (anche convenzionali) che la consentano sulla base di mere assicurazioni, per contrasto con gli artt. 2 e 27 co. 4 Cost." },
      ],
      eccezioni: [
        { label: "Riconoscimento delle sentenze straniere (art. 12)", body: "La sentenza penale straniera è riconosciuta solo ai fini tassativi dell'art. 12: recidiva/abitualità, pene accessorie, misure di sicurezza, effetti civili (restituzioni e risarcimento). Non produce, di per sé, effetti esecutivi automatici." },
      ],
    },
    sintesi: [
      "Territorialità: art. 3 (obbliga tutti nel territorio) + art. 6 (reato nel territorio = legge italiana).",
      "Ubiquità (art. 6 co. 2): reato commesso in Italia se ivi avviene, anche in parte, condotta o evento.",
      "Art. 7: reati all'estero puniti incondizionatamente (personalità dello Stato, monete, P.U.).",
      "Art. 8: delitti politici (richiesta del Ministro); artt. 9-10: delitti comuni di cittadino/straniero.",
      "Estradizione (art. 13): doppia incriminazione, specialità, ne bis in idem.",
      "Divieti di estradizione: cittadino (art. 26 Cost.), reati politici, pena di morte, trattamenti inumani.",
    ],
    esempi: [
      { titolo: "Il principio di ubiquità", testo: "Da un ufficio postale di Milano, Luca confeziona e spedisce a Pierre, residente a Lione, un pacco contenente un ordigno esplosivo che deflagra in Francia uccidendo il destinatario. Benché la morte (l'<em>evento</em>) si sia verificata oltralpe, la condotta di confezionamento e spedizione è avvenuta <em>in parte</em> nel territorio italiano: per il principio di ubiquità (art. 6 co. 2) il reato si considera commesso in Italia e Luca è punito secondo la legge penale italiana. Lo stesso varrebbe nel caso opposto, cioè se la condotta fosse iniziata all'estero e l'evento si fosse prodotto in Italia." },
    ],
    flashcards: [
      ["Quali articoli codificano il principio di territorialità?", "Art. 3 c.p. (obbliga tutti coloro che si trovano nel territorio) e art. 6 c.p. (chiunque commette un reato nel territorio è punito secondo la legge italiana)."],
      ["In cosa consiste il principio di ubiquità (art. 6 co. 2)?", "Il reato si considera commesso in Italia se vi è avvenuta, anche solo in parte, la condotta oppure vi si è verificato l'evento."],
      ["Quali reati all'estero sono puniti incondizionatamente (art. 7)?", "Delitti contro la personalità dello Stato, falsità in monete/valori/sigilli italiani, reati dei P.U. che abusano dei poteri, e quelli previsti da leggi o convenzioni."],
      ["Quali sono i principi cardine dell'estradizione?", "Doppia incriminazione, specialità (art. 699 c.p.p.), ne bis in idem."],
      ["Quando è vietata l'estradizione?", "Per il cittadino salvo convenzioni (art. 26 Cost.), per reati politici (salvo genocidio), a rischio di pena di morte o trattamenti inumani/degradanti."],
    ],
    comparativa: {
      titolo: "Reato del cittadino (art. 9) vs dello straniero (art. 10) all'estero",
      a: "Delitto comune del cittadino (art. 9)", b: "Delitto comune dello straniero (art. 10)",
      righe: [
        { profilo: "Soglia di pena", a: "Ergastolo o reclusione ≥ 3 anni nel minimo", b: "Ergastolo o reclusione ≥ 1 anno nel minimo (se contro l'Italia)" },
        { profilo: "Condizioni", a: "Presenza del reo in Italia", b: "Presenza in Italia + richiesta del Ministro, ovvero istanza/querela" },
        { profilo: "Ratio", a: "Legame di cittadinanza", b: "Cautela verso la potestà punitiva su non cittadini" },
      ],
    },
    quiz: [
      { q: "Il principio di territorialità è codificato principalmente da:", opts: ["Artt. 7 e 8 c.p. (reati all'estero)", "Artt. 3 e 6 c.p. (obbligo e reato)", "Art. 12 c.p. (sentenze straniere)", "Art. 13 c.p. (l'estradizione)"], correct: 1, difficulty: 1, commonError: "Confondere la regola generale (territorialità) con le deroghe per i reati all'estero (artt. 7-10).", why: "Gli artt. 3 e 6 codificano la territorialità (obbligo per tutti nel territorio e applicazione della legge italiana ai reati ivi commessi). Gli artt. 7-8 sono deroghe, l'art. 12 riguarda le sentenze straniere, l'art. 13 l'estradizione.", fonte: "Cap. 2 — §2.1" },
      { q: "Secondo il principio di ubiquità (art. 6 co. 2), il reato si considera commesso in Italia quando:", opts: ["Solo se l'intera condotta si è svolta nel territorio italiano", "Se in Italia si è realizzata anche solo la condotta o l'evento", "Solo se l'autore del reato è un cittadino italiano", "Solo se in Italia si è verificato l'evento del reato"], correct: 1, difficulty: 3, commonError: "Pretendere che l'intera condotta o il solo evento debba avvenire in Italia.", why: "L'art. 6 co. 2 adotta il criterio di ubiquità: è sufficiente che in Italia si sia realizzata, anche solo in parte, la condotta oppure l'evento. Non conta la cittadinanza né serve l'integralità della condotta.", fonte: "Cap. 2 — §2.2" },
      { q: "I delitti contro la personalità dello Stato commessi all'estero (art. 7):", opts: ["Non sono in alcun caso punibili in Italia", "Sono puniti incondizionatamente in Italia", "Esigono sempre la querela della persona offesa", "Sono puniti solo se l'autore è straniero"], correct: 1, difficulty: 2, commonError: "Ritenere necessaria una condizione (richiesta/querela) anche per i reati dell'art. 7.", why: "L'art. 7 punisce incondizionatamente (senza richiesta o querela) taluni reati commessi all'estero, tra cui quelli contro la personalità dello Stato, in nome dell'istanza di difesa statale. La richiesta del Ministro è invece necessaria per i delitti politici (art. 8).", fonte: "Cap. 2 — §2.1" },
      { q: "Il divieto di estradizione del cittadino:", opts: ["È un divieto assoluto e privo di eccezioni", "Cede se prevista da convenzioni internazionali", "Non è previsto dal nostro ordinamento", "Opera soltanto per i reati comuni"], correct: 1, difficulty: 3, commonError: "Ritenere il divieto assoluto, ignorando la clausola convenzionale dell'art. 26 Cost.", why: "L'art. 26 Cost. (e l'art. 13 co. 4 c.p.) ammette l'estradizione del cittadino solo se espressamente prevista da convenzioni internazionali. Non è un divieto assoluto né inesistente, e non è limitato ai reati comuni.", fonte: "Cap. 2 — §4" },
      { q: "La sentenza penale straniera è riconosciuta in Italia (art. 12):", opts: ["A ogni effetto, come una sentenza italiana", "Solo ai fini tassativi indicati dalla norma", "In nessun caso e a nessun effetto", "Solo se emessa da uno Stato dell'Unione"], correct: 1, difficulty: 3, commonError: "Attribuire alla sentenza straniera efficacia esecutiva generale automatica.", why: "L'art. 12 elenca in modo tassativo gli effetti riconoscibili: recidiva/abitualità, pene accessorie, misure di sicurezza, effetti civili. Non vi è riconoscimento a ogni effetto, né esso è escluso in radice o riservato ai soli Stati UE.", fonte: "Cap. 2 — §3" },
    ],
    veroFalso: [
      { aff: "Per il principio di ubiquità è sufficiente che in Italia si sia verificato l'evento del reato, anche se la condotta è avvenuta all'estero.", vero: true, traccia: "Vero. L'art. 6 co. 2 considera commesso in Italia il reato tanto se vi è avvenuta la condotta (in tutto o in parte) quanto se vi si è verificato l'evento conseguente." },
      { aff: "L'estradizione può essere concessa anche verso Stati che prevedono la pena di morte per il fatto oggetto della domanda.", vero: false, traccia: "Falso. Corte cost. 223/1996 ha vietato l'estradizione verso Stati che comminino la pena di morte, per contrasto con gli artt. 2 e 27 co. 4 Cost., non essendo sufficienti mere assicurazioni." },
    ],
    aperta: { q: "Il candidato illustri i principi che regolano l'efficacia della legge penale nello spazio.", traccia: "La regola cardine è la territorialità (artt. 3 e 6 c.p.): la legge italiana obbliga tutti nel territorio dello Stato e si applica ai reati ivi commessi. Il criterio è dilatato dal principio di ubiquità (art. 6 co. 2): il reato è commesso in Italia se vi avviene, anche in parte, condotta o evento. Le deroghe per i reati all'estero sono negli artt. 7-10: art. 7 (reati puniti incondizionatamente), art. 8 (delitti politici, richiesta del Ministro), art. 9 (delitto comune del cittadino, pena ≥ 3 anni e presenza in Italia), art. 10 (delitto dello straniero, condizioni più stringenti). L'art. 12 disciplina il riconoscimento delle sentenze straniere ai fini tassativi ivi previsti; l'art. 13 l'estradizione (doppia incriminazione, specialità, ne bis in idem), vietata per il cittadino salvo convenzioni, per i reati politici, a rischio pena di morte o trattamenti inumani.", fonte: "Cap. 2 — §2" },
    consigliate: ["mappa", "comparativa", "esempi", "mcq", "flashcards"],
    media: { mappa: true },
  },

  /* ===================== 3 · IL REATO E LE SUE PARTIZIONI ==================== */
  {
    id: "reato", part: "generale", chapter: 3, chapterTitle: "Il reato",
    title: "Il reato e le sue partizioni", subtitle: "Nozione, delitti e contravvenzioni (artt. 17, 39), bipartizione, tripartizione, quadripartizione",
    articoli: ["art. 39 c.p.", "art. 17 c.p.", "art. 43 c.p.", "art. 56 c.p."], pages: [14, 17], depth: "deep", inPlan: true,
    layers: {
      essenziale:
        "Il reato è un fatto umano antigiuridico cui l'ordinamento ricollega, come conseguenza, una pena. La legge non ne offre una definizione sostanziale, sicché la summa divisio tra <strong>delitti</strong> e <strong>contravvenzioni</strong> si fonda su un criterio meramente <em>formale</em> (art. 39), imperniato sulla specie di pena principale comminata (art. 17): ergastolo, reclusione e multa per i delitti; arresto e ammenda per le contravvenzioni. La distinzione non è nominalistica, perché da essa dipendono numerose conseguenze di disciplina (elemento soggettivo, tentativo, oblazione, recidiva, prescrizione). La struttura interna del reato è invece ricostruita da diverse teorie: la <strong>bipartizione</strong> lo scompone in elemento oggettivo e soggettivo; la <strong>tripartizione</strong> aggiunge l'antigiuridicità obiettiva (fatto, antigiuridicità, colpevolezza); le concezioni <strong>quadripartite</strong> individuano un ulteriore elemento nella tipicità o nella punibilità.",
      approfondimenti: [
        { label: "Criterio formale delitti/contravvenzioni (artt. 17, 39)", body: "L'art. 39 rinvia alla specie di pena (art. 17): <strong>delitti</strong> = ergastolo, reclusione, multa; <strong>contravvenzioni</strong> = arresto, ammenda. La distinzione ha ricadute: elemento soggettivo (le contravvenzioni sono punite indifferentemente per dolo o colpa; i delitti di regola solo per dolo, art. 43), tentativo (solo delitti, art. 56), recidiva (art. 99), oblazione (solo contravvenzioni, artt. 162-162-bis), prescrizione." },
        { label: "Bipartizione vs tripartizione", body: "La <strong>bipartizione</strong> scompone il reato in elemento oggettivo (fatto/tipicità, con le scriminanti come <em>elementi negativi del fatto</em>) ed elemento soggettivo (colpevolezza). La <strong>tripartizione</strong> aggiunge un elemento intermedio, l'<strong>antigiuridicità obiettiva</strong> (assenza di cause di giustificazione), collocata tra fatto e colpevolezza: è qui la differenza reale tra le due impostazioni." },
        { label: "Concezioni quadripartite", body: "Ravvisano un quarto elemento: la conformità del fatto al tipo descritto dalla fattispecie, oppure la <strong>punibilità</strong> (Marinucci) come insieme delle condizioni che fondano o escludono l'opportunità della pena, elevata a elemento essenziale anziché mera conseguenza del reato." },
      ],
      giurisprudenza: [
        { label: "Collocazione delle scriminanti", body: "La scelta tra bipartizione e tripartizione non è meramente teorica: incide sul trattamento dell'errore e sulla natura oggettiva delle scriminanti (art. 59 co. 1). Nella tripartizione l'antigiuridicità è categoria autonoma; nella bipartizione le cause di giustificazione operano come elementi negativi del fatto tipico." },
      ],
      eccezioni: [],
    },
    sintesi: [
      "Reato = fatto umano antigiuridico sanzionato con una pena.",
      "Criterio distintivo delitti/contravvenzioni: formale (art. 39), sulla pena principale (art. 17).",
      "Delitti: ergastolo, reclusione, multa. Contravvenzioni: arresto, ammenda.",
      "Ricadute: tentativo (solo delitti), oblazione (solo contravvenzioni), elemento soggettivo, recidiva.",
      "Bipartizione: oggettivo (fatto, scriminanti come elementi negativi) / soggettivo (colpevolezza).",
      "Tripartizione: fatto, antigiuridicità obiettiva, colpevolezza. Quadripartizione: + tipicità o punibilità.",
    ],
    esempi: [
      { titolo: "Perché la distinzione conta", testo: "Immaginiamo che l'avvocato Bianchi debba impostare la difesa di un assistito. Se il fatto contestato è un <strong>delitto</strong>, potrà rilevare che l'azione si è fermata allo stadio del tentativo (art. 56), figura configurabile <strong>solo per i delitti</strong>: non esiste una contravvenzione tentata. Se invece si tratta di una <strong>contravvenzione</strong>, potrà valutare l'oblazione (artt. 162 e 162-bis), causa estintiva del reato mediante pagamento di una somma, ammessa <em>solo per le contravvenzioni</em>. Stabilire in via preliminare se il reato è delitto o contravvenzione — guardando alla pena principale prevista dall'art. 17 — è dunque decisivo prima ancora di affrontare il merito." },
    ],
    flashcards: [
      ["Qual è il criterio distintivo tra delitti e contravvenzioni?", "Il criterio formale (art. 39), fondato sulla specie di pena principale comminata (art. 17)."],
      ["Con quali pene sono puniti delitti e contravvenzioni?", "Delitti: ergastolo, reclusione, multa. Contravvenzioni: arresto, ammenda."],
      ["Cosa cambia tra bipartizione e tripartizione del reato?", "La collocazione delle scriminanti: elementi negativi del fatto (bipartizione) o categoria autonoma dell'antigiuridicità obiettiva tra fatto e colpevolezza (tripartizione)."],
      ["Il tentativo è configurabile per le contravvenzioni?", "No: il tentativo (art. 56) è configurabile solo per i delitti."],
      ["Cosa aggiungono le concezioni quadripartite?", "Un quarto elemento: la tipicità (conformità al tipo) o la punibilità (Marinucci), elevata a elemento essenziale del reato."],
    ],
    comparativa: {
      titolo: "Bipartizione vs tripartizione del reato",
      a: "Bipartizione", b: "Tripartizione",
      righe: [
        { profilo: "Elementi", a: "Oggettivo (fatto) + soggettivo (colpevolezza)", b: "Fatto + antigiuridicità + colpevolezza" },
        { profilo: "Cause di giustificazione", a: "Elementi negativi del fatto", b: "Categoria autonoma (antigiuridicità obiettiva)" },
        { profilo: "Antigiuridicità", a: "Non è categoria separata", b: "Elemento intermedio tra fatto e colpevolezza" },
      ],
    },
    quiz: [
      { q: "Il criterio distintivo tra delitti e contravvenzioni è:", opts: ["Sostanziale, basato sul bene giuridico offeso", "Formale, basato sulla specie di pena principale", "Soggettivo, basato sul dolo o sulla colpa", "Processuale, basato sul regime di procedibilità"], correct: 1, difficulty: 2, commonError: "Cercare un criterio sostanziale (gravità o tipo di bene) anziché il criterio formale della pena.", why: "L'art. 39 accoglie il criterio formale: la distinzione dipende dalla pena principale comminata (art. 17) — reclusione/multa per i delitti, arresto/ammenda per le contravvenzioni. Non conta il bene offeso né la procedibilità.", fonte: "Cap. 3 — §1" },
      { q: "Le contravvenzioni, quanto all'elemento soggettivo:", opts: ["Sono punibili soltanto se commesse con dolo", "Sono punibili sia per dolo sia per colpa", "Non richiedono alcuna colpevolezza dell'agente", "Sono punibili soltanto se commesse con colpa"], correct: 1, difficulty: 3, commonError: "Applicare alle contravvenzioni la regola dei delitti (dolo salvo colpa espressa).", why: "Per le contravvenzioni l'art. 43 rende indifferente il dolo o la colpa. I delitti, invece, sono di regola punibili solo se dolosi, salvo i casi di delitto colposo espressamente previsti.", fonte: "Cap. 3 — §1" },
      { q: "Nella teoria della tripartizione, l'antigiuridicità:", opts: ["Coincide sul piano concettuale con la colpevolezza", "È un elemento autonomo tra fatto e colpevolezza", "Opera come mero elemento negativo del fatto", "Non costituisce una categoria del reato"], correct: 1, difficulty: 3, commonError: "Confondere la tripartizione (antigiuridicità autonoma) con la bipartizione (scriminanti come elementi negativi del fatto).", why: "La tripartizione colloca l'antigiuridicità obiettiva (assenza di cause di giustificazione) come elemento intermedio tra fatto e colpevolezza. La lettura delle scriminanti come elementi negativi del fatto è propria della bipartizione.", fonte: "Cap. 3 — §6.1" },
      { q: "Quale istituto è configurabile SOLO per i delitti?", opts: ["L'oblazione (artt. 162 ss.)", "Il tentativo (art. 56 c.p.)", "L'ammenda pecuniaria", "La pena dell'arresto"], correct: 1, difficulty: 2, commonError: "Ritenere il tentativo possibile anche per le contravvenzioni.", why: "Il tentativo (art. 56) riguarda solo i delitti. L'oblazione è propria delle contravvenzioni; ammenda e arresto sono invece le pene tipiche delle contravvenzioni.", fonte: "Cap. 3 — §1" },
      { q: "Le concezioni quadripartite individuano, rispetto alla tripartizione, un elemento ulteriore quale:", opts: ["La sola condotta materiale dell'agente", "La tipicità o la punibilità del fatto", "Il nesso di causalità tra condotta ed evento", "La pena accessoria conseguente alla condanna"], correct: 1, difficulty: 4, commonError: "Ricondurre la quadripartizione a elementi già presenti nella tripartizione.", why: "Le concezioni quadripartite aggiungono la conformità al tipo (tipicità) oppure la punibilità (Marinucci), come autonomo elemento essenziale del reato. Causalità e condotta appartengono già al fatto; la pena accessoria è conseguenza sanzionatoria.", fonte: "Cap. 3 — §6.2" },
    ],
    veroFalso: [
      { aff: "La distinzione tra delitti e contravvenzioni si fonda su un criterio formale legato alla pena.", vero: true, traccia: "Vero. In assenza di una nozione sostanziale, l'art. 39 accoglie il criterio formale: si guarda alla specie di pena principale comminata (art. 17), reclusione/multa per i delitti, arresto/ammenda per le contravvenzioni." },
      { aff: "Bipartizione e tripartizione differiscono soltanto nel nome, con identica collocazione delle scriminanti.", vero: false, traccia: "Falso. La differenza reale sta proprio nella collocazione delle cause di giustificazione: elementi negativi del fatto (bipartizione) o categoria autonoma dell'antigiuridicità obiettiva (tripartizione)." },
    ],
    aperta: { q: "Il candidato esponga la nozione di reato, la distinzione tra delitti e contravvenzioni e le teorie sulla struttura del reato.", traccia: "Il reato è un fatto umano antigiuridico cui l'ordinamento ricollega una pena. I reati si dividono in delitti e contravvenzioni secondo il criterio formale dell'art. 39, imperniato sulla specie di pena principale (art. 17): ergastolo/reclusione/multa per i delitti, arresto/ammenda per le contravvenzioni; la distinzione rileva per elemento soggettivo (art. 43), tentativo (art. 56, solo delitti), oblazione (solo contravvenzioni), recidiva, prescrizione. Sulla struttura: la bipartizione scinde elemento oggettivo (fatto, con scriminanti come elementi negativi) e soggettivo (colpevolezza); la tripartizione aggiunge l'antigiuridicità obiettiva come categoria autonoma; le concezioni quadripartite individuano un ulteriore elemento nella tipicità o nella punibilità (Marinucci).", fonte: "Cap. 3 — §§1, 6" },
    consigliate: ["mappa", "comparativa", "flashcards", "mcq"],
    media: { mappa: true },
  },

  /* ===================== 4 · SOGGETTI E RESPONSABILITÀ ENTI ==================== */
  {
    id: "soggetti", part: "generale", chapter: 3, chapterTitle: "Il reato",
    title: "I soggetti del reato e la responsabilità degli enti", subtitle: "Soggetto attivo (reati comuni e propri), soggetto passivo e danneggiato, d.lgs. 231/2001",
    articoli: ["art. 27 Cost.", "d.lgs. 231/2001", "art. 120 c.p.", "art. 74 c.p.p."], pages: [14, 16], depth: "deep", inPlan: true,
    layers: {
      essenziale:
        "Il <strong>soggetto attivo</strong> del reato è la persona fisica che ne realizza il fatto tipico: nei <em>reati comuni</em> l'autore è il «chiunque» (quisque de populo), mentre nei <em>reati propri</em> occorre una particolare qualifica, naturalistica o giuridica (si pensi al pubblico ufficiale nel peculato). Sul versante passivo occorre distinguere il <strong>soggetto passivo</strong>, ossia la persona offesa titolare del bene giuridico protetto dalla norma, dal <strong>danneggiato</strong>, che subisce un danno patrimoniale o non patrimoniale risarcibile e può perciò costituirsi parte civile: le due figure spesso coincidono, ma non necessariamente. Superato il dogma <em>societas delinquere non potest</em>, il d.lgs. 231/2001 ha infine introdotto una responsabilità degli enti, formalmente qualificata come amministrativa ma dipendente da reato e con tratti sostanzialmente penali, che affianca quella della persona fisica autrice dell'illecito.",
      approfondimenti: [
        { label: "Reati comuni e reati propri", body: "Nei <strong>reati comuni</strong> l'autore è indicato con «chiunque». Nei <strong>reati propri</strong> serve una qualifica (naturalistica o giuridica). Si distinguono: propri <em>esclusivi</em> (solo il qualificato può essere autore; se anche di mano propria, senza la qualifica il fatto è lecito, es. evasione), <em>semiesclusivi</em> (senza la qualifica resta un reato comune, es. peculato/appropriazione indebita), <em>non esclusivi</em> (senza la qualifica sarebbe illecito extrapenale)." },
        { label: "Persona offesa vs danneggiato", body: "La <strong>persona offesa</strong> (titolare del bene protetto) esercita le facoltà dell'art. 90 c.p.p., propone querela (art. 120) e presta il consenso scriminante (art. 50). Il <strong>danneggiato</strong> subisce un danno risarcibile (art. 185) e può costituirsi parte civile (art. 74 c.p.p.). Possono coincidere ma non necessariamente." },
        { label: "Responsabilità degli enti (d.lgs. 231/2001)", body: "L'ente risponde se il reato-presupposto (catalogo artt. 24 ss.) è commesso, nel suo <strong>interesse o vantaggio</strong>, da soggetto apicale o subordinato. Occorre la <strong>colpa di organizzazione</strong> (inadeguatezza del modello). L'ente non risponde se prova l'adozione ed efficace attuazione di modelli idonei, l'istituzione dell'ODV, la fraudolenta elusione dei modelli e l'assenza di omessa vigilanza. Sanzioni: pecuniarie, interdittive, confisca, pubblicazione della sentenza." },
      ],
      giurisprudenza: [
        { label: "Interesse ex ante, vantaggio ex post", body: "I criteri oggettivi del d.lgs. 231/2001 si articolano in interesse (obiettiva preordinazione del reato agli scopi sociali, valutata ex ante) e vantaggio (risultato concreto conseguito dall'ente, accertato ex post): sono alternativi e non necessariamente compresenti." },
      ],
      eccezioni: [
        { label: "Enti esclusi dal d.lgs. 231/2001", body: "Sono esclusi lo Stato, gli enti pubblici territoriali, gli altri enti pubblici non economici e gli enti che svolgono funzioni di rilievo costituzionale (inclusi partiti politici e sindacati)." },
      ],
    },
    sintesi: [
      "Soggetto attivo: persona fisica. Reati comuni (chiunque) vs reati propri (qualifica).",
      "Reati propri: esclusivi (di mano propria), semiesclusivi, non esclusivi.",
      "Persona offesa = titolare del bene protetto (querela, art. 90 c.p.p., consenso art. 50).",
      "Danneggiato = subisce danno risarcibile (art. 185), può costituirsi parte civile (art. 74 c.p.p.).",
      "D.lgs. 231/2001: responsabilità dell'ente per reato commesso nel suo interesse o vantaggio.",
      "Esonero: modello idoneo, ODV, elusione fraudolenta, assenza di omessa vigilanza.",
    ],
    esempi: [
      { titolo: "Offesa e danneggiato non coincidono", testo: "L'automobilista Rossi, per una manovra imprudente, investe e uccide il pedone Verdi. La <strong>persona offesa</strong> è la vittima Verdi, titolare del bene vita leso dalla condotta; i <strong>danneggiati</strong> sono invece i suoi congiunti (coniuge e figli), che subiscono un danno risarcibile e possono costituirsi parte civile nel processo (art. 74 c.p.p.). I due ruoli talvolta coincidono nella medesima persona — per esempio la signora Neri derubata del portafoglio è insieme offesa e danneggiata del furto — ma la distinzione conserva rilievi processuali precisi, specie in tema di legittimazione a proporre querela e a chiedere il risarcimento." },
    ],
    flashcards: [
      ["Qual è la differenza tra reato comune e reato proprio?", "Nel reato comune l'autore è «chiunque»; nel reato proprio è richiesta una qualifica soggettiva, naturalistica o giuridica (es. il pubblico ufficiale)."],
      ["Chi è la persona offesa e chi il danneggiato dal reato?", "L'offesa è il titolare del bene protetto (querela, art. 90 c.p.p., consenso ex art. 50); il danneggiato subisce un danno risarcibile (art. 185) e può costituirsi parte civile (art. 74 c.p.p.)."],
      ["Quando risponde l'ente ex d.lgs. 231/2001?", "Quando un reato-presupposto è commesso nel suo interesse o vantaggio da apicali o subordinati, in presenza di colpa di organizzazione."],
      ["Come può l'ente andare esente da responsabilità?", "Provando l'adozione ed efficace attuazione di modelli idonei, l'istituzione dell'ODV, la fraudolenta elusione dei modelli e l'assenza di omessa vigilanza."],
      ["Quali enti sono esclusi dal d.lgs. 231/2001?", "Stato, enti pubblici territoriali, enti pubblici non economici, enti con funzioni di rilievo costituzionale (partiti e sindacati)."],
    ],
    comparativa: {
      titolo: "Persona offesa vs danneggiato dal reato",
      a: "Persona offesa (soggetto passivo)", b: "Danneggiato",
      righe: [
        { profilo: "Posizione", a: "Titolare del bene protetto dalla norma", b: "Subisce un danno risarcibile ex art. 185" },
        { profilo: "Facoltà", a: "Querela (art. 120), art. 90 c.p.p., consenso ex art. 50", b: "Costituzione di parte civile (art. 74 c.p.p.)" },
        { profilo: "Coincidenza", a: "Può coincidere col danneggiato", b: "Può coincidere con l'offesa, ma non sempre" },
      ],
    },
    quiz: [
      { q: "Il reato proprio si caratterizza per:", opts: ["Un autore indicato dalla norma come «chiunque»", "Un autore dotato di una particolare qualifica", "La necessaria pluralità di autori concorrenti", "La totale assenza di un evento naturalistico"], correct: 1, difficulty: 2, commonError: "Confondere reato proprio (qualifica) con reato plurisoggettivo (più autori).", why: "Nel reato proprio l'autore deve possedere una qualifica naturalistica o giuridica (es. pubblico ufficiale); il «chiunque» è tipico del reato comune. La pluralità di autori riguarda i reati plurisoggettivi.", fonte: "Cap. 3 — §2" },
      { q: "La persona offesa dal reato è:", opts: ["Chi subisce un danno patrimoniale risarcibile", "Il titolare del bene protetto dalla norma", "Necessariamente e solo una persona fisica", "Chi si costituisce parte civile nel processo"], correct: 1, difficulty: 2, commonError: "Identificare la persona offesa con il danneggiato che si costituisce parte civile.", why: "La persona offesa è il titolare del bene tutelato; il danneggiato è chi subisce un danno risarcibile e può costituirsi parte civile (art. 74 c.p.p.). L'offesa può essere anche una persona giuridica.", fonte: "Cap. 3 — §4" },
      { q: "Ai fini del d.lgs. 231/2001, l'ente risponde se il reato-presupposto è commesso:", opts: ["Da chiunque, anche da un soggetto estraneo all'ente", "Nell'interesse dell'ente da apicali o subordinati", "Soltanto dagli amministratori formalmente investiti", "Soltanto se si tratta di un reato doloso"], correct: 1, difficulty: 3, commonError: "Restringere la responsabilità ai soli apicali o ai soli reati dolosi.", why: "Serve che il reato sia commesso nell'interesse o a vantaggio dell'ente da un soggetto apicale o subordinato intraneo, con colpa di organizzazione. Non basta un estraneo, e la responsabilità non è limitata ai soli amministratori.", fonte: "Cap. 3 — §3" },
      { q: "Nel d.lgs. 231/2001, interesse e vantaggio:", opts: ["Coincidono sempre in un unico criterio", "L'interesse si valuta ex ante, il vantaggio ex post", "Sono valutati entrambi con giudizio ex post", "Sono del tutto irrilevanti ai fini della 231"], correct: 1, difficulty: 4, commonError: "Sovrapporre i due criteri o valutarli entrambi con lo stesso metro temporale.", why: "L'interesse descrive la preordinazione del reato agli scopi sociali (giudizio ex ante); il vantaggio è il risultato concretamente conseguito (accertamento ex post). Sono criteri alternativi e distinti.", fonte: "Cap. 3 — §3" },
      { q: "Quale ente è escluso dall'ambito del d.lgs. 231/2001?", opts: ["Una società per azioni (S.p.A.)", "Un'associazione priva di personalità giuridica", "Un ente pubblico territoriale (es. il Comune)", "Una società a responsabilità limitata (S.r.l.)"], correct: 2, difficulty: 3, commonError: "Ritenere assoggettati alla 231 anche gli enti pubblici territoriali.", why: "Sono esclusi Stato, enti pubblici territoriali, enti pubblici non economici e enti con funzioni di rilievo costituzionale. Le società di capitali e le associazioni (anche senza personalità) rientrano invece nell'ambito applicativo.", fonte: "Cap. 3 — §3" },
    ],
    veroFalso: [
      { aff: "Persona offesa e danneggiato dal reato coincidono sempre.", vero: false, traccia: "Falso. Possono coincidere (es. la vittima di un furto), ma non necessariamente: nell'omicidio la persona offesa è la vittima, mentre i danneggiati (i familiari) sono soggetti diversi che possono costituirsi parte civile." },
      { aff: "L'ente non risponde se prova di aver adottato ed efficacemente attuato modelli organizzativi idonei prima della commissione del reato.", vero: true, traccia: "Vero. È una delle condizioni di esonero previste dal d.lgs. 231/2001: modelli idonei ed efficacemente attuati, ODV con autonomi poteri, fraudolenta elusione dei modelli e assenza di omessa vigilanza." },
    ],
    aperta: { q: "Il candidato tratti dei soggetti del reato e della responsabilità degli enti da reato.", traccia: "Il soggetto attivo è la persona fisica autrice del fatto: nei reati comuni («chiunque») e nei reati propri (con qualifica, distinti in esclusivi, semiesclusivi e non esclusivi). Il soggetto passivo è la persona offesa, titolare del bene protetto (querela ex art. 120, facoltà ex art. 90 c.p.p., consenso scriminante ex art. 50), da distinguere dal danneggiato che subisce un danno risarcibile (art. 185) e può costituirsi parte civile (art. 74 c.p.p.). Superato il dogma societas delinquere non potest, il d.lgs. 231/2001 ha introdotto la responsabilità dell'ente (formalmente amministrativa, sostanzialmente penale) per reati-presupposto commessi nel suo interesse o vantaggio da apicali o subordinati, con colpa di organizzazione; l'ente si esonera provando modelli idonei, ODV, elusione fraudolenta e assenza di omessa vigilanza. Sanzioni: pecuniarie, interdittive, confisca, pubblicazione.", fonte: "Cap. 3 — §§2-4" },
    consigliate: ["mappa", "comparativa", "flashcards", "mcq", "aperta"],
    media: { mappa: true },
  },

  /* ===================== 5 · CONDOTTA E REATI OMISSIVI ==================== */
  {
    id: "condotta", part: "generale", chapter: 4, chapterTitle: "L'elemento oggettivo",
    title: "La condotta e i reati omissivi", subtitle: "Azione e omissione, reati omissivi propri e impropri, posizione di garanzia, art. 40 cpv.",
    articoli: ["art. 40 c.p.", "art. 40 cpv. c.p.", "art. 593 c.p.", "art. 27 co. 1 Cost."], pages: [18, 19], depth: "deep", inPlan: true,
    layers: {
      essenziale:
        "La condotta è il primo elemento dell'elemento oggettivo del reato e, in ossequio al principio di materialità (<em>cogitationis poenam nemo patitur</em>), può consistere in un'<strong>azione</strong>, cioè un movimento corporeo che modifica il mondo esterno, oppure in un'<strong>omissione</strong>, cioè il mancato compimento di un'azione giuridicamente doverosa. I reati omissivi si distinguono in due categorie. I reati omissivi <strong>propri</strong> puniscono il semplice mancato compimento di un'azione comandata alla generalità dei consociati: sono reati di mera condotta, tipizzati direttamente dalla parte speciale (come l'omissione di soccorso). I reati omissivi <strong>impropri</strong> (o commissivi mediante omissione) puniscono invece il mancato impedimento di un evento che si aveva l'obbligo giuridico di impedire, e nascono dalla combinazione della clausola generale dell'<em>art. 40 cpv.</em> con una fattispecie di evento a forma libera, presupponendo una posizione di garanzia e un effettivo potere impeditivo.",
      approfondimenti: [
        { label: "Omissivi propri vs impropri", body: "I reati <strong>omissivi propri</strong> puniscono il mancato compimento di un'azione comandata alla generalità dei consociati (di mera condotta, es. omissione di soccorso art. 593). I reati <strong>omissivi impropri</strong> (o commissivi mediante omissione) puniscono il <em>mancato impedimento di un evento</em>: presuppongono una posizione di garanzia e nascono dal combinato dell'art. 40 cpv. con una fattispecie di evento a forma libera." },
        { label: "La posizione di garanzia (art. 40 cpv.)", body: "«Non impedire un evento, che si ha l'obbligo giuridico di impedire, equivale a cagionarlo». L'obbligo può derivare da legge, contratto, provvedimento del giudice, precedente azione pericolosa e (per alcuni) volontaria assunzione/consuetudine. Occorre inoltre un <strong>effettivo potere impeditivo</strong>. Gli obblighi si distinguono in obblighi di <em>controllo</em> (di una fonte di pericolo) e di <em>protezione</em> (di un bene)." },
        { label: "Causalità omissiva", body: "Nei reati omissivi impropri l'accertamento causale procede per <strong>sostituzione mentale</strong>: si aggiunge l'azione doverosa omessa e si verifica, con giudizio prognostico, se l'evento si sarebbe ugualmente prodotto. Franzese (SU 30328/2002) esige la stessa certezza processuale della causalità attiva." },
      ],
      giurisprudenza: [
        { label: "Certezza processuale anche nell'omissione (SU Franzese 30328/2002)", body: "È intollerabile un diverso grado di certezza tra causalità attiva e omissiva: in entrambi i casi la condanna esige l'accertamento del nesso in termini di certezza processuale, raggiungibile con leggi statistiche solo se supportate da elevata probabilità logica e dall'esclusione dei decorsi causali alternativi." },
      ],
      eccezioni: [
        { label: "Potere impeditivo effettivo", body: "Non basta l'obbligo giuridico: il garante deve avere in concreto il potere e la materiale possibilità di compiere l'azione impeditiva. In mancanza, l'omissione non è punibile ex art. 40 cpv." },
      ],
    },
    sintesi: [
      "Condotta = azione (movimento corporeo) o omissione (mancata azione doverosa).",
      "Reati omissivi propri: mancato compimento di un'azione comandata, di mera condotta (es. art. 593).",
      "Reati omissivi impropri: mancato impedimento di un evento (art. 40 cpv. + norma di parte speciale).",
      "Posizione di garanzia: legge, contratto, provvedimento, precedente azione pericolosa.",
      "Serve il potere impeditivo effettivo; obblighi di controllo vs obblighi di protezione.",
      "Causalità omissiva: sostituzione mentale + giudizio prognostico (certezza processuale, Franzese).",
    ],
    esempi: [
      { titolo: "Il bagnino e l'art. 40 cpv.", testo: "Il bagnino Ferri, assunto dallo stabilimento per vigilare sui bagnanti, riveste in forza del contratto una <strong>posizione di garanzia</strong>. Se resta inerte mentre la giovane Sara annega a pochi metri da lui, pur avendo il tempo e la materiale possibilità di trarla in salvo, il non aver impedito la morte «equivale a cagionarla» (art. 40 cpv.): Ferri risponde di omicidio come reato <strong>omissivo improprio</strong>. Un semplice bagnante che assista alla scena, invece, non ha alcun obbligo giuridico di impedire l'evento e, ove ometta di attivarsi, risponderà al più di omissione di soccorso (art. 593), che è un reato <em>omissivo proprio</em> di mera condotta." },
    ],
    flashcards: [
      ["In cosa può consistere la condotta penalmente rilevante?", "In un'azione (movimento corporeo che modifica il mondo esterno) o in un'omissione (mancato compimento di un'azione giuridicamente doverosa)."],
      ["Qual è la differenza tra reato omissivo proprio e improprio?", "Il proprio punisce il mancato compimento di un'azione comandata (mera condotta); l'improprio punisce il mancato impedimento di un evento che si ha l'obbligo di impedire."],
      ["Cosa stabilisce l'art. 40 cpv. c.p.?", "«Non impedire un evento, che si ha l'obbligo giuridico di impedire, equivale a cagionarlo»: è la clausola di equivalenza dei reati omissivi impropri."],
      ["Da cosa può derivare la posizione di garanzia?", "Da legge, contratto, provvedimento dell'autorità giudiziaria, precedente azione pericolosa (e per alcuni volontaria assunzione/consuetudine); serve anche un effettivo potere impeditivo."],
      ["Come si distinguono gli obblighi di garanzia?", "In obblighi di controllo (di una fonte di pericolo) e obblighi di protezione (di un bene esposto a pericoli esterni)."],
    ],
    comparativa: {
      titolo: "Reato omissivo proprio vs improprio",
      a: "Omissivo proprio", b: "Omissivo improprio (art. 40 cpv.)",
      righe: [
        { profilo: "Struttura", a: "Mancato compimento di un'azione comandata", b: "Mancato impedimento di un evento" },
        { profilo: "Evento", a: "Di regola assente (mera condotta)", b: "Necessario, con nesso causale" },
        { profilo: "Posizione di garanzia", a: "Obbligo verso la generalità dei consociati", b: "Obbligo giuridico di impedire + potere impeditivo" },
      ],
    },
    quiz: [
      { q: "Il reato omissivo improprio si fonda sul combinato disposto di:", opts: ["Art. 40 co. 1 e una norma contravvenzionale", "Art. 40 cpv. e una fattispecie di evento", "Art. 41 sulle concause e art. 56 sul tentativo", "Art. 43 sul dolo e art. 42 sull'imputazione"], correct: 1, difficulty: 3, commonError: "Ignorare il ruolo dell'art. 40 cpv. come clausola generale di equivalenza.", why: "Il reato omissivo improprio nasce dalla clausola dell'art. 40 cpv. («non impedire equivale a cagionare») combinata con una fattispecie di evento a forma libera. Gli artt. 41, 56, 43, 42 riguardano concause, tentativo ed elemento soggettivo.", fonte: "Cap. 4 — §1.1.1" },
      { q: "La posizione di garanzia può derivare da:", opts: ["Soltanto dalla legge penale incriminatrice", "Legge, contratto, provvedimento del giudice", "Soltanto da un contratto tra le parti", "Un mero dovere morale o di solidarietà"], correct: 1, difficulty: 2, commonError: "Ridurre le fonti dell'obbligo alla sola legge o al solo dovere morale.", why: "L'obbligo di impedire l'evento può nascere da legge (penale o extrapenale), contratto, provvedimento dell'autorità e precedente azione pericolosa. Un mero dovere morale non fonda una posizione di garanzia.", fonte: "Cap. 4 — §1.1.1" },
      { q: "Perché operi l'art. 40 cpv., oltre all'obbligo giuridico occorre che il garante:", opts: ["Abbia agito con dolo diretto o intenzionale", "Abbia il potere concreto di impedire l'evento", "Rivesta la qualifica di pubblico ufficiale", "Abbia previsto in anticipo il verificarsi dell'evento"], correct: 1, difficulty: 3, commonError: "Ritenere sufficiente l'obbligo formale, senza verificare il potere impeditivo effettivo.", why: "Non basta l'obbligo: serve un effettivo potere impeditivo e la materiale possibilità di compiere l'azione doverosa. Il dolo e la previsione attengono all'elemento soggettivo, distinto dalla struttura oggettiva dell'omissione impropria.", fonte: "Cap. 4 — §1.1.1" },
      { q: "L'omissione di soccorso (art. 593) è un esempio di:", opts: ["Reato omissivo improprio di evento", "Reato omissivo proprio di mera condotta", "Reato di evento a forma vincolata", "Reato commissivo mediante azione"], correct: 1, difficulty: 2, commonError: "Scambiare l'omissione propria (senza evento) con quella impropria (mancato impedimento di un evento).", why: "L'omissione di soccorso punisce il mancato compimento di un'azione comandata alla generalità: è un reato omissivo proprio, di mera condotta, previsto direttamente dalla parte speciale, senza necessità dell'art. 40 cpv.", fonte: "Cap. 4 — §1.1.1" },
      { q: "L'accertamento della causalità omissiva avviene mediante:", opts: ["Eliminazione mentale della condotta tenuta", "Sostituzione mentale dell'azione doverosa omessa", "Presunzione assoluta del nesso causale", "Giudizio di mera prevedibilità dell'evento"], correct: 1, difficulty: 4, commonError: "Applicare all'omissione il giudizio esplicativo (eliminazione) proprio della causalità attiva.", why: "Nella causalità omissiva si procede per sostituzione mentale (giudizio prognostico): si aggiunge l'azione doverosa omessa e si verifica se l'evento si sarebbe ugualmente prodotto. L'eliminazione mentale è propria della causalità attiva.", fonte: "Cap. 4 — §1.3.1" },
    ],
    veroFalso: [
      { aff: "Nei reati omissivi impropri è sufficiente l'esistenza di un obbligo giuridico di impedire l'evento.", vero: false, traccia: "Falso. Oltre all'obbligo giuridico (posizione di garanzia) occorre che il soggetto abbia in concreto un effettivo potere impeditivo e la materiale possibilità di compiere l'azione doverosa; altrimenti l'art. 40 cpv. non opera." },
      { aff: "L'omissione di soccorso (art. 593) è un reato omissivo proprio.", vero: true, traccia: "Vero. Punisce il mancato compimento di un'azione comandata alla generalità dei consociati, ed è tendenzialmente di mera condotta: rientra tra i reati omissivi propri, previsti direttamente dalla parte speciale." },
    ],
    aperta: { q: "Il candidato illustri la condotta come elemento del reato e la disciplina dei reati omissivi.", traccia: "La condotta, primo elemento del fatto, per il principio di materialità consiste in un'azione (movimento corporeo che modifica il mondo esterno) o in un'omissione (mancato compimento di un'azione doverosa). I reati omissivi propri puniscono il mancato compimento di un'azione comandata alla generalità (mera condotta, es. art. 593). I reati omissivi impropri puniscono il mancato impedimento di un evento e nascono dal combinato dell'art. 40 cpv. («non impedire equivale a cagionare») con una fattispecie di evento a forma libera: presuppongono una posizione di garanzia (fonti: legge, contratto, provvedimento, precedente azione pericolosa; obblighi di controllo e di protezione) e un effettivo potere impeditivo. La causalità omissiva si accerta per sostituzione mentale con giudizio prognostico, alla stessa soglia di certezza processuale della causalità attiva (Franzese).", fonte: "Cap. 4 — §1.1" },
    consigliate: ["mappa", "comparativa", "esempi", "mcq", "aperta"],
    media: { podcast: { title: "Condotta e reati omissivi", chapters: [["Azione e omissione", 0], ["Omissivi propri e impropri", 240], ["La posizione di garanzia", 520], ["Causalità omissiva", 800]] }, mappa: true },
  },

  /* ===================== 6 · OFFENSIVITÀ, REATO PUTATIVO E IMPOSSIBILE ==================== */
  {
    id: "offensivita", part: "generale", chapter: 4, chapterTitle: "L'elemento oggettivo",
    title: "L'offensività, il reato putativo e il reato impossibile", subtitle: "Offesa al bene giuridico, reati di danno/pericolo, reato putativo (art. 49 co. 1), reato impossibile (art. 49 co. 2)",
    articoli: ["art. 49 c.p.", "art. 25 Cost.", "art. 56 c.p.", "art. 27 Cost."], pages: [22, 29], depth: "deep", inPlan: true,
    layers: {
      essenziale:
        "Il principio di offensività («nullum crimen sine iniuria») esige che ogni reato rechi un'<strong>offesa a un bene giuridico</strong>, elemento indefettibile del fatto tipico: non basta la mera trasgressione formale del precetto. In base al grado di aggressione al bene, i reati si distinguono in reati <em>di danno</em>, che richiedono l'effettiva lesione, e reati <em>di pericolo</em>, che si accontentano della sua messa in pericolo (concreto, accertato dal giudice, o presunto dalla legge). Su questo sfondo si collocano due figure speculari. Il <strong>reato putativo</strong> (art. 49 co. 1) è il reato erroneamente supposto: l'agente crede di commettere un reato che in realtà non esiste, sicché non è punibile perché il fatto vive solo nella sua mente. Il <strong>reato impossibile</strong> (art. 49 co. 2) ricorre invece quando, per inidoneità dell'azione o per inesistenza dell'oggetto, l'evento dannoso o pericoloso è impossibile: la dottrina vi scorge la consacrazione dell'offensività a livello di legge ordinaria.",
      approfondimenti: [
        { label: "Reati di danno e di pericolo", body: "Reati di <strong>danno</strong>: richiedono l'effettiva lesione del bene. Reati di <strong>pericolo</strong>: basta la messa in pericolo. Questi ultimi si distinguono in <em>pericolo concreto</em> (accertamento in concreto da parte del giudice) e <em>pericolo presunto/astratto</em> (pericolosità presunta iuris et de iure, insita nella condotta)." },
        { label: "Reato putativo (art. 49 co. 1)", body: "È il reato «erroneamente supposto»: l'agente crede di commettere un reato che in realtà non esiste. L'errore può essere di <strong>diritto</strong> (ritiene esistente una norma incriminatrice inesistente o non più vigente) o di <strong>fatto</strong> (crede esistenti gli elementi costitutivi, es. sottrae cosa propria credendola altrui). Non è punibile: manca l'offesa. Resta ferma la punibilità per l'eventuale reato diverso realmente commesso (co. 3)." },
        { label: "Reato impossibile (art. 49 co. 2)", body: "È esclusa la punibilità quando, per <strong>inidoneità dell'azione</strong> (accertata ex ante e in concreto, prognosi postuma) o per <strong>inesistenza dell'oggetto</strong> (assoluta e originaria), l'evento è impossibile. È un «non reato»; l'agente socialmente pericoloso può però essere sottoposto a misura di sicurezza (quasi reato, co. 4)." },
      ],
      giurisprudenza: [
        { label: "Reato impossibile e offensività (art. 49 co. 2)", body: "Dottrina e giurisprudenza maggioritarie leggono nell'art. 49 co. 2 la consacrazione, a livello di legge ordinaria, del principio di offensività: dove l'azione è inidonea o l'oggetto inesistente non vi è offesa, e dunque non vi è reato punibile, pur in presenza di una condotta astrattamente conforme al tipo." },
      ],
      eccezioni: [
        { label: "Inesistenza dell'oggetto: assoluta vs temporanea", body: "Rileva solo l'inesistenza <strong>assoluta e originaria</strong> dell'oggetto. La mancanza meramente temporanea o accidentale (es. la vittima si è appena allontanata) non integra reato impossibile ma dà luogo a tentativo punibile ex art. 56." },
      ],
    },
    sintesi: [
      "Offensività: l'offesa al bene è elemento indefettibile del fatto tipico.",
      "Reati di danno (lesione) vs di pericolo (concreto o presunto).",
      "Reato putativo (art. 49 co. 1): reato erroneamente supposto, non punibile (esiste solo nella mente).",
      "Errore putativo: di diritto o di fatto; resta la punibilità per il reato diverso realmente commesso.",
      "Reato impossibile (art. 49 co. 2): inidoneità dell'azione o inesistenza dell'oggetto.",
      "È un «non reato», ma è possibile la misura di sicurezza (quasi reato, art. 49 co. 4).",
    ],
    esempi: [
      { titolo: "Putativo vs impossibile", testo: "Giulia esce dal ristorante portando via un ombrello che crede altrui, deliberata a impossessarsene, mentre in realtà è il proprio: immagina un furto che non esiste, perché la cosa è già sua. Si tratta di <strong>reato putativo</strong> (art. 49 co. 1), non punibile. Diverso è il caso del sicario Bruni, che entra nella stanza e scarica la pistola sul letto convinto di uccidere la vittima designata, la quale però aveva definitivamente lasciato quell'abitazione giorni prima: l'azione cade su un <em>oggetto inesistente</em> e dà luogo a <strong>reato impossibile</strong> (art. 49 co. 2). Attenzione però: se la vittima si fosse allontanata solo temporaneamente, ricorrerebbe non il reato impossibile ma un tentativo punibile (art. 56)." },
    ],
    flashcards: [
      ["Cosa afferma il principio di offensività?", "Che non vi è reato senza offesa a un bene giuridico (nullum crimen sine iniuria): l'offesa è elemento indefettibile del fatto tipico."],
      ["Come si distinguono reati di danno e di pericolo?", "I reati di danno richiedono la lesione del bene; quelli di pericolo la sola messa in pericolo (concreto, accertato dal giudice, o presunto iuris et de iure)."],
      ["Cos'è il reato putativo (art. 49 co. 1)?", "Il reato erroneamente supposto: l'agente crede di commettere un reato che non esiste. Non è punibile, perché il fatto esiste solo nella sua mente."],
      ["Cos'è il reato impossibile (art. 49 co. 2)?", "Quello in cui, per inidoneità dell'azione o inesistenza dell'oggetto, l'evento dannoso o pericoloso è impossibile: è un «non reato», espressione dell'offensività."],
      ["Cosa distingue reato impossibile e tentativo?", "Il reato impossibile richiede inidoneità dell'azione o inesistenza assoluta e originaria dell'oggetto; la mancanza temporanea dell'oggetto dà luogo a tentativo punibile (art. 56)."],
    ],
    comparativa: {
      titolo: "Reato putativo vs reato impossibile",
      a: "Reato putativo (art. 49 co. 1)", b: "Reato impossibile (art. 49 co. 2)",
      righe: [
        { profilo: "Errore/difetto", a: "L'agente suppone un reato inesistente", b: "L'azione è inidonea o l'oggetto inesistente" },
        { profilo: "Piano", a: "Il reato esiste solo nella mente dell'agente", b: "La condotta è reale ma inoffensiva" },
        { profilo: "Conseguenza", a: "Non punibile (co. 1)", b: "Non punibile, ma possibile misura di sicurezza (co. 4)" },
      ],
    },
    quiz: [
      { q: "Il reato putativo (art. 49 co. 1) è:", opts: ["Un reato punito a titolo di tentativo", "Il reato erroneamente supposto, non punibile", "Un reato aggravato da una circostanza", "Un reato di pericolo meramente presunto"], correct: 1, difficulty: 2, commonError: "Confondere il reato putativo (fatto lecito creduto reato) con il tentativo o il reato impossibile.", why: "L'art. 49 co. 1 sancisce la non punibilità del reato erroneamente supposto: il fatto è lecito ed esiste solo nella mente dell'agente. Non è un tentativo (che presuppone un reato reale) né un'aggravante.", fonte: "Cap. 4 — §3" },
      { q: "Il reato impossibile (art. 49 co. 2) ricorre per:", opts: ["Un errore dell'agente sul precetto penale", "Inidoneità dell'azione o inesistenza dell'oggetto", "La mancanza dell'elemento soggettivo (dolo)", "La desistenza volontaria dall'azione criminosa"], correct: 1, difficulty: 3, commonError: "Ricondurre il reato impossibile all'assenza di dolo o all'errore sul precetto.", why: "L'art. 49 co. 2 esclude la punibilità quando, per inidoneità dell'azione o inesistenza dell'oggetto, l'evento è impossibile. Non attiene all'elemento soggettivo né alla desistenza.", fonte: "Cap. 4 — §4" },
      { q: "L'inesistenza dell'oggetto rilevante ex art. 49 co. 2 deve essere:", opts: ["Anche soltanto temporanea o accidentale", "Assoluta e originaria dell'oggetto", "Sopravvenuta al compimento della condotta", "Conosciuta o prevista dall'agente"], correct: 1, difficulty: 4, commonError: "Ritenere sufficiente una mancanza temporanea o accidentale dell'oggetto.", why: "Rileva la sola inesistenza assoluta e originaria: la mancanza temporanea o accidentale dà luogo a tentativo punibile (art. 56), non a reato impossibile.", fonte: "Cap. 4 — §4" },
      { q: "L'autore di un reato impossibile:", opts: ["È punito con la pena del reato ridotta", "Non è punibile, ma è possibile una misura di sicurezza", "È sempre prosciolto senza alcuna conseguenza", "Risponde comunque a titolo di colpa"], correct: 1, difficulty: 3, commonError: "Ritenere che dal reato impossibile non possa derivare alcuna conseguenza.", why: "Il reato impossibile è un «non reato» non punibile; tuttavia l'art. 49 co. 4 ammette la misura di sicurezza se l'agente è socialmente pericoloso (c.d. quasi reato). Non vi è pena ridotta né responsabilità colposa.", fonte: "Cap. 4 — §4" },
      { q: "In quale norma la dottrina scorge l'offensività a livello di legge ordinaria?", opts: ["Art. 56 c.p. (il tentativo)", "Art. 49 co. 2 c.p. (reato impossibile)", "Art. 40 cpv. c.p. (l'omissione)", "Art. 43 c.p. (l'elemento soggettivo)"], correct: 1, difficulty: 3, commonError: "Confondere l'offensività (art. 49 co. 2) con il tentativo (art. 56) o la causalità (art. 40).", why: "Dottrina e giurisprudenza maggioritarie leggono nell'art. 49 co. 2 (reato impossibile) l'enunciazione del principio di offensività a livello ordinario: senza idoneità dell'azione o esistenza dell'oggetto non vi è offesa. L'art. 56 riguarda il tentativo, il 40 cpv. l'omissione impropria, il 43 l'elemento soggettivo.", fonte: "Cap. 4 — §4" },
    ],
    veroFalso: [
      { aff: "Nel reato putativo l'agente crede di commettere un reato che in realtà non esiste, e non è punibile.", vero: true, traccia: "Vero. L'art. 49 co. 1 dispone la non punibilità del reato erroneamente supposto: il fatto è lecito ed esiste solo nella mente dell'agente. Resta la punibilità per l'eventuale reato diverso realmente commesso (co. 3)." },
      { aff: "La mancanza temporanea dell'oggetto materiale integra sempre il reato impossibile.", vero: false, traccia: "Falso. Solo l'inesistenza assoluta e originaria dell'oggetto integra il reato impossibile (art. 49 co. 2); la mancanza meramente temporanea o accidentale dà luogo a tentativo punibile ex art. 56." },
    ],
    aperta: { q: "Il candidato illustri il principio di offensività e la disciplina del reato putativo e del reato impossibile.", traccia: "Il principio di offensività (nullum crimen sine iniuria) esige che il fatto tipico offenda un bene giuridico: da qui la distinzione tra reati di danno e di pericolo (concreto o presunto). Il reato putativo (art. 49 co. 1) è il reato erroneamente supposto: l'agente crede, per errore di diritto o di fatto, di commettere un reato inesistente; non è punibile, salva la punibilità per il reato diverso realmente commesso (co. 3). Il reato impossibile (art. 49 co. 2) esclude la punibilità quando, per inidoneità dell'azione (accertata ex ante e in concreto) o inesistenza assoluta e originaria dell'oggetto, l'evento è impossibile: dottrina e giurisprudenza vi scorgono l'offensività a livello di legge ordinaria. È un «non reato», ma l'agente pericoloso può essere sottoposto a misura di sicurezza (quasi reato, co. 4). La mancanza solo temporanea dell'oggetto integra invece tentativo (art. 56).", fonte: "Cap. 4 — §§3-4" },
    consigliate: ["mappa", "comparativa", "esempi", "mcq", "aperta"],
    media: { mappa: true },
  },

  /* ===================== 7 · LE CAUSE DI GIUSTIFICAZIONE ==================== */
  {
    id: "scriminanti", part: "generale", chapter: 4, chapterTitle: "L'elemento oggettivo",
    title: "Le cause di giustificazione", subtitle: "Scriminanti artt. 50-54, rilevanza oggettiva (art. 59 co. 1), eccesso colposo (55) e putatività (59 co. 4)",
    articoli: ["artt. 50-54 c.p.", "art. 59 co. 1 c.p.", "art. 55 c.p.", "art. 59 co. 4 c.p."], pages: [22, 29], depth: "deep", inPlan: true,
    layers: {
      essenziale:
        "Le cause di giustificazione (o scriminanti) rendono <strong>lecito</strong> per l'intero ordinamento un fatto che, in loro assenza, costituirebbe reato, con la conseguenza di escludere ogni forma di responsabilità (penale, civile, amministrativa e disciplinare). Il loro fondamento è il principio di non contraddizione: l'ordinamento non può al tempo stesso autorizzare o imporre una condotta e punirla. Sono tipizzate negli artt. 50-54: <em>consenso dell'avente diritto</em> (50), <em>esercizio di un diritto e adempimento di un dovere</em> (51), <em>legittima difesa</em> (52), <em>uso legittimo delle armi</em> (53) e <em>stato di necessità</em> (54). Poiché incidono sulla liceità obiettiva del fatto, operano con <strong>rilevanza oggettiva</strong> (art. 59 co. 1): sono valutate a favore dell'agente anche se da lui non conosciute o per errore ritenute inesistenti, perché il giudizio di liceità prescinde dall'atteggiamento psichico del soggetto.",
      approfondimenti: [
        { label: "Le singole scriminanti (artt. 50-54)", body: "<strong>Consenso</strong> (50): del titolare di un diritto disponibile, con consenso personale, attuale, libero, lecito, consapevole. <strong>Esercizio del diritto/adempimento del dovere</strong> (51): con limiti interni ed esterni; l'ordine illegittimo di regola non scusa l'esecutore. <strong>Legittima difesa</strong> (52): pericolo attuale di offesa ingiusta, reazione necessaria e proporzionata. <strong>Uso legittimo delle armi</strong> (53): scriminante propria del P.U., sussidiaria. <strong>Stato di necessità</strong> (54): pericolo attuale di danno grave alla persona, non volontariamente causato, non altrimenti evitabile." },
        { label: "Rilevanza oggettiva (art. 59 co. 1)", body: "Il giudizio di liceità è <strong>oggettivo</strong>: prescinde dall'atteggiamento psichico. L'art. 59 co. 1 sancisce che le circostanze di esclusione della pena «sono valutate a favore dell'agente anche se da lui non conosciute, o per errore ritenute inesistenti». La scriminante opera quindi anche se ignorata (scriminante non conosciuta)." },
        { label: "Eccesso colposo (55) e scriminante putativa (59 co. 4)", body: "<strong>Eccesso colposo</strong> (art. 55): la scriminante esiste ma l'agente ne eccede colposamente i limiti; se il fatto è previsto come delitto colposo, risponde a tale titolo. <strong>Scriminante putativa</strong> (art. 59 co. 4): l'agente ritiene erroneamente esistente una scriminante che non c'è; l'errore esclude il dolo, ma se determinato da colpa e il fatto è delitto colposo, resta punibile." },
      ],
      giurisprudenza: [
        { label: "Necessità nella legittima difesa domiciliare (Cass. 21794/2020)", body: "La riforma del 2019 (l. 36/2019) non ha stravolto l'istituto: anche con il nuovo co. 4 dell'art. 52 il requisito della necessità appartiene all'essenza della legittima difesa. Non è ammessa una reazione indiscriminata contro l'intruso; permane il vaglio di necessità/inevitabilità." },
      ],
      eccezioni: [
        { label: "Errore su scriminante inesistente (art. 5 e non 59)", body: "L'art. 59 co. 4 opera solo se l'errore cade su elementi di fatto di una scriminante esistente. Se invece l'agente crede esistente una causa di giustificazione non prevista dall'ordinamento (errore sul precetto), si applica l'art. 5 c.p., non l'art. 59." },
      ],
    },
    sintesi: [
      "Scriminanti (artt. 50-54): rendono il fatto lecito in tutto l'ordinamento (non contraddizione).",
      "Consenso (50), esercizio diritto/adempimento dovere (51), legittima difesa (52), uso armi (53), stato di necessità (54).",
      "Rilevanza oggettiva (art. 59 co. 1): valgono anche se non conosciute dall'agente.",
      "Legittima difesa: reazione verso l'aggressore; fuga di regola non doverosa.",
      "Stato di necessità: reazione verso il terzo incolpevole; fuga sempre doverosa; indennizzo (art. 2045 c.c.).",
      "Eccesso colposo (55) e scriminante putativa (59 co. 4): rispondono a titolo di colpa se il fatto è delitto colposo.",
    ],
    esempi: [
      { titolo: "Legittima difesa o stato di necessità?", testo: "Aggredito per strada con un coltello da un rapinatore, Andrea reagisce colpendo con un pugno il proprio <strong>aggressore</strong> e neutralizzandolo: la sua condotta, altrimenti lesioni, è scriminata dalla <strong>legittima difesa</strong> (art. 52), perché la reazione necessaria e proporzionata si dirige contro chi ha creato il pericolo. Diverso è il caso di Elena che, sorpresa da un'improvvisa alluvione, per mettersi in salvo sfonda la porta della villetta di un <em>vicino del tutto estraneo</em>: qui soccorre lo <strong>stato di necessità</strong> (art. 54), poiché il sacrificio ricade su un terzo incolpevole, la fuga sarebbe stata doverosa ove possibile e residua a carico di Elena un dovere di indennizzo verso il proprietario (art. 2045 c.c.)." },
    ],
    flashcards: [
      ["Quale effetto producono le cause di giustificazione?", "Rendono il fatto lecito in tutto l'ordinamento, escludendo ogni responsabilità (penale, civile, amministrativa, disciplinare); operano secondo il principio di non contraddizione."],
      ["Cosa significa la rilevanza oggettiva delle scriminanti (art. 59 co. 1)?", "Che operano a favore dell'agente anche se da lui non conosciute o per errore ritenute inesistenti: il giudizio di liceità è oggettivo."],
      ["Qual è la differenza tra legittima difesa e stato di necessità?", "Nella difesa si reagisce contro l'aggressore e la fuga di regola non è doverosa; nello stato di necessità si agisce contro un terzo incolpevole, la fuga è sempre doverosa e residua un indennizzo (art. 2045 c.c.)."],
      ["Cos'è l'eccesso colposo (art. 55)?", "Il superamento colposo dei limiti di una scriminante realmente esistente: se il fatto è previsto come delitto colposo, l'agente ne risponde a tale titolo."],
      ["Cos'è la scriminante putativa (art. 59 co. 4)?", "L'erronea supposizione dell'esistenza di una scriminante: esclude il dolo, ma se l'errore è colposo e il fatto è delitto colposo, resta punibile."],
    ],
    comparativa: {
      titolo: "Legittima difesa (52) vs stato di necessità (54)",
      a: "Legittima difesa (art. 52)", b: "Stato di necessità (art. 54)",
      righe: [
        { profilo: "Diritto difeso", a: "Ogni diritto, anche patrimoniale", b: "Solo diritti personali (danno grave alla persona)" },
        { profilo: "Destinatario della reazione", a: "L'aggressore", b: "Un terzo incolpevole" },
        { profilo: "Possibilità di fuga", a: "Di regola non doverosa", b: "Sempre doverosa (anche se dannosa)" },
      ],
    },
    quiz: [
      { q: "Le cause di giustificazione, ai sensi dell'art. 59 co. 1, operano:", opts: ["Solo se conosciute e volute dall'agente", "Anche se non conosciute dall'agente", "Soltanto per i delitti puniti a titolo di dolo", "Soltanto se espressamente invocate in giudizio"], correct: 1, difficulty: 3, commonError: "Ritenere necessaria la conoscenza della scriminante da parte dell'agente.", why: "L'art. 59 co. 1 sancisce la rilevanza oggettiva: le scriminanti valgono a favore dell'agente anche se non conosciute o ritenute inesistenti. Il giudizio di liceità è oggettivo e prescinde dallo stato psichico.", fonte: "Cap. 4 — §2" },
      { q: "Rispetto allo stato di necessità, nella legittima difesa la possibilità di fuga:", opts: ["È sempre doverosa, come nello stato di necessità", "Di regola non è doverosa per il difensore", "È del tutto irrilevante in entrambi gli istituti", "Esclude sempre in radice l'operare della scriminante"], correct: 1, difficulty: 4, commonError: "Estendere alla legittima difesa la regola dello stato di necessità (fuga sempre doverosa).", why: "Nella legittima difesa la reazione è diretta contro l'aggressore e la fuga di regola non è doverosa; nello stato di necessità, in cui si colpisce un terzo incolpevole, la fuga è sempre doverosa. Non è quindi irrilevante né identica nei due istituti.", fonte: "Cap. 4 — §2.6" },
      { q: "Lo stato di necessità (art. 54) può essere invocato per difendere:", opts: ["Qualsiasi diritto, anche di natura patrimoniale", "Solo i diritti personali (danno grave alla persona)", "Soltanto il diritto reale di proprietà", "Soltanto gli interessi pubblici dello Stato"], correct: 1, difficulty: 3, commonError: "Estendere lo stato di necessità ai diritti patrimoniali, come nella legittima difesa.", why: "L'art. 54 richiede un pericolo attuale di danno grave alla persona: la scriminante tutela i soli diritti personali. La difesa dei diritti patrimoniali è propria della legittima difesa (art. 52).", fonte: "Cap. 4 — §2.6" },
      { q: "L'eccesso colposo nelle cause di giustificazione (art. 55) comporta che l'agente:", opts: ["Non è in nessun caso punibile per il fatto", "Risponde a titolo di colpa, se delitto colposo", "Risponde sempre e comunque a titolo di dolo", "È punito per il reato consumato con l'aggravante"], correct: 1, difficulty: 3, commonError: "Ritenere l'eccesso colposo sempre impunito o sempre doloso.", why: "L'art. 55 prevede che, se il fatto è previsto dalla legge come delitto colposo, si applica la relativa disciplina: l'agente risponde a titolo di colpa per aver ecceduto colposamente i limiti di una scriminante esistente.", fonte: "Cap. 4 — §2.8" },
      { q: "Se l'agente crede erroneamente esistente una scriminante non prevista dall'ordinamento:", opts: ["Si applica l'art. 59 co. 4 (scriminante putativa)", "Si applica l'art. 5 c.p. sull'errore di diritto", "Non è in alcun caso punibile per il fatto", "Risponde soltanto a titolo di colpa"], correct: 1, difficulty: 4, commonError: "Applicare l'art. 59 co. 4 anche all'errore su una scriminante inesistente.", why: "L'art. 59 co. 4 opera solo per l'errore su elementi di fatto di una scriminante esistente. Se l'agente ritiene esistente una causa di giustificazione non prevista dall'ordinamento, incorre in errore sul precetto e si applica l'art. 5 c.p.", fonte: "Cap. 4 — §2.8" },
    ],
    veroFalso: [
      { aff: "Le cause di giustificazione operano anche se l'agente non le conosce.", vero: true, traccia: "Vero. L'art. 59 co. 1 stabilisce la rilevanza oggettiva delle scriminanti: sono valutate a favore dell'agente anche se da lui non conosciute o per errore ritenute inesistenti, perché il giudizio di liceità è oggettivo." },
      { aff: "Nello stato di necessità la reazione è diretta contro l'aggressore, come nella legittima difesa.", vero: false, traccia: "Falso. Nella legittima difesa si reagisce contro l'aggressore; nello stato di necessità l'azione è diretta contro un terzo incolpevole, estraneo alla situazione di pericolo. Da qui la diversa disciplina (fuga sempre doverosa, indennizzo ex art. 2045 c.c.)." },
    ],
    aperta: { q: "Il candidato illustri le cause di giustificazione, la loro rilevanza oggettiva e la disciplina dell'eccesso colposo e delle scriminanti putative.", traccia: "Le cause di giustificazione (artt. 50-54: consenso dell'avente diritto, esercizio del diritto/adempimento del dovere, legittima difesa, uso legittimo delle armi, stato di necessità) rendono il fatto lecito in tutto l'ordinamento, escludendo ogni responsabilità, in ossequio al principio di non contraddizione. Operano con rilevanza oggettiva (art. 59 co. 1): valgono anche se non conosciute dall'agente. Legittima difesa e stato di necessità vanno distinti (diritto difeso, destinatario della reazione, doverosità della fuga, indennizzo ex art. 2045 c.c.). La disciplina comune contempla l'eccesso colposo (art. 55: superamento colposo dei limiti di una scriminante esistente, punibile a titolo di colpa se il fatto è delitto colposo) e la scriminante putativa (art. 59 co. 4: erronea supposizione di una scriminante esistente, che esclude il dolo ma resta punibile se l'errore è colposo). Se l'errore cade su una scriminante inesistente si applica l'art. 5 c.p.", fonte: "Cap. 4 — §2" },
    consigliate: ["mappa", "comparativa", "esempi", "mcq", "aperta"],
    media: { podcast: { title: "Le cause di giustificazione", chapters: [["Nozione e non contraddizione", 0], ["Le scriminanti artt. 50-54", 260], ["Rilevanza oggettiva", 560], ["Eccesso colposo e putatività", 820]] }, mappa: true },
  },
];
