/*
* Programmer : Dr.-Ing. Bader Juma
* Date       : June 12, 2019
* File       : branchFunctionScript.js
* Purpose    : contain all functions that used by main function
*/

function checkInputFunction(matrixDimension){
	//declare variables
	var text;
	  // If matrixDimension is Not a Number or less than one or greater than 10
  if (isNaN(matrixDimension) || matrixDimension < 1 || matrixDimension > 10) 
      {
    text = "Input not valid";
       } else {
    text = "Input OK";
               }
			   return text;
			   
 // document.getElementById("demo").innerHTML = text;
}

function createFaceFunction(matrixDimension, cL, fL) {
	  
 //Define variables and array
  var i, j, k, text;
  var arr =[];
  
  for (k=0; k< 6; k++) {
  // put class and id arribute for each faces cell
  for (j = 0; j < matrixDimension; j++) {
   text = "<tr>";
   for (i = 0; i < matrixDimension; i++) {
	 text += "<td class="+"back"+" id="+cL[k]+((j+1)*10+(i+1))+">"+" "+"</td>";
	 }
     text  += "</tr>";
     arr[j] = text;}
    
	// create cells in face (table) choose by id attributes
	document.getElementById(fL[k]).innerHTML = arr[0];
    for (j = 1; j < matrixDimension; j++){
     $("#"+fL[k]).append(arr[j]);        }
                        }	
}

//color each cells separatelly
function colorCellsFunction(matrixDimension, cL, colorFace) {
	
 //Define variables and array
  var i, j, k, temp;
  
for (k=0; k< 6; k++) {	
    // put color for each cell j is row and i is cols of matrix first cell is 0,0
   for (j = 0; j < matrixDimension; j++) {
      for (i = 0; i < matrixDimension; i++) {
        temp = (j+1)*10+(i+1);
					 $("#"+cL[k]+temp).css("background-color", colorFace[k]); 
                                            } 
                                        }									
                         }	
}

// give code for each color create virtual matrix that keep track to 
// the color on each cells because the color cells are not readable
function initializeMatrixFunction(backArr, rightsideArr, frontArr, leftsideArr, topArr, bottomArr, matrixDimension, colorCode){
	// declare variable
	var i;
	// initialize matrix face with color code
    for (i = 0; i < matrixDimension*matrixDimension; i++) {
         backArr[i]= colorCode[0];
         rightsideArr[i] = colorCode[1];
         frontArr[i] = colorCode[2];
         leftsideArr[i] = colorCode[3];
         topArr[i] = colorCode[4];
         bottomArr[i] = colorCode[5];
                                                          }
                                                                                                                               }

//rotate matrix around X-axis for cell in middle not edge give color
 // k repsent step rotation in middle in clock wise dircetion
 // axisVar = X, numStepRot = 1, cellLocation = middle;
function matrixXaxisRotationFunction(cellLocation, numStepRot, matrixDimension, rightsideArr, bottomArr, leftsideArr, topArr) {
 // define variables
   var j, i, k, temp;
   //console.log(topArr);
  for(k=0; k < numStepRot; k++){
	j = 0;  	  
   for (i=matrixDimension-cellLocation; i < matrixDimension*matrixDimension; i=i+matrixDimension) {	
     
	temp=rightsideArr[i];
	rightsideArr[i]=bottomArr[j+matrixDimension*(cellLocation-1)];
	 bottomArr[j+matrixDimension*(cellLocation-1)] = leftsideArr[matrixDimension*(matrixDimension-1)-j*matrixDimension+(cellLocation-1)];
	leftsideArr[matrixDimension*(matrixDimension-1)-j*matrixDimension+(cellLocation-1)] = topArr[(matrixDimension*matrixDimension-1)-(j+matrixDimension*(cellLocation-1))];
	topArr[(matrixDimension*matrixDimension-1)-(j+matrixDimension*(cellLocation-1))] = temp;
	
	//console.log(i);
	
	

	 j = j + 1;
	 
                                                                     }
                             }						 
     //console.log(backArr);              
			   }
//rotate matrix around Z-axis for cell in middle not edge give color
 // k repsent step rotation in middle in clock wise dircetion
 // axisVar = Z, numStepRot = 1, cellLocation = middle;
function matrixZaxisRotationFunction(cellLocation, numStepRot, matrixDimension, backArr, rightsideArr, frontArr, leftsideArr) {
 // define variables
 var i, k, temp;

 
 for(k=0; k < numStepRot; k++){	 
   for (i = (cellLocation-1)*matrixDimension; i<(matrixDimension+matrixDimension*(cellLocation-1)); i++) {	
	 temp=backArr[i];
	 backArr[i] = rightsideArr[i];
	 rightsideArr[i] = frontArr[i];
	 frontArr[i] = leftsideArr[i];
	 leftsideArr[i] = temp;	 
                                                                                                          }
                             }
               
			   }
  //rotate matrix around Y-axis for cell in middle not edge give color
  // k repsent step rotation in middle in clock wise dircetion
  // axisVar = Y, numStepRot = 1, cellLocation = middle; 
 function matrixYaxisRotationFunction(cellLocation, numStepRot, matrixDimension, topArr, frontArr, bottomArr, backArr) {
   // define variables
   var i, k, temp;
   //console.log(topArr);
  for(k=0; k < numStepRot; k++){
	  	  
   for (i =(cellLocation-1); i< (matrixDimension*matrixDimension); i=i+matrixDimension) {	 
	 temp=topArr[i];
	 topArr[i] = frontArr[i];
	 frontArr[i] = bottomArr[i];
	 bottomArr[i] = backArr[matrixDimension*matrixDimension-1-i];
	 backArr[matrixDimension*matrixDimension-1-i] = temp;	 
                                                                     }
                             }						 
     //console.log(backArr);
}
///////////////////////////////
function cellColorXaxisRotationFunction(cL, cellLocation, matrixDimension, rightsideArr, bottomArr, leftsideArr, topArr, colorFace) {
 	 //Define variables and array
  var i, j, k, temp, tempVar;
  
for (k=0; k< 6; k++) {	

    // put color for each cell j is row and i is cols of matrix first cell is 0,0
	tempVar = -1;
   for (j = 0; j < matrixDimension; j++) {
      for (i = 0; i < matrixDimension; i++) {
        temp = (j+1)*10+(i+1);
		  
		  //["back", "rightside","front","leftside", "top", "bottom"]
					 tempVar = tempVar + 1;					
					     if(k==0) continue;
						 else if(k==1) tempColor= rightsideArr[tempVar];
						  else if(k==2) continue;
						   else if(k==3) tempColor = leftsideArr[tempVar];
						    else if(k==4) tempColor= topArr[tempVar];
							 else tempColor =  bottomArr[tempVar];
							 
					 $("#"+cL[k]+temp).css("background-color", colorFace[tempColor]); 
                                            } 
                                        }									
                         }
                                           
										   } 
//////////////////////////////
function cellColorYaxisRotationFunction(cL, cellLocation, matrixDimension, topArr, frontArr, bottomArr, backArr, colorFace) {
 	 //Define variables and array
  var i, j, k, temp, tempVar;
  
for (k=0; k< 6; k++) {	

    // put color for each cell j is row and i is cols of matrix first cell is 0,0
	tempVar = -1;
   for (j = 0; j < matrixDimension; j++) {
      for (i = 0; i < matrixDimension; i++) {
        temp = (j+1)*10+(i+1);
		  
					 tempVar = tempVar + 1;					
					     if(k==0) tempColor= backArr[tempVar];
						 else
						 if(k==1) continue;
						  else if(k==2) tempColor= frontArr[tempVar];
						   else if(k==3) continue;
						    else if(k==4) tempColor= topArr[tempVar];
							 else tempColor =  bottomArr[tempVar];
							 
					 $("#"+cL[k]+temp).css("background-color", colorFace[tempColor]); 
                                            } 
                                        }									
                         }
                                           
										   }   
									

function cellColorZaxisRotationFunction(cL, cellLocation, matrixDimension, backArr, rightsideArr,frontArr, leftsideArr, colorFace){
 // k represent the face
 var k, j, i, temp, tempVar,tempColor;
 for (k=0; k< 4; k++) {	
    // put color for each cell j is row and i is cols of matrix first cell is 0,0
   j = cellLocation-1;
      for (i = 0; i < matrixDimension; i++) {
        temp = (j+1)*10+(i+1);

					 tempVar = i + j*matrixDimension;
					 //tempVar = i;
					 if(k==0) tempColor= backArr[tempVar];
						else if(k==1) tempColor= rightsideArr[tempVar];
						  else if(k==2) tempColor= frontArr[tempVar];
							else tempColor =  leftsideArr[tempVar];
		
		
					 $("#"+cL[k]+temp).css("background-color", colorFace[tempColor]);				 
                                            }              										
                         }
						         }
						

