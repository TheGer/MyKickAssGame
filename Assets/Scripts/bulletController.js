#pragma strict

//speed of the bullet
var bulletSpeed:int=20;

function Start () {

}

function Update () {
	//bullet movement speed 20
	transform.Translate(Vector3.right * bulletSpeed * Time.deltaTime);
}

function OnTriggerEnter(other:Collider)
{
	if (other.tag == "obstacle")
	{
		//bullet destroys the obstacle
		Destroy(other.gameObject);
		//Suicide in japanese
		Destroy(this.gameObject);
		//to change the value of the score inside stickman controller
		StickmanController.score++;
	}

}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}
