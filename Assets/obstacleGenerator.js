#pragma strict
//slot for the prefab
var obstacle:Rigidbody;

//a variable to determine the time gap
var timeGap:float;


function Start () {

	yield WaitForSeconds(1.0);
	yield createObstacle();
	//InvokeRepeating("createObstacle",0.0f,0.25f);
}


function createObstacle()
{
	//keep running this while the game is running
	while (true)
	{
		//create a cube
		Instantiate(obstacle,transform.position,transform.rotation);
		//generate a random time gap
		timeGap = Random.Range(0.5f,2.0f);
		//waits for a random time between 0.5 and 2.0
		yield WaitForSeconds(timeGap);
		//output the generated time gap in the console
		Debug.Log(timeGap);
	}
	
}

function Update () {

}