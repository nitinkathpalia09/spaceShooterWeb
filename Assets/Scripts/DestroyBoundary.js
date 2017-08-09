#pragma strict


var hazard : GameObject;
var spawnValues : Vector3;
var hazardCount : int;
var spawnWait : float;
var startWait : float;
var waveWait : float;

var scoreText : GUIText;
var restartText : GUIText;
var gameOverText : GUIText;

private  var gameOver : boolean;
private  var restart : boolean;
private  var score : int;

function Start () {
    gameOver = false;
    restart = false;
    restartText.text = "Press R for Restart";
    gameOverText.text = "Game Over";
    score = 0;
    UpdateScore ();
    StartCoroutine (SpawnWaves ());
}

function Update () {
    if (restart)
    {
        if (Input.GetKeyDown (KeyCode.R))
        {
            Application.LoadLevel (Application.loadedLevel);
        }
    }
}

function SpawnWaves () {
    yield WaitForSeconds (startWait);
    while (true)
    {
        for ( var i : int= 0; i < hazardCount; i++)
        {
             var spawnPosition : Vector3= new Vector3 (Random.Range (-spawnValues.x, spawnValues.x), spawnValues.y, spawnValues.z);
             var spawnRotation : Quaternion= Quaternion.identity;
            Instantiate (hazard, spawnPosition, spawnRotation);
            yield WaitForSeconds (spawnWait);
        }
        yield WaitForSeconds (waveWait);

        if (gameOver)
        {
            restartText.text = "Press 'R' for Restart";
            restart = true;
            break;
        }
    }
}

function AddScore (newScoreValue : int) {
    score += newScoreValue;
    UpdateScore ();
}

function UpdateScore () {
    scoreText.text = "Score: " + score;
}

function GameOver () {
    gameOverText.text = "Game Over!";
    gameOver = true;
}