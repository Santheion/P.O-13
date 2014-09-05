function OnGUI () {


GUI.contentColor = Color.yellow;

GUI.Box (Rect (Screen.width /2 -780,Screen.height /2 -350,150,170), "Comandos basicos\n\n Andar - W,A,S,D\n\n Correr - Shift\n\n Agachar - Ctrl\n\n Pressione Backspace \npara ocultar");

	if (Input.GetKeyDown(KeyCode.Backspace)){
		Destroy (this.gameObject);	
	}
}
