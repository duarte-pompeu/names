
function pretty_print(meaning_matrix)
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
}


function capitalize(string) {
	// taken from http://stackoverflow.com/a/1026087
	return string[0].toUpperCase() + string.slice(1);
}


function get_text()
{
  name = document.getElementsByName("inputbox")[0].value;
  return name;
}
