const slider = document.getElementById("myinput");
const min = slider.min;
const max = slider.max;
const value = slider.value;
var output = document.getElementById("output");

output.innerHTML = slider.value;

slider.style.background = `linear-gradient(to right, #20d9b4 0%, #20d9b4 ${(value-min)/(max-min)*100}%, #DEE2E6 ${(value-min)/(max-min)*100}%, #DEE2E6 100%)`

slider.oninput = function() {
  this.style.background = `linear-gradient(to right, #20d9b4 0%, #20d9b4 ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 100%)`
  output.innerHTML = this.value;

};
///
var lowerSlider = document.querySelector('.lower'); //Lower value slider
var upperSlider = document.querySelector('.upper'); //Upper value slider



var rangeColor = document.querySelector('.range-color'); //Range color

//When the upper value slider is moved.
upperSlider.oninput = function() {
   lowerVal = parseInt(lowerSlider.value); //Get lower slider value
   upperVal = parseInt(upperSlider.value); //Get upper slider value
   
   //If the upper value slider is LESS THAN the lower value slider plus one.
   if (upperVal < lowerVal + 1) {
      //The lower slider value is set to equal the upper value slider minus one.
      lowerSlider.value = upperVal - 1;
      //If the lower value slider equals its set minimum.
      if (lowerVal == lowerSlider.min) {
         //Set the upper slider value to equal 1.
         upperSlider.value = 1;
      }
   }
   
   
   //Setting the margin left of the middle range color.
   //Taking the value of the lower value times 10 and then turning it into a percentage.
   rangeColor.style.marginLeft = (lowerSlider.value * 10) + '%';
   
   //Setting the width of the middle range color.
   //Taking the value of the upper value times 10 and subtracting the lower value times 10 and then turning it into a percentage.
   rangeColor.style.width = (upperSlider.value * 10) - (lowerSlider.value * 10) + '%';
  
   
   console.log('upper value: ' + upperSlider.value);
};

//When the lower value slider is moved.
lowerSlider.oninput = function() {
   lowerVal = parseInt(lowerSlider.value); //Get lower slider value
   upperVal = parseInt(upperSlider.value); //Get upper slider value
   
   //If the lower value slider is GREATER THAN the upper value slider minus one.
   if (lowerVal > upperVal - 1) {
      //The upper slider value is set to equal the lower value slider plus one.
      upperSlider.value = lowerVal + 1;
      
      //If the upper value slider equals its set maximum.
      if (upperVal == upperSlider.max) {
         //Set the lower slider value to equal the upper value slider's maximum value minus one.
         lowerSlider.value = parseInt(upperSlider.max) - 1;
      }

   }
   
   //Setting the margin left of the middle range color.
   //Taking the value of the lower value times 10 and then turning it into a percentage.
   rangeColor.style.marginLeft = (lowerSlider.value * 10) + '%';
   
   //Setting the width of the middle range color.
   //Taking the value of the upper value times 10 and subtracting the lower value times 10 and then turning it into a percentage.
   rangeColor.style.width = (upperSlider.value * 10) - (lowerSlider.value * 10) + '%';
   
   console.log('lower value: ' + lowerSlider.value);
};