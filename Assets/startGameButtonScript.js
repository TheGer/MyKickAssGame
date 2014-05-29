#pragma strict

function Start () {

}

function Update () {
	//if the user presses Enter
	if (Input.GetKeyDown(KeyCode.Return))
	{
		//load the game
		Application.LoadLevel(1);
	}
}

//if I click the button with the mouse
function OnMouseDown(){
	//wait for half a second
	yield WaitForSeconds(0.5);
	Application.LoadLevel(1);
}