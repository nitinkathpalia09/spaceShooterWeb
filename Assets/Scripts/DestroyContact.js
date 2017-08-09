#pragma strict

var explosion : GameObject;
var playerExplosion : GameObject;
var scoreValue : int;
private var gameController : GameControl;

function Start ()
{
    var gameControllerObject : GameObject = GameObject.FindWithTag ("GameControl");
    if (gameControllerObject != null)
    {
        gameController = gameControllerObject.GetComponent (GameControl);
    }
    if (gameController == null)
    {
        Debug.Log ("Cannot find 'GameControl' script");
    }
}

function OnTriggerEnter(other : Collider) 
{
    if (other.tag == "Boundary")
    {
        return;
    }
    Instantiate(explosion, transform.position, transform.rotation);
    if (other.tag == "Player")
    {
        Instantiate(playerExplosion, other.transform.position, other.transform.rotation);
        gameController.GameOver ();
    }
    gameController.AddScore (scoreValue);
    Destroy(other.gameObject);
    Destroy(gameObject);
}