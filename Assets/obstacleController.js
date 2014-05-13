#pragma strict
var speed:int;

function Start () {

}

function Update () {
	//moving cube to the left at the speed which we set in unity
	transform.Translate(Vector3.left * speed * Time.deltaTime); 
}

//when the cube goes out of the screen
function OnBecameInvisible()
{
	//destroy the cube that THIS script is attached to
	Destroy(this.gameObject);
}