var walkSpeed: float = 7; 
var crchSpeed: float = 3; 
var runSpeed: float = 20;
 
private var chMotor: CharacterMotor;
private var ch: CharacterController;
private var tr: Transform;
private var height: float; 
 
function Start(){
chMotor = GetComponent(CharacterMotor);
tr = transform;
ch = GetComponent(CharacterController);
height = ch.height;
}
 
function Update(){
 
var h = height;
var speed = walkSpeed;
if (ch.isGrounded && Input.GetKey("left shift") || Input.GetKey("right shift")){
speed = runSpeed;
}
if (Input.GetKey("left ctrl")){ 
h = 0.5 * height;
speed = crchSpeed; 
}
chMotor.movement.maxForwardSpeed = speed; 
var lastHeight = ch.height; 
ch.height = Mathf.Lerp(ch.height, h, 5*Time.deltaTime);
tr.position.y += (ch.height-lastHeight)/2; 
}