function oldmanprompt(){
var response;
response = prompt("what do you say to old man?");
response = response.toLowerCase()
if (response.search("hello") != -1 )
	{
	confirm("haha yes");
	window.location.href = './morestuff/2deep4u/oldman.html';
	}
	else
	if (response.search("hi") != -1 || (response.search("how are you") != -1) || (response.search("greetings") != -1) )
	{
	confirm("haha yes");
	}
	else
if((response.search("bye") != -1) || (response.search("die") != -1))
	{
	confirm("oh");
	}
	else
if((response.search("no") != -1) || (response.search("nope") != -1))
	{
	confirm(":(");
	}
	else
if((response.search("yes") != -1) || (response.search("nice") != -1) || (response.search("neat") != -1))
	{
	confirm("me too thanks");
	}
	else
	if(((response.search("kill") != -1) && (response.search("yourself") != -1)) || (response.search("kys") != -1))
	{
	confirm("no you");
	window.close();
	window.location.href = 'about:blank';
	}
	else	
	if(response.search("beep beep lettuce") != -1)
	{
	confirm("wow cool");
	}
	else	
	if(response.search("cookie") != -1) //no cookie
	{
		if (document.cookie == "cookie")
		{
			confirm("wow! its a cookie!");
			document.cookie = "nom";
		}
		else
		{
			if (document.cookie == "nom")
			{
				confirm("thanks");
			}
			else
			{
				confirm("what cookie?");
			}	
		}
	}
	else	
	window.location.href = './morestuff/2deep4u/void.html';
}