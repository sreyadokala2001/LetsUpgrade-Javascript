let xobj=[{   "name": "Steve Smith",
             "age"  : 30,
			 "country": "Aus",
            "hobbies" :[ "Leaving","wierd shots","winning"]},
		 {
			 "name": "Ms dhoni",
             "age"  : 38,
			 "country": "Ind",
            "hobbies" :["Bike Racing","Football","winning"]},		
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
display();
function display()
{
   for(let i=0;i<xobj.length;i++)
   {
	   console.log(xobj[i]);
   }
}