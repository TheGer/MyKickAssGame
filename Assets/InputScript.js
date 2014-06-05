#pragma strict
var textToUpdate="Text to update";


function Start () {
	
}

function Update () {
	
	
}


function OnGUI()
{
	//text field for input
	textToUpdate = GUI.TextField(Rect(0,Screen.height-50,100,50),textToUpdate);
	
	//button to click to confirm input
	if (GUI.Button(Rect(0,Screen.height-100,50,50),"Set Name"))
	{
		//output the name input in the console	
		Debug.Log("The name is now set to: "+textToUpdate);
		
	}
}