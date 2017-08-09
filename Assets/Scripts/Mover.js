#pragma strict 
var speed : float;

function Start () : void {
    GetComponent.<Rigidbody>().velocity = transform.forward * speed;
}