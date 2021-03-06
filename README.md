# Project Overview

## Project Name

MUSICIONARY

https://ryanslee91.github.io/Musicionary/

## Project Description

 The website that I will be creating for this project will allow users to search artist information by artist name and display relevant data.
 
 Example:
https://www.theaudiodb.com/
 
## API and Data Sample


[API](https://www.theaudiodb.com/api_guide.php)

https://www.theaudiodb.com/api/v1/json/1/search.php?s=coldplay

<pre>
{
artists: [
{
idArtist: "111239",
strArtist: "Coldplay",
strArtistStripped: null,
strArtistAlternate: "",
strLabel: "Parlophone",
idLabel: "45114",
intFormedYear: "1996",
intBornYear: "1996",
intDiedYear: null,
strDisbanded: null,
strStyle: "Rock/Pop",
strGenre: "Alternative Rock",
strMood: "Happy",
strWebsite: "www.coldplay.com",
strFacebook: "www.facebook.com/coldplay",
strTwitter: "www.twitter.com/coldplay",
strBiographyEN: "Coldplay are a British alternative rock band formed in 1996 by lead vocalist Chris Martin and lead guitarist Jonny Buckland at University College London. After they formed Pectoralz, Guy Berryman joined the group as a bassist and they changed their name to Starfish. Will Champion joined as a drummer, backing vocalist, and multi-instrumentalist, completing the line-up. Manager Phil Harvey is often considered an unofficial fifth member. The band renamed themselves "Coldplay" in 1998, before recording and releasing three EPs; Safety in 1998, Brothers & Sisters as a single in 1999 and The Blue Room in the same year. The latter was their first release on a major label, after signing to Parlophone. They achieved worldwide fame with the release of the single "Yellow" in 2000, followed by their debut album released in the same year, Parachutes, which was nominated for the Mercury Prize. The band's second album, A Rush of Blood to the Head (2002), was released to critical acclaim and won multiple awards, including NME's Album of the Year, and has been widely considered the best of the Nelson-produced Coldplay albums. Their next release, X&Y, the best-selling album worldwide in 2005, was met with mostly positive reviews upon its release, though some critics felt that it was inferior to its predecessor. The band's fourth studio album, Viva la Vida or Death and All His Friends (2008), was produced by Brian Eno and released again to largely favourable reviews, earning several Grammy nominations and wins at the 51st Grammy Awards. On 24 October 2011, they released their fifth studio album, Mylo Xyloto, which was met with mixed to positive reviews, and was the UK's best-selling rock album of 2011. The band has won a number of music awards throughout their career, including seven Brit Awards winning Best British Group three times, four MTV Video Music Awards, and seven Grammy Awards from twenty nominations. As one of the world's best-selling music artists, Coldplay have sold over 55 million records worldwide. In December 2009, Rolling Stone readers voted the group the fourth best artist of the 2000s. Coldplay have been an active supporter of various social and political causes, such as Oxfam's Make Trade Fair campaign and Amnesty International. The group have also performed at various charity projects such as Band Aid 20, Live 8, Sound Relief, Hope for Haiti Now: A Global Benefit for Earthquake Relief, The Secret Policeman's Ball, and the Teenage Cancer Trust.",
}}
</pre>

## Wireframes

For desktop/laptop (not mobile)
![Wireframe](./assets/wf.png)



### MVP/PostMVP

#### MVP 


- Allow user to search artist using form input
- Render dynamic contents on page (name, logo, picture, website, label, genre and description.)
- Remove previous search result

#### PostMVP  

- Allow user to randomly search for artists.
- Add an advertisement section, which changes pictures that are displayed at certain time interval.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 21| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|June 22| Project Approval / Core Application Structure (HTML, CSS, etc.) | Complete
|June 23| Pseudocode / actual code | Complete
|June 24| Initial Clickable Model  | complete
|June 25| MVP | complete
|June 28| Presentations | Incomplete

## Priority Matrix

![Wireframe](./assets/impt.png) 

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| CORE APP STRUCTURE (HTML,CSS,JAVASCRIPT) | H | 3hrs| 3hrs | 3hrs |
| Researching API | H | 3hrs| 2hrs | 2hrs |
| Insert search parameter into API | H | 3hrs| 3hrs | 3hrs |
| PSEUDOCODE | H | 3hrs| 2hrs | 2hrs |
| API REQUEST(JAVASCRIPT FUNCTION) | H | 3hrs| 2.5hrs | 2.5hrs |
| CREATE DYNAMIC HTML ELEMENTS | H | 3hrs| 3hrs | 3hrs |
| UTILIZE FLEXBOX/LAYOUT | H | 3hrs| 2hrs | 2hrs |
| STYLE HTML ELEMENTS | H | 3hrs| 3hrs | 3hrs |
| REMOVE PREVIOUS SEARCH RESULT | H | 3hrs| 2hrs | 2hrs |
| DEBUGGING | H | 3hrs| 2hrs | 2hrs |
| DEPLOYMENT | H | 1hrs| hrs | hrs |
| ADD UI ELEMENTS | H | 1hrs| 1hrs | 1hrs |
| BUILDING PROJECT WORKSHEET | H | 3hrs| 3hrs | 3hrs |
| APPEND DYNAMIC ELEMENTS | H | 3hrs| 3hrs | 3hrs |
| Total | H | 40hrs| hrs | hrs |

## Code Snippet
 

function bigImg(x) {
  x.style.height = "35px";
  x.style.width = "35px";
}

function normalImg(x) {
  x.style.height = "20px";
  x.style.width = "20px";
}

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
