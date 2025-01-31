//-- ==================================================================================
//-- File. . . :  config.js
//-- Bevat . . :  Template voor de  configuratie voor respec  
//--              Gebaseerd op https://github.com/Geonovum/respec/wiki
//--              Deze file moet worden neergezet in de root-directory van de 
//--              betreffende standaard. 
//-- Door. . . :  Jan van Gelder 
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-- Log . . . :  20181015 - JvG - Initiele versie 
//-------------------------------------------------------------------------------------
//-- Postprocessors -------------------------------------------------------------------
//-- haalt gh-pages weg aan het eind van een URL
//-- Stopt zodra de eerste is gevonden (want komt maar 1x voor)
//-- JvG 2019-11-12
function custGHPG(respecConfig)  
{
  var tags = document.getElementsByTagName("a");
  var srch = "gh-pages";
  var slen = srch.length;
  var i;

  for (i = 0; i < tags.length; i++) 
  {
    if(tags[i].href.indexOf(srch) > -1)
    {
      console.log(tags[i].href + " is gevonden");
      tags[i].href = tags[i].href.substring(0, tags[i].href.length - slen);
      console.log(tags[i].href + " is aangepast");
      break;
    }
  } 
}

//-------------------------------------------------------------------------------------
var respecConfig = 
{
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  specStatus: "GN-WV",                // Werk Versie
  //specStatus: "GN-CV",              // Consultatie Versie
  //specStatus: "GN-VV",              // Vaststellings Versie
  //specStatus: "GN-DEF",             // Definitieve Versie
  //-- specType is verplicht! (activeer 1 van de volgende) ----------------------------
  //specType: "NO",                   // Norm
  //specType: "ST",                     // Standaard
  specType: "IM",                   // Informatie Model
  //specType: "PR",                   // Praktijk Richtlijn
  //specType: "HR",                   // HandReiking
  //specType: "WA",                   // Werkafspraak
  //specType: "US",                   // Uitwisselings standaard
  //specType: "PS",                   // Presentatie sstandaard
  //-- format is verplicht! -----------------------------------------------------------
  format: "html",                 // "markdown" of "html"
  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  // publishDate: "2021-05-18",  	      // Format is "YYY-MM-DD"
  //-- de namen van de Editor(s) ------------------------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  editors: 
  [
    {
      name:       "Gerard Trouborst",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    },
  ],
  //-- de namen van de Author(s) ------------------------------------------------------
  //-- vul in: per Author: name:, company:, companyURL: -------------------------------
  authors: 
  [
    {
      name:       "Gabriella Wiersma",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    }, 
    {
      name:       "Linda van den Brink",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    }, 
    {
      name:       "Pano Maria",
      company:    "Skemu",
      companyURL: "https://skemu.com/"
    },
    {
      name:       "Gerard Trouborst",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    },
  ],
  //-- shortName is verplicht! (komt in de URL: kies logische naam) --------------------
  shortName: "imsor", 	            // Wordt gebruikt in de document URL
  //-- pubDomain is verplicht! (komt in de URL: Activeer 1 van de volgende) ------------
  //pubDomain: "cvgg",                // Informatiemodel Geluid
  //pubDomain: "mim",               // Metamodel Informatie Modellering
  //pubDomain: "bor",               // Beheer Openbare Ruimte
  //pubDomain: "bro",               // Basisregistratie Ondergrond
  //pubDomain: "imgeo",             // IMGeo / BGT
  //pubDomain: "kl",                // Kabels en Leidingen
  //pubDomain: "liv",               // Landelijke Informatievoorziening Vastgoedgebruik
  //pubDomain: "md",                // Metadata
  //pubDomain: "nen3610",           // Basismodel NEN3610
  //pubDomain: "oov",               // Openbare Orde en Veiligheid
  //pubDomain: "ro",                // Ruimtelijke Ordening
  //pubDomain: "serv",              // Services
  //pubDomain: "visu",              // Visualisatie
  //pubDomain: "wp",                // White Paper
  //pubDomain: "disgeo",            // Doorontwikkeling basisregistraties in samenhang
  //-- Repositorynaam op GitHub -------------------------------------------------------
  github: "https://github.com/Geonovum/disgeo-im",
  //-- Repositorynaam/issues op GitHub ------------------------------------------------
  issueBase: "https://github.com/Geonovum/disgeo-im/issues/",
  //-- edDraftURI: de URI van de werkversie van het document
  edDraftURI: "https://geonovum.github.io/disgeo-im",
  //-- license: voor de geldende gebruiksvoorwaarden
  licence: "cc-by-nd",              //-- bronvermelding, geen afgeleide werken (default)
  // licence: "cc0",                //-- Public Domain Dedication
  // licence: "cc-by",              //-- Attribution, met bronvermelding
  
  //-- localBiblio: lokale bibliografie, voor verwijzigingen
  //-- NB: kijk eerst naar de beschikbare www.specref.org voor verwijziging 
  localBiblio: 
  {
    "Dienst-Hydrografie":
      {
        title:      "Maritieme Zones en Zeegrenzen",
        href:       "https://www.defensie.nl/onderwerpen/hydrografie/maritieme-zones-en-zeegrenzen",
        status:     "Versie ter vaststelling",
        date:       "2022-04-04",
        publisher:  "Ministerie van Defensie",
      },
    "EMSO":
      {
        title:      "DiS Geo : Eisen aan model samenhangende objectenregistratie",
        href:       "https://docs.geostandaarden.nl/disgeo/emso/",
        status:     "Versie ter vaststelling",
        date:       "2021-06-16",
        publisher:  "Geonovum",
      },
    "MIM":
      {
        title:      "Meta-model Informatiemodellering, versie 1.1.1 ",
        href:       "https://docs.geostandaarden.nl/mim/mim/",
        status:     "Vastgesteld",
        date:       "2022-02-17",
        publisher:  "Geonovum",
      },
    "Raamwerk-Geo":
      {
        title:      "Raamwerk Geostandaarden (v3.0)",
        href:       "https://www.geonovum.nl/uploads/documents/Raamwerk%20Geo-Standaarden%20v3.0.pdf",
        status:     "Vastgesteld",
        date:       "2015-03-31",
        publisher:  "Geonovum",
      },
    "Veiligheidsregio":
      {
        title:      "Openbaar Lichaam: waterschap",
        href:       "https://www.rijksoverheid.nl/onderwerpen/veiligheidsregios-en-crisisbeheersing/veiligheidsregios",
        publisher:  "Rijksoverheid",
        company:    "Rijksoverheid",
        date:       "2022-05-18", 
      },
    "Waterschap-1":
      {
        title:      "Wat doen waterschappen?",
        href:       "https://www.waterschappen.nl/wat-doen-de-waterschappen/",
        publisher:  "De Unie van Waterschappen",
        company:    "De Unie van Waterschappen",
        date:       "2022-05-18", 
      },
    "Waterschap-2":
      {
        title:      "Openbaar Lichaam: waterschap",
        href:       "https://www.rijksoverheid.nl/onderwerpen/waterschappen",
        publisher:  "Rijksoverheid",
        company:    "Rijksoverheid",
        date:       "2022-05-18", 
      },
    "Wikipedia":
      {
        title:      "Definitie: openbaar lichaam",
        href:       "https://nl.wikipedia.org/wiki/Openbaar_lichaam",
        publisher:  "Wikipedia",
        company:    "Wikipedia",
        date:       "2022-05-18", 
      },
      "NEN3610-2022": 
      {
        title:      "NEN-3610 Basismodel geo-informatie",
        href:       "https://www.nen.nl/nen-3610-2022-nl-296137",
        status:     "Definitief",
        date:       "Juni 2022",
        publisher:  "NEN",
      },
      "disgeo-mod": 
      {
        title:      "Modelleerprincipes samenhangende objectenregistratie",
        href:       "https://geonovum.github.io/disgeo-imsor/modelleerprincipes/",
        status:     "Werkversie",
        date:       "22 Augustus 2022",
        publisher:  "Geonovum",
      },
      "NLISO19115":
        {
          title:      "Nederlands metadata profiel op ISO 19115 voor geografie versie 2.1.0",
          href:       "https://docs.geostandaarden.nl/md/mdprofiel-iso19115/",
          status:     "Vastgestelde versie",
          publisher:  "Geonovum",
          date:       "30 juni 2020",
      },
      "CityGML3": 
        {
          title:    "OGC City Geography Markup Language (CityGML) Part 1: Conceptual Model Standard v3.0",
          href:     "https://docs.ogc.org/is/20-010/20-010.html",
          status:   "Published",
          publisher:"Open Geospatial Consortium",
          editors:  ["Thomas H. Kolbe", "Tatjana Kutzner", "Carl Stephen Smyth", "Claus Nagel", "Carsten Roensdorf", "Charles Heazel"],
          date:     "2021-09-13",
      },
      "NORA-RK":
        {
          title: "NORA Raamwerk Gegevenskwaliteit",
          href: "https://www.noraonline.nl/wiki/Raamwerk_gegevenskwaliteit",
        }
     
  // {
  //   "CITAAT":
  //     {
  //       title:      "Titel van het Citaat",
  //       href:       "http://url van de publicatie",
  //       status:     "versie van de publicatie",
  //       publisher:  "naam van de publiceerder",
  //       company:    "eventueel naam van bedrijf",
  //   },
  //   MIM: {
  //     id: "mim10",
  //     title: "MIM - Metamodel Informatie Modellering",
  //     href: "https://docs.geostandaarden.nl/mim/mim10/",
  //     status: "Definitief",
  //     publisher: "Geonovum",
  //     date: "2017-06-14"
  //   },
  //   "ISO19108-2005": {
  //     "href": "https://www.iso.org/standard/39891.html",
  //     "title": "Geographic information -- Rules for application schema",
  //     "date": "2005-06",
  //     "publisher": "International Organization for Standardization"
  //   },
  //   "ISO19118-2011": {
  //     "href": "https://www.iso.org/standard/44212.html",
  //     "title": "Geographic information -- Encoding",
  //     "date": "2011-10",
  //     "publisher": "International Organization for Standardization"
  //   },
  //   "NEN3610": {
  //     id: "NEN 3610:2011 nl",
  //     title: "NEN 3610:2011 nl - Basismodel geo-informatie - Termen, definities, relaties en algemene regels voor de uitwisseling van informatie over aan de aarde gerelateerde ruimtelijke objecten",
  //     href: "https://www.nen.nl/NEN-Shop/Norm/NEN-36102011-nl.htm",
  //     status: "Definitief",
  //     publisher: "NEN",
  //     date: "2011-03-01"
  //   },
  },
  postProcess:[custGHPG],   //-- Optioneel voor een multi document repository

  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  // previousPublishDate: "2020-10-29",    	    // Format is "YYYY-MM-DD"
  //previousMaturity: "GN-DEF",                 // kies 1 van deze 3 regels
  //previousMaturity: "GN-CV",                   // kies 1 van deze 3 regels  	  
  // previousMaturity: "GN-DEF",  	                // kies 1 van deze 3 regels

  //-- Optionele parameters:
  //emailComments: "mim@geonovum.nl",         // reactie mailadres, alleen bij CV!
  //subtitle: "iets",                         // Subtitel van het document
  //maxTocLevel: 3,                           // Aantal niveau's ToC, default is 0
};