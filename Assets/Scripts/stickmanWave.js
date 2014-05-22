#pragma strict

var anim:Animator;

function Start () {
	
	//so I can change parameters
	anim = GetComponent(Animator);
}

function Update () {
	
	anim.SetBool("startWaving",false);
	
	if (Input.GetKey(KeyCode.W))
	{
		anim.SetBool("startWaving",true);
	}

}