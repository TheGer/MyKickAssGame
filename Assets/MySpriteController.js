#pragma strict

var movementspeed:int;

function Start () {

}

function Update () {
	
	GetComponent(Animator).SetBool("moving",false);
	
	if (Input.GetKey(KeyCode.LeftArrow))
	{
		//flip
		transform.localScale.x = -1;
		//left arrow
		transform.Translate(Vector3.left * movementspeed * Time.deltaTime);
		//set the animation on
		GetComponent(Animator).SetBool("moving",true);
		
	}
	
	
	if (Input.GetKey(KeyCode.RightArrow))
	{
		//flip
		transform.localScale.x = 1;
		//left arrow
		transform.Translate(Vector3.right * movementspeed * Time.deltaTime);
		//set the animation on
		GetComponent(Animator).SetBool("moving",true);
		
	}
	
	
}