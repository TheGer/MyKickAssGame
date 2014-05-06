#pragma strict
//stickmanSpeed is a number that sets the speed of the stickman
var stickmanSpeed:int;


function Start () {

}

function Update () {
	if (transform.position.y > -0.6543808)
	{
		transform.Translate(Vector3.down * 5 * Time.deltaTime);
	}

	//this is the code that happens when I press the left arrow key
	if (Input.GetKey(KeyCode.LeftArrow)) {
		transform.Translate(Vector3.left * stickmanSpeed * Time.deltaTime);
	}

	//this is the code that happens when I press the right arrow key
	if (Input.GetKey(KeyCode.RightArrow)) {
		transform.Translate(Vector3.right * stickmanSpeed * Time.deltaTime);
	}
	
	if (Input.GetKeyDown(KeyCode.Space))
	{
		transform.Translate(Vector3.up * 100 * Time.deltaTime);
		
	}

}