#pragma strict
//stickmanSpeed is a number that sets the speed of the stickman
var stickmanSpeed:int;

var stickmanLives:int=3;

var stickmanPicture:Texture;

var stickmanBullet:Rigidbody;

var currentPlatform:Collider;

static var score:int=0;

//can tell if the guy is on the ground or not
private var onGround:boolean=true;
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
	
			currentPlatform = theotherbox;
		}
		
}

//function that happens when the player is hit by something
function OnTriggerEnter(theotherbox:Collider){
	
	if (theotherbox.tag == "ground")
	{
		//what happens when the object hits the ground
		onGround = true;
		currentPlatform = theotherbox;
		//hack not to fall through the side of the game
		transform.position.y = currentPlatform.gameObject.transform.position.y+2.5;
		
	}

	//only trigger when hit by obstacle
	if (theotherbox.tag == "obstacle") {
		//this is the code that happens when i get hit
		//stickmanLives--;
		//destroy the obstacle
		Destroy(theotherbox.gameObject);
	}
	
	if (theotherbox.tag == "health")
	{
		//max lives the stickman can have is 3
		if (stickmanLives < 3)
		{
			stickmanLives++;
		}
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
	
	//this is a for loop showing a picture for every life
	for(var counter=0;counter<stickmanLives;counter++)
	{
		//draw the picture
		var spacing:int;
	
		spacing = (25 * counter) + 2;  
	
		GUI.DrawTexture(Rect(spacing,60,25,25),stickmanPicture,ScaleMode.ScaleToFit,true);
	
	}
	//this is the score showing how many boxes I have destroyed
	GUI.Label(Rect(0,80,150,20),"Score: "+score);
}


function Start () {

}

function Update () {
	//this will write stickman on ground true/false in 
	//the console:
	//Debug.Log("Stickman on Ground: "+onGround);
	
	
	
	
	
	
	Camera.main.transform.position.x = transform.position.x;
	
	//if I run out of lives
	if (stickmanLives <= 0)
	{
		//Game Over - reset the game
		Application.LoadLevel(0);
	}
	
	//fake gravity
	if (!onGround)
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
	//jump
	if (Input.GetKeyDown(KeyCode.Space))
	{
		//code that happens when I press space
		if (onGround == true)
		{
			//jump
			transform.Translate(Vector3.up * 200 * Time.deltaTime);
		}
	}
	//shoot is the left ctrl key
	if (Input.GetKeyDown(KeyCode.LeftControl))
	{
		var xposition:float=0;
		var yposition:float=0;
		var zposition:float=0;
		
		//x position of the stickman
		xposition = transform.position.x;
		
		//y position of the stickman
		yposition = transform.position.y - 0.5;
		
		//z position of the stickman
		zposition = transform.position.z;
		
		//where I'm shooting the bullet from
		var bulletShootingPosition:Vector3;
		
		bulletShootingPosition = Vector3(xposition,yposition,zposition);
		
		Instantiate(stickmanBullet,bulletShootingPosition,transform.rotation);
	
	}
	

}