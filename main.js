let random;

function randomEvent(){
    random = Math.random() * 100;
    findEvent()
}
function dice(){
    document.getElementById("number").innerHTML = `${Math.round(Math.random() * 6)}`;
}
function findEvent(){
    document.getElementById("number").style.display = 'none';
    document.getElementById("dice").style.display = 'none';
    switch (Math.round(random))
    {
        case 1:
            document.getElementById("text").innerHTML = "Thief";
            document.getElementById("explain").innerHTML = "Der am letzten Platz darf eine Karte stehlen";
            break;

        case 2:
            document.getElementById("text").innerHTML = "Thief";
            document.getElementById("explain").innerHTML = "Der am letzten Platz darf eine Karte stehlen";
            break;

        case 3:
            document.getElementById("text").innerHTML = "Thief";
            document.getElementById("explain").innerHTML = "Der am letzten Platz darf eine Karte stehlen";
            break;

        case 4:
            document.getElementById("text").innerHTML = "Thief";
            document.getElementById("explain").innerHTML = "Der am letzten Platz darf eine Karte stehlen";
            break;

        case 5:
            document.getElementById("text").innerHTML = "Swap";
            document.getElementById("explain").innerHTML = "Jeder tauscht seine gesamten Karten mit dem rechten Nachbarn";
            break;

        case 6:
            document.getElementById("text").innerHTML = "Swap";
            document.getElementById("explain").innerHTML = "Jeder tauscht seine gesamten Karten mit dem rechten Nachbarn";
            break;

        case 7:
            document.getElementById("text").innerHTML = "Swap";
            document.getElementById("explain").innerHTML = "Jeder tauscht seine gesamten Karten mit dem rechten Nachbarn";
            break;

        case 8:
            document.getElementById("text").innerHTML = "Switch";
            document.getElementById("explain").innerHTML = "Der am ersten Platz muss seine gesamten Karten mit einem beliebigen Spieler tauschen";
            break;

        case 9:
            document.getElementById("text").innerHTML = "Switch";
            document.getElementById("explain").innerHTML = "Der am ersten Platz muss seine gesamten Karten mit einem beliebigen Spieler tauschen";
            break;

        case 10:
            document.getElementById("text").innerHTML = "Lose";
            document.getElementById("explain").innerHTML = "Jeder muss zwei Karten in die Mitte abgeben";
            break;

        case 11:
            document.getElementById("text").innerHTML = "Lose";
            document.getElementById("explain").innerHTML = "Jeder muss zwei Karten in die Mitte abgeben";
            break;

        case 12:
            document.getElementById("text").innerHTML = "Lose";
            document.getElementById("explain").innerHTML = "Jeder muss zwei Karten in die Mitte abgeben";
            break;

        case 13:
            document.getElementById("text").innerHTML = "Gain 2";
            document.getElementById("explain").innerHTML = "Der am meisten Schl??cke bietet darf 2 Karten von der Mitte heben, sofern welche vorhanden sind";
            break;

        case 14:
            document.getElementById("text").innerHTML = "Gain 1";
            document.getElementById("explain").innerHTML = "Der am meisten Schl??cke bietet darf 1 Karten von der Mitte heben, sofern welche vorhanden sind";
            break;

        case 15:
            document.getElementById("text").innerHTML = "Gain 3";
            document.getElementById("explain").innerHTML = "Der am meisten Schl??cke bietet darf 3 Karten von der Mitte heben, sofern welche vorhanden sind";
            break;

        case 16:
            document.getElementById("text").innerHTML = "Gain 4";
            document.getElementById("explain").innerHTML = "Der am meisten Schl??cke bietet darf 4 Karten von der Mitte heben, sofern welche vorhanden sind";
            break;

        case 17:
            document.getElementById("text").innerHTML = "Aufr??umdienst";
            document.getElementById("explain").innerHTML = "Der Spieler der verdeckt am wenigsten Schl??cke bietet muss die leeren Flaschen wegr??umen. Alle anderen trinken ihre jeweilgen Schl??cke";
            break;

        case 18:
            document.getElementById("text").innerHTML = "Nope";
            document.getElementById("explain").innerHTML = "Die letzt ausgespielte Karte kommt auf den Ziehstapel in der Mitte";
            break;

        case 19:
            document.getElementById("text").innerHTML = "Double Trouble";
            document.getElementById("explain").innerHTML = "N??chste Runde werden zwei Ereignisse gezogen";
            break;

        case 20:
            document.getElementById("text").innerHTML = "Nope";
            document.getElementById("explain").innerHTML = "Die letzt ausgespielte Karte kommt auf den Ziehstapel in der Mitte";
            break;

        case 21:
            document.getElementById("text").innerHTML = "Joker";
            document.getElementById("explain").innerHTML = "Der Spieler am letzten Platz darf eine Karte ausspielen ohne zu trinken";
            break;

        case 22:
            document.getElementById("text").innerHTML = "Joker";
            document.getElementById("explain").innerHTML = "Der Spieler am letzten Platz darf eine Karte ausspielen ohne zu trinken";
            break;

        case 23:
            document.getElementById("text").innerHTML = "Joker";
            document.getElementById("explain").innerHTML = "Der Spieler am letzten Platz darf eine Karte ausspielen ohne zu trinken";
            break;

        case 24:
            document.getElementById("text").innerHTML = "Joker";
            document.getElementById("explain").innerHTML = "Der Spieler am letzten Platz darf eine Karte ausspielen ohne zu trinken";
            break;

        case 25:
            document.getElementById("text").innerHTML = "Reverse";
            document.getElementById("explain").innerHTML = "Spielrichtung ??ndert sich";
            break;

        case 26:
            document.getElementById("text").innerHTML = "Reverse";
            document.getElementById("explain").innerHTML = "Spielrichtung ??ndert sich";
            break;

        case 27:
            document.getElementById("text").innerHTML = "Reverse";
            document.getElementById("explain").innerHTML = "Spielrichtung ??ndert sich";
            break;

        case 28:
            document.getElementById("text").innerHTML = "Surprise";
            document.getElementById("explain").innerHTML = "Alle Spieler die weder den letzten oder ersten Platz haben, geben dem Spieler am letzten Platz eine Karte";
            break;

        case 29:
            document.getElementById("text").innerHTML = "Double";
            document.getElementById("explain").innerHTML = "N??chste Runde werden alle Schl??cke verdoppelt";
            break;

        case 30:
            document.getElementById("text").innerHTML = "Double";
            document.getElementById("explain").innerHTML = "N??chste Runde werden alle Schl??cke verdoppelt";
            break;

        case 31:
            document.getElementById("text").innerHTML = "Double";
            document.getElementById("explain").innerHTML = "N??chste Runde werden alle Schl??cke verdoppelt";
            break;

        case 32:
            document.getElementById("text").innerHTML = "Turn around";
            document.getElementById("explain").innerHTML = "Der Spieler am letzten Platz darf die Karten seiner Mitspieler gerecht neu verteilen. Alle anderen m??ssen sich dabei umdrehen.";
            break;

        case 33:
            document.getElementById("text").innerHTML = "Turn around";
            document.getElementById("explain").innerHTML = "Der Spieler am letzten Platz darf die Karten seiner Mitspieler gerecht neu verteilen. Alle anderen m??ssen sich dabei umdrehen.";
            break;

        case 34:
            document.getElementById("text").innerHTML = "Hell";
            document.getElementById("explain").innerHTML = "N??chste Runde werden alle Schl??cke mal 3 gerechnet";
            break;

        case 35:
            document.getElementById("text").innerHTML = "Hell";
            document.getElementById("explain").innerHTML = "N??chste Runde werden alle Schl??cke mal 3 gerechnet";
            break;

        case 36:
            document.getElementById("text").innerHTML = "Heaven";
            document.getElementById("explain").innerHTML = "Jeder darf eine Karte ausspielen, trinken muss man nicht, bieten ist aber erlaubt";
            break;

        case 37:
            document.getElementById("text").innerHTML = "Heaven";
            document.getElementById("explain").innerHTML = "Jeder darf eine Karte ausspielen, trinken muss man nicht, bieten ist aber erlaubt";
            break;

        case 38:
            document.getElementById("text").innerHTML = "Deal";
            document.getElementById("explain").innerHTML = "Jeder muss eine Anzahl an Schl??cken bieten, der Spieler der am meisten bietet muss keine 3 Karten ablegen, aber sein Gebot trinken. Alle anderen schon";
            break;

        case 39:
            document.getElementById("text").innerHTML = "Deal";
            document.getElementById("explain").innerHTML = "Jeder muss eine Anzahl an Schl??cken bieten, der Spieler der am meisten bietet muss keine 3 Karten ablegen, aber sein Gebot trinken. Alle anderen schon";
            break;

        case 40:
            document.getElementById("text").innerHTML = "Surprise";
            document.getElementById("explain").innerHTML = "Alle Spieler die weder den letzten oder ersten Platz haben, geben dem Spieler am letzten Platz eine Karte";
            break;

        case 41:
            document.getElementById("text").innerHTML = "Drink 2";
            document.getElementById("explain").innerHTML = "Jeder Spieler trinkt 2 Schl??cke";
            break;

        case 42:
            document.getElementById("text").innerHTML = "Drink 4";
            document.getElementById("explain").innerHTML = "Jeder Spieler trinkt 4 Schl??cke";
            break;

        case 43:
            document.getElementById("text").innerHTML = "Drink 6";
            document.getElementById("explain").innerHTML = "Jeder Spieler trinkt 6 Schl??cke";
            break;

        case 44:
            document.getElementById("text").innerHTML = "Drink 8";
            document.getElementById("explain").innerHTML = "Jeder Spieler trinkt 8 Schl??cke";
            break;

        case 45:
            document.getElementById("text").innerHTML = "Double Trouble";
            document.getElementById("explain").innerHTML = "N??chste Runde werden zwei Ereignisse gezogen";
            break;

        case 46:
            document.getElementById("text").innerHTML = "+ Ticket";
            document.getElementById("explain").innerHTML = "Der Spieler am letzten Platz bekommt eine Trinkfreikarte, dieser Spieler darf das Ticket einl??sen wenn er Schl??cke bekommt, aber nicht wenn dieser Spieler Schl??cke selbst bietet";
            break;

        case 47:
            document.getElementById("text").innerHTML = "- Ticket";
            document.getElementById("explain").innerHTML = "Der Spieler am ersten Platz bekommt eine Trinkkarte, diese Karte darf man einl??sen wenn man m??chte, dass ein Spieler mit dir mittrinkt";
            break;

        case 48:
            document.getElementById("text").innerHTML = "- Ticket";
            document.getElementById("explain").innerHTML = "Der Spieler am ersten Platz bekommt eine Trinkkarte, diese Karte darf man einl??sen wenn man m??chte, dass ein Spieler mit dir mittrinkt";
            break;

        case 49:
            document.getElementById("text").innerHTML = "+ Ticket";
            document.getElementById("explain").innerHTML = "Der Spieler am letzten Platz bekommt eine Trinkfreikarte, dieser Spieler darf das Ticket einl??sen wenn er Schl??cke bekommt, aber nicht wenn dieser Spieler Schl??cke selbst bietet";
            break;

        case 50:
            document.getElementById("text").innerHTML = "Rule";
            document.getElementById("explain").innerHTML = "Alle Spieler ??berlegen sich eine neue Regel gemeinsam";
            break;

        case 51:
            document.getElementById("text").innerHTML = "Ultra Thief";
            document.getElementById("explain").innerHTML = "Jeder Spieler darf eine Karte von jeweils einen anderen stehlen";
            break;

        case 52:
            document.getElementById("text").innerHTML = "Ultra Thief";
            document.getElementById("explain").innerHTML = "Jeder Spieler darf eine Karte von jeweils einen anderen stehlen";
            break;

        case 53:
            document.getElementById("text").innerHTML = "Tausch";
            document.getElementById("explain").innerHTML = "F??r jede Karte die abgelegt wird auf den Ziehstapel, darf man 3 Schl??cke verteilen";
            break;

        case 54:
            document.getElementById("text").innerHTML = "Tausch";
            document.getElementById("explain").innerHTML = "F??r jede Karte die abgelegt wird auf den Ziehstapel, darf man 3 Schl??cke verteilen";
            break;

        case 55:
            document.getElementById("text").innerHTML = "Tausch";
            document.getElementById("explain").innerHTML = "F??r jede Karte die abgelegt wird auf den Ziehstapel, darf man 3 Schl??cke verteilen";
            break;

        case 56:
            document.getElementById("text").innerHTML = "Nothing";
            document.getElementById("explain").innerHTML = "Nichts passiert";
            break;

        case 57:
            document.getElementById("text").innerHTML = "Choose";
            document.getElementById("explain").innerHTML = "Der Spieler am ersten Platz muss jedem eine Karte geben oder dieser Spieler trinkt jeweils 4";
            break;

        case 58:
            document.getElementById("text").innerHTML = "Choose";
            document.getElementById("explain").innerHTML = "Der Spieler am ersten Platz muss jedem eine Karte geben oder dieser Spieler trinkt jeweils 4";
            break;

        case 59:
            document.getElementById("text").innerHTML = "Training";
            document.getElementById("explain").innerHTML = "Jeder Spieler muss eine Liegest??tzanzahl bieten, der Spieler der am meisten bietet muss diese Anzahl schaffen, wenn ja darf dieser die Anzahl als Schl??cke verteilen, wenn nicht muss dieser die Schl??cke selbst trinken";
            break;

        case 60:
            document.getElementById("text").innerHTML = "Training";
            document.getElementById("explain").innerHTML = "Jeder Spieler muss eine Liegest??tzanzahl bieten, der Spieler der am meisten bietet muss diese Anzahl schaffen, wenn ja darf dieser die Anzahl als Schl??cke verteilen, wenn nicht muss dieser die Schl??cke selbst trinken";
            break;

        case 61:
            document.getElementById("text").innerHTML = "Truth or Dare";
            document.getElementById("explain").innerHTML = "Spielt eine Runde Truth or Dare";
            break;

        case 62:
            document.getElementById("text").innerHTML = "Truth or Dare";
            document.getElementById("explain").innerHTML = "Spielt eine Runde Truth or Dare";
            break;

        case 63:
            document.getElementById("text").innerHTML = "Casino";
            document.getElementById("explain").innerHTML = "Jeder der m??chte darf eine Karte vom Ziehstapel aufdecken, wenn diese Karte ungerade oder keine Zahl ist muss man selbst die Anzahl trinken, bei geraden Zahlen darf man die Schl??cke verteilen";
            break;

        case 64:
            document.getElementById("text").innerHTML = "Casino";
            document.getElementById("explain").innerHTML = "Jeder der m??chte darf eine Karte vom Ziehstapel aufdecken, wenn diese Karte ungerade oder keine Zahl ist muss man selbst die Anzahl trinken, bei geraden Zahlen darf man die Schl??cke verteilen";
            break;

        case 65:
            document.getElementById("text").innerHTML = "Casino";
            document.getElementById("explain").innerHTML = "Jeder der m??chte darf eine Karte vom Ziehstapel aufdecken, wenn diese Karte ungerade oder keine Zahl ist muss man selbst die Anzahl trinken, bei geraden Zahlen darf man die Schl??cke verteilen";
            break;

        case 66:
            document.getElementById("text").innerHTML = "Skip black";
            document.getElementById("explain").innerHTML = "Alle Spieler die auf eine schwarze Farbe gesetzt haben setzten diese Runde aus";
            break;

        case 67:
            document.getElementById("text").innerHTML = "Skip red";
            document.getElementById("explain").innerHTML = "Alle Spieler die auf eine rote Farbe gesetzt haben setzten diese Runde aus";
            break;

        case 68:
            document.getElementById("text").innerHTML = "Skip black";
            document.getElementById("explain").innerHTML = "Alle Spieler die auf eine schwarze Farbe gesetzt haben setzten diese Runde aus";
            break;

        case 69:
            document.getElementById("text").innerHTML = "Skip red";
            document.getElementById("explain").innerHTML = "Alle Spieler die auf eine rote Farbe gesetzt haben setzten diese Runde aus";
            break;

        case 70:
            document.getElementById("text").innerHTML = "Draw";
            document.getElementById("explain").innerHTML = "Jeder darf eine Karte vom Ziehstapel ziehen, sofern welche vorhanden sind, der Spieler am letzten Platz beginnt";
            break;

        case 71:
            document.getElementById("text").innerHTML = "Draw";
            document.getElementById("explain").innerHTML = "Jeder darf eine Karte vom Ziehstapel ziehen, sofern welche vorhanden sind, der Spieler am letzten Platz beginnt";
            break;

        case 72:
            document.getElementById("text").innerHTML = "Draw";
            document.getElementById("explain").innerHTML = "Jeder darf eine Karte vom Ziehstapel ziehen, sofern welche vorhanden sind, der Spieler am letzten Platz beginnt";
            break;

        case 73:
            document.getElementById("text").innerHTML = "Eye";
            document.getElementById("explain").innerHTML = "Jeder ohne Brille trinkt 5";
            break;

        case 74:
            document.getElementById("text").innerHTML = "Eye";
            document.getElementById("explain").innerHTML = "Jeder ohne Brille trinkt 5";
            break;

        case 75:
            document.getElementById("text").innerHTML = "Glasses";
            document.getElementById("explain").innerHTML = "Jeder mit Brille trinkt 5";
            break;

        case 76:
            document.getElementById("text").innerHTML = "Glasses";
            document.getElementById("explain").innerHTML = "Jeder mit Brille trinkt 5";
            break;

        case 77:
            document.getElementById("text").innerHTML = "High Pot";
            document.getElementById("explain").innerHTML = "N??chste Runde muss jedes Angebot mind. 5 Schl??cke haben";
            break;

        case 78:
            document.getElementById("text").innerHTML = "High Pot";
            document.getElementById("explain").innerHTML = "N??chste Runde muss jedes Angebot mind. 5 Schl??cke haben";
            break;

        case 79:
            document.getElementById("text").innerHTML = "Cheap";
            document.getElementById("explain").innerHTML = "N??chste Runde sind Gegenangebote um die H??lfte billiger";
            break;

        case 80:
            document.getElementById("text").innerHTML = "Cheap";
            document.getElementById("explain").innerHTML = "N??chste Runde sind Gegenangebote um die H??lfte billiger";
            break;

        case 81:
            document.getElementById("text").innerHTML = "Expensive";
            document.getElementById("explain").innerHTML = "N??chste Runde sind Gegenangebote um das doppelte teurer";
            break;

        case 82:
            document.getElementById("text").innerHTML = "Expensive";
            document.getElementById("explain").innerHTML = "N??chste Runde sind Gegenangebote um das doppelte teurer";
            break;

        case 83:
            document.getElementById("text").innerHTML = "Gift";
            document.getElementById("explain").innerHTML = "Der Ziehstapel wird auf allen Spielern gerecht verteilt";
            break;

        case 84:
            document.getElementById("text").innerHTML = "Dice";
            document.getElementById("explain").innerHTML = "Jeder w??rfelt, die Augenzahl wird getrunken";
            document.getElementById("number").style.display = "block";
            document.getElementById("dice").style.display = "block";
            break;

        case 85:
            document.getElementById("text").innerHTML = "Dice";
            document.getElementById("explain").innerHTML = "Jeder w??rfelt, die Augenzahl wird getrunken";
            document.getElementById("number").style.display = "block";
            document.getElementById("dice").style.display = "block";
            break;

        case 86:
            document.getElementById("text").innerHTML = "Russian Roulette";
            document.getElementById("explain").innerHTML = "Jeder gibt alle Karten bis auf 3 auf den Ziehstapel";
            break;

        case 87:
            document.getElementById("text").innerHTML = "Ex";
            document.getElementById("explain").innerHTML = "Jeder trinkt Ex, Danke";
            break;

        case 88:
            document.getElementById("text").innerHTML = "Aufr??umdienst";
            document.getElementById("explain").innerHTML = "Der Spieler der verdeckt am wenigsten Schl??cke bietet muss die leeren Flaschen wegr??umen. Alle anderen trinken ihre jeweilgen Schl??cke";
            break;

        case 89:
            document.getElementById("text").innerHTML = "Exchange";
            document.getElementById("explain").innerHTML = "F??r jedes Kartenpaar was auf den Ziehstapel gelegt wird darf man sich eine Karte raussuchen, der Spieler am letzten Platz darf anfangen";
            break;

        case 90:
            document.getElementById("text").innerHTML = "Exchange";
            document.getElementById("explain").innerHTML = "F??r jedes Kartenpaar was auf den Ziehstapel gelegt wird darf man sich eine Karte raussuchen, der Spieler am letzten Platz darf anfangen";
            break;

        case 91:
            document.getElementById("text").innerHTML = "Share";
            document.getElementById("explain").innerHTML = "N??chste Runde k??nnen Schl??cke geteilt werden auf freiwilliger Basis";
            break;

        case 92:
            document.getElementById("text").innerHTML = "Share";
            document.getElementById("explain").innerHTML = "N??chste Runde k??nnen Schl??cke geteilt werden auf freiwilliger Basis";
            break;

        case 93:
            document.getElementById("text").innerHTML = "Water";
            document.getElementById("explain").innerHTML = "Jeder trinkt Wasser";
            break;

        case 94:
            document.getElementById("text").innerHTML = "Dealership";
            document.getElementById("explain").innerHTML = "Die Person die zuletzt Dealership sagt, setzt diese Runde aus";
            break;

        case 95:
            document.getElementById("text").innerHTML = "Dealership";
            document.getElementById("explain").innerHTML = "Die Person die zuletzt Dealership sagt, setzt diese Runde aus";
            break;

        case 96:
            document.getElementById("text").innerHTML = "Bitch";
            document.getElementById("explain").innerHTML = "Die Person am ersten Platz muss immer mit dem Spieler am letzten Platz mittrinken, f??r 2 Runden";
            break;

        case 97:
            document.getElementById("text").innerHTML = "Bitch";
            document.getElementById("explain").innerHTML = "Die Person am ersten Platz muss immer mit dem Spieler am letzten Platz mittrinken, f??r 2 Runden";
            break;

        case 98:
            document.getElementById("text").innerHTML = "Bad luck";
            document.getElementById("explain").innerHTML = "Alle Spieler m??ssen 3 Trinken und eine Karte abgeben au??er der Spieler am ersten und letzten Platz";
            break;

        case 99:
            document.getElementById("text").innerHTML = "Bad luck";
            document.getElementById("explain").innerHTML = "Alle Spieler m??ssen 3 Trinken und eine Karte abgeben au??er der Spieler am ersten und letzten Platz";
            break;

        case 100:
            document.getElementById("text").innerHTML = "Good luck";
            document.getElementById("explain").innerHTML = "Alle Spieler k??nnen 3 Schl??cke verteilen au??er der Spieler am ersten und letzten Platz";
            break;

        default:
            document.getElementById("text").innerHTML = "Drink 1";
            document.getElementById("explain").innerHTML = "Jeder trinkt 1";
            break;
    }
}