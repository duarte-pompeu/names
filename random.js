//~ Mostly from: http://stackoverflow.com/a/19301306

var alphabet = "#abcdefghijklmnopqrstuvwxyz";

var m_w = 123456789;
var mask = 0xffffffff;
var m_z = "NOT_INITIALIZED";

var SHIFT_FACTOR = 100;

// Takes any integer
function seed_once(n)
{
    if(m_z == "NOT_INITIALIZED"){
		set_seed(n);
	}
}

// Returns number between 0 (inclusive) and 1.0 (exclusive),
// just like Math.random().
function random()
{
    m_z = (36969 * (m_z & 65535) + (m_z >> 16)) & mask;
    m_w = (18000 * (m_w & 65535) + (m_w >> 16)) & mask;
    var result = ((m_z << 16) + m_w) & mask;
    result /= 4294967296;
    return result + 0.5;
}

function random_int(n1, n2)
{
	r = random();
	result = Math.round(r * (n2 - n1) + n1);

	return result;
}

function set_seed(n){
	m_w = n;
	m_z = 987654321;
}

function reset_seed(){
	m_z = "NOT_INITIALIZED";
}

function get_index(char)
{
	for(var i=0; i < alphabet.length; i++){
		if (char == alphabet[i]){
			return i;
		}
	}
}

function get_char(i)
{
	return alphabet[i];
}

function serialize_name(name)
{
	var serial = 0;
	
	for(var i = 0; i < name.length; i++){
		char = name[i];
		
		serial*= SHIFT_FACTOR;
		serial+= get_index(char);
	}
	
	return serial;
}

function deserialize_name(serial){
	name = "";
	decomposed_serial = serial;
	
	while(decomposed_serial > 0){
		ch_index = Math.round(decomposed_serial % SHIFT_FACTOR);
		char = get_char(ch_index);
		
		name = char + name;
		decomposed_serial = Math.round (decomposed_serial / SHIFT_FACTOR);
	}
	
	return name;
}
