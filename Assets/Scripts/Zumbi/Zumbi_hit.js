﻿#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter (collision : Collision) {
	
	if (collision.gameObject.tag == "Bala"){
		Destroy(gameObject);
		}
}