//~ Mostly from: http://stackoverflow.com/a/19301306

var m_w = 123456789;
var mask = 0xffffffff;
var m_z = "NOT_INITIALIZED";

// Takes any integer
function seed_once(n)
{
    if(m_z == "NOT_INITIALIZED"){
		reset_seed(n);
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

function reset_seed(n){
	m_w = n;
	m_z = 987654321;
}
