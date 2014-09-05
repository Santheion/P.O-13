#pragma strict
//Script da Bala

var bulletSpeed : float;

function Start () {

}

function Update () {
	
	bulletSpeed = 300*Time.deltaTime;
	transform.Translate(0,0,bulletSpeed);

}

function OnCollisionEnter (collision : Collision){

	if(collision.gameObject.tag == "Destroy"){
		Destroy(gameObject);
	}
}