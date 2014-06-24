#pragma strict



//variables
var drag:boolean;
var mousePos:Vector3;
var mpwc:Vector3;
var cube:GameObject;

function Start () {
	drag = false;
}

function Update () {
	//when the mouse is clicked, output the x,y coordinates of the mouse
	//left click
	if (Input.GetMouseButtonDown(0))
	{
		Debug.Log(drag);
		if (drag == false)
		{
			mousePos = Input.mousePosition;
			mousePos.z = 5;
			mpwc = Camera.main.ScreenToWorldPoint(mousePos);
			cube = GameObject.FindGameObjectWithTag("mycube");
			//only allow it to be dragged if the position of the mouse = position of the cube
			Debug.Log(Vector3.Distance(mpwc,cube.transform.position));
			if (Vector3.Distance(mpwc,cube.transform.position) < 2)
			{
				drag = true;
			}
		}
		else{
			drag = false;
		}	
	}	
	if (drag == true)
	{
		//code to drag the cube
		
		
		mousePos = Input.mousePosition;
		mousePos.z = 5;
		
		
		
		mpwc = Camera.main.ScreenToWorldPoint(mousePos);
		
		//the world coordinates corresponding with z=5
		Debug.Log("x:"+mpwc.x+"y:"+mpwc.y+"z:"+mpwc.z);
		
		//move the cube to the position I click
		
		
		//we are going to select the cube by tag
		cube = GameObject.FindGameObjectWithTag("mycube");
		
		//can change any properties of the cube (like color or position)
		cube.transform.position = mpwc;
		
		//turn cube red
		cube.renderer.material.color=Color.red;
		
	
	}
	
	
}