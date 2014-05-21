#pragma strict
//stickmanSpeed is a number that sets the speed of the stickman
var stickmanSpeed:int;

var stickmanLives:int=3;

var stickmanPicture:Texture;

//can tell if the guy is on the ground or not
var onGround:boolean=true;
//http://L047-T:89
function OnTriggerExit(theotherbox:Collider)
{
	if (theotherbox.tag == "ground")
	{
		onGround = false;
	}
}

function OnTriggerStay(theotherbox:Collider)
{
	if (theotherbox.tag == "ground")
		{
			onGround=true;
		}
		
}

//function that happens when the player is hit by something
function OnTriggerEnter(theotherbox:Collider){
	
	if (theotherbox.tag == "ground")
	{
		//what happens when the object hits the ground
		onGround = true;
	}

	//only trigger when hit by obstacle
	if (theotherbox.tag == "obstacle") {
		//this is the code that happens when i get hit
		stickmanLives--;
		//destroy the obstacle
		Destroy(theotherbox.gameObject);
	}
}





//GUI function
function OnGUI() {
	//create a label in the top left of the screen
	//0,0 xy coordinate of the top left
	//150,20 width and height of the bounding box
	//for the text
	GUI.Label(Rect(0,0,150,20),"My name is GERARD");
	
	//width of the screen
	GUI.Label(Rect(0,20,150,20),"Width: "+Screen.width);
	
	//height of the screen
	GUI.Label(Rect(0,40,150,20),"Height: "+Screen.height);
	
	//using the resolution, going to the other side of the screen
	GUI.Label(Rect(Screen.width-150,0,150,20),"Other side of screen");
	
	//this is a for loop
	for(var counter=0;counter<stickmanLives;counter++)
	{
		//draw the picture
		var spacing:int;
	
		spacing = (25 * counter) + 2;  
	
		GUI.DrawTexture(Rect(spacing,60,25,25),stickmanPicture,ScaleMode.ScaleToFit,true);
	
	}
	
	
}


function Start () {

}

function Update () {
	//this will write stickman on ground true/false in 
	//the console:
	Debug.Log("Stickman on Ground: "+onGround);
	
	//if I run out of lives
	if (stickmanLives <= 0)
	{
		//Game Over - reset the game
		Application.LoadLevel(0);
	}
	
	//fake gravity
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
		//code that happens when I press space
		if (onGround == true)
		{
			//jump
			transform.Translate(Vector3.up * 5 * Time.deltaTime);
		}
	}

}