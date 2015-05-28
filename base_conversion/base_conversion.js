
function change_hidden_h1(a, b) {
    document.getElementById(b).innerHTML=a;
    // alert(document.getElementById(b).innerHTML);
}

function displayNumber(i){
	alert(i);
}

function is_binary(num){
	str = num.toString();
	if (str.search(/^[10]+$/) != -1){
  		return true;
	} else {
	  	return false;
	}
}

function flip_bits(str){
	str = str.split("");
	var len = str.length;
	var i = 0;
	while(i < len){
		if(str[i] == "0"){
			str[i] = "1";
		}else{
			str[i] = "0";
		}
		i++;
	}
	return str.join("");
}




function getMaxBase2(val){
	val = Math.abs(val);
	var i = 0;
	while(Math.pow(2, i) <= val){
		i ++;
	}
	return i - 1;
}

function convBin2Int(val){

	var i = Math.abs(val);
	var ret = 0;
	var j = 0;
	while(i != 0){
		j = getMaxBase2(i);
		ret += Math.pow(10, j);
		i = i % Math.pow(2, j);
	}
	return ret;
}

function unsigned_base_2_to_base_10(number){

	if(!is_binary(number)){
		return 'this number is not binary'
	}else{
		var fin = number.toString().split("").reverse();
		var len = fin.length;
		var ret = 0;
		var i = 0;
		while(i < len){
			ret+= parseInt(fin[i])*Math.pow(2, i);
			i++;
		}
		return ret.toString();
	}
}

function unsigned_base_10_to_base_2(number){
	
	if(isNaN(number)){
		return "The value you entered is not a proper number.";
	}else
	if(number < 0){
		return "This number is negative, but you are doing an unsigned operation."
	}else{
		if(number == 0){
			return "0"
		}else{
			var retVal = convBin2Int(number);
			return retVal.toString();
		}
		
	}
}

function signed_base_2_to_base_10(number){
	
	if(!is_binary(number)){
		return 'this number is not binary'
	}else{
		var neg = true;
		var fin = number.toString().split("");
		if(fin.length == 8 && fin[0] == "1"){
			neg = true;
		}else{
			neg = false;
		}
		fin = fin.reverse();
		var len = fin.length;
		if(len == 8){
			len = 7;
		}
		var ret = 0;
		var i = 0;
		while(i < len){
			ret+= parseInt(fin[i])*Math.pow(2, i);
			i++;
		}
		if(neg == true){
			ret = ret*-1;
		}

		return ret.toString();
	}
}

function signed_base_10_to_base_2(number){
	var number = parseInt(document.getElementById('t1').value);
	if(isNaN(Math.abs(number))){
		return "The value you entered is not a proper number.";
	}else{
		if(Math.abs(number) == 0){
			return "0";
		}else{
			
			var retVal = convBin2Int(number);
			if(number > 0){
				return retVal.toString();
			}else{
				retVal = retVal.toString();
				ret = "1";
				var i = 7 - retVal.length;
				while(i > 0){
					ret += "0";
					i--;
				}
				retVal = ret + retVal;
				return retVal;
			}
			
		}
		
	}
}

function ones_complement_base_2_to_base_10(number){
	var str = number.toString();
	if(str.split("").length == 8 && str.split("")[0] == "1"){
		str = flip_bits(str);
		var ret = parseInt(str);
		ret = (-1*parseInt(unsigned_base_2_to_10(ret))).toString();
		return ret;
	}else{
		return unsigned_base_2_to_10(number);
	}
}



function submitData(){
	var id1 = document.getElementById('id1').innerHTML;
	var id2 = document.getElementById('id2').innerHTML;
	var id3 = document.getElementById('id3').innerHTML;
	var number = parseInt(document.getElementById('t1').value);
	if(id1 == "" || id2 == "" || id3 == ""){
		alert("Please pick a Conversion Type and a Base Type.");

	}else{
		if(id2 == id3){
			displayNumber(number);
		}
		if(id1 == 'unsigned' && id2 == 'base_2' && id3 == 'base_10'){
			displayNumber(unsigned_base_2_to_base_10(number));
		}else
		if(id1 == 'unsigned' && id2 == 'base_10' && id3 == "base_2"){
			displayNumber(unsigned_base_10_to_base_2(number));
		}else 
		if(id1 == 'signed' && id2 == 'base_2' && id3 == 'base_10'){

			displayNumber(signed_base_2_to_base_10(number));
		}else
		if(id1 == 'signed' && id2 == 'base_10' && id3 == "base_2"){
			displayNumber(signed_base_10_to_base_2(number));
		}else 
		if(id1 == 'ones_complement' && id2 == 'base_2' && id3 == 'base_10'){
			displayNumber(ones_complement_base_2_to_base_10(number));
		}else
		if(id1 == 'ones_complement' && id2 == 'base_10' && id3 == "base_2"){

		}
		else 
		if(id1 == 'twos_complement' && id2 == 'base_2'&& id3 == 'base_10'){
			
		}else
		if(id1 == 'twos_complement' && id2 == 'base_10' && id3 == "base_2"){

		}else{
			alert('It seems there is some error. Make sure you have everything correctly selected.');
		}
	}
	
}