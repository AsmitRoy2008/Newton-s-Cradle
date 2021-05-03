class test
{
	constructor(x,y,width,height,options)
	{
		
		this.x = x;
		this.y = y;
        this.width = width;
        this.height = height;
		
        this.options = options;
		
		this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var testpos = this.body.position;
			push()
			translate(testpos.x, testpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			
			rect(0,0,this.width, this.height);
			pop()
			
	}

}

