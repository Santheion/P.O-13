#pragma strict
//Script da Arma

var bullet : GameObject;
var canoArma : Transform;
var fogoArma : ParticleSystem;
var reloadSound : AudioClip;
var shootSound : AudioClip;
var emptySound : AudioClip;

var hudMunicao : GUIText;
var hudPente : GUIText;


var municao : int;
static var pente : int;

var fireRate : boolean;
var timeToShoot : float;

function Start () {

municao = 12;
pente = 1;
fireRate = true;
timeToShoot =0;

}

function Update () {

hudMunicao.text = "Munição: "+municao+"/12";
hudPente.text = "Pentes: "+pente;


	if(Input.GetButtonDown("Fire1")){
		if(municao > 0){
				if(timeToShoot > 0.25){
					municao--;
					fogoArma.Emit(1);
					audio.clip = shootSound;
					audio.Play();
					animation.Play("atirando");
					Instantiate(bullet,canoArma.position,canoArma.rotation);
					timeToShoot = 0;
			}
		}
			if (municao == 0 && !audio.isPlaying) {
				audio.clip = emptySound;
				audio.Play();
			}
	}
					timeToShoot += Time.deltaTime;
					
	if(Input.GetKeyDown(KeyCode.R)){
		if(municao == 0 && pente > 0){
			audio.clip = reloadSound;
			audio.Play();
			animation.Play("recarregando");
			municao = municao + 12;
			pente--;
		}
	}
}