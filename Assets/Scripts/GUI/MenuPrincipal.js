//Script P.O 13 Title Voice Button

function StartLevel (){

	audio.PlayOneShot(audio.clip);
	
	yield WaitForSeconds(4);
	
	Application.LoadLevel(2);

}
//Final Script P.O 13 Title Voice Button

function OnGUI () {

GUI.Box (Rect (Screen.width /2 -200,Screen.height /2 -35,400,70), "");

if (GUI.Button (Rect (Screen.width /2 -140,Screen.height /2 -25,100,50), "Novo Jogo")) {
	
	StartLevel();
	
}

if (GUI.Button (Rect (Screen.width /2 +40,Screen.height /2 -25,100,50), "Sair")) {
Application.Quit();
	}
}