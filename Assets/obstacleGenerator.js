#pragma strict
//slot for the prefab
var obstacle:Rigidbody;
var obstacle2:Rigidbody;

//a variable to determine the time gap
var timeGap:float;

var obstacleChoice:int=0;

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
		obstacleChoice = Random.Range(0,2);
		//random value between 0 and 1
		//output the value of obstacle choice
		Debug.Log(obstacleChoice);
		//if the value is 1 do the red cube
		if (obstacleChoice == 0)
		{
		//create a  red cube
		Instantiate(obstacle,transform.position,transform.rotation);
		}
		//if the value is 2 do the green cube
		if (obstacleChoice == 1)
		{
		Instantiate(obstacle2,transform.position,transform.rotation);
		}
		
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