var grades = [];
var credHours = [];
var result = [];
var GPA;

var $ = function (id) {
	return document.getElementById(id);
};

var addData = function(){

    var grade = $("grade").value;
    grade = grade.toLowerCase();
    
    var hours = parseInt ($("hours").value);
    
    
    
    if (grade == "" || isNaN(hours) || hours < 0 || hours > 4 ) {
    alert("You must enter a Grade and valid Hours");
    }
    
   if(grade != "a" && grade != "b" && grade != "c" && grade != "d" && grade != "f")
   {
    alert("You must enter a Grade and valid Hours");

       
   }
    
    else{
        
        
        grades[grades.length] = grade;
        credHours[credHours.length] = hours;
        
        $("grade").value = "";
        $("hours").value = "";
        document.getElementById('scores_display').value = '';

    }
    $("grade").focus();
}

var calulateGPA = function()
{
   
    var gradeValue = 0;
    var totalGradeValue = 0;
    var totalCredHours = 0;
    for ( i = 0; i < grades.length; i++){
     
      
      switch(grades[i])
      {
          case 'a':
              gradeValue = 4;
              
              break;
          case 'b':
              gradeValue = 3;
              break;
          case 'c':
              gradeValue = 2;
              break;
          case 'd':
              gradeValue = 1;
              break;
          case 'f':
              gradeValue = 0;
              break;
      }
    
     
      totalGradeValue =  totalGradeValue +  ( gradeValue * credHours[i]);
      totalCredHours = totalCredHours + credHours[i];
      gradeValue = 0;
        
    }
    GPA = totalGradeValue/totalCredHours;
}

var showscore = function() {

    //this keeps the commas in the correct spots while preventing the first element from getting the new line tag creating an extra space.
 if (grades.length > 1){   
calulateGPA();
     
     for ( i = 0; i < grades.length; i++){
     
      
     
      
      result.push("\n"+grades[i] +" = "+ credHours[i]); 
           
  }
    
  document.getElementById('scores_display').value = GPA;
  result = [];
     
 }
    
else
{
        alert("You must enter at least 2 grades");
         document.getElementById('scores_display').value = "Not enough values to calculate";
}
  
};




window.onload = function () {
	$("add").onclick = addData;
	$("grade").focus();
    $("display_scores").onclick = showscore;
};
