#pragma strict

function Start () {

}

function Update () {
	transform.Translate(Vector3.down * 10 * Time.deltaTime);
	
	if (transform.position.y < -5)
	{
		transform.position.y = 4.4;
	}
}

