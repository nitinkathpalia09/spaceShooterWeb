#pragma strict

var lifetime : float;

function Start ()
{
    Destroy (gameObject, lifetime);
}
