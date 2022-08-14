export function getAllQuestionIds() {
  return Object.keys(questions).map((key) => {
    return {
      params: {
        id: key
      }
    }
  });
}

export function getQuestionData(id) {
  const question = questions[id];
  return {
    id,
    ...question
  }
}

export const questions = {
  "1": {
    question: "Ik maak duidelijk wat mijn mening is zonder direct te anticiperen op reacties.",
    skill: "Stelling nemen"
  },
  "2": {
    question: "Bij verschil van mening kom ik met tegenargumenten.",
    skill: "Argumenteren"
  },
  "3": {
    question: "Ik luister met begrip als iemand gevoelens uit van bijvoorbeeld kwaadheid, teleurstelling, blijdschap of droefheid.",
    skill: "Luisteren, samenvatten en doorvragen"
  },
  "4": {
    question: "Ik spreek duidelijk uit dat ik iemands bijdrage op prijs stel.",
    skill: "Complimenteren"
  },
  "5": {
    question: "Ik vind het nuttig mijn opvatting naar voren te brengen en te kijken wat er dan gebeurt.",
    skill: "Profileren"
  },
  "6": {
    question: "Ik gebruik de inbreng van anderen, ook als hun mening afwijkt van de mijne.",
    skill: "Betrekken"
  },
  "7": {
    question: "Ik bedank anderen expliciet voor het leveren van hun bijdragen.",
    skill: "Erkenning geven"
  },
  "8": {
    question: "Ik vind het prettig een lange termijn ideaalbeeld van de afdeling neer te zetten.",
    skill: "Schetsen van een lonkend perspectief"
  },
  "9": {
    question: "Ik heb de neiging dieper door te vragen en geen genoegen te nemen met een eerste antwoord op mijn vraag.",
    skill: "Luisteren, samenvatten en doorvragen"
  },
  "10": {
    question: "Ik onderbouw mijn mening met logische argumenten.",
    skill: "Argumenteren"
  },
  "11": {
    question: "Ik stimuleer mensen iets concreet uit te proberen als ze eenmaal enthousiast voor mijn idee zijn.",
    skill: "Zetten van de eerste stap"
  },
  "12": {
    question: "Ik analyseer onlogische verhalen en komt met tegenwerpingen.",
    skill: "Argumenteren"
  },
  "13": {
    question: "Ik kan mijn droombeeld in praktische stappen vertalen.",
    skill: "Zetten van de eerste stap"
  },
  "14": {
    question: "Ik vind het belangrijk mijn rol en positie duidelijk te maken.",
    skill: "Profileren"
  },
  "15": {
    question: "Ik gebruik woorden als ‘moeten’ en ‘behoren’.",
    skill: "Stelling nemen"
  },
  "16": {
    question: "Ik maak er werk van om bewust successen van anderen te benoemen.",
    skill: "Complimenteren"
  },
  "17": {
    question: "Als mijn team een succes viert, benoem ik de bijdragen van anderen.",
    skill: "Erkenning geven"
  },
  "18": {
    question: "Mijn persoonlijke gevoelens, zoals hoop of vrees, laat ik merken en ik vraag er bij anderen ook naar.",
    skill: "Betrekken"
  },
  "19": {
    question: "In het werk doe ik een beroep op waarden van mensen.",
    skill: "Aansluiten"
  },
  "20": {
    question: "Ik stimuleer het gevoel dat we samen voor een klus staan.",
    skill: "Schetsen van een lonkend perspectief"
  },
  "21": {
    question: "Bij veranderingen zet ik aan tot een eerste actie om zichtbaar te maken dat het werkt.",
    skill: "Zetten van de eerste stap"
  },
  "22": {
    question: "Ik probeer gedemotiveerde mensen weer enthousiast te maken door hun plezier in het werk aan te boren.",
    skill: "Aansluiten"
  },
  "23": {
    question: "Als ik iets van een ander vraag, geef ik aan wat hij van mij kan verwachten.",
    skill: "Profileren"
  },
  "24": {
    question: "Ik check of ik iemand goed heb begrepen door samen te vatten wat hij heeft gezegd.",
    skill: "Luisteren, samenvatten en doorvragen"
  },
  "25": {
    question: "Ik nodig anderen uit mee te denken met mijn probleem en neem hun suggesties serieus.",
    skill: "Betrekken"
  },
  "26": {
    question: "Bij een behaald succes kan ik mezelf op de zijlijn plaatsen en de andere laten scoren.",
    skill: "Erkenning geven"
  },
  "27": {
    question: "Ik vertel iedereen duidelijk wat ik van hem of haar verwacht.",
    skill: "Stelling nemen"
  },
  "28": {
    question: "Ik zoek werkdoelen waar iedereen zich in kan vinden.",
    skill: "Aansluiten"
  },
  "29": {
    question: "Ik gebruik beelden en vergelijkingen om mijn toekomstbeeld te visualiseren.",
    skill: "Schetsen van een lonkend perspectief"
  },
  "30": {
    question: "Ik geniet ervan als de ander gemotiveerd raakt door mijn waardering.",
    skill: "Complimenteren"
  }
}

export const styles = {
  "Aansporen": ["Complimenteren", "Profileren", "Stelling nemen"],
  "Overtuigen": ["Argumenteren", "Argumenteren", "Argumenteren"],
  "Onderzoeken": ["Luisteren, samenvatten en doorvragen", "Betrekken", "Erkenning geven"],
  "Inspireren": ["Schetsen van een lonkend perspectief", "Aansluiten", "Zetten van de eerste stap"]
}

export const skills = [...new Set(Object.values(styles).reduce((all, skills) => [...all, ...skills], []))]
