function manprompt(){
var response;
response = prompt("    take \n(yes/no)");
response = response.toLowerCase()
if ((response.search("yes") != -1) || (response.search("y") != -1))
	{
		if (document.cookie == "cookie")
		{
			confirm("your pockets are full");
		}
		else
		{
		document.cookie = "cookie"
		confirm("you got a cookie");
		}
	}
	else
	if (response.search("no") != -1 || (response.search("n") != -1))
	{
		if (document.cookie == "cookie")
		{
			confirm("the cookie dissolves");
			document.cookie = ""
		}
		else
		{
		confirm("");
		}
	}
	else	
	{
	confirm("###################");	
	window.close();
	window.location.href = 'about:blank';
	}
}