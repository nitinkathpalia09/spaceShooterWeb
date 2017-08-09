#pragma strict

var tumble : float;

function Start () : void {
    GetComponent.<Rigidbody>().angularVelocity = Random.insideUnitSphere * tumble; 
}