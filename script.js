function firstWord(s) {
  // your code here
	let xs = s.split(" ")
	if (xs.length==1) {
		return s
	}else if(s.length==0){
		return ''
	}
	return xs[0]
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
