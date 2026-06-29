---
title: "Design par l'IA : efficace mais vide (d'apprentissage)"
date: 2026-06-27 17:15:00 +0200
description: >-
  Utiliser l'IA pour concevoir rapidement, c'est séduisant. Mais à quel prix ?
  Retour d'expérience honnête sur la façon dont Claude Design m'a sauvé du temps... et comment ça m'a coûté en termes d'apprentissage.
tags: [IA, Apprentissage, Design UI, Accessibilité]
---
## L'IU n'est pas mon fort

*IA : intelligence artificielle*<br />
*IU : interface utilisateur*

Lorsque j'ai débuté le développement de ce site avec Jekyll, j’ai d’abord commencé par à la structure. C'est-à-dire comprendre les mécanismes du générateur, et créer le squelette de ce blog avec les 2 pages types ("accueil / liste des articles" et "à propos").

C'est l'ordre qui me paraissait le plus naturel, et cela me permettait de repousser le fait de m'attaquer à l'affichage.. Bien que j'ai débuté ma découverte du développement logiciel via le ~~site du zéro~~ openclassroom et les cours sur le web 2.0, je n'ai réalisé que des sites "moches" avec les meilleurs gifs du moment et des animations CSS sans cohérence. Autant vous dire que je partais de loin.

J'ai tout de même essayé de développer moi-même mon thème. Je me suis ainsi plongé dans des documentations et tutoriels sur Flexbox pour obtenir un affichage adaptatif et simple. Puis j'ai défini la palette de couleurs (Solarized Light), et je me suis intéressé à l'accessibilité notamment à l'aide de [cette conférence](https://youtu.be/UZZHcfBLJAo?si=VH-eSZT8p0jCS7eg "Lien de la conférence sur youtube") d'Emmanuelle Aboaf au Devoxx France 2026. Grâce à cela j'ai appris que ~~CSS est toujours aussi farfelu~~ la réalisation d'interfaces graphiques est un vrai métier et que faciliter l'accès, du moins vis-à-vis de certains handicaps, est relativement simple. Cependant, ce que j'avais développé ne correspondait pas à l'apparence imaginée.

## Un design en tête

Tel un peintre aux doigts boudinés, je savais ce que je voulais mais je n'arrivais pas à le réaliser. C'est pourquoi je me suis dirigé vers Claude Design, sans accès à une expertise front-end dans mon entourage. Se pose ici la question de ce que l'on confie à cet outil, et du coût / impact de celui-ci (au delà du simple coût monétaire), mais ce n'est pas le thème de cet article ; j'y reviendrai ultérieurement.

Sachant précisément ce que je voulais, j'ai demandé à l'intelligence artificielle d'Anthropic de me réaliser une interface selon ces contraintes :

- un design sobre à une colonne, centrée sur les grands affichages et avec juste une ou deux couleurs et un type d'icône / bouton unifié
- prise en compte de certains points d'accessibilité comme le fait d'avoir un ratio de contraste d'au moins 4, ou l'utilisation d'une police adaptée pour la dyslexie (Lexend)
- intégrer la palette de couleurs Solarized Light tout en respectant le point précédent sur le ratio
- la liste des liens à inclure dans le menu, ainsi que le contenu du bas de page avec le flux RSS et les réseaux sociaux

## Au delà de mes attentes

Pour référence, le modèle utilisé dans Claude Design à ce moment était Opus 8.

Je dois admettre que l'échange et la production de l'intelligence artificielle m'a étonné. J'ai presque eu l'impression d'être accompagné comme si j'étais client d'une agence de communication (de ce que j'imagine en tout cas) sur la réalisation de mon site. J'ai notamment "échangé"[^1] sur le titre du blog, que j'avais bêtement nommé "Blog de \[...\]". J'avais également un mini site de simulation, avec un panneau intégré permettant de changer le thème complet, et ainsi voir sur chaque type de page le rendu des 3 propositions. J'ai également été questionné sur l'utilisation d'un logo / favicon, ce que je n'avais pas du tout en tête par exemple.

Une fois ces différents points affinés et le choix de la variante et des couleurs effectué, Opus 8 a même été capable de générer un thème Jekyll valide et complet ! Initialement je m'imaginais obtenir au mieux du CSS, au pire une charte graphique ; et finalement je n'avais presque pas d'intervention supplémentaire pour intégrer le thème à mon code existant.

## Prendre du recul

D’un point de vue du résultat, la production de l’IA a répondu parfaitement à mon besoin ; cependant je ne suis pas pleinement satisfait avec le recul.

Le travail m’ayant été complètement pré-mâché par rapport à ce que j’attendais, me fait dire à posteriori que : 

- Jekyll étant tout nouveau pour moi, avoir la structure préparée m'a moins permis d'en comprendre les mécanismes.
- Le CSS reste toujours un mystère pour moi ; j’ai compris l’intérêt de Sass avec l’héritage et une meilleure maintenabilité. Mais n’ayant pas l’habitude d’en écrire, il m’est difficile d’en juger.
- Je comprends ce qui a été généré de par le fait d’avoir préparé le squelette et fait une tentative infructueuse de thème. Mais je ne suis pas sûr d’être capable de le reproduire facilement.

Qu’en tirer comme leçon ? Moi qui avait averti mes proches sur le risque de se faire “déposséder” des savoirs par l’IA, hé bien je suis tombé dans le piège. L’expression est peut-être forte mais je pense que l’IA, surtout lorsqu’elle est utilisée sur des domaines inconnus (du point de vue de l’utilisateur), entraîne l’appauvrissement de la réflexion. Pourquoi ? Car le résultat obtenu est convainquant et comment le juger en l’absence des connaissances nécessaires ? S’ajoute la pression du résultat, particulièrement dans un cadre professionnel, qui pousse à se contenter de la réponse qui est (quasi) immédiate et crédible. On se retrouve ainsi dans une sorte de boucle d’ivresse, où la production compte plus que le processus intellectuel.

Face à ce constat personnel, je ne pense pas que la réponse soit d’arrêter d’utiliser l’intelligence artificielle ; en tout cas pas pour les raisons ci-dessus car on peut mieux utiliser cet outil à disposition.

## L’IA comme “tuteur” d’apprentissage

Grâce à ses capacités de construction de liens, et vu l’ensemble des données à sa disposition, je me suis dis qu’apprendre grâce à l’IA est l’une de ses meilleures utilisations possible. Cela limite quelques-unes de mes inquiétudes, notamment le remplacement des personnes par l’IA (je fais référence aux récentes vagues de licenciements causées par celle-ci). Vous pourriez me rétorquer que dans ce cas je remplace potentiellement un professeur et vous n’auriez pas tort… Afin de simuler ce qu’aurait pu m’apporter un vrai professeur, j’ai définis quelques règles encadrant l’usage de l’IA pour apprendre : 

1. Connaître un minimum le domaine concerné, afin de pouvoir se rendre compte si la construction du cours est cohérente
2. Fournir une curation de sources, ou contrôler les sources utilisées dans le but d’obtenir un contenu fiable
3. Appliquer sur un cas concret et utile pour ancrer les connaissances acquises
4. Se restreindre à ne pas disposer de l’IA à la moindre difficulté

Une fois ces règles établies, j’ai fait une nouvelle demande à Claude en lui expliquant mon but : développer une application permettant de gérer mes comptes plus facilement, tout en apprenant l’ensemble de la stack technique nécessaire pour y répondre.

S’en est suivi des échanges concernant l’architecture et les composants / frameworks permettant de répondre à mon besoin. Entre les explications de l’IA (vérifiées), et mes connaissances de part quelques tests ou le suivi de l’actualité, j’ai pu définir la réponse technique en comprenant les apports et compromis de Vue et FastAPI par rapport à d’autres solutions. Si j’avais juste lancé une IA en mode production de code, je n’aurais pas pu jauger la pertinence (ou non) de ce qui était proposé.

Puis en me basant sur un [article récent d’Anthopic](https://claude.com/blog/using-claude-code-the-unreasonable-effectiveness-of-html "Lien vers le blog claude.com"), j’ai demandé la production d’un document HTML servant de guide dans mon apprentissage avec : 

1. L’installation de l’environnement de développement, avec des conseils sur les extensions et outils utilisés couramment, en prenant en compte mon contexte (dont VSCodium, où le code propriétaire de Microsoft n’est pas disponible comme Pylance par exemple)
2. Un parcours d’apprentissage par étape avec le détail des fonctionnalités attendues (pour mon application) à la fin de chacune. C’est un point important pour moi car j’ai du mal à m’arrêter dans mes recherches. Grâce à cela, j’ai une démarche claire de ce que je dois apprendre puis de ce que peux mettre en œuvre.
3. En incluant des sources de références (tutoriels officiels, source reconnue dans le secteur, …)

Il ne me reste plus qu’à mettre en pratique ! Je pense que je ferai un article complémentaire partageant le retour de cette expérimentation. Et je mettrai également l’application à disposition sur GitHub. A la revoyure, et n’oubliez pas de surveiller vos *daemons* !

---
[^1]: j'ai du mal avec l'anthropomorphisation de l'IA qui n'est, il est utile de le rappeler, qu'un outil