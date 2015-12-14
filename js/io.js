/*
 * io.js
 * IO and string formatting.
 */
 
function pretty_print(meaning_matrix, name)
{
	serial_id = serialize_name(name);
	deserial_name = deserialize_name(serial_id);

	out = "";
	for(var i = 0; i < meaning_matrix.length; i++){
		name_arr = meaning_matrix[i];

		for(var j = 0; j < name_arr.length; j++){
			var insult_from_letter = name_arr[j];
			out+= capitalize(insult_from_letter) + "<br>";
		}

		out+= "<br><br>";
	}

	out+= "\n\n";

	var div = document.getElementById('name_meaning');
	div.innerHTML = "<p>" + out + "</p>";
	document.title = "Significado do nome " + capitalize_words(name)
}


function capitalize(string) {
	// taken from http://stackoverflow.com/a/1026087
	return string[0].toUpperCase() + string.slice(1);
}

function capitalize_words(str)
{
    var pieces = str.split(" ");
    for ( var i = 0; i < pieces.length; i++ )
    {
        var j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1).toLowerCase();
    }
    return pieces.join(" ");
}

function remove_glyphs(string){
	
	string = string.replace(/[áàãâ]+/g,'a');
	string = string.replace(/[éèẽê]+/g,'e');
	string = string.replace(/[íìĩî]+/g,'i');
	string = string.replace(/[óòõô]+/g,'o');
	string = string.replace(/[úùũû]+/g,'u');
	string = string.replace(/ç/, 'c')
	
	return string;
}


function get_text()
{
  name = document.getElementsByName("inputbox")[0].value;
  return name;
}
