let xobj=[{   "name": "Steve Smith",
             "age"  : 30,
			 "country": "Aus",
            "hobbies" :[ "Leaving","wierd shots","winning"]},
		 {
			 "name": "Ms dhoni",
             "age"  : 38,
			 "country": "Ind",
            "hobbies" :["smashing","out of the park","winning"]},		
		{	" name": "Dale Steyn",
            " age " : 36,
			" country": "South africa",
            "hobbies" :[ "breaking toes","breaking wickets","winning"]} ,
		{
			 "name": "Pooran",
             "age"  : 25,
			 " country": "WestIndies",
            "hobbies" :["Stumping","shots","makieng out"]}
	]
disp(30);
disp1("Ind");

function disp(age)
{
   for(let i=0;i<xobj.length;i++)
   {
       if(xobj[i].age<age)
	   {
	       console.log(xobj[i]);
	   }
   }

}
function disp1(str)
{
   for(let i=0;i<xobj.length;i++)
   {
       if(str==xobj[i].country)
		   
	       console.log(xobj[i]);
   
   }

}
