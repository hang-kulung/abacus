const heaven=document.querySelector("#heaven_half");
const earth=document.querySelector("#earth_half");
const score_node=document.querySelectorAll(".score_sec");
var score= Array.from(score_node);
const earth_sections = document.querySelectorAll(".earth_sec");
var heaven_points = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
var earth_points = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
var total_points = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var count = 0
function score_update(){
	for(s in score){
		score[s].textContent=total_points[s];
	}
}

heaven.addEventListener('click', function(e){
	e.preventDefault();
	var point=e.target.parentElement.id;
	if (e.target.className == "h_coin h_off"){
		e.target.className = "h_coin h_on";
		for (i=1; i <= 12; i++){
			index = i.toString();
			if (point == "h_" + index){
				heaven_points[i-1]=5;
			}
		}

	}
	else if (e.target.className == "h_coin h_on"){
		e.target.className = "h_coin h_off";
		for (i=1; i <= 12; i++){
			index = i.toString();
			if (point == "h_" + index){
				heaven_points[i-1]=0;
			}
		}
	}
	for (c in total_points){
		total_points[c] = heaven_points[c] + earth_points[c];
	}
	score_update();

})

earth.addEventListener('click', function(e){
	e.preventDefault();
	const classname = e.target.className;
	if (classname != "e_coin e_off_4" && classname != "e_coin e_on_4"){
		var classprevious = e.target.previousElementSibling.className;
	}
	if (classname !="e_coin e_off_1" && classname != "e_coin e_on_1"){
		var classnext = e.target.nextElementSibling.className;
	}
	const parentID = e.target.parentElement.parentElement.id;
	if (classname == "e_coin e_off_4"){
		e.target.className = "e_coin e_on_4";
		for (i in earth_sections){
			if (parentID == earth_sections[i].id){
				earth_points[i]=1;
			}
		} 
    }
    if (classname == "e_coin e_off_3" && classprevious == "e_coin e_on_4"){
    	e.target.className = "e_coin e_on_3";
		for (i in earth_sections){
			if (parentID == earth_sections[i].id){
				earth_points[i]=2;
			}
		} 
    }
    if (classname == "e_coin e_off_2" && classprevious == "e_coin e_on_3"){
    	e.target.className = "e_coin e_on_2";
		for (i in earth_sections){
			if (parentID == earth_sections[i].id){
				earth_points[i]=3;
			}
		} 
    }
    if (classname == "e_coin e_off_1" && classprevious == "e_coin e_on_2"){
		e.target.className = "e_coin e_on_1";
		for (i in earth_sections){
			if (parentID == earth_sections[i].id){
				earth_points[i]=4;
			}
		} 
    }
    if (classname == "e_coin e_on_1"){
		e.target.className = "e_coin e_off_1";
		for (i in earth_sections){
			if (parentID == earth_sections[i].id){
				earth_points[i]=3;
			}
		} 
    }
    if (classname == "e_coin e_on_2" && classnext == "e_coin e_off_1"){
		e.target.className = "e_coin e_off_2";
		for (i in earth_sections){
			if (parentID == earth_sections[i].id){
				earth_points[i]=2;
			}
		} 
    }
    if (classname == "e_coin e_on_3" && classnext == "e_coin e_off_2"){
		e.target.className = "e_coin e_off_3";
		for (i in earth_sections){
			if (parentID == earth_sections[i].id){
				earth_points[i]=1;
			}
		} 
    }
    if (classname == "e_coin e_on_4" && classnext == "e_coin e_off_3"){
		e.target.className = "e_coin e_off_4";
		for (i in earth_sections){
			if (parentID == earth_sections[i].id){
				earth_points[i]=0;
			}
		} 
    }
    for (c in total_points){
	total_points[c] = heaven_points[c] + earth_points[c];
	}
	score_update();
})

