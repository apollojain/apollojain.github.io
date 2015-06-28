
function submitInfo(){

	// units_grade = 37%
	// units_pnp = 5%
	// technicals = 15%
	// units_early = 3%
	// units_late = 3%
	// gap_length = 5%
	// straight = 5%
	// work = 27%

	var units_grade = document.getElementById('units_grade').value;
	var units_pnp = document.getElementById('units_pnp').value;
	var technicals = document.getElementById('technicals').value;
	var early = document.getElementById('early').value;
	var late = document.getElementById('late').value;
	var gap_length = document.getElementById('gap_length').value;
	var straight = document.getElementById('straight').value;
	var work = document.getElementById('work').value;
	var score = 0;


	var grin = "<img src='grin.png' height='100px' width='100px' alt='grin'>";

	var happy = "<img src='happy.png' height='100px' width='100px' alt='happy'>";

	var unhappy = "<img src='unhappy.jpeg' height='120px' width='120px' alt='unhappy'>";

	var dead= "<img src='dead.jpeg' height='120px' width='140px' alt='dead'>";

	if(units_grade != '' && !isNaN(units_grade) && units_pnp != '' && !isNaN(units_pnp) && technicals != '' && !isNaN(technicals) && early != '' && !isNaN(early) && late != '' && !isNaN(late) && gap_length != '' && !isNaN(gap_length) && straight != '' && !isNaN(straight) && work != '' && !isNaN(work)){

		if(units_grade <= 10){
			document.getElementById("units_grade_res").innerHTML=grin;
			score += 0.37*1;
		}
		else if(units_grade > 10 && units_grade <= 14){
			document.getElementById("units_grade_res").innerHTML=happy;
			score += 0.37*2;
		}
		else if(units_grade > 14 && units_grade < 20){
			document.getElementById("units_grade_res").innerHTML=unhappy;
			score += 0.37*3;
		}
		else{
			document.getElementById("units_grade_res").innerHTML=dead;
			score += 0.37*4;
		}

		if(units_pnp <= 4){
			document.getElementById("units_pnp_res").innerHTML=happy;
			score += 0.05*2;
		}
		else{
			document.getElementById("units_pnp_res").innerHTML=unhappy;
			score += 0.05*3;
		}

		if(technicals <= 6){
			document.getElementById("technicals_res").innerHTML=grin;
			score += 0.15*1;
		}
		else if(technicals > 6 && technicals <= 12){
			document.getElementById("technicals_res").innerHTML=happy;
			score += 0.15*2;
		}
		else if(technicals > 12 && units_grade < 16){
			document.getElementById("technicals_res").innerHTML=unhappy;
			score += 0.15*3;
		}
		else{
			document.getElementById("technicals_res").innerHTML=dead;
			score += 0.15*4;
		}

		if(early == 0){
			document.getElementById("early_res").innerHTML=grin;
			score += 0.03*1;
		}
		else if(early == 1 || early == 2){
			document.getElementById("early_res").innerHTML=happy;
			score += 0.03*2;
		}
		else if(early == 3 || early == 4){
			document.getElementById("early_res").innerHTML=unhappy;
			score += 0.03*3;
		}
		else{
			document.getElementById("early_res").innerHTML=dead;
			score += 0.03*4;
		}

		if(late == 0){
			document.getElementById("late_res").innerHTML=grin;
			score += 0.03*1;
		}
		else if(late == 1 || late == 2){
			document.getElementById("late_res").innerHTML=happy;
			score += 0.03*2;
		}
		else if(late == 3 || late == 4){
			document.getElementById("late_res").innerHTML=unhappy;
			score += 0.03*3;
		}
		else{
			document.getElementById("late_res").innerHTML=dead;
			score += 0.03*4;
		}

		if(gap_length == 0){
			document.getElementById("gap_length_res").innerHTML=grin;
			score += 0.05*1;
		}
		else if(gap_length == 1 || gap_length == 2){
			document.getElementById("gap_length_res").innerHTML=happy;
			score += 0.05*2;
		}
		else if(gap_length == 3 || gap_length == 4){
			document.getElementById("gap_length_res").innerHTML=unhappy;
			score += 0.05*3;
		}
		else{
			document.getElementById("gap_length_res").innerHTML=dead;
			score += 0.05*4;
		}

		if(straight == 0){
			document.getElementById("straight_res").innerHTML=grin;
			score += 0.05*1;
		}
		else if(straight == 1){
			document.getElementById("straight_res").innerHTML=happy;
			score += 0.05*2;
		}
		else if(straight == 2){
			document.getElementById("straight_res").innerHTML=unhappy;
			score += 0.05*3;
		}
		else{
			document.getElementById("straight_res").innerHTML=dead;
			score += 0.05*4;
		}

		if(work <= 5){
			document.getElementById("work_res").innerHTML=grin;
			score += 0.27*1;
		}
		else if(work <= 12){
			document.getElementById("work_res").innerHTML=happy;
			score += 0.27*2;
		}
		else if(work <= 20){
			document.getElementById("work_res").innerHTML=unhappy;
			score += 0.27*3;
		}
		else{
			document.getElementById("work_res").innerHTML=dead;
			score += 0.27*4;
		}

		if(score < 1.4){
			document.getElementById("final_res").innerHTML=grin;
		}
		else if(score < 2.4){
			document.getElementById("final_res").innerHTML=happy;
		}
		else if(score < 3.3){
			document.getElementById("final_res").innerHTML=unhappy;
		}
		else{
			document.getElementById("final_res").innerHTML=dead;
		}
	}else{
		alert('Some portion of the form is filled incorrectly. Please make sure that all form fields are filled with integer values. Please make sure all form fields have been filled in.')
		location.reload();
	}
}
