#pragma strict

var distanciaBox: int;
var ammo : int;

var skinAmmobox : GUISkin;

function Start () {

ammo = 5;

}

function Update () {

ammo = Vector3.Distance(GameObject.Find("Jogador").transform.position, transform.position);

	if(Input.GetKeyDown(KeyCode.E) && ammo <= 2){
	Arma.pente = Arma.pente + 1;
	Destroy(gameObject);
	}

}

function OnGUI () {

GUI.skin = skinAmmobox;

	if(ammo <= 2) {
		GUI.Label(Rect(Screen.width/2 -100, Screen.height/2 +100, 500,500),"Aperte (E) para pegar munição");
	}
}
