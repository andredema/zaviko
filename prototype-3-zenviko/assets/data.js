/* Données FICTIVES pour le prototype Zenviko.
   Noms, numéros (555), avis et prix sont inventés. */
window.ZENVIKO_DATA = {
  categories: [
    { id: 'plomberie', nom: 'Plomberie', icon: 'wrench', urgence: true },
    { id: 'electricite', nom: 'Électricité', icon: 'zap', urgence: true },
    { id: 'menage', nom: 'Ménage', icon: 'home' },
    { id: 'devoirs', nom: 'Aide aux devoirs', icon: 'book' },
    { id: 'demenagement', nom: 'Déménagement', icon: 'truck' },
    { id: 'beaute', nom: 'Coiffure et beauté', icon: 'scissors' },
    { id: 'informatique', nom: 'Informatique', icon: 'monitor', urgence: true },
    { id: 'jardinage', nom: 'Jardinage et déneigement', icon: 'leaf' }
  ],

  dispo: {
    maintenant: { label: 'Libre maintenant', rang: 0, dot: 'dot-amber' },
    aujourdhui: { label: 'Disponible aujourd’hui', rang: 1, dot: 'dot-teal' },
    demain: { label: 'Disponible demain', rang: 2, dot: 'dot-teal' },
    semaine: { label: 'Disponible cette semaine', rang: 3, dot: 'dot-gray' }
  },

  pros: [
    {
      id: 'marc-tremblay', prenom: 'Marc', nom: 'Tremblay', metier: 'Plombier', cat: 'plomberie',
      ville: 'Gatineau', secteur: 'Hull', zones: ['Hull', 'Aylmer', 'Gatineau', 'Ottawa-Centre'],
      langues: ['Français', 'English'], dispo: 'maintenant', tel: '819 555-0142', depuis: 2024,
      reponse: 'Répond en moins d’une heure', couleur: '#0E9F8E',
      presentation: 'Plombier depuis 12 ans. Réparations rapides, installations et urgences. Je donne toujours le prix avant de commencer, sans surprise.',
      services: [['Réparation de fuite', 'dès 90 $'], ['Débouchage d’évier ou de toilette', 'dès 110 $'], ['Installation de chauffe-eau', 'dès 450 $'], ['Remplacement de robinet', 'dès 120 $']],
      avis: [
        { auteur: 'Julie P.', note: 5, date: 'octobre 2026', texte: 'Arrivé en 40 minutes pour une fuite sous l’évier. Prix annoncé respecté. Je recommande.' },
        { auteur: 'Ahmed B.', note: 5, date: 'septembre 2026', texte: 'Très professionnel, il a expliqué chaque étape.' },
        { auteur: 'Line C.', note: 4, date: 'août 2026', texte: 'Bon travail, un peu de retard sur l’horaire prévu mais il a prévenu.' }
      ]
    },
    {
      id: 'sophie-lavoie', prenom: 'Sophie', nom: 'Lavoie', metier: 'Plombière', cat: 'plomberie',
      ville: 'Gatineau', secteur: 'Aylmer', zones: ['Aylmer', 'Hull', 'Chelsea'],
      langues: ['Français'], dispo: 'aujourdhui', tel: '819 555-0177', depuis: 2025,
      reponse: 'Répond dans la journée', couleur: '#2F6F8F',
      presentation: 'Plombière résidentielle. Spécialiste des salles de bain et des petites rénovations.',
      services: [['Réparation de fuite', 'dès 85 $'], ['Pose de lavabo ou de toilette', 'dès 180 $'], ['Inspection avant achat', '120 $']],
      avis: [
        { auteur: 'Marie-Ève D.', note: 5, date: 'octobre 2026', texte: 'Travail propre et soigné. Elle a laissé la salle de bain impeccable.' },
        { auteur: 'Paul R.', note: 5, date: 'juillet 2026', texte: 'Ponctuelle et de bon conseil.' }
      ]
    },
    {
      id: 'david-nkemdirim', prenom: 'David', nom: 'Nkemdirim', metier: 'Plombier', cat: 'plomberie',
      ville: 'Ottawa', secteur: 'Vanier', zones: ['Vanier', 'Ottawa-Centre', 'Orléans'],
      langues: ['English', 'Français'], dispo: 'demain', tel: '613 555-0119', depuis: 2025,
      reponse: 'Répond en quelques heures', couleur: '#5B6770',
      presentation: 'Plombier licencié, travaux résidentiels et petits commerces. Disponible le soir et la fin de semaine.',
      services: [['Débouchage', 'dès 100 $'], ['Remplacement de chauffe-eau', 'dès 480 $']],
      avis: [{ auteur: 'Kevin L.', note: 4, date: 'septembre 2026', texte: 'Efficace, prix correct.' }]
    },
    {
      id: 'jean-bisson', prenom: 'Jean', nom: 'Bisson', metier: 'Électricien', cat: 'electricite',
      ville: 'Gatineau', secteur: 'Aylmer', zones: ['Aylmer', 'Hull', 'Gatineau'],
      langues: ['Français'], dispo: 'maintenant', tel: '819 555-0163', depuis: 2024,
      reponse: 'Répond en moins d’une heure', couleur: '#0F2A3D',
      presentation: 'Maître électricien. Pannes, prises, luminaires, panneaux électriques et bornes de recharge.',
      services: [['Dépannage de panne', 'dès 95 $'], ['Installation de luminaire', 'dès 80 $'], ['Borne de recharge', 'sur devis']],
      avis: [
        { auteur: 'Sylvie T.', note: 5, date: 'octobre 2026', texte: 'Panne réglée un dimanche soir. Merci !' },
        { auteur: 'Olivier M.', note: 5, date: 'juin 2026', texte: 'Clair, rapide, rassurant.' }
      ]
    },
    {
      id: 'aicha-kamga', prenom: 'Aïcha', nom: 'Kamga', metier: 'Tutrice en maths et sciences', cat: 'devoirs',
      ville: 'Ottawa', secteur: 'Vanier', zones: ['Vanier', 'Orléans', 'En ligne'],
      langues: ['Français', 'English'], dispo: 'aujourdhui', tel: '613 555-0188', depuis: 2025,
      reponse: 'Répond dans la journée', couleur: '#B0743A',
      presentation: 'Étudiante en génie à l’Université d’Ottawa. J’aide les élèves de la 5e année au secondaire en maths, physique et chimie.',
      services: [['Aide aux devoirs (1 h)', '35 $'], ['Préparation aux examens (1 h 30)', '50 $'], ['Séance en ligne (1 h)', '30 $']],
      avis: [
        { auteur: 'Famille N.', note: 5, date: 'octobre 2026', texte: 'Notre fils a repris confiance en maths. Patiente et claire.' },
        { auteur: 'Christine G.', note: 5, date: 'mai 2026', texte: 'Très bonne préparation à l’examen de fin d’année.' }
      ]
    },
    {
      id: 'julien-ouellet', prenom: 'Julien', nom: 'Ouellet', metier: 'Tuteur en français', cat: 'devoirs',
      ville: 'Ottawa', secteur: 'Orléans', zones: ['Orléans', 'En ligne'],
      langues: ['Français'], dispo: 'semaine', tel: '613 555-0124', depuis: 2026,
      reponse: 'Répond en quelques heures', couleur: '#2F6F8F',
      presentation: 'Enseignant à la retraite. Lecture, grammaire, rédaction, du primaire à la 12e année.',
      services: [['Tutorat de français (1 h)', '40 $'], ['Révision de travaux écrits', 'dès 25 $']],
      avis: [{ auteur: 'Nathalie B.', note: 5, date: 'septembre 2026', texte: 'Méthodique et bienveillant.' }]
    },
    {
      id: 'nadia-bouchard', prenom: 'Nadia', nom: 'Bouchard', metier: 'Entretien ménager', cat: 'menage',
      ville: 'Gatineau', secteur: 'Gatineau', zones: ['Gatineau', 'Hull', 'Buckingham'],
      langues: ['Français'], dispo: 'aujourdhui', tel: '819 555-0151', depuis: 2024,
      reponse: 'Répond en moins d’une heure', couleur: '#0E9F8E',
      presentation: 'Ménage résidentiel régulier ou ponctuel. Produits écologiques fournis.',
      services: [['Ménage régulier (3 h)', '105 $'], ['Grand ménage', 'dès 220 $'], ['Ménage après déménagement', 'dès 260 $']],
      avis: [
        { auteur: 'Isabelle F.', note: 5, date: 'octobre 2026', texte: 'Maison impeccable, ponctuelle et discrète.' },
        { auteur: 'Marc-André L.', note: 4, date: 'août 2026', texte: 'Très bien, je la reprends chaque mois.' }
      ]
    },
    {
      id: 'fatou-diallo', prenom: 'Fatou', nom: 'Diallo', metier: 'Ménage résidentiel', cat: 'menage',
      ville: 'Ottawa', secteur: 'Ottawa-Sud', zones: ['Ottawa-Sud', 'Ottawa-Centre', 'Nepean'],
      langues: ['Français', 'English'], dispo: 'demain', tel: '613 555-0136', depuis: 2025,
      reponse: 'Répond dans la journée', couleur: '#B0743A',
      presentation: 'Ménage, repassage et organisation. Équipe de deux personnes pour les grandes maisons.',
      services: [['Ménage (2 personnes, 3 h)', '180 $'], ['Repassage (1 h)', '30 $']],
      avis: [{ auteur: 'Rachel K.', note: 5, date: 'octobre 2026', texte: 'Travail rapide et minutieux.' }]
    },
    {
      id: 'kevin-mbarga', prenom: 'Kevin', nom: 'Mbarga', metier: 'Déménagement et transport', cat: 'demenagement',
      ville: 'Gatineau', secteur: 'Gatineau', zones: ['Gatineau', 'Ottawa', 'Montréal (longue distance)'],
      langues: ['Français', 'English'], dispo: 'semaine', tel: '819 555-0109', depuis: 2024,
      reponse: 'Répond en quelques heures', couleur: '#0F2A3D',
      presentation: 'Camion de 16 pieds et deux déménageurs. Petits et moyens déménagements, livraison de meubles.',
      services: [['Déménagement local (2 pers. + camion, l’heure)', '130 $'], ['Livraison d’un meuble', 'dès 70 $']],
      avis: [
        { auteur: 'Céline M.', note: 5, date: 'juillet 2026', texte: 'Équipe efficace, rien d’abîmé.' },
        { auteur: 'Yannick T.', note: 4, date: 'juillet 2026', texte: 'Bon service, prévoir un peu plus de temps que prévu.' }
      ]
    },
    {
      id: 'emilie-roy', prenom: 'Émilie', nom: 'Roy', metier: 'Coiffeuse à domicile', cat: 'beaute',
      ville: 'Ottawa', secteur: 'Orléans', zones: ['Orléans', 'Rockland', 'Gatineau'],
      langues: ['Français'], dispo: 'aujourdhui', tel: '613 555-0158', depuis: 2025,
      reponse: 'Répond dans la journée', couleur: '#B0743A',
      presentation: 'Coiffure femmes, hommes et enfants à domicile. Mariages et événements.',
      services: [['Coupe et coiffage', 'dès 45 $'], ['Coloration', 'dès 85 $'], ['Coiffure d’événement', 'dès 90 $']],
      avis: [{ auteur: 'Annie V.', note: 5, date: 'septembre 2026', texte: 'Super pratique et très talentueuse.' }]
    },
    {
      id: 'samuel-ngo', prenom: 'Samuel', nom: 'Ngo', metier: 'Dépannage informatique', cat: 'informatique',
      ville: 'Ottawa', secteur: 'Ottawa-Centre', zones: ['Ottawa-Centre', 'Hull', 'À distance'],
      langues: ['English', 'Français'], dispo: 'maintenant', tel: '613 555-0170', depuis: 2024,
      reponse: 'Répond en moins d’une heure', couleur: '#2F6F8F',
      presentation: 'Ordinateurs lents, virus, Wi-Fi, imprimantes, sauvegardes. Intervention à domicile ou à distance.',
      services: [['Diagnostic et réparation (1 h)', '75 $'], ['Installation Wi-Fi', 'dès 90 $'], ['Aide à distance (30 min)', '35 $']],
      avis: [
        { auteur: 'Georges H.', note: 5, date: 'octobre 2026', texte: 'Patient et pédagogue, même avec moi qui n’y connais rien.' },
        { auteur: 'Lina S.', note: 5, date: 'août 2026', texte: 'Ordinateur réparé à distance en 20 minutes.' }
      ]
    },
    {
      id: 'claire-gagnon', prenom: 'Claire', nom: 'Gagnon', metier: 'Jardinage et déneigement', cat: 'jardinage',
      ville: 'Gatineau', secteur: 'Chelsea', zones: ['Chelsea', 'Aylmer', 'Hull'],
      langues: ['Français', 'English'], dispo: 'demain', tel: '819 555-0193', depuis: 2025,
      reponse: 'Répond dans la journée', couleur: '#0E9F8E',
      presentation: 'Entretien de terrain l’été, déneigement de balcons et d’entrées l’hiver.',
      services: [['Tonte de pelouse', 'dès 40 $'], ['Déneigement d’entrée (par visite)', 'dès 35 $'], ['Ramassage de feuilles', 'dès 60 $']],
      avis: [{ auteur: 'Benoît R.', note: 4, date: 'novembre 2025', texte: 'Fiable tout l’hiver.' }]
    }
  ],

  /* Demande de démonstration pour la page « Suivre ma demande » */
  demandeDemo: {
    code: 'ZV-4821',
    service: 'Plomberie',
    description: 'Fuite sous l’évier de la cuisine, l’eau coule quand le robinet est ouvert.',
    quand: 'Aujourd’hui',
    lieu: 'Gatineau (J8X)',
    reponses: [
      { pro: 'marc-tremblay', message: 'Je peux passer vers 15 h. Déplacement et diagnostic 60 $, réparation estimée 90 à 140 $.', prix: '150 à 200 $' },
      { pro: 'sophie-lavoie', message: 'Disponible demain matin. Forfait réparation de fuite tout compris.', prix: '85 $' }
    ]
  },

  /* Espace pro de démonstration (Marc Tremblay) */
  espacePro: {
    pro: 'marc-tremblay',
    vues: 48, appels: 9, devis: 4,
    demandes: [
      { id: 'd1', titre: 'Fuite sous l’évier', lieu: 'Hull · J8X', quand: 'Aujourd’hui', client: 'Client sans compte', tel: '819 555-0101', statut: 'nouveau' },
      { id: 'd2', titre: 'Remplacer un chauffe-eau de 40 gallons', lieu: 'Aylmer · J9H', quand: 'Cette semaine', client: 'Nadine R.', tel: '819 555-0102', statut: 'nouveau' },
      { id: 'd3', titre: 'Robinet de salle de bain qui goutte', lieu: 'Ottawa-Centre · K1P', quand: 'Flexible', client: 'Client sans compte', tel: '613 555-0103', statut: 'devis', prix: '120 $' },
      { id: 'd4', titre: 'Toilette bouchée', lieu: 'Hull · J8Y', quand: 'Terminé le 28 octobre', client: 'Pierre L.', tel: '819 555-0104', statut: 'termine' }
    ]
  }
};
